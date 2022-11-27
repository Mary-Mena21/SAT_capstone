import { useEffect, useState } from "react";

//import "./Attendance.css";

export const Attendance = () => {
    const [attendance, setAttendance] = useState([]);


        /* --------Jan--------- */
        // useEffect(() => {
        //     const Jan = birthdays.filter((birthday) =>
        //         birthday.dob.startsWith("01", 8)
        //     );
        //     if (Jan) {
        //         setFilteredBirthdays(Jan);
        //     }
        // }, [Jan]);
        /* --------Feb--------- */

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    console.log(satUserObject);
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
        [] // When this array is empty, you are observing initial component state
    );

    return (
        <>
            <h1>Attendance 101</h1>

            <label htmlFor="dob">
                            ATTENDANCE DATE: 
                            <br />
                            <input
                                required
                                autoFocus
                                type="date"
                                name="dob"
                                onChange={(evt) => {
                                    const copy = "{ ...inputs }";
                                    {/* new Date(copy.dob)
                                    copy.dob = evt.target.value; */}
                                    {/* setInputs(copy) */}
                                }}
                            />
                        </label>







            <article className="attendance">
                {attendance.map((attend) => {
                    return (
                        <>
                            {attend.attend ? (
                                <div className="container">
                                    <section
                                        key={attend.id}
                                        className="student_card"
                                    >
                                        <div className="student_card_container">
                                            <img
                                                src={attend.student.studentImg}
                                                className="student_img"
                                            />
                                            <div>{attend.attend}</div>
                                            {/* <div>{attend.student.dob}</div> */}
                                            <h3 className="student_info">
                                                {attend.student.fullName}
                                            </h3>
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
