import { useEffect, useState } from "react";
import { StudentForm } from "./StudentForm";
import { useParams } from "react-router-dom";
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
    console.log(studentName);
    const { studentDetail_Id } = useParams();
    const [editStudent, setEditStudent] = useState({
        id: id,
        fullName: studentName,
        email: studentEmail,
        classId: studentClassId,
        dob: studentDob,
        phone: studentPhone,
        address: studentAddress,
        studentImg: studentImg,
    });
        /* -------------Display----------------- */
    /* async */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`http://localhost:8088/customers?_expand=user&userId=${honeyUserObject.id}`
                `http://localhost:8088/api/students/${id}`

            );
            const data = await response.json();
            setEditStudent(data[0]); //Try to make new Ticket and update it? ????????????????
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
//`http://localhost:8033/students/${id}`,
`http://localhost:8033/Students/${studentDetail_Id}`,
      fetchOptions
    );
    const responseJson = await response.json();
    return responseJson;
  };
  //here we are fetching the api to edit or replace (PUT) the current data
  //api is the url for the json file that will be changed
  /* ------------------------------ */
  const handleSaveButtonClick = (event) => {
    event.preventDefault();
      editStudentInfo(editStudent);
      
// {      <StudentForm
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
    return <>

        
    
    <fieldset className="student_form">
        {/* <h1>Add New Student!</h1> */}
        <form>
            <li>
                <label htmlFor="fullName">
                    Name:
                    <br />
                    <input
                        type="text"
                        name="fullName"
                            value={editStudent.fullName}
                            
                            onChange={(evt) => {
                                const copy = { ...editStudent };
                                copy.fullName = evt.target.value;
                                setEditStudent(copy);
                            }}
                    />
                </label>
            </li>

            <br />
            <li>
                <label htmlFor="email">
                    Email:
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={editStudent.email}
                    />
                </label>
            </li>

            <br />
            <li>
                <label htmlFor="classId">
                    classId:
                    <br />
                    <input
                        type="number"
                        name="classId"
                        value={editStudent.classId}
                    />
                </label>
            </li>

            <br />
            <li>
                <label htmlFor="dob">
                    DOB:
                    <br />
                    <input
                        type="date"
                        name="price"
                        value={editStudent.dob}
                    />
                </label>
            </li>

            <br />
            <li>
                <label htmlFor="phone">
                    Phone:
                    <br />
                    <input
                        type="phoneNumber"
                        name="phone"
                        value={editStudent.phone}
                    />
                </label>
            </li>

            <br />
            <li>
                <label htmlFor="address">
                    Address:
                    <br />
                    <input
                        type="address"
                        name="address"
                        value={editStudent.address}
                    />
                </label>
            </li>

            <br />
            <li>
                <label htmlFor="studentImg">
                    studentImg:
                    <br />
                    <input
                        type="studentImg"
                        name="studentImg"
                        value={editStudent.studentImg}  
                    />
                </label>
            </li>

            <br />
            <li>
                <input type="submit" />
            </li>
            <br />
        </form>
    </fieldset>

        
        
        
    <button
    onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)} }
    className="btn btn-primary"
  >
    Edit
  </button>
    </>;
};
//onChange={(event) => updateEditStudent({...editStudent, fullName: event.target.