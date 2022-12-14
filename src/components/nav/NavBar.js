import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { ToggleButton } from 'react-bootstrap'
//import background from "../images/SAT_1.jpg";

import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaHome, FaFortAwesome, FaBirthdayCake, FaSignOutAlt } from "react-icons/fa";
import {
    BsFillCalendar2CheckFill,
    BsFillPersonPlusFill,
    BsBookHalf,
    BsFillTelephoneFill,
    BsBarChartLineFill,
    BsCameraFill,
    BsBookmarksFill,
} from "react-icons/bs";
//import { IoLogOut }from "react-icons/lo";


export const NavBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    /* sideBar */
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />,
            className: "sidebar_2",
        },
        {
            path: "/StudentsCopy",
            name: "Class",
            icon: <FaFortAwesome />,
            className: "sidebar_2",
        },
        {
            path: "/attendance",
            name: "Attend",
            icon: <BsFillCalendar2CheckFill />,
            className: "sidebar_2",
        },
        {
            path: "/studentForm",
            name: "Student",
            icon: <BsFillPersonPlusFill />,
            className: "sidebar_2",
        },
        {
            path: "/birthdays",
            name: "Birthday",
            icon: <FaBirthdayCake />
        },
        {
            path: "/studentContact",
            name: "Contact",
            icon: <BsFillTelephoneFill />,
            className: "sidebar_2",
        },
        {
            path: "/gradeBook",
            name: "Books",
            icon: <BsBookHalf />,
            className: "sidebar_2",
        },
        {
            path: "/studentBarChart",
            name: "Chart",
            icon: <BsBarChartLineFill />,
            className: "sidebar_2",
        },
        {
            path: "/cameraProfile",
            name: "Camera",
            icon: <BsCameraFill />,
            className: "sidebar_2",
        },
        {
            path: "/about",
            name: "About",
            icon: <BsBookmarksFill />,
            className: "sidebar_2",
        },
        {
            path: "/login",
            name: "Logout",
            icon: <FaSignOutAlt />,
            className: "sidebar_2",
        },
    ];
    return (
        <>
           { /* <div className="top_bar"></div> */}
            <div className="sidebar_2"></div>
{/*             <div className="">
                <Link
                    className="link_text logout_link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("SAT_user");
                        navigate("/", { replace: true });
                    }}
                >
                    Logout
                </Link>
            </div> */}
            {/* sideNavBar */}
            <div className="container ">
                <div
                    style={{ width: isOpen ? "200px" : "50px" }}
                    className="sidebar"
                >
                    <div className="top_section">
                        <h1
                            style={{ display: isOpen ? "block" : "none" }}
                            className="logo"
                        >
                            SAT
                        </h1>
                        <div
                            style={{ marginLeft: isOpen ? "50px" : "0px" }}
                            className="bars"
                        >
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {menuItem.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="link"
                            activeclassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div
                                style={{ display: isOpen ? "block" : "none" }}
                                className="link_text"
                            >
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
                <main>{children}</main>


{/*                 <li class="border-top my-3"></li>
                <li class="mb-1">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                    Account
                  </button>
                <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Sign out</a></li>
                </ul>
                    </div>
                    </li> */}
                
            </div>
            {/* sideNavBar */}
            <div className=""></div>

           {/*  <div className="bottom_bar"></div> */}
        </>
    );
};
