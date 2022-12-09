import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentCopy } from "./StudentCopy";
import "./StudentCopy.css"


//import Camera from 'react-camera';
import Webcam from "react-webcam";
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
        <h1 className="page_name">Classroom</h1>
            <section className="page_container">
                <button
                    className=" btn btn-primary student_btn"
                    onClick={() => {
                        setFiltered(Students);
                    }}
                >
                    DISPLAY STUDENT
                </button>

                <section>
                    <button
                        onClick={(clickEvent) => {
                            navigate("/attendance");
                        }}
                        className="btn btn-primary attendance_btn"
                    >
                        RECORD ATTENDANCE
                    </button>
                </section>

                <article className="students overflow_students_btn">
                    {filteredStudent
                        .sort((a, b) => {
                            return a.fullName === b.fullName
                                ? 0
                                : a < b
                                ? -1
                                : 1;
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
                </article>

                {/*              <Camera
  ref={(cam) => {
    this.camera = cam;
  }}
>
  <button onClick={this.takePicture}>
    <i className="fas fa-camera"></i> &nbsp; Take photo
  </button>
</Camera>  */}
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
{
    /*             <img src="image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA..."/> */
}
