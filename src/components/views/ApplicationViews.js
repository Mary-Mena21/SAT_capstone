import { Route, Routes } from "react-router-dom";
import { Students } from "../students/Students";
import { StudentDetails } from "../students/StudentDetail";
import { StudentForm } from "../students/StudentForm";
import { StudentEdit } from "../students/StudentEdit";
import { Attendance } from "../students/Attendance";
import { StudentAttendance } from "../students/StudentAttendance";
import { Student } from "../students/Student";
import { StudentsCopy } from "../students/StudentsCopy";

export const ApplicationViews = () => {
    return (
        <Routes>
            {/* <Route path="students/attendance1" element={<StudentAttendance />} />  */}
            <Route path="students" element={<Students />} />
            <Route path="studentsCopy" element={<StudentsCopy />} />
            <Route path="student" element={<Student />} />

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
