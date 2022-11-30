import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Students } from "./Students";
import { Link } from "react-router-dom";
import "./Students.css";
//import "../Images"
//import Image from "../Images."

export const StudentCopy = ({
    id,
    studentName,
    studentEmail,
    studentClassId,
    studentPhone,
    studentDob,
    studentAddress,
    studentImg,
}) => {
    /* -------------------------------------- */

    const current = new Date();
    const date = `${current.getFullYear()}-${
        current.getMonth() + 1
    }-${current.getDate()}`;
    //Date.now()
    let NewDate = new Date(Date.now()).toJSON().slice(0, 10);
    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    let classId = satUserObject.id;
    let userId = id;

    const [inputAttend, setInputAttend] = useState({
        id: 0,
        date: NewDate,
        classId: classId,
        studentId: userId,
        attend: false,
    });

    /* ------------------------------ */

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
    // const handleSaveButtonClick = (event,copy) => {
    //     //event.preventDefault();
    //     sendAttendance(copy);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     sendAttendance(inputAttend);
    //     // navigate("/students");
    // };
    /* ------------------------------ */

    return (
        <>
            <section>
                <div className="container">
                    <section key={id} className="student_card">
                        <div className="student_card_container">

                            {/* <img src={studentImg} className="student_img" /> */}

         <img src={require(`../images/${studentImg}`)} className="student_img" />

                            <Link to={`/students/${id}`}>
                                <h3 className="student_info">{studentName}</h3>
                            </Link>
                            <div>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={(evt) => {
                                        const copy = { ...inputAttend };
                                        copy.attend = evt.target.checked;
                                        console.log(copy);
                                        setInputAttend(copy);
                                        sendAttendance(copy);
                                        // handleSaveButtonClick(evt,copy);
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

/* <img src={require('../images/m1.jpg')} className="student_img" /> */
/* -------------------------------------- */
//src\components\Images
//checked={inputAttend.attend}
//const value = target.type === 'checkbox' ? target.checked : target.value;
// onClick={(clickEvent) => {
//     handleSaveButtonClick(clickEvent);
// }}

// export const StudentAttendance = () => {
//     const [inputAttend, setInputAttend] = useState({
//         date: new Date,
//         classId: 1,
//         studentId: `{satUserObject.id}`,
//         attend: false,
//     });

//     const navigate = useNavigate();
//     const localSATUser = localStorage.getItem("SAT_user");
//     const satUserObject = JSON.parse(localSATUser);

// /* ------------------------------ */
//     //  fetch(`http://localhost:8033/studentAttendance`, {
//     //     method: "POST",
//     //     headers: {
//     //         "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(ticketToSendToAPI),
//     // })
//     //     .then((response) => response.json())
//     //     .then(() => {
//     //        // navigate("/tickets");
//     //     });

//     /* ------------------------------ */
//     //Perform the fetch() to POST the object to the API
//     /* -------------Add----------------- */
//     const sendAttendance = async (SendToAPI) => {
//         const fetchOptions = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(SendToAPI),
//         };
//         const response = await fetch(
//             `http://localhost:8033/studentAttendance`,
//             fetchOptions
//         );
//         const responseJson = await response.json();
//         return responseJson;
//     };
//     /* ------------------------------ */
//     const handleSaveButtonClick = (event) => {
//         event.preventDefault();
//         sendAttendance(inputAttend);
//     };

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     sendAttendance(inputAttend);
//     //     // navigate("/students");
//     // };
//     /* ------------------------------ */

//     //here we are fetching the api to add (POST) new data to api
//     /* ------------------------------ */

//     return (
//         <>
//         <input
//         type="checkbox"
//         className="checkbox"
//         //onchange="handleChange(event)"
//         onChange={(evt) => {
//             const copy = { ...inputAttend };
//             copy.attend = evt.target.checked;
//             setInputAttend(copy);
//         }}
//     />

//                      <section>
//             <button
//             onClick={(clickEvent) => {
//                 handleSaveButtonClick(clickEvent);
//             }}
//             className="btn btn-primary"
//         >
//             Submit Ticket
//                 </button>
//                 </section>
//         </>
//     )
// }

//That girl has total Demin energy ngl
