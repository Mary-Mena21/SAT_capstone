import { useEffect, useState } from "react";
import { Student } from "./Student";
import "./Students.css";

export const Students = () => {
    const [Students, setStudents] = useState([]);

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    console.log(satUserObject);
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    //`http://localhost:8033/students?_expand=user&classId=${satUserObject.id}`
                    `http://localhost:8033/students?&classId=${satUserObject.id}`

                );
                const StudentsArray = await response.json();
                setStudents(StudentsArray);
            };
            fetchData();
        },
        [] // When this array is empty, you are observing initial component state
    );

    return (
        <>
            <h1>Students</h1>
            <article className="Students">
                {Students.map((student) => {
                    return (
                        <>
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
