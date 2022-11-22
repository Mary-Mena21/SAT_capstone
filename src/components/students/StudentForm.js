import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const StudentForm = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        classId: "",
        dob: "",
        phone: "",
        address: "",
        studentImg: "",
    });

    /* -------------Add----------------- */
    const sendNewStudent = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8033/students`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendNewStudent(inputs);
        navigate("/students");
    };
    /* ------------------------------ */

    return (
        <>
            <fieldset className="student_form">
                <h1>Add New Student!</h1>
                <form onSubmit={handleSubmit}>
                    <li>
                        <label htmlFor="fullName">
                            Name:
                            <br />
                            <input
                                type="text"
                                name="fullName"
                                value={inputs.fullName}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.fullName = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="email">
                            Email:
                            <br />
                            <input
                                type="email"
                                name="email"
                                value={inputs.email}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.email = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="classId">
                            classId:
                            <br />
                            <input
                                type="number"
                                name="classId"
                                value={inputs.classId}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.classId = evt.target.valueAsNumber;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="dob">
                            DOB:
                            <br />
                            <input
                                type="date"
                                name="price"
                                value={inputs.dob}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.dob = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="phone">
                            Phone:
                            <br />
                            <input
                                type="phoneNumber"
                                name="phone"
                                value={inputs.phone}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.phone = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="address">
                            Address:
                            <br />
                            <input
                                type="address"
                                name="address"
                                value={inputs.address}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.address = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="studentImg">
                            studentImg:
                            <br />
                            <input
                                type="studentImg"
                                name="studentImg"
                                value={inputs.studentImg}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.studentImg = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <input type="submit" />
                    </li>
                    <br />
                </form>
            </fieldset>
        </>
    );
};
