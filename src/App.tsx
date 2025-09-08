import React, { useState } from 'react';
import { User } from './types';
import { mockUsers } from './data/mockData';
import Header from './components/common/Header';
import LoginPage from './components/auth/LoginPage';
import DistrictDashboard from './components/dashboards/DistrictDashboard';
import StateDashboard from './components/dashboards/StateDashboard';
import OperatorDashboard from './components/dashboards/OperatorDashboard';
import AtlasPage from './components/atlas/AtlasPage';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [page, setPage] = useState<string>('dashboard');
  const [userCycle, setUserCycle] = useState<number>(0);

  const handleLogin = () => {
    const roles: Array<keyof typeof mockUsers> = ['district', 'state', 'operator'];
    const nextRole = roles[userCycle % roles.length];
    setUser(mockUsers[nextRole]);
    setPage('dashboard');
    setUserCycle(prev => prev + 1);
  };

  const handleLogout = () => {
    setUser(null);
    setPage('dashboard');
  };

  if (!user) {
    return (
      <div className="w-screen h-screen font-sans bg-slate-900">
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  const renderPage = () => {
    if (page === 'atlas') {
      return <AtlasPage />;
    }
    
    switch (user.role) {
      case 'district': 
        return <DistrictDashboard user={user} setPage={setPage} />;
      case 'state': 
        return <StateDashboard user={user} setPage={setPage} />;
      case 'operator': 
        return <OperatorDashboard user={user} />;
      default: 
        return <div className="p-8 text-white">Unknown role</div>;
    }
  };

  return (
    <div className="w-screen h-screen font-sans bg-slate-900 text-slate-200 flex flex-col">
      <Header user={user} onLogout={handleLogout} />
      <main className="flex-grow overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
