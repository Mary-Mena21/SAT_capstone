import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./StudentForm.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const StudentForm = () => {
    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    let classId = satUserObject.id;

    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        classId: classId,
        dob: Date.now(),
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
        navigate("/students");
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendNewStudent(inputs);
    };
    /* ------------------------------ */

    return (
        <>
            <h1 className="page_studentForm_form">New Student!</h1>
            <section className="form_container">
                <fieldset className=" page_container_form">
                    <form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                required
                                autoFocus
                                type="text"
                                name="fullName"
                                placeholder="full name"
                                value={inputs.fullName}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.fullName = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                            <label htmlFor="name">Full name</label>
                        </Form.Floating>

                        <Form.Floating className="mb-2">
                            <Form.Control
                                required
                                autoFocus
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                value={inputs.email}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.email = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                            <label htmlFor="email">Email address</label>
                        </Form.Floating>

                        <Form.Floating className="mb-2">
                            <Form.Control
                                required
                                autoFocus
                                type="date"
                                name="dob"
                                placeholder="date"
                                value={inputs.dob}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    new Date(copy.dob);
                                    copy.dob = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                            <label htmlFor="date">Date of birth</label>
                        </Form.Floating>

                        <Form.Floating className="mb-2">
                            <Form.Control
                                required
                                autoFocus
                                type="telephone"
                                name="phone"
                                placeholder="Cell phone"
                                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={inputs.phone}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.phone = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                            <label htmlFor="phone">Cell phone</label>
                        </Form.Floating>

                        <Form.Floating className="mb-2">
                            <Form.Control
                                required
                                autoFocus
                                type="address"
                                name="address"
                                placeholder="Address"
                                value={inputs.address}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.address = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                            <label htmlFor="Address">Address</label>
                        </Form.Floating>

                        <Form.Floating className="mb-2">
                            <Form.Group>
                                <Form.Label className="">
                                    upload Image
                                </Form.Label>
                                <Form.Control
                                    size="lg"
                                    id="imgs"
                                    type="file"
                                    accept="image/png,image/jpeg"
                                    path="E:\FrontEnd\Workspace\SAT_capstone\src\components\image"
                                    files={inputs.studentImg}
                                    onChange={(evt) => {
                                        const copy = { ...inputs };
                                        copy.studentImg =
                                            evt.target.files[0].name;
                                        setInputs(copy);
                                    }}
                                />
                            </Form.Group>
                        </Form.Floating>

                        <Button
                            className="button_form"
                            type="submit"
                            variant="secondary"
                            size="lg"
                        >
                            SUBMIT
                        </Button>
                    </form>
                </fieldset>
            </section>
        </>
    );
};
