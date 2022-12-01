import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return(<>
        <nav className="sidenav">
        <ul className="navbar">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
        <li className="navBar_item"><Link className="navBar_link" to="/">Home</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/StudentsCopy">Classroom</Link></li> 
        <li className="navBar_item"><Link className="navBar_link" to="/studentForm">New Student</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/attendance">Attendance</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/gradeBook">Books</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/birthdays">Birthdays</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/studentContact">Contact</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/studentBarChart">BarChart</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/cameraProfile">CameraProfile</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/about">About</Link></li>
            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("SAT_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>

            </ul>
        </nav>
        <span className="openNav" onclick="openNav()">&#9776; open</span>
        <script>
function openNav() {
  document.getElementById("mySidenav")
}
</script>
            
<script>
function closeNav() {
  document.getElementById("mySidenav")
}
</script>
        </>
    )
}

