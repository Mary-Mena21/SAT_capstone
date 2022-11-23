import { Route, Routes } from "react-router-dom";
import { Students } from "../students/Students";
import { StudentDetails } from "../students/StudentDetail";
import { StudentForm } from "../students/StudentForm";
import { StudentEdit } from "../students/StudentEdit";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="students" element={<Students />} />
            <Route path="studentForm" element={<StudentForm />} />
             <Route path="studentEdit" element={<StudentEdit />} /> 
            <Route
                path="students/:studentDetail_Id"
                element={<StudentDetails />}
            />
        </Routes>
    );
};
