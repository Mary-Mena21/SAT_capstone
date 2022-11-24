import prototype from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Student } from "./Student";
import "./Students.css";

export const Students = ({ id }) => {
    let NewDate = new Date(Date.now()).toLocaleDateString();
    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    let classId = satUserObject.id;
    //let id=id

    const [Students, setStudents] = useState([]);
    const [inputAttend, setInputAttend] = useState({
        date: NewDate,
        classId: classId,
        studentId: 1,
        attend: false,
    });

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

    return (
        <>
            <h1>Students</h1>
            <article className="Students">
                {Students.map((student) => {
                    return (
                        <>
                            <section>
                                <div className="container">
                                    <section
                                        key={student.id}
                                        className="student_card"
                                    >
                                        <div className="student_card_container">
                                            <img
                                                src={student.studentImg}
                                                className="student_img"
                                            />
                                            <Link
                                                to={`/students/${student.id}`}
                                            >
                                                <h3 className="student_info">
                                                    {student.fullName}
                                                </h3>
                                            </Link>

                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                              
                                                onChange={(evt) => {
                                                    const copy = {
                                                        ...inputAttend,
                                                    };
                                                    copy.attend =
                                                        evt.target.checked;
                                                    setInputAttend(copy);
                                                }}
/*                                                 onClick={(clickEvent) => {
                                                    handleSaveButtonClick(clickEvent);
                                                }} */
                                            />

                                        </div>
                                    </section>
                                </div>
                            </section>

                             <Student
                                key={`student__${student.id}`}
                                id={student.id}
                                studentName={student.fullName}
                                studentEmail={student.email}
                                studentClassId={student.classIs}
                                studentDob={student.dob}
                                studentPhone={student.phone}
                                studentAddress={student.address}
                                studentImg={student.studentImg}
                            /> 
                        </>
                    );
                })}
            </article>

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
    );
};
// studentId={student.id}

/*     return (
        <>
            <h1>Students</h1>
            <article className="Students">
                {Students.map((student) => {
                    return (
                        <section key={student.id} className="StudentsM">
                            <div className="student_card_container">
                                <img
                                    src={student.imgLink}
                                    className="student_img"
                                />
                                <li className="student_info">
                                    student Name : {student.fullName}
                                </li>
                            </div>
                        </section>
                    );
                })}
            </article>
        </>
    );
}; */
