import { useState } from "react"

export const StudentForm = () => {
    const [inputs, setInputs] = useState({
        fullNName :"",
        email :"",
        classId :"",
        DOB :"",
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
        fullNName: inputs.fullNName,
        email: inputs.email,
        name: inputs.name,
        price: inputs.price,
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
                            <label htmlFor="name">
                                Enter Product type :🈯
                                <input
                                    type="number"
                                    name="productTypeId"
                                    value={inputs.productTypeId}
                                    onChange={(evt) => {
                                        const copy = { ...inputs };
                                        copy.productTypeId =
                                            evt.target.valueAsNumber;
                                        setInputs(copy);
                                    }}
                                />
                            </label>
                        </li>
                        <br />
                        <li>
                            <label htmlFor="name">
                                Enter product name : 🈚
                                <input
                                    type="text"
                                    name="name"
                                    value={inputs.name}
                                    onChange={(evt) => {
                                        const copy = { ...inputs };
                                        copy.name = evt.target.value;
                                        setInputs(copy);
                                    }}
                                />
                            </label>
                        </li>
                        <br />
                        <li>
                            <label htmlFor="name">
                                Enter Product price :🈴
                                <input
                                    type="number"
                                    name="price"
                                    value={inputs.price}
                                    onChange={(evt) => {
                                        const copy = { ...inputs };
                                        copy.price = evt.target.valueAsNumber;
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