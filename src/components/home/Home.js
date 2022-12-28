import "./Home.css";
/* import SAT_1 from "../images/SAT_1.jpg"; */
import React, { useState } from "react";
/* import Warper from './Warper';  */
import Popup from "reactjs-popup";
import { FaBirthdayCake } from "react-icons/fa";

import Modal from "react-bootstrap/Modal";

import {
    BsFillCalendar2CheckFill,
    BsBookHalf,
    BsFillTelephoneFill,
    BsBarChartLineFill,
    BsEmojiSmileFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Home = () => {
    const [open, setOpen] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <>
            <div className="container_home">
                <div className="element_home"></div>

                <span className="shadow-wrap_home">
                    <img
                        src={require("../images/Logo_2.png")}
                        alt="logo"
                        className="logo_SAT_home"
                        style={{
                            width: "7rem",
                            position: "relative",
                            left: "80px",
                            top: "220px",
                        }}
                    />
                </span>
                <h1 className="welcome_style">Welcome to SAT app!</h1>
                <div className="container_home_2">
                    <p>
                        <Link
                            onClick={() => setSmShow(true)}
                            className=" home_link me-2"
                            /*className="home_link" to="/students" */
                        >
                            <BsEmojiSmileFill />
                        </Link>
                        {/*                         <Modal
                            size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <p className="modal-body">Lorem hjkhh jhjhghgh fhgfhf ghgfhgf gfhgfghf chghgf </p>
                        </Modal> */}

                        <Modal
                            size="sm"
                            show={smShow}
                            onHide={() => setSmShow(false)}
                            /* aria-labelledby="contained-modal-title-vcenter" */
                            centered
                            /* className="modal-body" */
                        >
                            
                            <img src={require(`../images/frame_pop_1.png`)}
                            style={{
                                width: "auto",
                                height: "18rem",
                                margin: "0px",
                                padding: "0px",
                              /*   marginLeft: "5px",
                                display: "block",
                                marginBottom: "10px",
                                padding: "0",
                                right: "", */
                           /*      backgroundColor: "white",
                                borderRadius: "50%", */
                            }} 
                            />
                        </Modal>
                    </p>

                    <p>
                        <Link className="home_link" to="/attendance">
                            <BsFillCalendar2CheckFill />
                        </Link>
                    </p>
                    <p>
                        <Link className="home_link" to="/birthdays">
                            <FaBirthdayCake />
                        </Link>
                    </p>
                    <p>
                        <Link className="home_link" to="/studentContact">
                            <BsFillTelephoneFill />
                        </Link>
                    </p>
                    <p>
                        <Link className="home_link" to="/gradeBook">
                            <BsBookHalf />
                        </Link>
                    </p>
                    <p>
                        <Link className="home_link" to="/studentBarChart">
                            <BsBarChartLineFill />
                        </Link>
                    </p>
                </div>
            </div>
            <br />
        </>
    );
};
/*                     className="logo_navbar"
                    style={{
                        width: "40px",
                        height: "40px",
                        marginLeft: "5px",
                        display: "block",
                        marginBottom: "10px",
                        padding: "0",
                        right: "",
                        backgroundColor: "white",
                        borderRadius: "50%",
                    }} */
