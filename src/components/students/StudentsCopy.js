import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentCopy } from "./StudentCopy";
import Button from "react-bootstrap/Button";
import "./Students.css";

export const StudentsCopy = ({ searchTermState }) => {
    const [Students, setStudents] = useState([]);
    const [filteredStudent, setFiltered] = useState([]);

    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    //console.log(satUserObject);

    useEffect(() => {
        const searchedStudent = Students.filter((student) => {
            return student.fullName
                .toLowerCase()
                .startsWith(searchTermState.toLowerCase());
        });
        setFiltered(searchedStudent);
    }, [searchTermState]);

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:5000/students?&classId=${satUserObject.id}`
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
            <h1 className="page_classroom">Classroom!</h1>
            <article className="btn_container_class">
                <Button
                    variant="secondary"
                    className=" students_btn"
                    onClick={() => {
                        setFiltered(Students);
                    }}
                >
                    DISPLAY STUDENTS
                </Button>
            </article>

            <div className="students_class">
                {filteredStudent
                    .sort((a, b) => {
                        return a.fullName === b.fullName ? 0 : a < b ? -1 : 1;
                    })
                    .map((student) => {
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
            </div>
        </>
    );
};
