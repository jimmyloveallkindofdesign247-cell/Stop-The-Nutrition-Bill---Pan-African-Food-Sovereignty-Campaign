import React, { useState } from 'react';
import { formatNumber, calculateGoalProgress } from '../utils/petition';
import { ArrowUpRight, ChevronDown, ChevronUp, Flame } from 'lucide-react';

interface StickyProgressFooterProps {
  signatureCount: number;
  goalCount: number;
  onSignClick: () => void;
}

export const StickyProgressFooter: React.FC<StickyProgressFooterProps> = ({
  signatureCount,
  goalCount,
  onSignClick,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const percentage = calculateGoalProgress(signatureCount, goalCount);

  return (
    <aside
      aria-label="Petition Progress Bar"
      className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300"
    >
      {/* Top micro progress track */}
      <div className="w-full bg-neutral-800 h-1 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#FF4D4D] via-[#ff7878] to-[#FF4D4D] h-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Main Bar */}
      <div className="bg-[#0B0C10]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl px-4 py-2 sm:py-3 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          {/* Left: Flame Icon + Stat ticker */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF4D4D]/20 flex items-center justify-center text-[#FF4D4D] shrink-0">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-heading font-black text-sm sm:text-base text-white tabular-nums">
                  {formatNumber(signatureCount)}
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-mono">
                  / {formatNumber(goalCount)}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF4D4D] bg-[#FF4D4D]/10 px-1.5 py-0.2 rounded border border-[#FF4D4D]/30">
                  {percentage}%
                </span>
              </div>
              <div className="text-[10px] text-neutral-400 font-body hidden sm:block">
                Demanding immediate National Assembly withdrawal
              </div>
            </div>
          </div>

          {/* Center: Live Smooth Progress Bar on tablet/desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden border border-white/10 p-[1px]">
              <div
                className="bg-gradient-to-r from-[#FF4D4D] to-[#ff7878] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Right: Quick Action Jump Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onSignClick}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all shadow-md shadow-[#FF4D4D]/30 border border-[#FF4D4D] cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Add Voice</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
