import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./StudentForm.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
        email: "",
        classId: classId,
        dob: Date.now(),
        phone: "",
        address: "",
        studentImg: "",
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
            <fieldset className=" page_container">
                <h1 className="page_name">New Student!</h1>
                <form onSubmit={handleSubmit}>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            required
                            autoFocus
                            type="text"
                            name="fullName"
                            placeholder="full name"
                            value={inputs.fullName}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                copy.fullName = evt.target.value;
                                setInputs(copy);
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
                            placeholder="name@example.com"
                            value={inputs.email}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                copy.email = evt.target.value;
                                setInputs(copy);
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
                            placeholder="date"
                            value={inputs.dob}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                new Date(copy.dob);
                                copy.dob = evt.target.value;
                                //toLocaleDateString()
                                //console.log(date)
                                setInputs(copy);
                            }}
                        />
                        <label htmlFor="">Date of birth</label>
                    </Form.Floating>

                    <Form.Floating className="mb-2">
                        <Form.Control
                            required
                            autoFocus
                            type="telephone"
                            name="phone"
                            placeholder="Cell phone"
                            //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={inputs.phone}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                copy.phone = evt.target.value;
                                setInputs(copy);
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
                            placeholder="Address"
                            value={inputs.address}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                copy.address = evt.target.value;
                                setInputs(copy);
                            }}
                        />
                        <label htmlFor="">Address</label>
                    </Form.Floating>

                    <Form.Group className="mb-2">
                        {/*  <Form.Label>upload Image</Form.Label> */}
                        <Form.Control
                            size="lg"
                            id="imgs"
                            type="file"
                            accept="image/png,image/jpeg"
                            path="E:\FrontEnd\Workspace\SAT_capstone\src\components\image"
                            files={inputs.studentImg}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                copy.studentImg = evt.target.files[0].name;
                                setInputs(copy);
                            }}
                        />
                    </Form.Group>

                    <Button type="submit" variant="secondary" size="md">
                        SUBMIT
                    </Button>
                </form>
            </fieldset>
        </>
    );
};

{
    /*                     <li>
                        <label htmlFor="fullName">
                            Name:
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
                    </li> */
}

{
    /*                     <li>
                        <label htmlFor="email">
                            Email:
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
                    </li> */
}

{
    /*                     <li>
                        <label htmlFor="dob">
                            DOB:
                            <input
                                required
                                autoFocus
                                type="date"
                                name="dob"
                                value={inputs.dob}
                                onChange={(evt) => {
                                    const copy = { ...inputs };
                                    new Date(copy.dob);
                                    copy.dob = evt.target.value;
                                    //toLocaleDateString()
                                    //console.log(date)
                                    setInputs(copy);
                                }}
                            />
                        </label>
                    </li> */
}

{
    /*                     <li>
                        <label htmlFor="phone">
                            Phone:
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
                    </li> */
}

{
    /*                     <li>
                        <label htmlFor="address">
                            Address:
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
                    </li> */
}
{
    /*                     <div className="main">
                        <div className="uploadimage">
                            <label htmlFor="imgs">Upload Image</label>
                        </div>
                        <input
                            id="imgs"
                            type="file"
                            accept="image/png,image/jpeg"
                            path="E:\FrontEnd\Workspace\SAT_capstone\src\components\image"
                            files={inputs.studentImg}
                            onChange={(evt) => {
                                const copy = { ...inputs };
                                copy.studentImg = evt.target.files[0].name;
                                setInputs(copy);
                            }}
                        />
                    </div> */
}

{
    /*                     <li>
                        <input
                            type="submit"
                            //value="Send Request"
                        />
                    </li>*/
}

{
    /*                 <Form.Floating className="mb-2">
                <Form.Control
                id=""
                type="email"
                placeholder="name@example.com"
                />
                <label htmlFor="">Email address</label>
                </Form.Floating>
                 */
}

{
    /*               <Form.Floating>
                <Form.Control
                
                
                    />
                <label htmlFor="">Full Name</label>
                </Form.Floating>
 */
}

// style={{ height: '2.9rem', margin: '0.3rem' ,padding: '0.7rem' }}
