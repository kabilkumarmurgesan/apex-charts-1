// import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";

// const RealTimeLineCharts = () => {
//   const [series, setSeries] = useState([
//     { id: 1, name: "M", data: [], color: "#008FFB" },
//     { id: 2, name: "N", data: [], color: "#00E396" },
//     { id: 3, name: "O", data: [], color: "#8F00FF" },
//     // Add more series objects if needed
//   ]);

//   const [options, setOptions] = useState({
//     chart: {
//       id: "real-time-line",
//       animations: {
//         enabled: true,
//         easing: "linear",
//         dynamicAnimation: {
//           speed: 1000,
//         },
//       },
//       toolbar: {
//         show: false,
//       },
//     },
//     xaxis: {
//       categories: [],
//     },
//     stroke: {
//       curve: "smooth",
//       width: 3,
//     },
//     colors: ["#008FFB", "#00E396", "#8F00FF"], // Default colors for each series
//   });

//   useEffect(() => {
//     const interval = setInterval(addData, 1000); // Update data every 1 second
//     return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
//   }, []);

//   const addData = () => {
//     const newData1 = Math.floor(Math.random() * 100);
//     const newData2 = Math.floor(Math.random() * 100);
//     const newData3 = Math.floor(Math.random() * 100);

//     const updatedSeries = [...series];
//     updatedSeries[0].data.push(newData1);
//     updatedSeries[1].data.push(newData2);
//     updatedSeries[2].data.push(newData3);

//     const updatedSeries1 = updatedSeries[0].data.slice(
//       Math.max(updatedSeries[0].data.length - 10, 0)
//     );
//     const updatedSeries2 = updatedSeries[1].data.slice(
//       Math.max(updatedSeries[1].data.length - 10, 0)
//     );
//     const updatedSeries3 = updatedSeries[2].data.slice(
//       Math.max(updatedSeries[2].data.length - 10, 0)
//     );

//     setSeries([
//       { id: 1, name: "M", data: updatedSeries1, color: updatedSeries[0].color },
//       { id: 2, name: "N", data: updatedSeries2, color: updatedSeries[1].color },
//       { id: 3, name: "O", data: updatedSeries3, color: updatedSeries[2].color },
//     ]);

//     const newXAxis = [
//       ...options.xaxis.categories,
//       new Date().toLocaleTimeString("en-US", { hour12: false }),
//     ];
//     const updatedXAxis = newXAxis.slice(Math.max(newXAxis.length - 10, 0));

//     setOptions({ ...options, xaxis: { categories: updatedXAxis } });
//   };

//   const handleColorChange = (id, color) => {
//     const updatedSeries = series.map(s =>
//       s.id === id ? { ...s, color } : s
//     );

//     const updatedOptions = {
//       ...options,
//       colors: updatedSeries.map((s) => s.color),
//     };

//     setSeries(updatedSeries);
//     setOptions(updatedOptions);
//   };

//   const deleteSeries = (id) => {
//     const updatedSeries = series.filter(s => s.id !== id);
//     setSeries(updatedSeries);
//   };

//   return (
//     <div>
//       <div>
//         {series.map((s) => (
//           <div key={s.id}>
//             <input
//               type="color"
//               value={s.color}
//               onChange={(e) => handleColorChange(s.id, e.target.value)}
//             />
//             <button onClick={() => deleteSeries(s.id)}>
//               Delete Series {s.name}
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="real-time-line-chart">
//         <Chart options={options} series={series} type="line" width={500} />
//       </div>
//     </div>
//   );
// };

// export default RealTimeLineCharts;

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const RealTimeLineCharts = () => {
  const [series, setSeries] = useState([
    { id: 1, name: "M", data: [], color: "#008FFB" },
    { id: 2, name: "N", data: [], color: "#00E396" },
    { id: 3, name: "O", data: [], color: "#8F00FF" },
    // Add more series objects if needed
  ]);

  const [options, setOptions] = useState({
    chart: {
      id: "real-time-line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [],
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#008FFB", "#00E396", "#8F00FF"], // Default colors for each series
  });

  useEffect(() => {
    const interval = setInterval(addData, 1000); // Update data every 1 second
    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  const addData = () => {
    const newData1 = Math.floor(Math.random() * 100);
    const newData2 = Math.floor(Math.random() * 100);
    const newData3 = Math.floor(Math.random() * 100);

    const updatedSeries = [...series];
    updatedSeries[0].data.push(newData1);
    updatedSeries[1].data.push(newData2);
    updatedSeries[2].data.push(newData3);

    const updatedSeries1 = updatedSeries[0].data.slice(
      Math.max(updatedSeries[0].data.length - 10, 0)
    );
    const updatedSeries2 = updatedSeries[1].data.slice(
      Math.max(updatedSeries[1].data.length - 10, 0)
    );
    const updatedSeries3 = updatedSeries[2].data.slice(
      Math.max(updatedSeries[2].data.length - 10, 0)
    );

    setSeries([
      { ...updatedSeries[0], data: updatedSeries1 },
      { ...updatedSeries[1], data: updatedSeries2 },
      { ...updatedSeries[2], data: updatedSeries3 },
    ]);

    const newXAxis = [
      ...options.xaxis.categories,
      new Date().toLocaleTimeString("en-US", { hour12: false }),
    ];
    const updatedXAxis = newXAxis.slice(Math.max(newXAxis.length - 10, 0));

    setOptions({ ...options, xaxis: { categories: updatedXAxis } });
  };

  const handleColorChange = (id, color) => {
    const updatedSeries = series.map((s) =>
      s.id === id ? { ...s, color } : s
    );

    const updatedOptions = {
      ...options,
      colors: updatedSeries.map((s) => s.color),
    };

    setSeries(updatedSeries);
    setOptions(updatedOptions);
  };

  const deleteSeries = (id) => {
    const updatedSeries = series.filter((s) => s.id !== id);
    setSeries(updatedSeries);
  };

  return (
    <div>
      <div>
        {series.map((s) => (
          <div key={s.id}>
            <input
              type="color"
              value={s.color}
              onChange={(e) => handleColorChange(s.id, e.target.value)}
            />
            <button onClick={() => deleteSeries(s.id)}>
              Delete Series {s.name}
            </button>
          </div>
        ))}
      </div>
      <div className="real-time-line-chart">
        <Chart options={options} series={series} type="line" width={500} />
      </div>
    </div>
  );
};

export default RealTimeLineCharts;
