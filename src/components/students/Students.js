
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Students.css";

export const Students = () => {
    let NewDate = new Date(Date.now()).toLocaleDateString();
    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    let classId = satUserObject.id;
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
        <article className="students_class">
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
                            <section className="Students_class">
                               
                                    <section
                                        key={student.id}
                                        className="student_card_1"
                                    >
                                        <div className="student_card_container">
                                         {/*    <img
                                                src={student.studentImg}
                                                className="student_img"
                                            /> */}
                                            <img src={require(`../images/${student.studentImg}`)} className="student_img" />
                                            <Link
                                                to={`/students/${student.id}`}
                                            >
                                                <h3 className="student_info">
                                                    {student.fullName}
                                                </h3>
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