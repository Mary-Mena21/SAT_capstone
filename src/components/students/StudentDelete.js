import { useNavigate } from "react-router-dom";
export const StudentDelete = ({ id,studentName}) => {
    const navigate = useNavigate();
    /* ------------------------delete-------------------------- */
    //console.log(id,studentName);
    return (
        <>
            <button
                onClick={() => {
                    fetch(`http://localhost:8033/students/${id}`, {
                        method: "DELETE",
                    }).then();
                    navigate("/Students")
                }}
                className="btn btn-primary"
            >
                Delete Student
            </button>
        </>
    );
};
