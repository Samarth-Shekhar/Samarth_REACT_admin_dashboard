import React, { useState } from 'react';
import { LineChart, Stacked, AreaChart, BarChart } from '.';

const chartTabs = [
  { id: 'line', label: 'Line Chart' },
  { id: 'area', label: 'Area Chart' },
  { id: 'bar', label: 'Bar Chart' },
  { id: 'stacked', label: 'Stacked Chart' },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('line');

  const renderChart = () => {
    switch (activeTab) {
      case 'line': return <LineChart />;
      case 'area': return <AreaChart />;
      case 'bar': return <BarChart />;
      case 'stacked': return <Stacked />;
      default: return <LineChart />;
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md">
      <div className="flex space-x-4 mb-4 border-b">
        {chartTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 font-semibold border-b-2 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{renderChart()}</div>
    </div>
  );
};

export default Tabs;
