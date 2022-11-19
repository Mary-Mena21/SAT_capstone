import { Route, Routes } from "react-router-dom";
import { Attendance } from "../students/Attendance"
import { StudentDetails } from "../students/StudentDetail";

export const ApplicationViews = () => {
	return (

		
		<Routes>
			<Route path="attendance" element={<Attendance />} />
			<Route path="attendance/:studentDetail_Id" element={<StudentDetails/>} />
			
	</Routes>)
}

