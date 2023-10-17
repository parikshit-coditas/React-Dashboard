// Dashboard.js
import React from 'react';
import InfoCard from './components/InfoCards/InfoCard';
import './css/Dashboard.css';


const Dashboard = () => {
  const data1 = ['Earning', '$198k', '37.8%'];
  const data2 = ['Orders', '$2.4k', '2%'];
  const data3 = ['Balance', '$2.4k', '2%'];
  const data4 = ['Total sales', '$89k', '11%'];
  const colors = ['#55AA3C', '#6B3CAA', '#3CA7AA', '#AA413C']; // Example colors from an array

  return (
    <div className="dashboard-container">
      <p className="dashboard-label">Hello, Parikshit 👋🏻</p>
      <div className="info-cards-container">
        <InfoCard data={data1} colors={colors[0]} label3Color={'green'} />
        <InfoCard data={data2} colors={colors[1]} label3Color={'red'} />
        <InfoCard data={data3} colors={colors[2]} label3Color={'red'} />
        <InfoCard data={data4} colors={colors[3]} label3Color={'green'} />
        {/* Add more InfoCard components or other content as needed */}
      </div>
    </div>
  );
};

export default Dashboard;