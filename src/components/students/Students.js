
import { ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Students.css";
import { StudentSearch } from "./StudentSearch";

export const Students = () => {
    //let NewDate = new Date(Date.now()).toLocaleDateString();
    //const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    //let classId = satUserObject.id;
    //let id=id

    const [Students, setStudents] = useState([]);
/* 
    const [inputAttend, setInputAttend] = useState({
        date: NewDate,
        classId: classId,
        studentId: 1,
        attend: false,
    }); */

    /* -------------Display----------------- */
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:8033/students?&classId=${satUserObject.id}`
                );
                const StudentsArray = await response.json();
                setStudents(StudentsArray);
            };
            fetchData();
        },
        [] // When this array is empty, you are observing initial component state
    );
    /* -------------Add----------------- */
/*     const sendAttendance = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8033/studentAttendance`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    }; */
    /* ------------------------------ */
/*     const handleSaveButtonClick = (event) => {
        event.preventDefault();
        sendAttendance(inputAttend);
    }; */

    return (
        <>
            <h1 className="page_name_class">Students!</h1>
            <article className="students_class_group">
                {Students.map((student) => {
                    <>
                        key={`student__${student.id}`}
                        id={student.id}
                        studentName={student.fullName}
                        studentEmail={student.email}
                        studentClassId={student.classIs}
                        studentDob={student.dob}
                        studentPhone={student.phone}
                        studentAddress={student.address}
                        studentImg={student.studentImg}
                    </>;
                    return (
                        <>
                            <section >
                               
                                    <section
                                        key={student.id}
                                        className="student_card_edit"
                                    >
                                        <div className="student_card_container">
                                         {/*    <img
                                                src={student.studentImg}
                                                className="student_img"
                                            /> */}
                                            <img src={require(`../images/${student.studentImg}`)}
                                            className="student_img" />
                                            
                                           
                                            <h3 className="student_info_edit">
                                            {student.fullName}
                                            </h3>

                                            
                                            <Link
                                            to={`/students/${student.id}`}
                                            >
                                            <Button variant="outline-light" size="sm"> <FaUserEdit/></Button>
                                            </Link>
                                        </div>
                                    </section>
                               
                            </section>
                        </>
                    );
                })}
            </article>

{/*             <section>
                <button
                    onClick={(clickEvent) => {
                        handleSaveButtonClick(clickEvent);
                    }}
                    className="btn btn-primary"
                >
                    Submit Ticket
                </button>
            </section> */}
        </>
    );
};

{/* -----------------------------------checkbox------------------------------------- */}
// <input
// type="checkbox"
// className="checkbox"
// onChange={(evt) => {
//     const copy = {
//         ...inputAttend,
//     };
//     copy.attend =
//         evt.target.checked;
//     setInputAttend(copy);
// }}
// /*onClick={(clickEvent) => {
//     handleSaveButtonClick(clickEvent);
// }} */
// />
{/* -----------------------------------checkbox------------------------------------- */}