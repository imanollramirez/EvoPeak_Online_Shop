import { useRef, useEffect } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const LoopChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {

            borderColor: '#2B3674',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 2000,
          loop: false,
        },
      },
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LoopChart;