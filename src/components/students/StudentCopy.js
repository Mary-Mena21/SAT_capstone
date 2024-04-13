import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Students.css";
export const StudentCopy = ({
    id,
    studentName,
    studentEmail,
    studentClassId,
    studentPhone,
    studentDob,
    studentAddress,
    studentImg,
}) => {
    /* -------------------------------------- */

    const current = new Date();
    const date = `${current.getFullYear()}-${
        current.getMonth() + 1
    }-${current.getDate()}`;
    //Date.now()
    let NewDate = new Date(Date.now()).toJSON().slice(0, 10);
    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    let classId = satUserObject.id;
    let userId = id;

    const [inputAttend, setInputAttend] = useState({
        id: 0,
        date: NewDate,
        classId: classId,
        studentId: userId,
        attend: false,
    });

    /* ------------------------------ */

    /* -------------Add----------------- */
    const sendAttendance = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:5000/studentAttendance`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };

    /* -------------Delete----------------- */
    /*         const deleteAttendance = async (x) => {
        console.log(inputAttend[0]);
        console.log(x);
            fetch(`http://localhost:5000/studentAttendance?&id=${x.id}`, {
            //fetch(`http://localhost:5000/studentAttendance?&id=${inputAttend[0]}`, {
            method: "DELETE",
        });
    };  */

    return (
        <>
            <section>
                <div /* className="students_class" */>
                    {/* <div className="container"> */}
                    <section key={id} className="student_card_2">
                        <div className="student_card_container">
                            {/* <img src={studentImg} className="student_img" /> */}
                            <img
                                src={require(`../images/${studentImg}`)}
                                className="student_img"
                            />
                            <Link to={`/students/details/${id}`}>
                                <h3 className="student_info">{studentName}</h3>
                            </Link>
                            <div>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={(evt) => {
                                        const copy = { ...inputAttend };
                                        //copy.attend = evt.target.checked;
                                        if (
                                            (copy.attend = evt.target.checked)
                                        ) {
                                            setInputAttend(copy);
                                            sendAttendance(copy);
                                        } /*   else {
                                            console.log("test");
                                            console.log(copy);
                                            deleteAttendance(copy);
                                        }  */
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};
