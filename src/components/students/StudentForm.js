import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from 'moment';

// import ReactDatePicker from "react-datepicker";
// import { Button, ButtonBase } from "@mui/material";
// import { DatePicker, DesktopDatePicker } from "@mui/x-date-pickers";
//import { Moment } from "react-moment";

export const StudentForm = () => {
    const navigate = useNavigate();
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    let classId = satUserObject.id;
    //const dateToFormat = "19/04/1980";
    //<Moment>{dateToFormat}</Moment>;

   // let shortDate = new Date("01/12/2021");
    //const [startDate, setStartDate] = useState(new Date());

    const [inputs, setInputs] = useState({
        fullName: "",
        email:"",
        classId: classId,
        dob:Date.now(),
        phone: "",
        address: "",
        studentImg:"",
    });

    /* -------------Date----------------- */
    //let NewDate = new Date(Date.now()).toLocaleDateString();
    //const [startDate, setStartDate] = useState(inputs.dob);
    /* -------------Add----------------- */
    const sendNewStudent = async (SendToAPI) => {
        console.log(SendToAPI);
        console.log(JSON.stringify(SendToAPI));
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8033/students`,
            fetchOptions
        );
        navigate("/students");
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputs);
        sendNewStudent(inputs);
        // navigate("/students");
    };
    /* ------------------------------ */

    return (
        <>
            <fieldset className="student_form">
                <h1>Add New Student!</h1>
                <form onSubmit={handleSubmit}>
                    <li>
                        <label htmlFor="fullName">
                            Name:
                            <br />
                            <input
                                required
                                autoFocus
                                type="text"
                                name="fullName"
                                value={inputs.fullName}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.fullName = evt.target.value;
                                    setInputs(copy);
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
                                required
                                autoFocus
                                //pattern=".+@globex\.com"
                                //size="30" 
                                type="email"
                                name="email"
                                value={inputs.email}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.email = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="dob">
                            DOB:
                            <br />
                            <input
                                required
                                autoFocus
                                type="date"
                                name="dob"
                                value={inputs.dob}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    //moment(copy.dob).format('L')
                                    
                                    new Date(copy.dob)
                                    copy.dob = evt.target.value;
                                        //toLocaleDateString()
                                    //console.log(date)
                                    setInputs(copy)
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="phone">
                            Phone:
                            <br />
                            <input
                                required
                                autoFocus
                                type="telephone"
                                name="phone"
                                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={inputs.phone}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.phone = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <li>
                        <label htmlFor="address">
                            Address:
                            <br />
                            <input
                                required
                                autoFocus
                                type="address"
                                name="address"
                                value={inputs.address}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.address = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li>

                    <br />
                    <div className="main">
                    <div className="uploadimage">
                        <label htmlFor="imgs">Upload Image</label>
                        </div> 
                        <input id="imgs" type="file" accept="image/png,image/jpeg" path="E:\FrontEnd\Workspace\SAT_capstone\src\components\image" files={inputs.studentImg} onChange={(evt) => {
                            const copy = { ...inputs };
                            copy.studentImg= evt.target.files[0].name;
                            setInputs(copy)
                        }} />
                </div> 

                <br />
                <li>
                    <input
                        type="submit"
                        //value="Send Request"
                    />
                </li>
                <br />

                    
                </form>
            </fieldset>
        </>
    );
};
//<img src="{{ asset('your/url') . '/' . $row->yourimg }}" alt="" class="image">
//src\components\Images\1.jpg

//src={require('./images/react-logo.png')}

//var filename = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '')

//  function extractFilename(path) {
//     if (path.substring(0, 12) == "C:\\fakepath\\")
//       return path.substring(12);
//     var x;
//     x = path.lastIndexOf('/');
//     if (x >= 0)
//       return path.substring(x+1);
//     x = path.lastIndexOf('\\');
//     if (x >= 0)
//       return path.substring(x+1);
//     return path;
//   }

{/* <input id="imgs" type="file" accept="image/png,image/jpeg,.txt,.doc,.pdf" onChange={(e)=>setInputs(e.target.files)} /> */ }
                    
{/*                     <DatePicker
                        // selected={inputs.dob}
                        // format='mm/dd/yyyy'
                        // //onChange={(date) => setInputs(date)}
                        // onChange={(evt) => {
                        //     const copy = { ...inputs };
                        //     copy.dob = evt.target.value;
                        //     setInputs(copy)
                        // }}
                    /> */}

                                                //console.log(M);
                            // if (M.slice(0, 12) === "C:\\fakepath\\")
                            // {M.replace("C:\\fakepath\\","./images/")}
                            //M.split("fakepath\\")
                           
                            //copy.studentImg = M;

                                          {/*       <br />
                    <li>
                        <label htmlFor="studentImg">
                            studentImg:
                            <br />
                            <input
                                required
                                autoFocus
                                type="text"
                                name="studentImg"
                                value={inputs.studentImg}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.studentImg = evt.target.value;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li> */}


                    {/* <br />
                    <li>
                        <label htmlFor="classId">
                            classId:
                            <br />
                            <input
                                required
                                autoFocus
                                type="number"
                                name="classId"
                                value={inputs.classId}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    copy.classId = evt.target.valueAsNumber;
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li> */}
