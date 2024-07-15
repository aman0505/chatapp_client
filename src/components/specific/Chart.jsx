import React from 'react'
import { Line, Doughnut } from "react-chartjs-2"
import { getLastSevendays } from "../../lib/Features"

import {
    CategoryScale, Chart,

    Tooltip,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    plugins,
    scales,

} from "chart.js"



Chart.register(Tooltip,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    CategoryScale
)
let labelsdata = getLastSevendays()
console.log(labelsdata)


const linechatOptions = {
    response: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false

            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false

            }
        }
    }
}

export const LineChart = ({ value = [] }) => {

    console.log(labelsdata)
    const data = {
        labels: labelsdata,
        datasets: [
            {
                data: value,
                fill: true,
                label: "Revenue",
                backgroundColor: "rgba(175,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"

            }]
    }

    return (
        <Line data={data} options={linechatOptions} />
    )
}


const DoDoughnutChartOptions = 
    {
        response: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false
            }
        },
        
        cutout :120
    }


export const DoughnutChart = ({ value, labelsdata = [] }) => {
    const data = {
        labels: labelsdata,
        datasets: [
            {
                data: value,
                fill: true,
                label: "Total Chat vs group chat",
                backgroundColor: ["orange", "purple"],
                borderColor: ["orange", "purple"],
                offset:20

            }]
    }
    return (
        <Doughnut data={data} options={DoDoughnutChartOptions}>

        </Doughnut>
    )
}

