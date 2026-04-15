import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header = ({ title, subtitle }) => (
  <div className="bg-slate-900 text-white p-10 text-left border-b border-slate-800">
    <div className="max-w-4xl space-y-3">
      <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
        {title}
      </h1>
      <div className="flex items-center gap-3">
        <span className="px-2 py-0.5 bg-stone-700 text-stone-200 text-[10px] font-black uppercase tracking-widest rounded-sm">
          Staff Level Report
        </span>
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

export const Tabs = ({ activeTab, onTabChange, tabs }) => (
  <div className="flex bg-stone-100/50 border-b border-stone-200">
    {tabs.map(tab => {
      const Icon = tab.icon;
      const isActive = activeTab === tab.id;
      return (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 py-4 px-6 text-xs font-black uppercase tracking-widest transition-all relative ${
            isActive 
              ? 'text-slate-900 bg-white' 
              : 'text-stone-400 hover:text-slate-600 hover:bg-stone-100'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-900' : 'text-stone-300'}`} />
            {tab.label}
          </span>
          {isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
          )}
        </button>
      );
    })}
  </div>
);
