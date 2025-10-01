import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartDataPoint } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: ChartDataPoint[];
  title?: string;
}

export const PieChart: React.FC<PieChartProps> = ({ data, title = 'Distribution' }) => {
  const colors = [
    '#ff0035',
    '#ff385c',
    '#ff6b88',
    '#d60027',
    '#ff0055',
    '#ff2255',
    '#c00020',
  ];

  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: title,
        data: data.map(d => d.value),
        backgroundColor: colors.map(c => `${c}99`),
        borderColor: colors,
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#b0b0c0',
          padding: 15,
          font: {
            size: 11,
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#ff0035',
        borderWidth: 2,
        padding: 12,
        callbacks: {
          label: function(context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <div style={{ height: '300px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
