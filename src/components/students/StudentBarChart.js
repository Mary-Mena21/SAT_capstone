// //import logo from "./logo.svg";
// //import "./App.css";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// import { Bar } from "react-chartjs-2";
// import React, { useState, useEffect } from "react";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );
//     /* -----------------------Test2------------------------------ */

// export const StudentBarChart = () => {
//     const [chartData, setChartData] = useState({
//       labels: ["2022-11-13", "2022-11-20", "2022-11-27","2022-12-4"],
//        datasets: [
//       {
//         label: "Student Attendance Chart",
//         data: [25, 35, 34, 50, 40],
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.4)",
//       },
//     ],
//     });

//     const [chartOptions, setChartOptions] = useState({
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//             },
//             title: {
//                 display: true,
//                 text: "Student Attendance Bar Chart",
//             },
//         },
//     });
//     /* ----------------------------------------------------- */

//     const localSATUser = localStorage.getItem("SAT_user");
//     const satUserObject = JSON.parse(localSATUser);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
//             );
//             const StudentsArray = await response.json();
//             //setChartOptions(StudentsArray);
//             //setChartData(StudentsArray);
//         };
//         fetchData();
//     }, []);
  
//     return (
//       <>
// {/*       <h1 className="page_contact">Student Contact!</h1>
//       <div className="App">
//         {chartData.map((student) => {
//           return (
//             <>
            
//             </>
//             );
//           })}
//           </div> */}
//                 //<Bar options={chartOptions} data={chartData} />
//                 <Bar
//                 data={chartData}
//                 options={chartOptions}
//               />
//         </>
//     );
// };

/* ----------------------------TEST WORK------------------------- */

// //import logo from "./logo.svg";
// //import "./App.css";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// import { Bar } from "react-chartjs-2";
// import React, { useState, useEffect } from "react";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export const StudentBarChart = () => {
//     const [chartData, setChartData] = useState({
//         datasets: [],
//     });

//     const [chartOptions, setChartOptions] = useState({});
//     /* ----------------------------------------------------- */

//     const localSATUser = localStorage.getItem("SAT_user");
//     const satUserObject = JSON.parse(localSATUser);
//     useEffect(
//         () => {
//             const fetchData = async () => {
//                 const response = await fetch(
//                     `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
//                     //`http://localhost:8033/studentAttendance?_expand=student&classId=1&studentId=10`
//                 );
//                 const attendanceArray = await response.json();
//                 // setChartData(attendanceArray);
//                 //console.log(attendanceArray.map((student) => student.student.fullName));
//                 //console.log(attendanceArray.map((student) => student.student.fullName));
//                 //console.log(attendanceArray);
//                 setChartData({
//                     labels: ["2022-11-13", "2022-11-20", "2022-11-27"],
//                     // labels: attendanceArray.map((student) => {
//                     //     let label = [];
//                     //     label.push(student.date);
//                     //     //label=[...new set(label)]
//                     //     label.flat(1);
//                     //     let uniqueChars = label.filter((c, index) => {
//                     //         return label.indexOf(c) === index;
//                     //     });
//                     //     //console.log(uniqueChars);
//                     //     return uniqueChars;
//                     // }),
//                   //labels: attendanceArray.map((student) => {
//                     //let x=[]
//                     //let x = student.date
//                     //console.log(x);
//                     // let x=[]
//                     //  x.push(student.date)
//                     //let Y = Array.from(new Set(x));
//                     //let  Y = [...new Set(x)];
//                     //return x
//                   //}),
//                     datasets: [
//                         {
//                             label: "MMM",
//                             data:[5,15,20],
//                             //data: attendanceArray.map((student) => {
//                             //     if (student.attend&&student.date) {
//                             //       let x = student.attend;
//                             //       console.log(x);
//                             //         return x++;
//                             //     }
//                             // }),

//                             //data: attendanceArray.map((student) => {
//                                 //if (student.attend) {
//                                     // let x = student.attend;
//                                     // x++;
//                                     //console.log(student.date);
//                                     //return x;
//                                 //}
//                             //}),

//                             borderColor: "rgb(53, 162, 235)",
//                             backgroundColor: "rgba(53, 162, 235, 0.4)",
//                         },
//                     ],
//                 });

//                 setChartOptions({
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: "top",
//                         },
//                         title: {
//                             display: true,
//                             text: "Whom'st let the dogs out",
//                         },
//                     },
//                 });
//             };
//             fetchData();
//         },
//         []
//   );
//   return (
//     <div className="App">
//         <Bar options={chartOptions} data={chartData} />
//     </div>
// );
// };

