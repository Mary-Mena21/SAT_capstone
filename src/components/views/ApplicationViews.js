import { Route, Routes } from "react-router-dom";
import { Students } from "../students/Students";
import { StudentDetails } from "../students/StudentDetail";
import { StudentForm } from "../students/StudentForm";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="students" element={<Students />} />
            <Route path="studentForm" element={<StudentForm />} />
            <Route
                path="students/:studentDetail_Id"
                element={<StudentDetails />}
            />
        </Routes>
    );
};
