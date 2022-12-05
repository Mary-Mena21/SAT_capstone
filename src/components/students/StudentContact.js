import { Google } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./StudentContact.css";

export const StudentContact = () => {
    const [Students, setStudents] = useState([]);
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    //`http://localhost:8033/students?_expand=user&classId=${satUserObject.id}`
                    `http://localhost:8033/students?&classId=${satUserObject.id}`
                );
                const StudentsArray = await response.json();
                setStudents(StudentsArray);
            };
            fetchData();
        },
        [] // When this array is empty, you are observing initial component state
    );
    return (
        <>
            <section className="contact_container">
            <h1 className="page_contact">Student Contact!</h1>
            <article className="">
                {/*         <iframe width="400" height="200" src="https://maps.google.com/maps?width=100%25&amp;height=100&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" allowfullscreen></iframe> */}
                {Students.map((student) => {
                    return (
                        <>
                            <div className="">
                                <section
                                    key={student.id}
                                    className="student_contact"
                                >
                                    <h3 className="student_info">
                                        {student.fullName}
                                    </h3>
                                    &nbsp;&nbsp;&nbsp;
                                    <a
                                        className="student_info"
                                        target="_blank"
                                        href={`tel:${student.phone}`}
                                    >
                                        {student.phone}
                                    </a>
                                    <br />
                                    <h3 className="student_info">
                                        {student.address}
                                        <br />
                                    </h3>
                                    <a
                                        className="student_info"
                                        href={`${student.email}`}
                                    >
                                        {student.email}
                                    </a>
                                </section>
                            </div>
                        </>
                    );
                })}
                </article>
                </section>
        </>
    );
};

{
    /*                                 <a
                                className="student_info"
                                href="https://goo.gl/maps/PeSkZxK9HopTY6ir7"
                                target="_blank"
                                >
                                View Map
                                </a> */
}
