import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Rocket, 
  Lightbulb, 
  Settings2,
  FileSearch
} from 'lucide-react';
import { Header, Tabs } from './components/Layout/Header.jsx';
import { Dashboard } from './components/Dashboard/Dashboard.jsx';
import { Proposals } from './components/Proposals/Proposals.jsx';
import { SystemChanges } from './components/SystemChanges/SystemChanges.jsx';
import { StrategicSkills } from './components/StrategicSkills/StrategicSkills.jsx';
import { PolicyGapAnalysis } from './components/PolicyGapAnalysis/PolicyGapAnalysis.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [rd, setRd] = useState({ n: 10, salary: 50000, bonus: 30000 });
  const [qa, setQa] = useState({ n: 6, salary: 50000 });
  const [bugs, setBugs] = useState({ s1: 8, s2: 35, s3: 44, s4: 15 });
  const [dates, setDates] = useState({ expected: "2026-03-27", actual: new Date().toISOString().split('T')[0] });

  const dailyCost = ((rd.salary / 30) * rd.n) + ((qa.salary / 30) * qa.n);

  const tabs = [
    { id: 'dashboard', label: '成本現況監控', icon: LayoutDashboard },
    { id: 'gap-analysis', label: '制度缺漏診斷', icon: FileSearch },
    { id: 'strategic', label: '研發效能分析', icon: Rocket },
    { id: 'proposals', label: '獎金優化提案', icon: Lightbulb },
    { id: 'changes', label: '制度變革提議', icon: Settings2 }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-stone-200 selection:text-slate-900 text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-stone-200 shadow-sm overflow-hidden">
          <Header 
            title="研發效能與成本管理分析報告" 
            subtitle="資深前端工程師團隊治理提案" 
          />
          
          <Tabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            tabs={tabs} 
          />

          <div className="min-h-[600px] bg-white">
            {activeTab === 'dashboard' && (
              <Dashboard 
                state={{ rd, qa, bugs, dates }} 
                handlers={{ setRd, setQa, setBugs, setDates }} 
              />
            )}
            {activeTab === 'gap-analysis' && (
              <PolicyGapAnalysis />
            )}
            {activeTab === 'strategic' && (
              <StrategicSkills />
            )}
            {activeTab === 'proposals' && (
              <Proposals dailyCost={dailyCost} />
            )}
            {activeTab === 'changes' && (
              <SystemChanges />
            )}
          </div>

          <div className="bg-stone-50 border-t border-stone-100 p-8 text-center text-stone-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            © 2026 R&D Strategy Analysis • Built with React & Tailwind
          </div>
        </div>
      </div>
    </div>
  );
}
