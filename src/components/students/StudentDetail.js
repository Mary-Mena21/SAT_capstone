import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentDelete } from "./StudentDelete";

import "./StudentDetail.css";
import { StudentEdit } from "./StudentEdit";

export const StudentDetails = ({
    id,
    studentName,
    studentEmail,
    studentClassId,
    studentPhone,
    studentDob,
    studentAddress,
    studentImg,
}) => {
    const { studentDetail_Id } = useParams();
    const [studentDetail, setStudentDetail] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`http://localhost:8033/Students/${studentDetail_Id}?_expand=user`
                `http://localhost:8033/students/${studentDetail_Id}`
                //`http://localhost:8033/users/${studentDetail_Id}?userTypeId=2&classId=1`
            );
            const student = await response.json();
            //console.log(student);
            //console.log(studentDetail);
            setStudentDetail(student);
        };
        fetchData();
    }, []);

    return (
        <>
            <section key={`student__${id}`} className="student">
                <img src={studentDetail?.studentImg} className="student_img" />
                <header className="student__header">
                    {studentDetail?.fullName}
                </header>
                <div>Email: {studentDetail?.email}</div>
                <div>Phone: {studentDetail?.phone}</div>
                <div>address: {studentDetail?.address}</div>
                <footer className="student__footer">
                    Date Of Birth:{studentDetail.dob}
                </footer>
                <StudentDelete
                    id={studentDetail.id}
                    studentName={studentDetail.fullName}
                />

                <button
                    onClick={() => {
                        <StudentEdit
                            id={studentDetail.id}
                            studentName={studentDetail.fullName}
                            studentEmail={studentDetail.email}
                            studentClassId={studentDetail.classId}
                            studentPhone={studentDetail.phone}
                            studentDob={studentDetail.dob}
                            studentAddress={studentDetail.address}
                            studentImg={studentDetail.studentImg}
                        />;
                        navigate(`/studentEdit`); 
                    }}
                    className="btn btn-primary"
                >
                    Edit Student
                </button>
            </section>
        </>
    );
};

/* 
    return (<>
        <section className="student">
               
        <img src={studentDetail?.studentImg} className="student_img" />
                <header className="student__header">
                    {studentDetail?.user?.fullName}
                </header>
                <div>Email: {studentDetail?.user?.email}</div>
                <div>Phone: {studentDetail?.phone}</div>
                <div>address: {studentDetail?.address}</div>
                <footer className="student__footer">
                    Date Of Birth:{studentDetail.dob}
            </footer>
            <StudentDelete
            userId={studentDetail.userId} />
        </section>
     
        </>
    );
};
*/
