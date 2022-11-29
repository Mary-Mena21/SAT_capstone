import { Google } from "@mui/icons-material";
import { useEffect, useState } from "react";

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

        <article className="Students">
        <iframe width="400" height="315" src="https://maps.google.com/maps?width=100%25&amp;height=100&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" allowfullscreen></iframe>
            {Students.map((student) => {
                return (
                    <>
                        <div className="container">
                            <section key={student.id} className="student_card">
                                <h3 className="student_info">{student.fullName}</h3>
                                <a className="student_info" target="_blank" href={`tel:${student.phone}`}>
                                {student.phone}
                                </a>

                                <p className="student_info">Address:{student.address}
                                    <br />
{/*                                 <a
                                className="student_info"
                                href="https://goo.gl/maps/PeSkZxK9HopTY6ir7"
                                target="_blank"
                                >
                                View Map
                                </a> */}

                                </p>
                                <a className="student_info" href={`${student.email}`}>
                                Email: {student.email}
                              </a>
                            </section>
                        </div>
                    </>
                );
            })}
            </article>
    );
};
