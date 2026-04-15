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
  Clock
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const InputGroup = ({ label, children, className = "" }) => (
  <div className={cn("space-y-1.5", className)}>
    <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest pl-1">{label}</label>
    {children}
  </div>
);

const ResultCard = ({ label, value, isRed = false, icon: Icon }) => (
  <div className="bg-white p-6 border border-stone-200 shadow-sm text-center">
    <div className="flex justify-center mb-2">
      <Icon className={cn("w-4 h-4", isRed ? "text-rose-600" : "text-stone-300")} />
    </div>
    <div className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">{label}</div>
    <div className={cn("text-2xl font-black tabular-nums", isRed ? "text-rose-600" : "text-slate-900")}>
      {value}
    </div>
  </div>
);

export const Dashboard = ({ state, handlers }) => {
  const { rd, qa, bugs, dates } = state;
  const { setRd, setQa, setBugs, setDates } = handlers;

  const getDays = () => {
    const diff = Math.ceil((new Date(dates.actual) - new Date(dates.expected)) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };
  const days = getDays();
  const dailyCost = ((rd.salary / 30) * rd.n) + ((qa.salary / 30) * qa.n);
  const totalLoss = dailyCost * days;
  const qaBugBonus = (bugs.s1 * 1000) + (bugs.s2 * 500) + (bugs.s3 * 200) + (bugs.s4 * 100);

  return (
    <div className="bg-white">
      <div className="bg-stone-50 p-10 border-b border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <InputGroup label="預計結案日">
          <input type="date" className="w-full bg-white border border-stone-200 rounded-sm px-4 py-2 text-sm font-bold text-slate-700 focus:border-slate-900 outline-none transition-all" 
            value={dates.expected} onChange={e => setDates({ ...dates, expected: e.target.value })} />
        </InputGroup>
        <div className="flex justify-center text-stone-300">
          <ArrowRight className="w-6 h-6" />
        </div>
        <InputGroup label="實際/目前日期">
          <input type="date" className="w-full bg-white border border-stone-200 rounded-sm px-4 py-2 text-sm font-bold text-slate-700 focus:border-slate-900 outline-none transition-all"
            value={dates.actual} onChange={e => setDates({ ...dates, actual: e.target.value })} />
        </InputGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border-b border-stone-200">
        <div className="bg-white p-10 space-y-8">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <Users className="w-5 h-5 text-slate-900" />
            <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight">RD 團隊參數</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <InputGroup label="團隊人數"><input type="number" className="w-full bg-stone-50 border border-stone-200 p-2 text-sm font-bold" value={rd.n} onChange={e => setRd({ ...rd, n: e.target.value })} /></InputGroup>
            <InputGroup label="平均月薪"><input type="number" className="w-full bg-stone-50 border border-stone-200 p-2 text-sm font-bold" value={rd.salary} onChange={e => setRd({ ...rd, salary: e.target.value })} /></InputGroup>
          </div>
          <InputGroup label="原定獎金 (單人)">
            <input type="number" className="w-full bg-white border-2 border-stone-900 p-3 text-lg font-black text-slate-900" 
              value={rd.bonus} onChange={e => setRd({ ...rd, bonus: e.target.value })} />
          </InputGroup>
        </div>

        <div className="bg-stone-50/50 p-10 space-y-8 border-l border-stone-200">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <Bug className="w-5 h-5 text-slate-900" />
            <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight">QA 與 Bug 統計</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <InputGroup label="QA 人數"><input type="number" className="w-full bg-white border border-stone-200 p-2 text-sm font-bold" value={qa.n} onChange={e => setQa({ ...qa, n: e.target.value })} /></InputGroup>
            <InputGroup label="QA 月薪"><input type="number" className="w-full bg-white border border-stone-200 p-2 text-sm font-bold" value={qa.salary} onChange={e => setQa({ ...qa, salary: e.target.value })} /></InputGroup>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['s1', 's2', 's3', 's4'].map(lv => (
              <InputGroup label={lv.toUpperCase()} key={lv}>
                <input type="number" className="w-full bg-white border border-stone-200 p-2 text-center text-xs font-bold" value={bugs[lv]} onChange={e => setBugs({ ...bugs, [lv]: parseInt(e.target.value)||0 })} />
              </InputGroup>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResultCard icon={Clock} label="每日薪資成本" value={`$${Math.round(dailyCost).toLocaleString()}`} />
          <ResultCard icon={TrendingDown} label="累計延遲損失" value={`$${Math.round(totalLoss).toLocaleString()}`} isRed={true} />
          <ResultCard icon={CheckCircle2} label="QA 激勵獎金" value={`$${Math.round(qaBugBonus).toLocaleString()}`} />
        </div>

        <div className="p-8 border border-rose-200 bg-rose-50/30 relative">
          <div className="flex items-start gap-6">
            <AlertTriangle className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-black text-rose-900 uppercase tracking-widest text-sm text-rose-700">延遲損失分析</h4>
              <p className="text-rose-800 text-base leading-relaxed font-medium">
                目前的進度延遲已導致公司產生 <span className="font-black underline decoration-rose-400 underline-offset-4">${Math.round(totalLoss).toLocaleString()}</span> 的額外支出。<br/>
                每增加一天的延遲，即損失約 <span className="font-black text-rose-700">${Math.round(dailyCost).toLocaleString()}</span> 的人力資源價值。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
