import { useEffect, useState } from "react";
import "./Attendance.css";

export const Attendance = () => {
    const [attendance, setAttendance] = useState([]);
    const classId = [1, 2, 3];
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:8033/users?userTypeId=2&classId=1`
                    `http://localhost:8033/classes/1?_embed=users`
                );
                const attendanceArray = await response.json();
                setAttendance(attendanceArray);
            };
            fetchData();
        },
        [] // When this array is empty, you are observing initial component state
    );

    return (
        <>
            <h1>Attendance</h1>
            {/* 
            <p>
                This is a simple example of how to use the{" "}
                <code>Attendance</code> component.
            </p> */}
            <article className="attendance">
                {attendance.map((student) => {
                    return (
                        <section key={student.id} className="attendanceM">
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
};
