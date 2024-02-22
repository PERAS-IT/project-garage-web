import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import React from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const option = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '',
        },
    },
}





export default function BarChart({ chartData, label, detail }) {

    const labels = chartData.map((item) => item.date)
    const data = {
        labels,
        datasets: [
            {
                data: chartData.map((item) => item.total),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };




    return (
        <div className="chart-container">
            <Bar
                data={data}
                options={option}
            />
        </div>
    );
}
