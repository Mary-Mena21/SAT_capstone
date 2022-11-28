import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentCopy } from "./StudentCopy";

import "./Students.css";

export const StudentsCopy = ({ searchTermState }) => {
    const [Students, setStudents] = useState([]);
    const [filteredStudent, setFiltered] = useState([]);

    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    console.log(satUserObject);

    useEffect(() => {
        //console.log(searchTermState);
        const searchedStudent = Students.filter((student) => {
            console.log(searchTermState.toLowerCase());
            console.log(
                student.fullName
                    .toLowerCase()
                    .startsWith(searchTermState.toLowerCase())
            );
            return student.fullName
                .toLowerCase()
                .startsWith(searchTermState.toLowerCase());
        });
   // if (!searchedStudent){setFiltered(Students)}
        setFiltered(searchedStudent);
    }, [searchTermState]);

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
        <button onClick={()=>{setFiltered(Students)}}>displayStudent</button> 

            <h1>StudentsCopy</h1>
            <article className="Students">
                {filteredStudent.map((student) => {
                    return (
                        <>
                            <StudentCopy
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
                        navigate("/attendance");
                    }}
                    className="btn btn-primary"
                >
                    RECORD ATTENDANCE
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
