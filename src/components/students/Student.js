export const Student = ({ studentImg, studentId, studentName }) => {
    return (
        <div className="container">
            <section key={studentId} className="attendance_card">
                <div className="student_card_container">
                    <img src={studentImg} className="student_img" />
                    <h3 className="student_info">{studentName}</h3>
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
