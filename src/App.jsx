import React, { useState } from 'react';
import { 
  FileText, 
  DollarSign, 
  BarChart3,
  ShieldCheck,
  Search
} from 'lucide-react';
import { Header, Tabs } from './components/Layout/Header.jsx';
import { SystemReform } from './components/SystemReform/SystemReform.jsx';
import { CostIncentives } from './components/CostIncentives/CostIncentives.jsx';
import { EfficiencyTruth } from './components/EfficiencyTruth/EfficiencyTruth.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('reform');
  const [rd, setRd] = useState({ n: 10, salary: 50000 });
  const [qa, setQa] = useState({ n: 6, salary: 50000 });
  const [bugs, setBugs] = useState({ s1: 11, s2: 39, s3: 45, s4: 19 });
  
  // 日期狀態：預設為使用者提供的日期
  const [dates, setDates] = useState({ 
    start: "2026-01-27", 
    expected: "2026-03-27", 
    actual: new Date().toISOString().split('T')[0] 
  });

  const dailyCost = ((rd.salary / 30) * rd.n) + ((qa.salary / 30) * qa.n);

  const tabs = [
    { id: 'reform', label: '制度改革建議', icon: FileText },
    { id: 'cost', label: '財務現況監控', icon: DollarSign },
    { id: 'truth', label: '產能真相分析', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-stone-200 selection:text-slate-900 text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-stone-200 shadow-sm overflow-hidden">
          <Header 
            title="研發效能與制度影響分析報告" 
            subtitle="資深前端工程師提案" 
          />
          
          <Tabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            tabs={tabs} 
          />

          <div className="min-h-[600px] bg-white">
            {activeTab === 'reform' && (
              <SystemReform />
            )}
            {activeTab === 'cost' && (
              <CostIncentives 
                state={{ rd, qa, bugs, dates }} 
                handlers={{ setRd, setQa, setBugs, setDates }}
                dailyCost={dailyCost}
              />
            )}
            {activeTab === 'truth' && (
              <EfficiencyTruth dailyCost={dailyCost} />
            )}
          </div>

          <div className="bg-stone-50 border-t border-stone-100 p-8 text-center text-stone-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            © 2026 R&D Strategy Analysis • Staff Engineer Opinion
          </div>
        </div>
      </div>
    </div>
  );
}
