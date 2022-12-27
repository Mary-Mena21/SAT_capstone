import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => {
    const [email, set] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        return fetch(`http://localhost:8033/users?email=${email}`)
            .then((res) => res.json())
            .then((foundUsers) => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0];
                    localStorage.setItem(
                        "SAT_user",
                        JSON.stringify({
                            id: user.id,
                            teacher: user.isTeacher,
                        })
                    );
                    navigate("/");
                } else {
                    window.alert("Invalid login");
                }
            });
    };

    return (
        <>
            <main className="container--login" style={{ textAlign: "center" }}>
                <form className="form--login" onSubmit={handleLogin}>
                    <br />
                    <h1 className="page_login">
                        Sunday School Attendance Tracker
                    </h1>
                    <br />
                    <h1 className="page_login">Please sign in</h1>
                    <fieldset>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                required
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(evt) => set(evt.target.value)}
                                className="form-control"
                                placeholder="Email address"
                            />
                            <label htmlFor="">Email address</label>
                        </Form.Floating>
                    </fieldset>
                    <fieldset>
                        <Button
                            className="submit"
                            type="submit"
                            variant="secondary"
                            size="md"
                        >
                            Sign in
                        </Button>
                    </fieldset>
                    <section className="link--register">
                        <Link to="/register">Not a member yet?</Link>
                    </section>
                </form>
            </main>
        </>
    );
};
