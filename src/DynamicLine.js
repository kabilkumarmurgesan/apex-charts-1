import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const DynamicLine = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: 'real-time-line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      }, 
    },
    xaxis: {
      categories: []
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#008FFB'], // Default color
  });
  const [selectedColor, setSelectedColor] = useState('#008FFB');

  useEffect(() => {
    const interval = setInterval(addData, 1000); // Update data every second
    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []); // Empty dependency array to run the effect only once on component mount

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const addData = () => {
    const newData = Math.floor(Math.random() * 100);
    const newSeries = [...series, newData];
    setSeries(newSeries);
    const newXAxis = [...options.xaxis.categories, new Date().toLocaleTimeString('en-US', { hour12: false })];
    setOptions({ ...options, xaxis: { categories: newXAxis } });
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    setOptions({ ...options, colors: [color] });
  };

  return (
    <div>
      <div>
        <input type="color" value={selectedColor} onChange={handleColorChange} />
      </div>
      <div className="real-time-line-chart">
        <Chart options={options} series={[{ data: series }]} type="line" width={500} />
      </div>
    </div>
  );
};

export default DynamicLine;
