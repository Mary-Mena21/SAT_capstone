import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ToggleButton } from 'react-bootstrap'



import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';




export const NavBar = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    return(<>
        <nav>
        <ul className="navbar">
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









{/* sideBar */}
        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
{/* sideBar */}








{/*       <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header >
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        </Offcanvas.Body>
      </Offcanvas> */}






        </>
    )
}

