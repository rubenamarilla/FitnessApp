import React from 'react'
import { Doughnut } from "react-chartjs-2"
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto"

const Graph = ({ hecho, hacer }) => {
  const data = {
    datasets: [
      {
        data: [hecho, hacer],
        backgroundColor: ['#3185fc', '#e8eaf6'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
        },
      },
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
  };

  return (
    <Doughnut data={data} options={options} />
  )
}

export default Graph