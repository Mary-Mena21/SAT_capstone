import { ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Students.css";

export const Students = () => {
    //let NewDate = new Date(Date.now()).toLocaleDateString();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);

    const [Students, setStudents] = useState([]);

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
        [] 
    );


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
                            <section>
                                <section
                                    key={student.id}
                                    className="student_card_edit"
                                >
                                    <div className="student_card_container">

                                        <img
                                            src={require(`../images/${student.studentImg}`)}
                                            className="student_img"
                                        />

                                        <h3 className="student_info_edit">
                                            {student.fullName}
                                        </h3>

                                        <Link to={`/students/${student.id}`}>
                                            <Button
                                                variant="outline-light"
                                                size="sm"
                                            >
                                                {" "}
                                                <FaUserEdit />
                                            </Button>
                                        </Link>
                                    </div>
                                </section>
                            </section>
                        </>
                    );
                })}
            </article>
        </>
    );
};