//     /* ----------------------------------------------------- */
// useEffect(() => {
//   setChartData({
//     labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
//     datasets: [
//       {
//         label: "Whom'st let the dogs out",
//         data: [12, 55, 34, 120, 720],
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.4)",
//       },
//     ],
//   });
//   setChartOptions({
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Whom'st let the dogs out",
//       },
//     },
//   });
// }, []);
//     return (
//         <div className="App">
//             <Bar options={chartOptions} data={chartData} />
//         </div>
//     );
// };
/* ----------------------------------------------------- */

/*
<article className="">
            <h1 className="page_students">Students</h1>
                {Students.map((student) => {
                    return (
                        <>
                            <section>
                                <div className="container">
                                    <section
                                        
                                    </section>
                                </div>
                            </section>
                        </>
                    );
                })}
            </article>
        </>
    );

    
    */
/* ----------------------------------------------------- */
// // import React from "react";
// // import { Bar } from "react-chartjs-2"
// // import { Chart as ChartJS } from "chart.js/auto"
// // import { defaults } from 'react-chartjs-2';

// // export const StudentBarChart = () => {
// //     return <div className="bar">
// //         <Bar
// //             data={{
// //                 labels:["January", "February", "March", "April", "May", "June"],
// //             }}
// //             height={300}
// //             width={300}
// //         />
// //     </div>
// // }

// //import logo from "./logo.svg";
// //import "./App.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import React, { useState, useEffect } from "react";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const StudentBarChart=() =>{
//   const [chartData, setChartData] = useState({
//     datasets: [],
//   });

//   const [chartOptions, setChartOptions] = useState({});

//   const localSATUser = localStorage.getItem("SAT_user");
//   const satUserObject = JSON.parse(localSATUser);
//   useEffect(
//       () => {
//           const fetchData = async () => {
//               const response = await fetch(
//                   `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
//               );
//               const attendanceArray = await response.json();
//               setChartData(attendanceArray);
//               console.log(attendanceArray);
//           };
//           fetchData();
//       },
//       [] // When this array is empty, you are observing initial component state
//   );

// //   useEffect(() => {
// //     setChartData({
// //       labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
// //       datasets: [
// //         {
// //           label: "Whom'st let the dogs out",
// //           data: [12, 55, 34, 120, 720],
// //           borderColor: "rgb(53, 162, 235)",
// //           backgroundColor: "rgba(53, 162, 235, 0.4)",
// //         },
// //       ],
// //     });

// //     setChartOptions({
// //       responsive: true,
// //       plugins: {
// //         legend: {
// //           position: "top",
// //         },
// //         title: {
// //           display: true,
// //           text: "Whom'st let the dogs out",
// //         },
// //       },
// //     });
// //   }, []);

//   return (
//       <div className="App">

//      {/*  <Bar options={chartOptions} data={chartData} /> */}
//     </div>
//   );
// }

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

/* ----------------------------------------------------- */

// export const StudentBarChart = () => {
//   const [chartData, setChartData] = useState({
//           labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
//   datasets: [
//     {
//       label: "Whom'st let the dogs out",
//       data: [12, 55, 34, 120, 720],
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.4)",
//     },
//   ],
//   });

//   const [chartOptions, setChartOptions] = useState({
//       responsive: true,
//       plugins: {
//           legend: {
//               position: "top",
//           },
//           title: {
//               display: true,
//               text: "Student Attendance Bar Chart",
//           },
//       },
//   });



import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

export const StudentBarChart = () => {
  const [socialName, setsocialName]= useState([]);
  const [socialValue, setSocialValue]= useState([]);

  useEffect( ()=>{

    const socialMedianame=[];
    const socialMedivalue=[];

    const getSocialrecord= async()=>{
      const dataReq= await fetch("http://localhost/reactgraphtutorial/socialmedia");
      const dataRes= await dataReq.json();
      //console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        socialMedianame.push(dataRes[i].socialmedia_title);
        socialMedivalue.push(dataRes[i].socialmedia_subscriber);

      }
      setsocialName(socialMedianame);
      setSocialValue(socialMedivalue);
 }
  getSocialrecord();

  },[]);
  
  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>
      
        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Social Media Subscriber",
              data: socialValue,
            },
          ]}
          options={{
            title: {
              text: "BarChar Developed by DevOps Team",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "This is BarChart Graph",
              style: { fontSize: 18 },
            },

            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: socialName,
              title: {
                text: "Social Media User",
                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
                 title: {
                 text: "User In (K)",
                 style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
