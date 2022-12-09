import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


export const StudentDelete = ({ id,studentName}) => {
    const navigate = useNavigate();
    /* ------------------------delete-------------------------- */
    //console.log(id,studentName);
    return (
        <>
            <Button
            type="submit"
            variant="secondary"
            size="md"
                onClick={() => {
                    fetch(`http://localhost:8033/students/${id}`, {
                        method: "DELETE",
                    }).then();
                    navigate("/Students")
                }}
                className="btn btn-primary"
            >
                Delete Student
            </Button>
        </>
    );
};
