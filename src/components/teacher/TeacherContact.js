import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Teacher.css";

export const TeacherContact = () => {
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);

    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:5000/teachers?_expand=user&id=${satUserObject.id}`
                );
                const teacherArray = await response.json();
                setTeachers(teacherArray);
                //console.log(teacherArray);
            };
            fetchData();
        },
        [] // When this array is empty, you are observing initial component state
    );

    return (
        <>
            {teachers.map((teacher) => {
                return (
                    <>
                        <section key={teacher.id} className="teacher_card">
                            <ul className="teacher_ul">
                                <br />
                                <li>Name : {teacher.user.fullName}</li>
                                <li>Email : {teacher.user.email}</li>
                                <li>Phone : {teacher.phone}</li>
                            </ul>
                        </section>
                    </>
                );
            })}
        </>
    );
};
