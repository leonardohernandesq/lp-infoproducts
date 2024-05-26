import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

interface LineCartProps {
  data: ChartData;
}

const NewChart: React.FC<LineCartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'doughnut',
        data,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas className="max-w-72 max-h-72 -mt-12" ref={chartRef} />;
};

export default NewChart;
