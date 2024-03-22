import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const RealTimeLineSeries = () => {
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
      }
    },
    xaxis: {
      categories: []
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: [], // Colors array for each series
  });

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const addSeries = () => {
    const newSeries = [...series, { name: `Series ${series.length + 1}`, data: [] }];
    setSeries(newSeries);

    const newColors = [...options.colors, generateRandomColor()];
    setOptions({ ...options, colors: newColors });
  };

  const addData = () => {
    const newData = series.map(() => Math.floor(Math.random() * 100));
    const newSeries = series.map((s, index) => ({ ...s, data: [...s.data, newData[index]] }));
    setSeries(newSeries);
    const newXAxis = [...options.xaxis.categories, new Date().toLocaleTimeString('en-US', { hour12: false })];
    setOptions({ ...options, xaxis: { categories: newXAxis } });
  };

  return (
    <div>
      <div className="real-time-line-chart">
        <Chart options={options} series={series} type="line" width={500} />
      </div>
      <button onClick={addSeries}>Add Series</button>
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default RealTimeLineSeries;
