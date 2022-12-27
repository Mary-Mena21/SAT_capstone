import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        isTeacher: false,
    });
    let navigate = useNavigate();

    const registerNewUser = () => {
        return fetch(
            "http://localhost:8033/users",
            //`http://localhost:8033/teachers?_expand=user`
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        )
            .then((res) => res.json())
            .then((createdUser) => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem(
                        "SAT_user",
                        JSON.stringify({
                            id: createdUser.id,
                            teacher: createdUser.isTeacher,
                        })
                    );

                    navigate("/");
                }
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:8033/users?email=${user.email}`)
            .then((res) => res.json())
            .then((response) => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert(
                        "Account with that email address already exists"
                    );
                } else {
                    // Good email, create user.
                    registerNewUser();
                }
            });
    };

    const updateUser = (evt) => {
        const copy = { ...user };
        copy[evt.target.id] = evt.target.value;
        setUser(copy);
    };

    return (
        <main className=" container--login" style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="page_login">Please Register for:</h1>
                <br />
                <h1 className="page_login">Sunday School Attendance Tracker</h1>
                <fieldset>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            onChange={updateUser}
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                            autoFocus
                        />
                        <label htmlFor="">Full name</label>
                    </Form.Floating>
                </fieldset>
                <fieldset>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            onChange={updateUser}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                            autoFocus
                        />
                        <label htmlFor="">Email address</label>
                    </Form.Floating>
                </fieldset>
                <fieldset>
                    <input
                        onChange={(evt) => {
                            const copy = { ...user };
                            copy.isTeacher = evt.target.checked;
                            setUser(copy);
                        }}
                        type="checkbox"
                        id="isTeacher"
                    />

                    <label htmlFor="email">I am a Teacher </label>
                </fieldset>
                <fieldset>
                    <Button
                        className="submit"
                        type="submit"
                        variant="secondary"
                        size="md"
                    >
                        Register
                    </Button>
                </fieldset>
            </form>
        </main>
    );
};
