import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const RealTimeLineChart = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [options, setOptions] = useState({
    chart: {
      id: 'real-time-line',
      height: 350,
      type: 'line',
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
    colors: ['#008FFB'] // Default color
  });
  const [selectedColor, setSelectedColor] = useState('#008FFB');
  
  const addData = () => {
    const newData = Math.floor(Math.random() * 100);
    const newSeries = [...series[0].data, newData];
    setSeries([{ data: newSeries }]);
    const newXAxis = [...options.xaxis.categories, new Date().toLocaleTimeString('en-US', { hour12: false })];
    setOptions({ ...options, xaxis: { categories: newXAxis } });
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    setOptions({ ...options, colors: [e.target.value] }); // Update chart color
  };

  return (
    <div>
      <div>
        <input type="color" value={selectedColor} onChange={handleColorChange} />
      </div>
      <div className="real-time-line-chart">
        <Chart options={options} series={series} type="line" width={500} />
      </div>
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default RealTimeLineChart;
