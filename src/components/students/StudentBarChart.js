
//import logo from "./logo.svg";
import "./StudentBarChart.css";
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

export const StudentBarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});
    /* ----------------------------------------------------- */

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
            );
            const attendanceArray = await response.json();
            let Z = attendanceArray.map((s) => s.date);
            //console.log(Z);
            let uniqueDates = Z.filter((c, index) => {
                return Z.indexOf(c) === index;
            });
            //console.log(uniqueDates);
            let f = 0;
            let HG = [];
            let classCount = [];
            uniqueDates.map((v) => {
                attendanceArray.map((student) => {
                    if (student.attend && student.date === v) {
                        f += student.attend;
                        classCount.push(f);
                      }
                    });
              HG.push(classCount.length);
              classCount = [];
              //console.log(HG);
            });
            

            setChartData({
                labels: uniqueDates,
                datasets: [
                    {
                        label: "Student attend",
                        data: HG,
                        // borderColor: "rgb(53, 162, 235)",
                        // backgroundColor: "rgba(53, 162, 235, 0.4)",

                        backgroundColor:
                        [
                          'rgba(255, 99, 132, 0.5)',
                          'rgba(255, 159, 64, 0.5)',
                          'rgba(255, 205, 86, 0.5)',
                          'rgba(75, 192, 192, 0.5)',
                          'rgba(54, 162, 235, 0.5)',
                          'rgba(153, 102, 255, 0.5)',
                          'rgba(201, 203, 207, 0.5)'
                        ],
                      borderColor:
                        [
                          'rgb(255, 99, 132)',
                          'rgb(255, 159, 64)',
                          'rgb(255, 205, 86)',
                          'rgb(75, 192, 192)',
                          'rgb(54, 162, 235)',
                          'rgb(153, 102, 255)',
                          'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    },
                ],
            });

            setChartOptions({
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Average Weakly Attendance",
                    },
                },
            });
        };
        fetchData();
    }, []);
    return (
        <div className="BarChart">
            <Bar options={chartOptions} data={chartData} />
        </div>
    );
};

