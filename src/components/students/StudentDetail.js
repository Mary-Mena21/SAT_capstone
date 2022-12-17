import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentDelete } from "./StudentDelete";

import "./StudentEdit.css";
import { StudentEdit } from "./StudentEdit";

export const StudentDetails = ({
    id,
    /*     studentName,
    studentEmail,
    studentClassId,
    studentPhone,
    studentDob,
    studentAddress,
    studentImg, */
}) => {
    const { studentDetail_Id } = useParams();
    const [studentDetail, setStudentDetail] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8033/students/${studentDetail_Id}`
            );
            const student = await response.json();
            console.log(studentDetail_Id);
            console.log(id);
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
                    <section className="student_edit">
                        <StudentEdit
                            id={studentDetail.id}
                            studentName={studentDetail.fullName}
                            studentEmail={studentDetail.email}
                            studentClassId={studentDetail.classId}
                            studentPhone={studentDetail.phone}
                            studentDob={studentDetail.dob}
                            studentAddress={studentDetail.address}
                            studentImg={studentDetail.studentImg}
                        />
                    </section>
                </div>
            </section>
        </>
    );
};
