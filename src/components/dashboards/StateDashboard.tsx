import React from 'react';
import { DashboardProps } from '../../types';
import { mockStateStats } from '../../data/mockData';
import StatCard from '../common/StatCard';

const StateDashboard: React.FC<DashboardProps> = ({ user, setPage }) => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-white">State-wide Dashboard: {user.state}</h2>
    <p className="text-slate-400 mt-1">Aggregated data from all districts.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {mockStateStats.map(stat => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
    <div className="mt-12 bg-slate-800 p-6 rounded-lg">
      <label htmlFor="district-select" className="block text-sm font-medium text-slate-300 mb-2">
        Select District to View Atlas (Read-Only)
      </label>
      <select 
        id="district-select" 
        className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option>Bastar</option>
        <option>Raipur</option>
        <option>Durg</option>
        <option>Korba</option>
      </select>
      <button 
        onClick={() => setPage('atlas')} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg ml-4 transition-colors"
      >
        View Atlas
      </button>
    </div>
  </div>
);

export default StateDashboard;
