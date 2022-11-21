import { useNavigate } from "react-router-dom";
export const StudentDelete = ({ id, userId }) => {
    const navigate = useNavigate();
    /* ------------------------delete-------------------------- */
    return (
        <>
            <button
                onClick={() => {
                    fetch(`http://localhost:8033/users/${userId}`, {
                        method: "DELETE",
                    }).then( navigate("/Students"));

                }}
                className="btn btn-primary"
            >
                Delete Student
            </button>
        </>
    );
};
