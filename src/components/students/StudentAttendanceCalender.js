import "./Students.css";
import Form from "react-bootstrap/Form";

export const StudentAttendanceCalender = ({ setterFunction}) => {
    return (
        <>
            {/* <div className="card_container_C"></div> */}
        <h1 className="page_students_class">Attendance!</h1>
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

//type="text" placeholder="Enter search terms"
//setterFunction(evt.target.value)
//let dateM = new Date(evt.target.value)
//console.log(evt.target.value);

{
    /* 
            <div>
                <input
                    className="datePicker"
                    required
                    autoFocus
                    type="date"
                    name="dob"
                    onChange={(evt) => {
                        setterFunction(evt.target.value);
                    }}
                />
            </div>
*/
}
