import React, { useState } from 'react';
import { Patta, DSSResult } from '../../types';
import { mockPattaData } from '../../data/mockData';
import { LayersIcon, InfoIcon, AssetIcon, DssIcon, XIcon } from '../icons';

const AtlasPage: React.FC = () => {
  const [selectedPatta, setSelectedPatta] = useState<Patta | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'assets' | 'dss'>('info');
  const [dssLoading, setDssLoading] = useState(false);
  const [dssResults, setDssResults] = useState<DSSResult[] | null>(null);

  const handlePattaClick = (pattaId: string) => {
    setSelectedPatta(mockPattaData[pattaId]);
    setActiveTab('info');
    setDssResults(null);
  };
  
  const handleRunDss = () => {
    setDssLoading(true);
    setTimeout(() => {
      const results: DSSResult[] = [
        { priority: 'High', scheme: 'PM-KISAN', reason: 'Eligible based on agricultural land holding.' },
        { priority: 'Medium', scheme: 'MGNREGA Pond', reason: 'Water stress identified, no existing community pond.' },
        { priority: 'Low', scheme: 'Pradhan Mantri Awas Yojana', reason: 'Homestead identified as Kutcha house.' },
      ];
      // Simulate different results for different pattas
      setDssResults(selectedPatta?.id.includes('102') ? results : results.slice(0, 1));
      setDssLoading(false);
    }, 1500);
  };

  const renderPriorityBadge = (priority: 'High' | 'Medium' | 'Low') => {
    switch(priority) {
      case 'High': 
        return <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">High</span>;
      case 'Medium': 
        return <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">Medium</span>;
      case 'Low': 
        return <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">Low</span>;
      default: 
        return null;
    }
  };

  const layers = ['Village Boundaries', 'IFR Pattas', 'CFR Areas', 'Land Use Map', 'Water Bodies', 'Infrastructure'];

  return (
    <div className="flex h-[calc(100vh-68px)]">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-slate-800 p-4 border-r border-slate-700 overflow-y-auto">
        <h3 className="text-lg font-semibold text-white flex items-center mb-4">
          <LayersIcon /> Map Layers
        </h3>
        <div className="space-y-3">
          {layers.map(layer => (
            <label key={layer} className="flex items-center space-x-2 text-slate-300">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 bg-slate-700 border-slate-600 rounded text-blue-500 focus:ring-blue-500" 
                defaultChecked 
              />
              <span>{layer}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Main Map Area */}
      <div className="w-3/4 p-4 relative bg-slate-900 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:32px_32px]">
        <div 
          className="absolute top-1/4 left-1/3 w-40 h-32 bg-green-500/20 border-2 border-green-400 rounded-lg cursor-pointer flex items-center justify-center text-green-200 font-bold hover:bg-green-500/30 transition-all"
          onClick={() => handlePattaClick('patta-1')}
        >
          Patta BSTR-101
        </div>
        <div 
          className="absolute top-1/2 left-1/2 w-32 h-24 bg-green-500/20 border-2 border-green-400 rounded-lg cursor-pointer flex items-center justify-center text-green-200 font-bold hover:bg-green-500/30 transition-all"
          onClick={() => handlePattaClick('patta-2')}
        >
          Patta BSTR-102
        </div>
      </div>
      
      {/* Right Side Panel */}
      {selectedPatta && (
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 border-l border-slate-700 shadow-2xl transition-transform transform translate-x-0 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">{selectedPatta.id}</h3>
              <button 
                onClick={() => setSelectedPatta(null)} 
                className="text-slate-400 hover:text-white"
                aria-label="Close panel"
              >
                <XIcon />
              </button>
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-slate-700 mb-4">
              <button 
                onClick={() => setActiveTab('info')} 
                className={`px-4 py-2 text-sm font-medium flex items-center ${
                  activeTab === 'info' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'
                }`}
              >
                <InfoIcon className="mr-1" /> Info
              </button>
              <button 
                onClick={() => setActiveTab('assets')} 
                className={`px-4 py-2 text-sm font-medium flex items-center ${
                  activeTab === 'assets' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'
                }`}
              >
                <AssetIcon className="mr-1" /> Assets
              </button>
              <button 
                onClick={() => setActiveTab('dss')} 
                className={`px-4 py-2 text-sm font-medium flex items-center ${
                  activeTab === 'dss' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'
                }`}
              >
                <DssIcon className="mr-1" /> DSS Analysis
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'info' && (
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Holder Name:</span> 
                  <span className="font-semibold text-white">{selectedPatta.holder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Family Members:</span> 
                  <span className="font-semibold text-white">{selectedPatta.familyMembers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Area:</span> 
                  <span className="font-semibold text-white">{selectedPatta.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Claim Status:</span> 
                  <span className="font-semibold text-green-400">{selectedPatta.status}</span>
                </div>
              </div>
            )}
            
            {activeTab === 'assets' && (
              <div className="space-y-3 text-sm">
                {selectedPatta.assets.map(asset => (
                  <div key={asset.type} className="bg-slate-900 p-3 rounded-md">
                    <p className="font-semibold text-slate-300">{asset.type}</p>
                    <p className="text-slate-400">{asset.value}</p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'dss' && (
              <div>
                <button 
                  onClick={handleRunDss} 
                  disabled={dssLoading} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                  {dssLoading ? 'Analyzing...' : 'Run DSS Analysis'}
                </button>
                <div className="mt-4">
                  {dssLoading && <p className="text-center text-slate-400">Loading recommendations...</p>}
                  {dssResults && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Prioritized Recommendations:</h4>
                      {dssResults.map(res => (
                        <div key={res.scheme} className="bg-slate-900 p-3 rounded-md">
                          <div className="flex justify-between items-start">
                            <p className="font-semibold text-slate-300">{res.scheme}</p>
                            {renderPriorityBadge(res.priority)}
                          </div>
                          <p className="text-sm text-slate-400 mt-1">{res.reason}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AtlasPage;
