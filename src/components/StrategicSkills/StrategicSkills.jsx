import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  ShieldAlert, 
  MessageSquare,
  Users,
  Code2,
  FileText,
  Bug,
  Split,
  Layers,
  Search,
  Check
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SectionHeader = ({ title, description }) => (
  <div className="space-y-1 mb-10 border-l-2 border-slate-900 pl-5">
    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
    {description && <p className="text-sm text-stone-500 font-medium">{description}</p>}
  </div>
);

const ScheduleTruth = () => {
  const categories = [
    { key: "progress", label: "實質開發進度", color: "bg-slate-900", desc: "撰寫新功能邏輯、UI 組件實作" },
    { key: "spec", label: "需求確認與閱讀", color: "bg-stone-500", desc: "閱讀 Spec、釐清模糊需求、確認 UIUX 細節" },
    { key: "sync", label: "溝通與對接", color: "bg-stone-400", desc: "API 格式確認、前後端邏輯校準" },
    { key: "quality", label: "品質維護 (PR/UT)", color: "bg-stone-300", desc: "Code Review、撰寫單元測試" },
    { key: "issues", label: "修正 Issue / Bug", color: "bg-stone-200", desc: "處理測試回報、線上修補、技術債清理" },
    { key: "meeting", label: "會議與中斷", color: "bg-stone-100", desc: "行政會議、訊息回覆、任務切換損耗" },
  ];

  const currentData = [
    { key: "progress", value: 40 }, 
    { key: "spec", value: 15 },
    { key: "sync", value: 10 },
    { key: "quality", value: 5 },
    { key: "issues", value: 15 },
    { key: "meeting", value: 15 },
  ];

  return (
    <div className="mb-24 px-4">
      <SectionHeader 
        title="開發工時的真實分配" 
        description="每日 8 小時中，實際上僅有約 1/2 至 2/3 的時間能用於『開發進度』"
      />
      
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">現行工時比例分析</h4>
            <div className="text-right">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">實質進度佔比</span>
              <span className="text-xl font-black text-rose-600 tracking-tighter italic">40% - 50% (低於規劃上限)</span>
            </div>
          </div>
          
          <div className="h-10 w-full flex rounded-none border border-stone-200">
            {currentData.map((item) => {
              const cat = categories.find(c => c.key === item.key);
              return (
                <div 
                  key={item.key} 
                  className={cn(cat.color, "h-full transition-all")}
                  style={{ width: `${item.value}%` }}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm">
          {categories.map(cat => (
            <div key={cat.key} className="p-5 bg-white hover:bg-stone-50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className={cn("w-3 h-3 shrink-0 rounded-full", cat.color)} />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-tight">{cat.label}</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-normal font-medium">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SystemicDistortion = () => {
  const distortions = [
    { title: "規劃與執行脫節", desc: "甘特圖強行忽略 Spec 閱讀、溝通、測試與修正 Bug 的時間成本。" },
    { title: "制度性品質放水", desc: "在時程卡死的情況下，RD 被迫放棄 PR 與 UT 流程以滿足虛假進度。", isCritical: true },
    { title: "救火循環形成", desc: "前期缺乏測試導致後期 Bug 爆量，開發產能被修補工作徹底佔據。", isCritical: true },
    { title: "負面文化養成", desc: "制度懲罰那些堅持品質的人，轉而獎勵盲目趕工的行為。" }
  ];

  return (
    <div className="mb-24 px-4">
      <SectionHeader 
        title="制度如何扭曲研發行為" 
        description="管理體系正在創造一種『求快不求好』的消極團隊文化"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {distortions.map((item, idx) => (
          <div key={idx} className={cn("border-t pt-6", item.isCritical ? "border-rose-200 bg-rose-50/30 p-4 -mt-4 rounded-b-md" : "border-stone-200")}>
            <h4 className={cn("font-bold text-base mb-2 uppercase tracking-tight", item.isCritical ? "text-rose-700" : "text-slate-900")}>
              {item.title}
            </h4>
            <p className={cn("text-sm leading-relaxed font-medium", item.isCritical ? "text-rose-600" : "text-stone-500")}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkflowPath = () => {
  const steps = [
    { label: "01", title: "滿載排程", desc: "將溝通與品質維護時間視為零，強行填滿開發進度。" },
    { label: "02", title: "時程蠶食", desc: "需求模糊與溝通成本開始消耗實務開發時間。" },
    { label: "03", title: "捨棄品質", desc: "被迫停止寫 UT 與 Code Review，只求代碼會動就上線。", isRed: true },
    { label: "04", title: "進度停滯", desc: "Bug 爆發佔據所有產能，新功能開發陷入死胡同。", isRed: true }
  ];

  return (
    <div className="mb-24 px-4">
      <SectionHeader title="惡性循環路徑分析" />
      <div className="space-y-0 border-l border-stone-200 ml-3">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-10 pb-10 last:pb-0">
            <div className={cn("absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full", step.isRed ? "bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.4)]" : "bg-slate-900")} />
            <div className="space-y-1">
              <span className={cn("text-[10px] font-bold uppercase tracking-widest", step.isRed ? "text-rose-400" : "text-stone-400")}>{step.label}</span>
              <h4 className={cn("text-base font-bold", step.isRed ? "text-rose-700" : "text-slate-900")}>{step.title}</h4>
              <p className={cn("text-sm leading-relaxed font-medium", step.isRed ? "text-rose-600" : "text-stone-500")}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const StrategicSkills = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-white font-sans text-slate-900 min-h-screen">
      <ScheduleTruth />
      <SystemicDistortion />
      <WorkflowPath />

      <div className="mx-4 p-10 border border-rose-200 bg-rose-50/50 rounded-sm">
        <div className="flex gap-6 items-start">
          <ShieldAlert className="w-6 h-6 shrink-0 mt-1 text-rose-600" />
          <div className="space-y-2">
            <h4 className="text-lg font-bold uppercase tracking-tight text-rose-700">核心結論：是制度養出了這種產能</h4>
            <p className="text-sm text-rose-600 leading-relaxed font-bold">
              當甘特圖忽略了 1/2 的必要開發成本時，工程師不再對品質負責，而是對時程表負責。
              <br/>
              這不是個人能力的懈怠，而是規劃偏差導致的<span className="underline decoration-rose-300 underline-offset-4 text-rose-800">制度性必然</span>。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
