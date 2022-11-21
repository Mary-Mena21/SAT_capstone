import { useState } from "react"

export const StudentForm = () => {
    const [inputs, setInputs] = useState({
        fullName :"",
        email :"",
        classId :"",
        dob :"",
        phone :"",
        address :"",
        studentImg :""
    })

    /* -------------Edit----------------- */
    /* async */
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
    };
    /* ------------------------------ */
    const SendToAPI = {
        fullName: inputs.fullName,
        email: inputs.email,
        classId: inputs.classId,
        dob: inputs.dob,
        phone: inputs.phone,
        address: inputs.address,
        studentImg: inputs.studentImg,
    };
    /* ------------------------------ */

    return <>
    <fieldset className="student_form">
                <legend>
                    <h1>Add New Student!</h1>
                    <form onSubmit={handleSubmit}>
                        <li>
                            <label htmlFor="name">
                                Name:
                                <input
                                    type="text"
                                    name="fullName"
                                    value={inputs.fullName}
                                    onChange={(evt) => {
                                        const copy = { ...inputs };
                                        copy.fullName =
                                            evt.target.valueAsNumber;
                                        setInputs(copy);
                                    }}
                                />
                            </label>
                        </li>
                        <br />
                        <li>
                            <label htmlFor="email">
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={inputs.email}
                                    onChange={(evt) => {
                                        const copy = { ...inputs };
                                        copy.email =
                                            evt.target.value;
                                        setInputs(copy);
                                    }}
                                />
                            </label>
                        </li>
                        <br />
                        <li>
                            <label htmlFor="classId">
                            classId:
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
                                <input
                                    type="text"
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
                </legend>
            </fieldset>
    </>
}