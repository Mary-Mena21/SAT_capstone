import { useEffect, useState } from "react";

import "./Attendance.css";

export const Attendance = ({ attendTermState }) => {
    const [attendance, setAttendance] = useState([]);
    const [filterAttendance, setFilterAttendance] = useState([]);

    /* ----------------- */
    useEffect(() => {
        const AttendRecord = attendance.filter((studentAttend) => {
            return studentAttend.date.startsWith(attendTermState);
        });
        setFilterAttendance(AttendRecord);
    }, [attendTermState]);
    /* ----------------- */

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    //console.log(satUserObject);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
            );
            const attendanceArray = await response.json();
            attendanceArray.sort((a, b) => {
                return a.fullName === b.fullName ? 0 : a < b ? -1 : 1;
            });
            setAttendance(attendanceArray);
            console.log("attendanceArray" + attendanceArray);
        };
        fetchData();
    }, []);

    return (
        <>
            <article /* className="container_A" */>
                {/* <h1 className="page_attendance">Attendance</h1> */}
                {filterAttendance.map((attend) => {
                    return (
                        <>
                            <div /* className="card_container_A" */>
                                {attend.attend ? (
                                    <div className="">
                                        <section
                                            key={attend.id}
                                            className="student_card_A"
                                        >
                                            <div className="student_card_container_A">
                                                {
                                                    <img
                                                        src={require(`../images/${attend.student.studentImg}`)}
                                                        className="student_img_A"
                                                    />
                                                }
                                                <div>{attend.attend}</div>
                                                <div>{attend.date}</div>
                                                <h3 className="student_info_A">
                                                    {attend.student.fullName}
                                                </h3>
                                            </div>
                                        </section>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </>
                    );
                })}
            </article>
        </>
    );
};
