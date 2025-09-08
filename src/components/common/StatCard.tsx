import React from 'react';
import { StatCardProps } from '../../types';

const StatCard: React.FC<StatCardProps> = ({ label, value, change, changeType }) => (
  <div className="stat-card group">
    <div className="flex items-start justify-between mb-3">
      <p className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{label}</p>
      {change && (
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold ${
          changeType === 'increase' 
            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
            : 'bg-red-500/10 text-red-400 border border-red-500/20'
        }`}>
          <span>{changeType === 'increase' ? '↗' : '↘'}</span>
          <span>{change}</span>
        </div>
      )}
    </div>
    <p className="text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">{value}</p>
    {change && (
      <p className="text-xs text-slate-500">vs last month</p>
    )}
  </div>
);

export default StatCard;
