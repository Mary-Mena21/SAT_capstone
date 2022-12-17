// import { useEffect, useState } from "react"
// import { StudentChart } from "./StudentChart"

// export const StudentChartData = () => {
//      const [userData, setUserData] = useState({
//         labels: userData.map((data)=>data.student.fullName),
//         datasets: [{
//             label: "date",
//             data:userData.map((data)=>data.date)
//          }]
        
//     })

//     console.log(userData);

//     const localSATUser = localStorage.getItem("SAT_user");
//     const satUserObject = JSON.parse(localSATUser);
//     useEffect(
//         () => {
//             const fetchData = async () => {
//                 const response = await fetch(
//                     `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
//                 );
//                 const attendanceArray = await response.json();
//                 setUserData(attendanceArray);
//             };
//             fetchData();
//         },
//         [] // When this array is empty, you are observing initial component state
//     );

//     return <>
//        <StudentChart chartData={userData} /> 
//         {userData.map((data) => {
//             return (<>
//                 {data.student.fullName}
//             </>)
//         })}
//         </>
// }