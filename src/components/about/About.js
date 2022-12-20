import "./About.css";
/* import SAT_1 from '../images/SAT_1.jpg' */
import { Link } from "react-router-dom";
/* import { StudentsCopy } from "../students/StudentsCopy"; */

export const About = () => {
    return (
        <>
            {/*       <span class="shadow-wrap">
      <h1 className="about_app">About&nbsp;SAT!</h1>
      </span>
      <section className="about_parent_container">
          <p className="about_container">SAT (Sunday School Attendance Tracker) is a unique attendance tracking application. Track student attendance more accurately and with less paperwork. The SAT app is designed to improve the Sunday School System by creating a strong connection between teachers, students, and parents. Each user group is assigned a different level of access based on their role and need for the app. Get actionable reporting. Simplify and monitor student attendance. Less administrative effort. Reports in real time.</p>
        </section> */}

            {/* <div class="hero">
                <img src={SAT_1} alt="" /> */}
                {/* <img
                    src={require(`../images/SAT_1.png`)}
                    className="student_img"
                /> */}
        {/* </div> */}
        

        <div /* class="container" */>
        <div class="element">
        </div>
        <h1 className="page_about">SAT App!</h1>
        <div class="container_about">
                    <p class="col-sm-10 col-md-10 py-5">SAT(Sunday School Attendance Tracker) is a unique attendance tracking application. Track student attendance more accurately and with less paperwork. The SAT app is designed to improve the Sunday School System by creating a strong connection between teachers, students, and parents. Each user group is assigned a different level of access based on their role and need for the app. Get actionable reporting. Simplify and monitor student attendance. Less administrative effort. Reports in real time.<hr/></p>
                    
        <h3>Aspects</h3>
        <ul>
        <li><Link to="/students"> Students  </Link></li>
        <li><Link to="/attendance"> Attendance</Link></li> 
        <li><Link to="/birthdays"> Birthdays</Link></li> 
        <li><Link to="/contacts">Contacts</Link></li> 
        <li><Link to="/gradeBook">Curriculum</Link></li> 
        <li><Link to="/studentBarChart"> BarChart</Link></li> 
        </ul>
            <div class="clear"></div> 
            </div>
        </div>
        <br/>
        </>
    );
};
