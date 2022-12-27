import { TeacherContact } from "../teacher/TeacherContact";
import "./Appe.css";
import { ExportCSV } from "./ExportCSV";

export const Appe = () => {
    return (
        <>
            <TeacherContact />
            <div className="App_container_export">
                <ExportCSV />
            </div>
        </>
    );
};
