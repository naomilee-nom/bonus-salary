import React from 'react';
import { 
  ShieldAlert, 
  Clock, 
  AlertTriangle, 
  Check,
  Layout,
  Layers,
  ArrowRight,
  History,
  TrendingDown,
  Timer,
  Bug,
  RefreshCw,
  Coins,
  Brain
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SectionHeader = ({ title, description }) => (
  <div className="space-y-1 mb-10 border-l-2 border-slate-900 pl-5">
    <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase">{title}</h3>
    {description && <p className="text-base text-stone-500 font-medium">{description}</p>}
  </div>
);

const TimelineComparison = ({ dailyCost }) => {
  const savedDays = 10;
  const savedAmount = dailyCost * savedDays;

  return (
    <div className="mb-24 space-y-12 px-4">
      <SectionHeader title="規劃對比：壓縮時程產生的負向價值" description="對比現行『壓縮模式』與建議『品質優先模式』的總交付效率" />
      
      <div className="space-y-16">
        {/* 現況 */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-rose-600 uppercase tracking-widest flex items-center gap-2">
              <History className="w-4 h-4" /> 現行模式 (總計 55 工作天)
            </h4>
            <span className="text-base font-bold text-rose-400 font-mono italic underline decoration-rose-200">品質債務累積</span>
          </div>
          
          <div className="relative h-10 w-full flex rounded-none border border-stone-200 overflow-hidden bg-stone-100 shadow-sm text-white">
            <div className="h-full bg-slate-900 flex items-center justify-center text-base font-bold" style={{ width: '54%' }}>RD 30D (壓縮開發)</div>
            <div className="h-full bg-stone-400 flex items-center justify-center text-base font-bold border-l border-white/20" style={{ width: '18%' }}>QA 10D (後置測試)</div>
            <div className="h-full bg-rose-600 flex items-center justify-center text-base font-bold border-l border-white/20 animate-pulse" style={{ width: '28%' }}>延遲 15D (救火)</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base leading-relaxed font-medium">
            <div className="space-y-1 border-l-2 border-slate-200 pl-4">
              <p className="font-bold text-slate-900 uppercase tracking-tighter italic">問題根源：</p>
              <p className="text-stone-500">• RD 工期不足 (30D)，迫使工程師產生『先求會動、不求品質』的交差心態。</p>
              <p className="text-stone-500">• 為了趕上線，PR/UT 流程往往草草了事，埋下後續救火的種子。</p>
            </div>
            <div className="p-4 bg-rose-50 border border-rose-100 flex items-center gap-3">
              <TrendingDown className="w-5 h-5 text-rose-600" />
              <p className="text-rose-700 font-bold uppercase tracking-tighter">
                壓縮開發期 5 天，最終導致結案日延後 15 天。
              </p>
            </div>
          </div>
        </div>

        {/* 建議 */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> 建議方案 (總計 45 工作天)
            </h4>
            <span className="text-base font-black text-emerald-600 italic font-mono underline decoration-emerald-200">優化交付效率</span>
          </div>
          
          <div className="relative w-full">
            <div className="h-10 flex rounded-none border border-stone-200 overflow-hidden bg-stone-100 shadow-sm text-white font-bold text-base" style={{ width: `${Math.round(45/55*100)}%` }}>
              <div className="h-full bg-slate-900 flex items-center justify-center" style={{ width: '77%' }}>
                RD 40D (35D開發 + 5D全職修正並行)
              </div>
              <div className="h-full bg-stone-500 flex items-center justify-center border-l border-white/20" style={{ width: '23%' }}>
                QA 5D (高效結案)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base leading-relaxed font-medium">
            <div className="space-y-2 border-l-2 border-slate-900 pl-4">
              <p className="font-bold text-slate-900 uppercase tracking-tighter italic">策略與心態優勢：</p>
              <p className="text-stone-500">• <b>保障職人精神：</b>給予 RD 充足的開發時間，讓團隊有餘力追求高品質架構，從根源杜絕 Bug。</p>
              <p className="text-stone-500">• <b>品質自覺：</b>當時間不再是威脅，工程師會主動落實 PR/UT，減少未來的維護債務。</p>
              <p className="text-stone-500">• 透過並行修正週，確保測試完畢即刻達到高品質上線標準。</p>
            </div>
            
            <div className="space-y-4">
              {/* 動態成本節省區塊 */}
              <div className="p-6 bg-stone-900 text-stone-100 space-y-3 relative overflow-hidden shadow-lg border border-stone-800">
                <div className="flex items-center gap-3 relative z-10">
                  <Coins className="w-5 h-5 text-emerald-400" />
                  <h5 className="font-black uppercase tracking-widest text-base">實質管理紅利</h5>
                </div>
                <div className="relative z-10 space-y-1">
                  <p className="text-base text-stone-400 font-bold uppercase tracking-tight">預計節省人力支出 (10 工作天)</p>
                  <div className="text-2xl font-black text-emerald-400 tabular-nums">
                    ${Math.round(savedAmount).toLocaleString()}
                  </div>
                  <p className="text-base text-stone-500 italic">計算基準：RD+QA 每日薪資成本 (${Math.round(dailyCost).toLocaleString()}) × 10D</p>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleTruth = () => {
  const categories = [
    { key: "progress", label: "實質開發進度", color: "bg-slate-900", desc: "撰寫新功能邏輯、UI 組件實作" },
    { key: "spec", label: "需求確認與閱讀", color: "bg-stone-500", desc: "閱讀 Spec、釐清模糊需求" },
    { key: "sync", label: "溝通與對接", color: "bg-stone-400", desc: "API 格式確認、前後端邏輯校準" },
    { key: "quality", label: "品質維護 (PR/UT)", color: "bg-stone-300", desc: "Code Review、撰寫單元測試" },
    { key: "issues", label: "修正 Issue / Bug", color: "bg-stone-200", desc: "處理測試回報、線上修補" },
    { key: "meeting", label: "會議與中斷", color: "bg-stone-100", desc: "行政會議、任務切換損耗" },
  ];

  const currentData = [
    { key: "progress", value: 45 }, 
    { key: "spec", value: 15 },
    { key: "sync", value: 10 },
    { key: "quality", value: 5 },
    { key: "issues", value: 15 },
    { key: "meeting", value: 10 },
  ];

  return (
    <div className="mb-24 space-y-10 px-4">
       <SectionHeader title="開發工時的真實佔比" description="分析為何在 30 天內無法達成高品質交付" />
      <div className="space-y-4">
        <div className="flex items-end justify-between px-1">
          <h4 className="text-base font-bold text-slate-900 uppercase tracking-widest">實質進度佔比</h4>
          <span className="text-xl font-black text-rose-600 tracking-tighter italic">對 RD 而言實際開發的時間只有 1/2 ~ 1/3</span>
        </div>
        <div className="h-12 w-full flex rounded-none border border-stone-200 overflow-hidden shadow-sm">
          {currentData.map((item) => (
            <div key={item.key} className={cn(categories.find(c => c.key === item.key).color, "h-full transition-all")} style={{ width: `${item.value}%` }} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm">
        {categories.map(cat => (
          <div key={cat.key} className="p-6 bg-white space-y-2">
            <div className="flex items-center gap-3">
              <div className={cn("w-3 h-3 shrink-0 rounded-full", cat.color)} />
              <span className="text-base font-bold text-slate-900 uppercase tracking-tight">{cat.label}</span>
            </div>
            <p className="text-base text-stone-500 leading-normal font-medium">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SystemicLoop = () => {
  const steps = [
    { label: "現狀：規劃脫節", title: "滿載排程 (8H Progress)", desc: "強行忽略 Spec 閱讀、溝通與修 Bug 的必要成本。" },
    { label: "影響：品質放水", title: "捨棄 PR/UT 保進度", desc: "為了領取獎金，RD 必然選擇『先求會動，不求品質』。", isRed: true },
    { label: "連鎖：救火循環", title: "100+ Bug 爆發", desc: "系統不穩定導致後期產能被修補工作佔據，新功能進度停滯。", isRed: true },
    { label: "結果：執行力崩潰", title: "制度養出消極文化", desc: "工程師不再對品質負責，轉而對時程表進行消極防禦。", isRed: true }
  ];

  return (
    <div className="mb-24 space-y-10">
      <SectionHeader title="制度導致的惡性循環" description="為什麼『滿載排程』反而會讓開發速度越來越慢？" />
      <div className="flex flex-col gap-2 px-4">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative">
            <div className={cn(
              "p-6 border-l-4 flex flex-col md:flex-row md:items-center gap-8",
              step.isRed ? "border-rose-600 bg-rose-50/30" : "border-slate-900 bg-stone-50/50"
            )}>
              <div className="shrink-0 w-36">
                <span className={cn("text-base font-black uppercase tracking-tighter", step.isRed ? "text-rose-400" : "text-slate-400")}>
                  {step.label}
                </span>
              </div>
              <div className="space-y-1 flex-1">
                <h4 className={cn("font-bold text-base", step.isRed ? "text-rose-700" : "text-slate-900")}>
                  {step.title}
                </h4>
                <p className={cn("text-base leading-relaxed font-medium", step.isRed ? "text-rose-600" : "text-stone-500")}>
                  {step.desc}
                </p>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex justify-start ml-4 h-4">
                <div className="w-px h-full bg-stone-200"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const EfficiencyTruth = ({ dailyCost }) => {
  return (
    <div className="p-10 space-y-16 bg-white animate-in fade-in duration-500">
      <SystemicLoop />
      <TimelineComparison dailyCost={dailyCost} />
      <ScheduleTruth />
      
      <div className="mx-4 p-10 border border-rose-200 bg-rose-50/50 rounded-sm">
        <div className="flex gap-6 items-start">
          <ShieldAlert className="w-6 h-6 shrink-0 mt-1 text-rose-600" />
          <div className="space-y-2">
            <h4 className="text-lg font-bold uppercase tracking-tight text-rose-700">結論：是制度養出了這種產能</h4>
            <p className="text-base text-rose-600 leading-relaxed font-bold">
              當甘特圖忽略了 <span className="underline decoration-rose-300 underline-offset-4 text-rose-800">1/2～1/3</span> 的必要開發成本時，工程師不再對品質負責，而是對時程表負責。
              <br/>
              這不是個人能力的懈怠，而是規劃偏差導致的制度性必然。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
