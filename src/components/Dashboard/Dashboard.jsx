import React from 'react';
import { 
  Users, 
  DollarSign, 
  Bug, 
  Calendar, 
  AlertTriangle, 
  TrendingDown, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Calculator,
  History
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const InputGroup = ({ label, children, className = "" }) => (
  <div className={cn("space-y-1.5", className)}>
    <label className="block text-base font-black text-stone-400 uppercase tracking-widest pl-1">{label}</label>
    {children}
  </div>
);

const ResultCard = ({ label, value, subValue, isRed = false, icon: Icon, formula }) => (
  <div className="bg-white p-6 border border-stone-200 shadow-sm text-center space-y-2">
    <div className="flex justify-center mb-1">
      <Icon className={cn("w-4 h-4", isRed ? "text-rose-600" : "text-stone-300")} />
    </div>
    <div className="text-base font-black text-stone-400 uppercase tracking-widest">{label}</div>
    <div className="space-y-1">
      <div className={cn("text-2xl font-black tabular-nums", isRed ? "text-rose-600" : "text-slate-900")}>
        {value}
      </div>
      {subValue && (
        <div className={cn(
          "text-base font-bold py-0.5 px-2 inline-block rounded-sm",
          isRed ? "bg-rose-100 text-rose-700" : "bg-stone-100 text-stone-500"
        )}>
          {subValue}
        </div>
      )}
    </div>
    {formula && (
      <div className="text-base text-stone-400 font-medium font-mono pt-2 border-t border-stone-50 italic text-left">
        {formula}
      </div>
    )}
  </div>
);

export const Dashboard = ({ state, handlers }) => {
  const { rd, qa, bugs, dates } = state;
  const { setRd, setQa, setBugs, setDates } = handlers;

  // 動態計算延遲天數
  const getDays = () => {
    const diff = Math.ceil((new Date(dates.actual) - new Date(dates.expected)) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };
  const delayDays = getDays();

  // 靜態展示工作天（使用者提供的 30D/10D）
  const rdWorkingDays = 30;
  const qaWorkingDays = 10;

  const dailyCost = ((rd.salary / 30) * rd.n) + ((qa.salary / 30) * qa.n);
  const qaBugBonus = (bugs.s1 * 1000) + (bugs.s2 * 500) + (bugs.s3 * 200) + (bugs.s4 * 100);
  const beforeLaunchBonus = 13400;
  const totalLoss = (dailyCost * delayDays) + qaBugBonus;

  return (
    <div className="bg-white">
      <div className="bg-stone-50 p-10 border-b border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mb-10">
           <InputGroup label="開發啟動日期">
             <input type="date" className="w-full bg-white border border-stone-200 p-2 text-base font-bold text-slate-900 outline-none focus:border-slate-900" 
               value={dates.start} onChange={e => setDates({ ...dates, start: e.target.value })} />
           </InputGroup>
           <div className="flex justify-center text-stone-300">
             <ArrowRight className="w-6 h-6" />
           </div>
           <InputGroup label="原定結案日期">
             <input type="date" className="w-full bg-white border border-stone-200 p-2 text-base font-bold text-rose-600 outline-none focus:border-rose-600" 
               value={dates.expected} onChange={e => setDates({ ...dates, expected: e.target.value })} />
           </InputGroup> 
            <InputGroup label="當前狀態統計日期">
               <input type="date" className="w-full bg-white border border-stone-200 p-2 text-base font-bold text-slate-900 outline-none focus:border-slate-900" 
                 value={dates.actual} onChange={e => setDates({ ...dates, actual: e.target.value })} />
             </InputGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
           <div className="md:col-start-2">
           
           </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-stone-200 text-center">
            <div className="text-base font-bold text-stone-400 uppercase mb-1">RD 開發工期</div>
            <div className="text-lg font-black text-slate-900">{rdWorkingDays}D</div>
          </div>
          <div className="p-4 bg-white border border-stone-200 text-center">
            <div className="text-base font-bold text-stone-400 uppercase mb-1">QA 測試工期</div>
            <div className="text-lg font-black text-slate-900">{qaWorkingDays}D</div>
          </div>
          <div className="p-4 bg-rose-50 border border-rose-200 text-center col-span-2">
            <div className="text-base font-bold text-rose-400 uppercase mb-1">計算延遲天數 (相對於結案日)</div>
            <div className="text-lg font-black text-rose-600">{delayDays}D</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border-b border-stone-200">
        <div className="bg-white p-10 space-y-8">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <Users className="w-5 h-5 text-slate-900" />
            <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight">RD 團隊參數</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <InputGroup label="團隊人數"><input type="number" className="w-full bg-stone-50 border border-stone-200 p-2 text-base font-bold" value={rd.n} onChange={e => setRd({ ...rd, n: parseInt(e.target.value)||0 })} /></InputGroup>
            <InputGroup label="平均月薪"><input type="number" className="w-full bg-stone-50 border border-stone-200 p-2 text-base font-bold" value={rd.salary} onChange={e => setRd({ ...rd, salary: parseInt(e.target.value)||0 })} /></InputGroup>
          </div>
        </div>

        <div className="bg-stone-50/50 p-10 space-y-8 border-l border-stone-200">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <Bug className="w-5 h-5 text-slate-900" />
            <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight">QA 與 Bug 統計</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <InputGroup label="QA 人數"><input type="number" className="w-full bg-white border border-stone-200 p-2 text-base font-bold" value={qa.n} onChange={e => setQa({ ...qa, n: parseInt(e.target.value)||0 })} /></InputGroup>
            <InputGroup label="QA 月薪"><input type="number" className="w-full bg-white border border-stone-200 p-2 text-base font-bold" value={qa.salary} onChange={e => setQa({ ...qa, salary: parseInt(e.target.value)||0 })} /></InputGroup>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['s1', 's2', 's3', 's4'].map(lv => (
              <InputGroup label={lv.toUpperCase()} key={lv}>
                <input type="number" className="w-full bg-white border border-stone-200 p-2 text-center text-base font-bold" value={bugs[lv]} onChange={e => setBugs({ ...bugs, [lv]: parseInt(e.target.value)||0 })} />
              </InputGroup>
            ))}
          </div>
          <div className="pt-6 border-t border-stone-200 space-y-2">
            <p className="text-base text-rose-600 font-bold leading-relaxed uppercase tracking-tighter">
              [ 歷史數據 ] 上線前 QA 獎金支出 (S1=4 S2=9 S3=19 S4=11 總計：$13,400 )
            </p>
          </div>
        </div>
      </div>

      <div className="p-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResultCard 
            icon={Clock} 
            label="每日薪資成本" 
            value={`$${Math.round(dailyCost).toLocaleString()}`} 
            formula="((RD月薪/30)*人數) + ((QA月薪/30)*人數)"
          />
          <ResultCard 
            icon={TrendingDown} 
            label="累計延遲損失" 
            value={`$${Math.round(totalLoss).toLocaleString()}`} 
            subValue={`延遲 ${delayDays} 天`}
            isRed={true} 
            formula="(薪資成本 * 延遲天數) + QA 激勵獎金"
          />
          <ResultCard 
            icon={CheckCircle2} 
            label="QA 激勵獎金 (總額)" 
            value={`$${Math.round(qaBugBonus).toLocaleString()}`} 
            subValue={`(上線前: $13,400)`}
            formula="S1*1000 + S2*500 + S3*200 + S4*100"
          />
        </div>

        <div className="p-8 border border-rose-200 bg-rose-50/30">
          <div className="flex items-start gap-6">
            <AlertTriangle className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-black text-rose-900 uppercase tracking-widest text-base text-rose-700">延遲損失診斷</h4>
              <p className="text-rose-800 text-base leading-relaxed font-medium">
                目前的 {delayDays} 天延遲已造成 <span className="font-black underline decoration-rose-400 underline-offset-4">${Math.round(totalLoss).toLocaleString()}</span> 的損失。<br/>
                計算方式包含：<span className="font-bold underline">薪資損耗</span> (${Math.round(dailyCost * delayDays).toLocaleString()}) 與 <span className="font-bold underline">QA 獎金</span> (${Math.round(qaBugBonus).toLocaleString()})。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
