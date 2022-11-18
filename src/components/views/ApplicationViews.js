import { Route, Routes } from "react-router-dom";
import { Attendance } from "../students/Attendance"

export const ApplicationViews = () => {
	return (

		
		<Routes>
		<Route path="/attendance" element={<Attendance/>} />
	</Routes>)
}

