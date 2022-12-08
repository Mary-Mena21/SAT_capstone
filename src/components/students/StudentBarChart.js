
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
              console.log(HG);
            });
            

            setChartData({
                labels: uniqueDates,
                datasets: [
                    {
                        label: "MMM",
                        data: HG,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.4)",
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
                        text: "Whom'st let the dogs out",
                    },
                },
            });
        };
        fetchData();
    }, []);
    return (
        <div className="App">
            <Bar options={chartOptions} data={chartData} />
        </div>
    );
};

