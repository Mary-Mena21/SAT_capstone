import { Route, Routes } from "react-router-dom";
import { Students } from "../students/Students";
import { StudentDetails } from "../students/StudentDetail";
import { StudentForm } from "../students/StudentForm";
import { StudentEdit } from "../students/StudentEdit";
import { Attendance } from "../students/Attendance";
import { StudentAttendance } from "../students/StudentAttendance";
import { Student } from "../students/Student";
import { StudentsCopy } from "../students/StudentsCopy";
import { GradeBookList } from "../gradeBooks/GradeBookList";
import { StudentsBirthdays } from "../students/StudentsBirthdays";
import { StudentSearch } from "../students/StudentSearch";
import { StudentContainer } from "../students/StudentContainer";
import { StudentAttendanceCalender } from "../students/StudentAttendanceCalender";
import { StudentAttendanceContainer } from "../students/StudentAttendanceContainer";

export const ApplicationViews = () => {
    return (
        <Routes>
            {/* <Route path="students/attendance1" element={<StudentAttendance />} />  */}
            <Route path="students" element={<Students />} />
            <Route path="studentsCopy" element={<StudentContainer />} />
            <Route path="student" element={<Student />} />
            <Route path="gradeBook" element={<GradeBookList />} />
            <Route path="birthdays" element={<StudentsBirthdays />} />

            <Route path="studentForm" element={<StudentForm />} />
            <Route path="studentEdit" element={<StudentEdit />} />
            <Route path="attendance" element={<StudentAttendanceContainer />} />
            <Route
                path="students/:studentDetail_Id"
                element={<StudentDetails />}
            />
        </Routes>
    );
};
