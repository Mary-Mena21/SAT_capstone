import { useEffect, useState } from "react";
import { StudentDetails } from "./StudentDetail";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./StudentEdit.css";

export const StudentEdit = ({
    id,
    studentName,
    studentEmail,
    studentClassId,
    studentPhone,
    studentDob,
    studentAddress,
    studentImg,
}) => {
    //console.log(studentName);
    const navigate = useNavigate();

    const { studentDetail_Id } = useParams();

    const [editStudent, setEditStudent] = useState({
        id: id,
        studentName: studentName,

        fullName: "",
        email: "",
        classId: 0,
        dob: "",
        phone: "",
        address: "",
        studentImg: "",
    });
    /* -------------Display----------------- */
    /* async */
    useEffect(() => {
        console.log(id);
        const fetchData = async () => {
            const response = await fetch(
                //`http://localhost:8088/customers?_expand=user&userId=${honeyUserObject.id}`
                `http://localhost:8033/students/${studentDetail_Id}`
            );
            const data = await response.json();
            setEditStudent(data); //Try to make new Ticket and update it? ????????????????
            console.log(data);
        };
        fetchData();
    }, []);
    //here we are fetching the api to display (GET)the existing data from the current user
    //api is the router in the browser
    /* ------------------------------ */
    /* -------------Edit----------------- */
    const editStudentInfo = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8033/students/${id}`,
            //`http://localhost:8033/Students/${studentDetail_Id}`,
            fetchOptions
        );
        navigate("/students");
        const responseJson = await response.json();
        return responseJson;
    };
    //here we are fetching the api to edit or replace (PUT) the current data
    //api is the url for the json file that will be changed
    /* ------------------------------ */
    const handleSaveButtonClick = (event) => {
        //event.preventDefault();
        editStudentInfo(editStudent);

        // {      <StudentDetails
        //       id= {id}
        //       studentName= {studentName}
        //       studentEmail= {studentEmail}
        //       studentClassId= {studentClassId}
        //       studentDob= {studentDob}
        //       studentAddress= {studentAddress}
        //       studentImg= {studentImg}
        //       />}
    };
    /* ------------------------------ */
    return (
        <>
            <fieldset className="student_form">
                {/* <h1>Add New Student!</h1> */}
                <Form.Floating className="mb-2">
                    <Form.Control
                        required
                        autoFocus
                        type="text"
                        name="fullName"
                        value={editStudent.fullName}
                        onChange={(evt) => {
                            const copy = { ...editStudent };
                            copy.fullName = evt.target.value;
                            setEditStudent(copy);
                        }}
                    />
                    <label htmlFor="">Full name</label>
                </Form.Floating>

                <Form.Floating className="mb-2">
                    <Form.Control
                        required
                        autoFocus
                        type="email"
                        name="email"
                        value={editStudent.email}
                        onChange={(evt) => {
                            const copy = { ...editStudent };
                            copy.email = evt.target.value;
                            setEditStudent(copy);
                        }}
                    />
                    <label htmlFor="">Email address</label>
                </Form.Floating>

                <Form.Floating className="mb-2">
                    <Form.Control
                        required
                        autoFocus
                        type="date"
                        name="dob"
                        value={editStudent.dob}
                        onChange={(evt) => {
                            const copy = { ...editStudent };
                            copy.dob = evt.target.value;
                            setEditStudent(copy);
                        }}
                    />
                    <label htmlFor="">Date of birth</label>
                </Form.Floating>

                <Form.Floating className="mb-2">
                    <Form.Control
                        required
                        autoFocus
                        type="phone"
                        name="phone"
                        value={editStudent.phone}
                        onChange={(evt) => {
                            const copy = { ...editStudent };
                            copy.phone = evt.target.value;
                            setEditStudent(copy);
                        }}
                    />
                    <label htmlFor="">Cell phone</label>
                </Form.Floating>

                <Form.Floating className="mb-2">
                    <Form.Control
                        required
                        autoFocus
                        type="address"
                        name="address"
                        value={editStudent.address}
                        onChange={(evt) => {
                            const copy = { ...editStudent };
                            copy.address = evt.target.value;
                            setEditStudent(copy);
                        }}
                    />
                    <label htmlFor="">Address</label>
                </Form.Floating>

                <Button
                    type="submit"
                    variant="secondary"
                    size="md"
                    onClick={(clickEvent) => {
                        handleSaveButtonClick(clickEvent);
                    }}
                    className="btn btn-primary"
                >
                    Save Edit Student
                </Button>
            </fieldset>
        </>
    );
};
//onChange={(event) => updateEditStudent({...editStudent, fullName: event.target.
{
    /*  <br />
     <li>
         <label htmlFor="classId">
             classId:
             <br />
             <input
             required
             autoFocus
                 type="number"
                 name="classId"
                 value={editStudent.classId}
                 onChange={(evt) => {
                     const copy = { ...editStudent };
                     copy.classId = evt.target.valueAsNumber;
                     setEditStudent(copy);
                 }}
             />
         </label>
     </li> */
}
{
    /*  <br />
                    <li>
                        <label htmlFor="studentImg">
                            studentImg:
                            <br />
                            <input
                            required
                            autoFocus
                                type="link"
                                name="studentImg"
                                value={editStudent.studentImg}
                                onChange={(evt) => {
                                    const copy = { ...editStudent };
                                    copy.studentImg = evt.target.value;
                                    setEditStudent(copy);
                                }}
                            />
                        </label>
                    </li> */
}
