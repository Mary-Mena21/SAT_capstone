// import React from "react";
// import { Bar } from "react-chartjs-2"
// import { Chart as ChartJS } from "chart.js/auto"
// import { defaults } from 'react-chartjs-2';

// export const StudentBarChart = () => {
//     return <div className="bar">
//         <Bar
//             data={{
//                 labels:["January", "February", "March", "April", "May", "June"],
//             }}
//             height={300}
//             width={300}
//         />
//     </div>
// }


//import logo from "./logo.svg";
//import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 

export const StudentBarChart=() =>{
  const [chartData, setChartData] = useState({
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
    
    
    
    
  const localSATUser = localStorage.getItem("SAT_user");
  const satUserObject = JSON.parse(localSATUser);
  useEffect(
      () => {
          const fetchData = async () => {
              const response = await fetch(
                  `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
              );
              const attendanceArray = await response.json();
              setChartData(attendanceArray);
              console.log(attendanceArray);
          };
          fetchData();
      },
      [] // When this array is empty, you are observing initial component state
  );
    
    
    
    
    
//   useEffect(() => {
//     setChartData({
//       labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
//       datasets: [
//         {
//           label: "Whom'st let the dogs out",
//           data: [12, 55, 34, 120, 720],
//           borderColor: "rgb(53, 162, 235)",
//           backgroundColor: "rgba(53, 162, 235, 0.4)",
//         },
//       ],
//     });
      
//     setChartOptions({
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Whom'st let the dogs out",
//         },
//       },
//     });
//   }, []);
 
  return (
      <div className="App">
          
     {/*  <Bar options={chartOptions} data={chartData} /> */}
    </div>
  );
}


// export const StudentBarChart=() =>{
//     const [chartData, setChartData] = useState({
//       datasets: [],
//     });
   
//     const [chartOptions, setChartOptions] = useState({});
   
//     useEffect(() => {
//       setChartData({
//         labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
//         datasets: [
//           {
//             label: "Whom'st let the dogs out",
//             data: [12, 55, 34, 120, 720],
//             borderColor: "rgb(53, 162, 235)",
//             backgroundColor: "rgba(53, 162, 235, 0.4)",
//           },
//         ],
//       });
//       setChartOptions({
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "top",
//           },
//           title: {
//             display: true,
//             text: "Whom'st let the dogs out",
//           },
//         },
//       });
//     }, []);
   
//     return (
//       <div className="App">
//         <Bar options={chartOptions} data={chartData} />
//       </div>
//     );
//   }