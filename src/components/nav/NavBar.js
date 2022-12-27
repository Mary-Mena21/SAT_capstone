import { Link } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
    FaBars,
    FaHome,
    FaFortAwesome,
    FaBirthdayCake,
    FaSignOutAlt,
} from "react-icons/fa";
import {
    BsFillCalendar2CheckFill,
    BsFillPersonPlusFill,
    BsBookHalf,
    BsFillTelephoneFill,
    BsBarChartLineFill,
    BsCameraFill,
    BsBookmarksFill,
    BsEmojiSmileFill,
    BsGithub,
} from "react-icons/bs";
import { Teacher } from "../teacher/Teacher";

export const NavBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    <Teacher />;

    const menuItem = [
        {
            path: "/appe",
            name: "",
            icon: <Teacher />,
            className: "sidebar_2",
        },
        {
            path: "/",
            name: "Home",
            icon: <FaHome />,
            className: "sidebar_2",
        },
        {
            path: "/Students",
            name: "Students",
            icon: <BsEmojiSmileFill />,
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
            path: "/studentForm",
            name: "Student",
            icon: <BsFillPersonPlusFill />,
            className: "sidebar_2",
        },
        {
            path: "/birthdays",
            name: "Birthday",
            icon: <FaBirthdayCake />,
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

                    <img
                        src={require(`../images/Logo_2_B.png`)}
                        className="logo_navbar"
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
                        }}
                    />

                    {menuItem.map((item, index) => (
                        <Link to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div
                                style={{ display: isOpen ? "block" : "none" }}
                                className="link_text"
                            >
                                {item.name}
                            </div>
                        </Link>
                    ))}
                    <hr className="hr_nav" />
                    <div style={{ display: isOpen ? "block" : "none" }}>
                        <p className="link_text">
                            &nbsp;&nbsp;&nbsp;
                            <a
                                className="link_text github_icon"
                                target="_blank"
                                alt="Github"
                                title="Github"
                                href="https://github.com/Mary-Mena21/SAT_capstone"
                            >
                                <BsGithub />
                            </a>
                            &nbsp; SAT©2022
                        </p>
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </>
    );
};
