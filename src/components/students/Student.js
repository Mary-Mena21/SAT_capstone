import { Link } from "react-router-dom";
import "./Attendance.css";

export const Student = ({ studentImg, studentId, studentName, id }) => {
    return (
        <div className="container">
            <section key={studentId} className="attendance_card">
                <div className="student_card_container">
                    <img src={studentImg} className="student_img" />
                    <Link to={`/attendance/${id}`}>
                        <h3 className="student_info">{studentName}</h3>
                    </Link>
                    <input
                        type="checkbox"
                        className="checkmark"
                        onchange="handleChange(event)"
                    />
                </div>
            </section>
        </div>
    );
};
