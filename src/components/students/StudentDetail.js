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
                {/* <img src={require(`../images/${studentDetail.studentImg}`)} className="student_img" /> */}
                {/* <img src={studentDetail?.studentImg} className="student_img" /> */}
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
                
                {/* <button className="Dbtn">Display Edit Form</button> */}
            </section>

           { /* <h1 className="page_Edit">Student Edit!</h1> */}
            <section className="student_edit">
               
                {/*                    <button
    onClick={() => { */}
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
                        {/*  navigate(`/studentEdit`) */}
                {/*    }}
                    className="btn btn-primary" > 
                                   Edit Student
                </button> */} 
                </section>
                </div>
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
