import React from 'react';
import { User } from '../../types';
import { mockVerificationQueue } from '../../data/mockData';
import { UploadIcon, CheckSquareIcon } from '../icons';

interface OperatorDashboardProps {
  user: User;
}

const OperatorDashboard: React.FC<OperatorDashboardProps> = ({ user }) => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-white">Data Management Portal</h2>
    <p className="text-slate-400 mt-1">Welcome, {user.name}.</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <UploadIcon /> Upload Scanned Documents
        </h3>
        <div className="mt-4 border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400">Drag & drop files here or click to browse</p>
          <input type="file" className="hidden" />
          <button className="mt-4 bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-md">
            Browse Files
          </button>
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <CheckSquareIcon /> Verification Queue
        </h3>
        <div className="mt-4 space-y-3">
          {mockVerificationQueue.map(item => (
            <div key={item.id} className="bg-slate-900 p-3 rounded-md flex justify-between items-center">
              <div>
                <p className="font-semibold text-white">{item.id}</p>
                <p className="text-sm text-slate-400">{item.village}</p>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                item.status.includes('Flagged') 
                  ? 'bg-red-500 text-white' 
                  : 'bg-yellow-500 text-black'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OperatorDashboard;
