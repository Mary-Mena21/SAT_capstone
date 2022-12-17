import { useState } from "react";
import { Attendance } from "./Attendance";
import { StudentAttendanceCalender } from "./StudentAttendanceCalender";


export const StudentAttendanceContainer = () => {
    const [attendTerms, setAttendTerms] = useState("");

    return (
        <>
            <div className="card_container_calender">
                <StudentAttendanceCalender setterFunction={setAttendTerms} />
                <Attendance attendTermState={attendTerms} />
            </div>
        </>
    );
};
