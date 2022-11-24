import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return(<>
        <nav>
        <ul className="navbar">
            
            
         <li className="navBar_item"><Link className="navBar_link" to="/student">Student</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/students">Students</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/">Home</Link></li>
     <li className="navBar_item"><Link className="navBar_link" to="/StudentsCopy">StudentsCopy</Link></li> 
        <li className="navBar_item"><Link className="navBar_link" to="/studentForm">StudentForm</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/attendance">Attendance</Link></li>
    {/*     <li className="navBar_item"><Link className="navBar_link" to="/contacts">Contacts</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/birthdays">BirthDays</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/lessons">Lessons</Link></li> */}
            
            
            
            
            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("SAT_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>

            </ul>
            </nav>
        </>
    )
}

