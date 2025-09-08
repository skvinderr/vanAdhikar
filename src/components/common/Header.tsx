import React from 'react';
import { HeaderProps } from '../../types';
import { LogoutIcon } from '../icons';

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => (
  <header className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
    <div className="px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-sm font-bold text-white">VA</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">VanAdhikar Atlas</h1>
          <p className="text-xs text-slate-400">Ministry of Tribal Affairs</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="font-semibold text-white">{user.name}</p>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              user.role === 'district' ? 'bg-green-400' : 
              user.role === 'state' ? 'bg-blue-400' : 'bg-orange-400'
            }`}></div>
            <p className="text-xs text-slate-400 capitalize">{user.role} Officer</p>
          </div>
        </div>
        
        <button 
          onClick={onLogout} 
          className="bg-slate-700/80 hover:bg-red-600 text-white p-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
          aria-label="Logout"
        >
          <LogoutIcon className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
