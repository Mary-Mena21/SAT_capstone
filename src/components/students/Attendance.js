import { useEffect, useState } from "react";

//import "./Attendance.css";

export const Attendance = ({ attendTermState, dateM }) => {
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
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
                );
                const attendanceArray = await response.json();
                setAttendance(attendanceArray);
            };
            fetchData();
        },
        []
    );

    return (
        <>
            <h1>Attendance 101</h1>

            <article className="attendance">
                {filterAttendance.map((attend) => {
                    return (
                        <>
                            {attend.attend ? (
                                <div className="container">
                                    <section
                                        key={attend.id}
                                        className="student_card"
                                    >
                                        <div className="student_card_container">
                                           {<img src={require(`../images/${attend.student.studentImg}`)}  className="student_img" />}
                                            <div>{attend.attend}</div>
                                            <div>{attend.date}</div>
                                            <h3 className="student_info">{attend.student.fullName}</h3>
                                        </div>
                                    </section>
                                </div>
                            ) : (
                                ""
                            )}
                        </>
                    );
                })}
            </article>
        </>
    );
};
