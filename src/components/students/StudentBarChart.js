//import logo from "./logo.svg";

//import Button from "@material-ui/core/Button";

import ReactExport from "@ibrahimrahmani/react-export-excel";

//import ReactExport from "react-export-excel";
import "./StudentBarChart.css";
//import Typography from '@mui/material/Typography';
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
import { Button } from "react-bootstrap";

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

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

    // const ExcelFile = ReactExport.ExcelFile;
    // const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    // const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    //let multiDataSet =[]
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8033/studentAttendance?_expand=student&classId=${satUserObject.id}`
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

            /* {columns: Z},
         { data: HG} */
            // const DatasetExport = () => {
            //const multiDataSet =()=>{ [{ columns: Z }, { data: HG }]}
            // };

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

            //const multiDataSet =()=>{ [{ columns: Z }, { data: HG }]}
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

    //console.log(chartData.labels);
    //console.log(chartData.datasets[0].data);
    //console.log(chartData);
    // const columns = chartData.datasets.labels;
    // const data = chartData.datasets[0].data;
    //const multiDataSet = [{ columns }, { data}]
    //const multiDataSet = [{ columns: chartData.labels }, { data: chartData.datasets[0].data }]
    //const multiDataSet = [{chartData.labels }, {chartData.datasets[0].data }]

    const multiDataSet = [
        {
            columns: [
                /*    { value: "Name", widthPx: 50 }, // width in pixels
        { value: "Date Of Birth", widthPx: 60, widthCh: 20 }, // will check for width in pixels first */
                { value: "Salary", widthCh: 20 }, // width in charachters
            ],
            data: [
                /* ["Swapnil", "11/11/1990", "40k"],
        ["Amol", "31/12/1995", "70K"], */
                ["Ashish", "11/10/1997", "60k"],
            ],
        },
    ];

    return (
        <>
            <div>
                <Bar
                    className="barChart"
                    options={chartOptions}
                    data={chartData}
                    style={{ fontSize: "8px" }}
                />
            </div>

            {/* Excel Sheet */}
            {/*             <div>
                <h3>Export with Dataset</h3>
                <ExcelFile
                    element={<Button>Download</Button>}
                    filename="DataSet"
                    fileExtension="xlsx"
                >
                    <ExcelSheet
                       dataSet={multiDataSet}
                        name="DataSet"
                    ></ExcelSheet>
                </ExcelFile>
            </div> */}
            {/* ------------------------------------------- */}

            {/* <ExcelFile>
          <ExcelSheet data={chartData} name="Employees">
              <ExcelColumn label="Name" value="name"/>
              <ExcelColumn label="Wallet Money" value="amount"/>
              <ExcelColumn label="Gender" value="sex"/>
              <ExcelColumn label="Marital Status"
                           value={(col) => col.is_married ? "Married" : "Single"}/>
          </ExcelSheet> */}
            {/*           <ExcelSheet data={dataSet2} name="Leaves">
              <ExcelColumn label="Name" value="name"/>
              <ExcelColumn label="Total Leaves" value="total"/>
              <ExcelColumn label="Remaining Leaves" value="remaining"/>
          </ExcelSheet> */}
            {/* </ExcelFile> */}
        </>
    );
};
