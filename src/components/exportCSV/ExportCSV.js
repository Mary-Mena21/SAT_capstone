import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { UserTable } from "./UserTable";
import "./Appe.css";

export const ExportCSV = () => {
    const fileName = "users-detail";
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    const headers = [
        // { label: "Id", key: "id" },
        { label: "Name", key: "fullName" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Dob", key: "dob" },
        { label: "Address", key: "address" },
    ];

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        setLoading(true);
        //return fetch('https://jsonplaceholder.typicode.com/users')
        try {
            const response = await fetch(
                "http://localhost:8033/students?&classId=1"
            );
            const StudentsArray = await response.json();

            let sortArray = [];
            sortArray = StudentsArray.sort((a, b) =>
                a.fullName > b.fullName ? 1 : b.fullName > a.fullName ? -1 : 0
            );

            setUserData(sortArray);
            setLoading(false);
        } catch (err) {
            console.log("Error: ", err);
            setLoading(false);
        }
    };

    return (
        <div className="container_appe">
            <Button variant="contained" color="primary" className="export-btn">
                <CSVLink
                    headers={headers}
                    data={userData}
                    filename={fileName.xls}
                    style={{ textDecoration: "none", color: "#fff" }}
                >
                    {loading ? "Loading csv..." : "Export Data"}
                </CSVLink>
            </Button>

            <UserTable headers={headers} userData={userData} />
        </div>
    );
};
