import React from 'react';
import { ArrowRight, Flame, ShieldAlert, Users, FileText, Globe2, ChevronDown } from 'lucide-react';
import { formatNumber } from '../utils/petition';

interface HeroProps {
  onSignClick: () => void;
  onNewsClick: () => void;
  signatureCount: number;
  goalCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onSignClick,
  onNewsClick,
  signatureCount,
  goalCount,
}) => {
  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FF4D4D]/15 via-[#FF4D4D]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Campaign Active Pill Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4D4D]/10 border border-[#FF4D4D]/40 text-[#FF4D4D] text-xs font-semibold tracking-wide uppercase">
            <Flame className="w-3.5 h-3.5 animate-pulse text-[#FF4D4D]" />
            <span>Emergency Pan-African Civic Action</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">
            Targeting: Nigeria House of Representatives & Pan-African Harmonization Panels
          </span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Copy, Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-white tracking-tight text-balance">
              Protect African Food Sovereignty:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] via-[#ff7878] to-[#FF4D4D]">
                Stop HB 2659
              </span>{' '}
              & Unfair Nutrition Legislation
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-body">
              Nigeria’s National Assembly and pan-African regulatory bodies are pushing
              legislation that threatens indigenous food wisdom, restricts family health freedom,
              and monopolies nutritional guidance. Join millions demanding an immediate withdrawal.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onSignClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-heading text-base font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all shadow-xl shadow-[#FF4D4D]/30 border border-[#FF4D4D] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Sign the Petition</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onNewsClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-heading text-base font-semibold text-white bg-white/5 hover:bg-white/10 transition-all border border-white/20 hover:border-[#FF4D4D]/50 backdrop-blur-md cursor-pointer"
              >
                <span>Read News Updates</span>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Trust and Mobilization Proof Points */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-300 font-mono">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#FF4D4D]" />
                <span>Sponsored by Hon. Chike Okafor (HB 2659)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF4D4D]" />
                <span>2,100+ Citizen Petitioners via HURIWA</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#FF4D4D]" />
                <span>Active Coalitions in West, East & Southern Africa</span>
              </div>
            </div>
          </div>

          {/* Column 2: Marquee High-Impact Visual Asset & Live Petition Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel-dark p-2 border border-[#FF4D4D]/30 shadow-2xl">
              {/* Generated Hero Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src="/src/assets/images/hero_african_food_sovereignty_1793281804907.jpg"
                  alt="African agricultural market leaders and food sovereignty collective standing together in solidarity"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/40 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
                    Defend Indigenous Harvests & Healing Herbs
                  </span>
                  <span className="font-mono text-[#FF4D4D] font-bold bg-[#FF4D4D]/10 px-2 py-0.5 rounded border border-[#FF4D4D]/30">
                    #FreeAfrica
                  </span>
                </div>
              </div>

              {/* Floating Live Metric Overlay */}
              <div className="p-4 sm:p-5 space-y-3 bg-[#13141C]/80 rounded-xl mt-2 border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                    Verified Petition Signatures
                  </span>
                  <span className="text-xs font-mono font-bold text-[#FF4D4D]">
                    Goal: {formatNumber(goalCount)}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
                    {formatNumber(signatureCount)}
                  </span>
                  <span className="text-xs text-neutral-400 font-body">citizens demanding withdrawal</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-neutral-800 rounded-full h-2.5 overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-[#FF4D4D] to-[#ff7878] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, (signatureCount / goalCount) * 100)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono pt-1">
                  <span>84.2% of milestone reached</span>
                  <span className="text-white font-medium">Join before next hearing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Impact Strip Below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16">
          <div className="glass-panel-subtle rounded-xl p-4 sm:p-5 border border-white/10">
            <div className="text-[#FF4D4D] text-xs font-mono font-bold uppercase mb-1">Bill Status</div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">HB 2659</div>
            <div className="text-xs text-neutral-400 mt-1">Under National Assembly scrutiny</div>
          </div>

          <div className="glass-panel-subtle rounded-xl p-4 sm:p-5 border border-white/10">
            <div className="text-[#FF4D4D] text-xs font-mono font-bold uppercase mb-1">Civil Rights Lead</div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">HURIWA</div>
            <div className="text-xs text-neutral-400 mt-1">2,100+ co-petitioning citizens</div>
          </div>

          <div className="glass-panel-subtle rounded-xl p-4 sm:p-5 border border-white/10">
            <div className="text-[#FF4D4D] text-xs font-mono font-bold uppercase mb-1">Penalty Risk</div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">24 Mos / Fines</div>
            <div className="text-xs text-neutral-400 mt-1">For uncertified community guidance</div>
          </div>

          <div className="glass-panel-subtle rounded-xl p-4 sm:p-5 border border-white/10">
            <div className="text-[#FF4D4D] text-xs font-mono font-bold uppercase mb-1">Pan-African Scope</div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">3 Regions</div>
            <div className="text-xs text-neutral-400 mt-1">West, East & Southern Africa alerts</div>
          </div>
        </div>
      </div>
    </section>
  );
};
