import { Route, Routes } from "react-router-dom";
import { Students } from "../students/Students";
import { StudentDetails } from "../students/StudentDetail";
import { StudentForm } from "../students/StudentForm";
import { StudentEdit } from "../students/StudentEdit";
/* import { Attendance } from "../students/Attendance"; */
// import { StudentAttendance } from "../students/StudentAttendance";
import { Student } from "../students/Student";
/* import { StudentsCopy } from "../students/StudentsCopy"; */
import { GradeBookList } from "../gradeBooks/GradeBookList";
import { StudentsBirthdays } from "../students/StudentsBirthdays";
/* import { StudentSearch } from "../students/StudentSearch"; */
import { StudentContainer } from "../students/StudentContainer";
/* import { StudentAttendanceCalender } from "../students/StudentAttendanceCalender"; */
import { StudentAttendanceContainer } from "../students/StudentAttendanceContainer";
import { StudentContact } from "../students/StudentContact";
import { StudentBarChart } from "../students/StudentBarChart";
import { Camera } from "../students/Camera";
import { About } from "../about/About";
import { Home } from "../home/Home";
import { Teacher } from "../teacher/Teacher";
import { Appe } from "../exportCSV/Appe";
import { TeacherContact } from "../teacher/TeacherContact";
// import { ExportCSV } from "../exportCSV/ExportCSV";
//import { AppE } from "../exportCSV/AppE";
//import { Camera } from "@mui/icons-material";

export const ApplicationViews = () => {
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/*  <Route path="students/attendance" element={<StudentAttendance />} />  */}
            <Route path="students" element={<Students />} />
            <Route path="studentsCopy" element={<StudentContainer />} />
            <Route path="student" element={<Student />} />
            <Route path="gradeBook" element={<GradeBookList />} />
            <Route path="birthdays" element={<StudentsBirthdays />} />
            <Route path="studentBarChart" element={<StudentBarChart />} />
            <Route path="studentContact" element={<StudentContact />} />
            <Route path="cameraProfile" element={<Camera />} />
            <Route path="about" element={<About />} />
            <Route path="studentForm" element={<StudentForm />} />
            <Route path="studentEdit" element={<StudentEdit />} />
            <Route path="studentDetails" element={<StudentDetails />} />
            <Route path="attendance" element={<StudentAttendanceContainer />} />
            <Route path="appe" element={<Appe />} />
            <Route path="teacherContact" element={<TeacherContact />} />

            <Route path="teacher" element={<Teacher />} />
            <Route
                path="students/details/:studentDetail_Id"
                element={<StudentDetails />}
            />
            <Route
            path="students/:studentEdit_Id"
            element={<StudentEdit />}
        />
        </Routes>
    );
};
/* students/attendance1 */
