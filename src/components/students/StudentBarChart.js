import ReactExport from "@ibrahimrahmani/react-export-excel";
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
                `http://localhost:5000/studentAttendance?_expand=student&classId=${satUserObject.id}`
            );
            const attendanceArray = await response.json();
            let Z = attendanceArray.map((s) => s.date); /*--- columns ---*/
            //console.log(Z);
            let uniqueDates = Z.filter((c, index) => {
                return Z.indexOf(c) === index;
            });
            //console.log(uniqueDates);
            let f = 0;
            let HG = [];
            let classCount = [];

            uniqueDates.map((v) => {
                //console.log(v);
                attendanceArray.map((student) => {
                    if (student.attend && student.date === v) {
                        f += student.attend;
                        classCount.push(f);
                    }
                });

                HG.push(classCount.length);
                classCount = [];
            });

            setChartData({
                labels: uniqueDates,
                datasets: [
                    {
                        label: "Student attend",
                        data: HG /*--- data ---*/,
                        backgroundColor: [
                            "#628C67",
                            "#DCB677",
                            "#4B687E",
                            "#72A075",
                            "#ED6C5C",
                        ],
                        borderColor: [
                            "#628C67",
                            "#DCB677",
                            "#4B687E",
                            "#72A075",
                            "#ED6C5C",
                        ],
                        borderWidth: 1,
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
        <>
            <div className="barChart">
                <Bar
                    options={chartOptions}
                    data={chartData}
                    style={{ fontSize: "8px" }}
                />
            </div>
        </>
    );
};
