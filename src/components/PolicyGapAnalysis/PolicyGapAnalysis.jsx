import React from 'react';
import { 
  AlertCircle, 
  ArrowRight, 
  ShieldAlert, 
  Zap, 
  Users, 
  Clock, 
  FileWarning,
  RefreshCcw,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const GapCard = ({ title, current, flaw, reform, icon: Icon }) => (
  <div className="bg-white border border-stone-200 shadow-sm overflow-hidden flex flex-col">
    <div className="p-6 bg-stone-50 border-b border-stone-200 flex items-center gap-3">
      <Icon className="w-5 h-5 text-slate-900" />
      <h4 className="font-black text-slate-900 uppercase tracking-tight">{title}</h4>
    </div>
    
    <div className="flex-1 divide-y divide-stone-100">
      {/* 現行條文 */}
      <div className="p-6 space-y-2">
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">現行制度規範</div>
        <p className="text-sm text-slate-600 font-medium leading-relaxed">{current}</p>
      </div>
      
      {/* 核心缺漏 */}
      <div className="p-6 space-y-2 bg-rose-50/20">
        <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">現有制度缺漏 (Gap)</div>
        <p className="text-sm text-rose-700 font-bold leading-relaxed">{flaw}</p>
      </div>
      
      {/* 改革方向 */}
      <div className="p-6 space-y-2 bg-stone-900 text-white">
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">建議改革方向 (Reform)</div>
        <p className="text-sm text-stone-100 font-bold leading-relaxed">{reform}</p>
      </div>
    </div>
  </div>
);

export const PolicyGapAnalysis = () => {
  return (
    <div className="p-10 space-y-16 bg-white">
      <div className="space-y-2 border-l-2 border-slate-900 pl-5">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">制度缺漏與改革診斷</h2>
        <p className="text-stone-500 text-sm font-medium">針對現行獎金制度的實務矛盾進行結構性優化</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GapCard 
          icon={ShieldAlert}
          title="品質保障與扣回機制"
          current="實際上線 7~90 天內若客戶反應問題，則扣回該項目之團隊獎金。"
          flaw="只罰『結果』卻不給『過程』。在滿載排程下，RD 被逼跳過測試，最後由 RD 承擔系統不穩定的經濟處分。"
          reform="實施『Buffer Week (修正週)』。上線前一週禁止開發新功能，全體專注修 Bug，確保獎金不被扣回。"
        />

        <GapCard 
          icon={Clock}
          title="開發時程與公告流程"
          current="每日公告兩天後的開發項目與獎金；項目需先取得老闆同意後才告知 RD。"
          flaw="忽略『Spec 閱讀與技術對齊』的工時。RD 只有兩天準備期，且甘特圖通常不計算確認需求所需的時間。"
          reform="認可『非開發工時』。甘特圖僅以每日 5-6 小時計入進度，剩餘時間制度化留給 Spec 閱讀與 API 對接。"
        />

        <GapCard 
          icon={Zap}
          title="時程壓縮與風險對沖"
          current="個人獎金僅看預定時程內是否完成，不受 QA 進度影響。"
          flaw="當業務端強行縮短開發期時，RD 承擔了超額的身心與品質風險，但獎金金額卻維持不變，利益與風險不對等。"
          reform="建立『壓縮補償機制』。若開發期縮短為 1/2，則目標獎金應對等提升為 200%，以補償高壓開發的風險。"
        />

        <GapCard 
          icon={Users}
          title="新人培訓與品質護航"
          current="獎金分為個人與團隊兩大指標，各佔 50%。"
          flaw="未考量 Mentor 帶領新人的時間損耗。Mentor 需花時間審核新人的 Code，若沒獎金誘因，審核往往淪為形式。"
          reform="實施『50/25/25 獎金分配』。新人輔導案中，Mentor 享有 25% 獎金提撥，並享有 1-2 天法定審核期。"
        />
      </div>

      {/* 總結區塊 */}
      <div className="p-10 border border-stone-200 bg-stone-50">
        <div className="flex gap-6 items-start">
          <FileWarning className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
          <div className="space-y-3">
            <h4 className="text-lg font-black text-slate-900 uppercase">診斷結論：現有制度正在消耗團隊資產</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              目前的制度設計傾向於『末端考核』，而忽略了『前端保障』。當我們只看獎金是否扣回，卻不給予工程師寫測試、讀規格的時間時，這套制度最終會養出**「只求交差、不求品質、拒絕帶人」**的消極文化。
            </p>
            <div className="pt-4 flex items-center gap-2">
              <span className="px-3 py-1 bg-rose-100 text-rose-700 text-[10px] font-black uppercase rounded-sm">制度性必然</span>
              <ArrowRight className="w-3 h-3 text-stone-300" />
              <span className="text-sm font-bold text-slate-900 italic">必須透過改革把『時間』還給品質。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
