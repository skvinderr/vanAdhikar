import React from 'react';
import { DashboardProps } from '../../types';
import { mockDistrictStats } from '../../data/mockData';
import StatCard from '../common/StatCard';

const DistrictDashboard: React.FC<DashboardProps> = ({ user, setPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">
          Welcome back, <span className="text-blue-400">{user.name.split(' ')[0]}</span> 👋
        </h2>
        <p className="text-slate-400 text-lg">
          Here's the summary for your district: 
          <span className="font-semibold text-slate-300 ml-2 px-3 py-1 bg-slate-700/50 rounded-full text-sm">
            {user.district}
          </span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mockDistrictStats.map(stat => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Action Section */}
      <div className="text-center">
        <div className="card p-8 inline-block">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to explore your data?</h3>
          <p className="text-slate-400 mb-6">
            Access the interactive atlas to view detailed forest rights information
          </p>
          <button 
            onClick={() => setPage('atlas')} 
            className="btn-primary text-lg px-8 py-4"
          >
            🗺️ Go to Interactive Atlas
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DistrictDashboard;
