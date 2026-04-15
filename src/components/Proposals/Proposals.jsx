import React from 'react';
import { Target, Users, ShieldCheck, Clock, TrendingUp, AlertTriangle, Ban, GraduationCap, Timer, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ProposalItem = ({ title, items, isRed = false }) => (
  <div className="bg-white border border-stone-200 p-8 space-y-4 shadow-sm">
    <h4 className={cn("text-lg font-black uppercase tracking-tight pb-3 border-b border-stone-100", isRed ? "text-rose-700" : "text-slate-900")}>
      {title}
    </h4>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 shrink-0"></span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  </div>
);

const BonusStep = ({ week, percentage, amount, isRed = false }) => (
  <div className={cn(
    "flex items-center justify-between p-4 border",
    isRed ? "bg-rose-50 border-rose-200" : "bg-white border-stone-200"
  )}>
    <div className="flex items-center gap-4">
      <span className={cn("text-[10px] font-black uppercase px-2 py-1 rounded-sm", isRed ? "bg-rose-600 text-white" : "bg-stone-900 text-stone-100")}>
        {week}
      </span>
      <span className={cn("text-sm font-bold", isRed ? "text-rose-700" : "text-slate-900")}>
        {percentage}% 獎金
      </span>
    </div>
    <div className={cn("text-lg font-black tabular-nums", isRed ? "text-rose-600" : "text-slate-900")}>
      ${amount.toLocaleString()}
    </div>
  </div>
);

const CompressionPremium = () => (
  <div className="bg-stone-900 text-stone-100 p-8 rounded-sm">
    <div className="flex items-center gap-3 mb-6">
      <Zap className="w-6 h-6 text-amber-400" />
      <h3 className="text-xl font-black uppercase tracking-tighter">時程壓縮補償機制 (Compression Premium)</h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <p className="text-sm text-stone-400 leading-relaxed font-medium">
          當業務端或管理層要求縮短原定 RD 估時（雙人平均估時）時，獎金應隨壓縮比例線性提升，以補償研發人員承受的高風險與額外負擔。
        </p>
        <div className="flex items-center gap-4 py-4 border-y border-stone-800">
          <div className="text-center flex-1">
            <div className="text-[10px] font-bold text-stone-500 uppercase">開發時間</div>
            <div className="text-2xl font-black text-rose-500">1/2</div>
          </div>
          <div className="text-stone-700 font-light text-2xl">➔</div>
          <div className="text-center flex-1">
            <div className="text-[10px] font-bold text-stone-500 uppercase">結案獎金</div>
            <div className="text-2xl font-black text-emerald-400">200%</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 p-6 border border-white/10 space-y-3">
        <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">實務執行規範</div>
        <ul className="space-y-2 text-[11px] text-stone-300 leading-relaxed">
          <li className="flex gap-2"><span>●</span> 壓縮比例以『雙人協商估時』為基準。</li>
          <li className="flex gap-2"><span>●</span> 獎金倍率 = (原定工時 / 壓縮後工時)。</li>
          <li className="flex gap-2"><span>●</span> 壓縮後若能準時結案，獎金不得再受 Delay 條款扣除。</li>
        </ul>
      </div>
    </div>
  </div>
);

const MentorshipProgram = () => (
  <div className="border border-stone-200 bg-white overflow-hidden">
    <div className="p-6 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-5 h-5 text-slate-900" />
        <h3 className="text-lg font-black uppercase tracking-tight">新人護航與導師制度 (Escort Program)</h3>
      </div>
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest text-right">Team Scalability</span>
    </div>
    
    <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h4 className="text-xs font-black text-stone-400 uppercase tracking-widest">獎金分配比例</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-stone-50 border border-stone-200">
            <span className="text-sm font-bold">新人 (Newcomer)</span>
            <span className="text-lg font-black text-slate-900">50%</span>
          </div>
          <div className="flex justify-between items-center p-3 border border-stone-200">
            <span className="text-sm font-medium">前端 Mentor</span>
            <span className="text-lg font-bold text-slate-600">25%</span>
          </div>
          <div className="flex justify-between items-center p-3 border border-stone-200">
            <span className="text-sm font-medium">後端 Mentor</span>
            <span className="text-lg font-bold text-slate-600">25%</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Timer className="w-4 h-4" />
              <span className="text-sm">法定護航工時</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              輔導案開發期需額外增加 <span className="text-rose-600 font-bold">1-2 天</span> 的審核時間。此時間專供 Mentor 進行 CR，不計入開發進度。
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span className="text-sm">獨立開發門檻</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              新人需連續完成 <span className="text-rose-600 font-bold">3 個專案</span> 且透過 QA 驗收，方可解除護航制度。
            </p>
          </div>
        </div>
        
        <div className="p-4 bg-rose-50 border border-rose-100 rounded-sm text-xs text-rose-700 font-medium">
          這套制度將 Mentor 從「被動被問問題」轉為「主動品質把關」，有效防止新人因經驗不足產生技術債。
        </div>
      </div>
    </div>
  </div>
);

export const Proposals = ({ dailyCost }) => (
  <div className="p-10 space-y-12 bg-white font-sans text-slate-900">
    {/* 核心提案：漸進式團體獎金 */}
    <div className="border-2 border-stone-900 overflow-hidden">
      <div className="bg-stone-900 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-stone-100">
          <Target className="w-6 h-6 text-stone-100" />
          <h2 className="text-xl font-black uppercase tracking-tighter text-stone-100">階層式團體獎金提案 (Base: $6,000)</h2>
        </div>
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">Group Incentive Model</div>
      </div>
      
      <div className="p-10 bg-stone-50 space-y-8 border-b border-stone-200">
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-6 bg-white border border-stone-200 rounded-sm">
            <Ban className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
            <div className="space-y-1">
              <h4 className="font-black text-slate-900 uppercase text-base">強制修正週 (Buffer Week)</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                上線日前一週，<b>全面停止所有新功能開發進度</b>。全體工程師空下時程，專注於 Bug 修復與品質校準。
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <BonusStep week="On-Time" percentage={100} amount={6000} />
            <BonusStep week="Delay 1W" percentage={50} amount={3000} isRed={true} />
            <BonusStep week="Delay 2W" percentage={25} amount={1500} isRed={true} />
            <BonusStep week="Delay 3W+" percentage={0} amount={0} isRed={true} />
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-slate-900 text-stone-100 rounded-sm">
              <div className="text-[10px] font-bold text-stone-400 uppercase mb-1">止損效益</div>
              <div className="text-lg font-black italic">
                每提早 1 週結案，節省約 <span className="text-rose-400">${Math.round(dailyCost * 7).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 壓縮補償與新人制度 */}
      <div className="p-8 bg-stone-50 space-y-8">
        <CompressionPremium />
        <MentorshipProgram />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProposalItem 
        title="人力與時程估計分析"
        items={[
          "<b>雙人估時：</b> 拒絕單一 RD 估時，應由 2 位以上 RD 對功能估計並取平均值。",
          "<b>壓縮補償：</b> 若要求縮短原定工時，獎金應隨壓縮比例反向提升。",
          "<b>成長係數：</b> 新進人員或重點對象，時程需以 <b>1.5x</b> 計算。",
          "<b>Mentor 激勵：</b> 獎金採 <b>50/25/25</b> 比例分配，強化 Mentor 審核動力。"
        ]}
      />
      <ProposalItem 
        title="品質流程強制規範"
        isRed={true}
        items={[
          "<b>PR 審核時間：</b> 每日固定預留 <b>1 小時</b> 進行代碼審查，此時間不計入開發進度。",
          "<b>UT 覆蓋率：</b> 核心邏輯必須具備單元測試，未通過測試之功能不得合併 PR。",
          "<b>修正優先：</b> 修正週內嚴禁任何功能性異動，目標只有清空 Issue List。"
        ]}
      />
    </div>
  </div>
);
