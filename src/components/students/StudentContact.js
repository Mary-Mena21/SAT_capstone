import { useEffect, useState } from "react";
import { BiMailSend, BiMap, BiPhoneCall } from "react-icons/bi";
import "./StudentContact.css";

export const StudentContact = () => {
    const [Students, setStudents] = useState([]);

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    //console.log(satUserObject);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8033/students?&classId=${satUserObject.id}`
            );
            const StudentsArray = await response.json();
            setStudents(StudentsArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <h1 className="page_contact">Contact!</h1>
            <section className="contact_container">
                {Students.map((student) => {
                    return (
                        <>
                            <div key={`student--${student.id}`}>
                                <section className="student_contact">
                                    <img
                                        src={require(`../images/${student.studentImg}`)}
                                        className="student_img_contact"
                                    />
                                    <h3 className="student_info_contact contact_name">
                                        {student.fullName}
                                    </h3>
                                    <br />
                                    <a
                                        className="student_info_contact"
                                        target="_blank"
                                        href={`tel:${student.phone}`}
                                    >
                                        <BiPhoneCall />
                                        &nbsp;
                                        {student.phone}
                                    </a>
                                    <br />
                                    <a
                                        className="student_info_contact"
                                        href={`${student.email}`}
                                    >
                                        <BiMailSend />
                                        &nbsp;
                                        {student.email}
                                    </a>
                                    <br />
                                    <a
                                        className="student_info_contact"
                                        target={"_blank"}
                                        href={`http://maps.google.com/maps/search/${student.address.trim()}`}
                                    >
                                        <BiMap />
                                        {student.address}
                                    </a>
                                </section>
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    );
};
