// App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Customers from './components/Customers';
import Income from './components/Income';
import Promote from './components/Promote';
import Help from './components/Help';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'product':
        return <Product />;
      case 'customers':
        return <Customers />;
      case 'income':
        return <Income />;
      case 'promote':
        return <Promote />;
      case 'help':
        return <Help />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="dashboard">
        <div className="dashboard-label">Dashboard</div>
        <div
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </div>
        <div
          className={activeTab === 'product' ? 'active' : ''}
          onClick={() => setActiveTab('product')}
        >
          Product
        </div>
        <div
          className={activeTab === 'customers' ? 'active' : ''}
          onClick={() => setActiveTab('customers')}
        >
          Customers
        </div>
        <div
          className={activeTab === 'income' ? 'active' : ''}
          onClick={() => setActiveTab('income')}
        >
          Income
        </div>
        <div
          className={activeTab === 'promote' ? 'active' : ''}
          onClick={() => setActiveTab('promote')}
        >
          Promote
        </div>
        <div
          className={activeTab === 'help' ? 'active' : ''}
          onClick={() => setActiveTab('help')}
        >
          Help
        </div>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default App;
