import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentDelete } from "./StudentDelete";
import "./StudentEdit.css";

export const StudentDetails = ({ id }) => {
    const { studentDetail_Id } = useParams();
    const [studentDetail, setStudentDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:5000/students/${studentDetail_Id}`
            );
            const student = await response.json();
            //console.log(studentDetail_Id);
            setStudentDetail(student);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="detail_container">
                <h1 className="page_Edit">Student Details!</h1>
                <div className="edit_container">
                    <section key={`student__${id}`} className="student_edit">
                        <header className="student__header">
                            {studentDetail?.fullName}
                        </header>
                        <div>{studentDetail?.email}</div>
                        <div>{studentDetail?.phone}</div>
                        <div>{studentDetail?.address}</div>
                        <footer className="student__footer">
                            {studentDetail.dob}
                        </footer>

                        <StudentDelete
                            id={studentDetail.id}
                            studentName={studentDetail.fullName}
                        />
                    </section>
                </div>
            </section>
        </>
    );
};
