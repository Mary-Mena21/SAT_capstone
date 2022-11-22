import { Link } from "react-router-dom";
import "./Students.css";

export const Student = ({ studentImg, studentName, id }) => {
    return (
        <div className="container">
            <section key={id} className="student_card">
                <div className="student_card_container">
                    <img src={studentImg} className="student_img" />
                    <Link to={`/students/${id}`}>
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
