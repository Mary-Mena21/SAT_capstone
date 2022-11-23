import { Route, Routes } from "react-router-dom";
import { Students } from "../students/Students";
import { StudentDetails } from "../students/StudentDetail";
import { StudentForm } from "../students/StudentForm";
import { StudentEdit } from "../students/StudentEdit";
import { Attendance } from "../attendance/Attendance";
import { StudentAttendance } from "../students/StudentAttendance";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="students/attendance1" element={<StudentAttendance />} /> 
            <Route path="students/student" element={<Students />} />

            <Route path="studentForm" element={<StudentForm />} />
            <Route path="studentEdit" element={<StudentEdit />} />
            <Route path="attendance" element={<Attendance />} />
            <Route
                path="students/:studentDetail_Id"
                element={<StudentDetails />}
            />
        </Routes>
    );
};
