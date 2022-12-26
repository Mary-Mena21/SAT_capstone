import { TeacherContact } from '../teacher/TeacherContact';
import './Appe.css';
import { ExportCSV } from './ExportCSV';



export const Appe=()=> {
  return (<>
    <TeacherContact />
    <div className="container_overflow_appe">
    <div className="App_container_export">
   { /* <h2>Class information</h2> */}
        <ExportCSV />
        </div>
    </div>
    </>
  );
}

