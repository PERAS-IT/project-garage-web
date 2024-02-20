import { Bar } from "react-chartjs-2";
import React from 'react'

export default function BarChart({ chartData, Header, detail }) {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>{Header}</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: { detail }
                        },
                        legend: {
                            display: false
                        }
                    }
                }}

        </div>
    )
}
