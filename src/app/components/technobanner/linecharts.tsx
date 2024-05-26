import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: any;
    backgroundColor?: string[];
    borderColor?: string;
    fill?: boolean
  }[];
}

interface LineCartProps {
  data: ChartData;
}

const LineChart: React.FC<LineCartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
