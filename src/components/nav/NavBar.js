import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            
            
        <li className="navBar_item"><Link className="navBar_link" to="/attendance">Attendance</Link></li>
    {/*     <li className="navBar_item"><Link className="navBar_link" to="/addNewStudent">Add New Student</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/contacts">Contacts</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/birthdays">BirthDays</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/lessons">Lessons</Link></li> */}
            
            
            
            
            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("SST_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>

        </ul>
    )
}

