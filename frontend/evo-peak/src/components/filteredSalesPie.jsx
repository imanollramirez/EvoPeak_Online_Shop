// src/components/PieChart.js
import React, { useRef, useEffect } from 'react';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PieController,
} from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      data: {
        labels: ['Pesas', 'Suplementos', 'Accesorios'],
        datasets: [
          {
            data: [300, 70, 90],
            backgroundColor: [
              '#4318FF',
              '#6AD2FF',
              '#EFF4FB',
            ],
            hoverOffset: 10,
          },
        ],
      },
      type: 'pie',
      options: {
        responsive: true,
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
