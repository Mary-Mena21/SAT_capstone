import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./StudentDetail.css";

export const StudentDetails = () => {
    const { studentDetail_Id } = useParams();
    const [studentDetail, setStudentDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8033/users/${studentDetail_Id}`
                //`http://localhost:8033/users/${studentDetail_Id}?userTypeId=2&classId=1`
            );
            const student = await response.json();
            //console.log(student);
            //console.log(studentDetail);
            setStudentDetail(student);
        };
        fetchData();
    }, []);
    return (<>
        <section className="student">
        <img src={studentDetail.imgLink} className="student_img" />
                <header className="student__header">
                    {studentDetail.fullName}
                </header>
                <div>Email: {studentDetail.email}</div>
                <div>Phone: {studentDetail.phone}</div>
                <div>address: {studentDetail.address}</div>
                <footer className="student__footer">
                    Date Of Birth:{studentDetail.dob}
                </footer>
            </section>
        </>
    );
};
