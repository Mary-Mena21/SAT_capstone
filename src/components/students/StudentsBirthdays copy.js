import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const StudentsBirthdays = () => {
    const [birthdays, setBirthdays] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8033/students?&classId=1`);
            const birthdaysArray = await response.json();
            setBirthdays(birthdaysArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Grade birthdays</h1>
            <article className="container">
                {birthdays.map((birthday) => {
                    return (
                        <>
                        <section key={birthday.id} className="student_card">
                           {/*  <div className="student_card "> */}
                            <h3 className="student_info"> {birthday.fullName}</h3>
                                <img  className="student_img" 
                                    src={birthday.studentImg}
                                    height={"10%"}
                                    width={"10%"}
                                />
                                <div>{ birthday.dob}</div>
                                </section>
                        </>
                    );
                })}
            </article>
        </>
    );
}