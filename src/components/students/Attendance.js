import { useEffect, useState } from "react";

import "./Students.css";

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
            setAttendance(attendanceArray);
        };
        fetchData();
    }, []);

    let newArr = [];
    let sortArray = [];
    filterAttendance.forEach((item) => {
        if (newArr.some((el) => el.studentId === item.studentId) === false) {
            newArr.push(item);
        }
    });
    // attendanceArray.sort((a, b) => {
    //     return a.fullName === b.fullName ? 0 : a < b ? -1 : 1;
    // });
    sortArray = newArr.sort((a, b) =>
        a.student.fullName > b.student.fullName
            ? 1
            : b.student.fullName > a.student.fullName
            ? -1
            : 0
    );
    //console.log(newArr.length);
    //console.log(sortArray[0].date);

    return (
        <>
            <h3 className="student_info_attend">
                {sortArray.length} student Attend on {sortArray[0]?.date}
            </h3>
            <article className="students_class_attendance ">
                {sortArray.map((attend) => {
                    return (
                        <>
                            <div>
                                {attend.attend ? (
                                    <div className="">
                                        <section
                                            key={attend.id}
                                            className="student_card_attendance"
                                        >
                                            {/* <div className="student_card_container_attendance"> */}
                                                <div>
                                                    <img
                                                        src={require(`../images/${attend.student.studentImg}`)}
                                                        className="student_img_attendance"
                                                    />
                                                </div>

                                                {/* <div>{attend.attend}</div> */}
                                                {/* <br /> */}
                                                {/* <div>{attend.date}</div> */}
                                                <div>
                                                    <h3 className="student_info_attendance">
                                                        {
                                                            attend.student
                                                                .fullName
                                                        }
                                                    </h3>
                                                </div>
                                            {/* </div> */}
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
