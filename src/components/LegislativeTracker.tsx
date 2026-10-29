import React, { useState } from 'react';
import { LEGISLATIVE_CARDS } from '../data/campaignData';
import { NewsCardItem } from '../types/campaign';
import { AlertTriangle, BookOpen, ChevronRight, FileWarning, Layers, ShieldCheck, Scale, ArrowUpRight } from 'lucide-react';

interface LegislativeTrackerProps {
  onSelectCard: (card: NewsCardItem) => void;
  onSignClick: () => void;
}

export const LegislativeTracker: React.FC<LegislativeTrackerProps> = ({
  onSelectCard,
  onSignClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'nigeria' | 'sovereignty' | 'panafrican'>('all');

  const filteredCards = LEGISLATIVE_CARDS.filter((card) => {
    if (activeFilter === 'nigeria') return card.id.includes('nigeria');
    if (activeFilter === 'sovereignty') return card.id.includes('sovereignty');
    if (activeFilter === 'panafrican') return card.id.includes('pan-african');
    return true;
  });

  return (
    <section id="legislative-tracker" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF4D4D] tracking-widest uppercase mb-2">
              <Scale className="w-4 h-4" />
              <span>Interactive Legislative Intelligence</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Live News & Legislative Tracker
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-2">
              Real-time monitoring of House Bill 2659, parliament committee maneuvers,
              and coordinated grassroots defense across African borders.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-neutral-900/90 border border-white/10 overflow-x-auto self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#FF4D4D] text-white font-semibold shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Updates
            </button>
            <button
              onClick={() => setActiveFilter('nigeria')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'nigeria'
                  ? 'bg-[#FF4D4D] text-white font-semibold shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Nigeria HB 2659
            </button>
            <button
              onClick={() => setActiveFilter('sovereignty')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'sovereignty'
                  ? 'bg-[#FF4D4D] text-white font-semibold shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Food Sovereignty Risk
            </button>
            <button
              onClick={() => setActiveFilter('panafrican')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'panafrican'
                  ? 'bg-[#FF4D4D] text-white font-semibold shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Pan-African Mobilization
            </button>
          </div>
        </div>

        {/* 3 Main Interactive News & Legislative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group glass-panel-dark rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#FF4D4D]/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Card Header Media & Tag */}
                {card.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141520] via-black/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[11px] font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Metadata line without pill clutter */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-3">
                    <span className="text-[#FF4D4D] font-semibold">{card.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{card.source}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#FF4D4D] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Lead Summary exactly from prompt */}
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-body">
                    {card.leadSummary}
                  </p>

                  {/* Danger highlights */}
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    <div className="text-xs uppercase font-mono text-neutral-400 font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#FF4D4D]" />
                      <span>Critical Provisions / Dangers</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {card.keyDangers.slice(0, 2).map((danger, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#FF4D4D] font-bold mt-0.5">✕</span>
                          <span>{danger}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCard(card)}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg bg-white/5 hover:bg-[#FF4D4D]/15 text-white hover:text-[#FF4D4D] text-xs font-heading font-bold uppercase tracking-wider border border-white/10 hover:border-[#FF4D4D]/40 transition-all cursor-pointer"
                >
                  <span>Examine Dossier & Legal Analysis</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Legislative Status Progress Tracker (Assembly Stages) */}
        <div className="mt-14 glass-panel-subtle rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-mono font-bold text-[#FF4D4D] uppercase">
                Nigeria National Assembly (9th & 10th Assemblies Continuity)
              </div>
              <h3 className="text-lg font-heading font-bold text-white mt-1">
                HB 2659 Legislative Pipeline: Critical Window of Intervention
              </h3>
            </div>
            <button
              onClick={onSignClick}
              className="inline-flex items-center gap-1.5 text-xs font-bold font-heading text-white bg-[#FF4D4D] hover:bg-[#ff3333] px-4 py-2 rounded-md self-start sm:self-auto cursor-pointer"
            >
              <span>Stop The Bill Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-700">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-neutral-400">STAGE 01</span>
                <span className="text-[11px] text-emerald-400 font-mono font-bold">Passed</span>
              </div>
              <h4 className="text-sm font-bold text-white">First Reading</h4>
              <p className="text-xs text-neutral-400 mt-1">
                Formally introduced by Hon. Chike Okafor to the House floor.
              </p>
            </div>

            {/* Step 2 - Current Critical */}
            <div className="p-4 rounded-xl bg-[#FF4D4D]/10 border-2 border-[#FF4D4D] shadow-lg shadow-[#FF4D4D]/10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#FF4D4D]">STAGE 02</span>
                <span className="text-[11px] text-[#FF4D4D] font-mono font-bold animate-pulse">
                  CURRENT STAGE
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Second Reading & Committee</h4>
              <p className="text-xs text-neutral-200 mt-1">
                Referred to Health Institutions Committee. Lawmakers weighing backlash.
              </p>
            </div>

            {/* Step 3 - Citizen Petitions */}
            <div className="p-4 rounded-xl bg-[#FF4D4D]/10 border border-[#FF4D4D]/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#FF4D4D]">STAGE 03</span>
                <span className="text-[11px] text-[#FF4D4D] font-mono font-bold">ACTIVE BATTLE</span>
              </div>
              <h4 className="text-sm font-bold text-white">Public Petitions & Hearings</h4>
              <p className="text-xs text-neutral-300 mt-1">
                HURIWA and 2,100+ citizens memorandum lodged with Committee on Public Petitions.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 opacity-70">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-neutral-500">STAGE 04</span>
                <span className="text-[11px] text-neutral-500 font-mono">Pending</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-300">Third Reading & Vote</h4>
              <p className="text-xs text-neutral-500 mt-1">
                Floor vote by the full House of Representatives in plenary.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 opacity-70">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-neutral-500">STAGE 05</span>
                <span className="text-[11px] text-neutral-500 font-mono">Target: Halt</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-300">Senate & Presidential Assent</h4>
              <p className="text-xs text-neutral-500 mt-1">
                We must force total legislative withdrawal before reaching this final threshold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
