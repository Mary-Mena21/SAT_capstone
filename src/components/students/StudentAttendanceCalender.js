import "./Students.css";
import Form from "react-bootstrap/Form";

export const StudentAttendanceCalender = ({ setterFunction }) => {
    return (
        <>
            <h1 className="page_attendance">Attendance!</h1>
            <Form.Floating className="mb-2 datePicker">
                <Form.Control
                    required
                    autoFocus
                    type="date"
                    name="dob"
                    placeholder="date"
                    onChange={(evt) => {
                        setterFunction(evt.target.value);
                    }}
                />
                <label htmlFor="">Attendance date</label>
            </Form.Floating>
        </>
    );
};
