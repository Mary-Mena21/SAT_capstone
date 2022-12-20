import "./Home.css";
/* import SAT_1 from "../images/SAT_1.jpg"; */
import React, { useState } from "react";
/* import Warper from './Warper';  */
import Popup from "reactjs-popup";
import { FaBirthdayCake } from "react-icons/fa";
import {
    BsFillCalendar2CheckFill,
    BsBookHalf,
    BsFillTelephoneFill,
    BsBarChartLineFill,
    BsEmojiSmileFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Home = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <>
            <div className="container_home">
                <div className="element_home"></div>

                <span className="shadow-wrap_home">
                    {/* <div className="logo_SAT_home "></div> */}
                    <img
                        src={require("../images/Logo_2.png")}
                        alt="logo"
                        style={{
                            width: "7rem",
                        }}
                    />
                </span>

                <div className="container_home_2">
                    {/*  <div className="clear"></div> */}
{/*                     <p>
                        <p
                            className="home_link"
                            onClick={() => setOpen((o) => !o)}
                        >
                            <BsEmojiSmileFill />
                        </p>
                    </p>
 */}
                    <p>
                        <Link className="home_link" to="/students">
                            <BsEmojiSmileFill />
                        </Link>
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
                        <Link className="home_link" to="/contacts">
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

{/*             <div>
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpen((o) => !o)}
                >
                    Controlled Popup
                </button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <a className="close" onClick={closeModal}>
                            &times;
                        </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae magni omnis delectus nemo, maxime molestiae
                        dolorem numquam mollitia, voluptate ea, accusamus
                        excepturi deleniti ratione sapiente! Laudantium, aperiam
                        doloribus. Odit, aut.
                    </div>
                </Popup>
            </div> */}
        </>
    );
};

