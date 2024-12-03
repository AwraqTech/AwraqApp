import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

type Dataset = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill: boolean;
};

type Props = {
  labels: string[];
  datasets: Dataset[];
};

const LineChartSmall = ({ labels, datasets }: Props) => {
  ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

  const updatedDatasets = datasets.map(dataset => ({
    ...dataset,
    lineTension: 0.6,
  }));

  const data = {
    labels: labels,
    datasets: updatedDatasets,
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '70px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartSmall;
