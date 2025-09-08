import React from 'react';
import { LoginPageProps } from '../../types';

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="card p-8">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
                <span className="text-2xl font-bold text-white">VA</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-800"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">VanAdhikar Atlas</h1>
            <p className="text-slate-400 text-sm">Ministry of Tribal Affairs</p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
              <input 
                type="text" 
                placeholder="Enter your username" 
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="input-field"
              />
            </div>
            <button 
              onClick={onLogin} 
              className="btn-primary w-full"
            >
              Sign In
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              🔄 <span className="font-medium">Demo Mode:</span> Click sign in to cycle through user roles
              <br />
              <span className="text-slate-600">District Officer → State Officer → Data Operator</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
