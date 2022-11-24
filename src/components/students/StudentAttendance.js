
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Student } from "./Student";

export const StudentAttendance = () => {
    const [inputAttend, setInputAttend] = useState({
        date: new Date,
        classId: 1,
        studentId: `{satUserObject.id}`,
        attend: false,
    });

    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);


/* ------------------------------ */
    //  fetch(`http://localhost:8033/studentAttendance`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(ticketToSendToAPI),
    // })
    //     .then((response) => response.json())
    //     .then(() => {
    //        // navigate("/tickets");
    //     });


    /* ------------------------------ */
    //Perform the fetch() to POST the object to the API
    /* -------------Add----------------- */
    const sendAttendance = async (SendToAPI) => {
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
    };
    /* ------------------------------ */
    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        sendAttendance(inputAttend);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     sendAttendance(inputAttend);
    //     // navigate("/students");
    // };
    /* ------------------------------ */

    //here we are fetching the api to add (POST) new data to api
    /* ------------------------------ */
    return (
        <>
            <Student/>
        <input
        type="checkbox"
        className="checkbox"
        //onchange="handleChange(event)"
        onChange={(evt) => {
            const copy = { ...inputAttend };
            copy.attend = evt.target.checked;
            setInputAttend(copy);
        }}
    />
            
                     <section>
            <button
            onClick={(clickEvent) => {
                handleSaveButtonClick(clickEvent);
            }}
            className="btn btn-primary"
        >
            Submit Ticket
                </button>
                </section> 
        </>
    )
}