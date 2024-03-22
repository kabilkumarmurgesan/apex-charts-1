import React from 'react';
import RealTimeLineChart from './RealTimeChart'
import RealTimeLineCharts from './RealTimeLineCharts';
import RealTimeLineSeries from './RealTimeLineSeries';
import DynamicLine from './DynamicLine';
const App = () => {
  return (
    <div className="app">
      <h1>Real-Time Line Chart</h1>
      <RealTimeLineCharts />
    </div>
  );
};

export default App;
