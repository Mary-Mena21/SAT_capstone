import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const StudentDelete = ({ id, studentName }) => {
    const navigate = useNavigate();
    /* ------------------------delete-------------------------- */

    return (
        <>
            <Button
                type="submit"
                variant="secondary"
                size="md"
                onClick={() => {
                    window.confirm(
                        `Are you sure you want to delete ${studentName}?`
                    ) &&
                        fetch(`http://localhost:5000/students/${id}`, {
                            method: "DELETE",
                        }).then();
                    navigate("/Students");
                }}
                className="btn btn-primary"
            >
                Delete Student
            </Button>
        </>
    );
};
