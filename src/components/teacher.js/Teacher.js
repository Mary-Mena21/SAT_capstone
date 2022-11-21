import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Teacher = () => {
    const navigate = useNavigate();
    const [teacherInputs, setTeacherInputs] = useState({
        productLocationId: "",
        productTypeId: "",
        name: "",
        price: "",
    });

    const sendNewStudent = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8033/teachers`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendNewStudent(teacherInputs);
    };
    /* ------------------------------ */
    const SendToAPI = {
        fullNName: teacherInputs.fullNName,
        email: teacherInputs.email,
        name: teacherInputs.name,

    }


    return         <>
        <button
            onClick={() => { }}
        className="btn btn-primary"
    >
        Delete Student
    </button>
</>
}
