import React from 'react';
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  Layers, 
  ShieldAlert,
  Clock,
  ArrowDown
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ChangeItem = ({ title, before, after, icon: Icon }) => (
  <div className="bg-white border border-stone-200 shadow-sm overflow-hidden">
    <div className="p-6 bg-stone-50 border-b border-stone-200 flex items-center gap-3">
      <Icon className="w-5 h-5 text-slate-900" />
      <h4 className="font-black text-slate-900 uppercase tracking-tight">{title}</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-100">
      <div className="p-6 space-y-2">
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">現行模式 (Before)</div>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">{before}</p>
      </div>
      <div className="p-6 space-y-2 bg-stone-50/30">
        <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">建議變革 (After)</div>
        <p className="text-sm text-slate-900 font-bold leading-relaxed">{after}</p>
      </div>
    </div>
  </div>
);

export const SystemChanges = () => {
  return (
    <div className="p-10 space-y-12 bg-white">
      <div className="space-y-2 border-l-2 border-slate-900 pl-5">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">研發制度變革提議</h2>
        <p className="text-stone-500 text-sm font-medium">針對管理流程的結構性調整對比</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <ChangeItem 
          icon={MessageSquare}
          title="溝通工具分層"
          before="LINE 碎片化溝通，開發過程中頻繁被標記、中斷心流，資訊難以檢索。"
          after="LINE 僅限緊急聯絡。規格討論、進度同步全面移至非同步平台 (Google/Teams)。"
        />
        
        <ChangeItem 
          icon={Calendar}
          title="甘特圖動態緩衝"
          before="時程僵化，當上游 API 延遲時，強行壓縮下游開發與測試時間。"
          after="建立『滑動緩衝』機制。依賴項每延遲 1 天，下游時程應自動順延，禁止壓縮品質時間。"
        />

        <ChangeItem 
          icon={Users}
          title="進度檢討模式"
          before="頻繁叫入辦公室進行實體同步，每次中斷需花費 20 分鐘重回心流。"
          after="除非進度停滯超過 3 日，否則全面採取非同步文字匯報，將時間還給研發。"
        />
      </div>

      <div className="p-10 border-2 border-slate-900 bg-stone-50 text-center space-y-4">
        <div className="text-5xl font-light text-stone-300 select-none uppercase tracking-[0.2em]">Efficiency</div>
        <h3 className="text-xl font-black text-slate-900 italic tracking-tight">「好的制度，能讓團隊產出非凡的價值。」</h3>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-medium">
          透過制度的微調，我們能減少無效溝通、降低挫折感，最終為公司創造更高的商業價值。
        </p>
      </div>
    </div>
  );
};
