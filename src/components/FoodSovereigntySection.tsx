import React from 'react';
import { CORE_DEMANDS } from '../data/campaignData';
import { Shield, Sparkles, CheckCircle2, AlertOctagon, HeartHandshake, Leaf } from 'lucide-react';

interface FoodSovereigntySectionProps {
  onSignClick: () => void;
}

export const FoodSovereigntySection: React.FC<FoodSovereigntySectionProps> = ({ onSignClick }) => {
  return (
    <section id="food-sovereignty" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF4D4D] tracking-widest uppercase mb-3">
            <Leaf className="w-4 h-4 text-[#FF4D4D]" />
            <span>Ancestral Wisdom vs. Regulatory Monopoly</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight text-balance">
            Why We Say No to Criminalizing Traditional Nutrition
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-body">
            For centuries before colonial border lines or corporate trade bodies, African
            communities cultivated resilient food ways. HB 2659 treats this living heritage as
            unlicensed contraband.
          </p>
        </div>

        {/* Side-by-Side Clause Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Box 1: What HB 2659 & Unfair Bills Enforce */}
          <div className="glass-panel-dark rounded-2xl p-6 sm:p-8 border border-[#FF4D4D]/40 relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-lg bg-[#FF4D4D]/20 text-[#FF4D4D]">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF4D4D] font-bold">
                  What Proposed Legislation Imposes
                </span>
                <h3 className="text-xl font-heading font-bold text-white">Centralized Monopoly & Penalties</h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FF4D4D] font-bold text-base mt-0.5">✕</span>
                <div>
                  <strong className="text-white">Criminal Sanctions for Community Elders:</strong> Up to 24 months imprisonment or massive statutory fines for anyone sharing dietary or herbal wellness recommendations without council licensing.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4D4D] font-bold text-base mt-0.5">✕</span>
                <div>
                  <strong className="text-white">Commercial Exclusion of Local Fermentation:</strong> Traditional fermented staples (iru, ogiri, dawadawa, sour porridge) face arbitrary barriers, favoring foreign fortified powders.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4D4D] font-bold text-base mt-0.5">✕</span>
                <div>
                  <strong className="text-white">Gatekeeping by Corporate Accreditation:</strong> Foreign industrial nutrition lobbies dictate what qualifies as &ldquo;scientifically verified&rdquo; sustenance, stripping communities of local autonomy.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4D4D] font-bold text-base mt-0.5">✕</span>
                <div>
                  <strong className="text-white">Erosion of Family Health Sovereignty:</strong> Parents, herbalists, and traditional birth attendants lose the legal right to prescribe ancestral post-partum and infant culinary broths.
                </div>
              </li>
            </ul>
          </div>

          {/* Box 2: What Pan-African Communities Demand */}
          <div className="glass-panel-dark rounded-2xl p-6 sm:p-8 border border-white/20 relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  What The People Demand
                </span>
                <h3 className="text-xl font-heading font-bold text-white">Food Freedom & Cultural Integrity</h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
                <div>
                  <strong className="text-white">Total Withdrawal of HB 2659:</strong> Complete rescission of the Nutritionists Registration Council Bill from the Nigeria National Assembly order paper.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
                <div>
                  <strong className="text-white">Statutory Heritage Exemption:</strong> Explicit statutory immunity protecting generational herbalists, mothers, cooks, and community health guides.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
                <div>
                  <strong className="text-white">Promotion of Indigenous Agroecology:</strong> Direct public investment into smallholder farmers cultivating fonio, sorghum, cassava, moringa, and native legumes.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
                <div>
                  <strong className="text-white">Community-Led Governance:</strong> Participatory oversight where civil society, herbal practitioners, and agroecological researchers sit as equals.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Demands Card Strip */}
        <div className="glass-panel-subtle rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#FF4D4D] font-bold mb-2">
            The Coalition Manifesto
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-6">
            Our 3 Non-Negotiable Demands to the National Assembly
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_DEMANDS.map((demand, index) => (
              <div key={index} className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <h4 className="font-heading font-bold text-white text-base">
                  {demand.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-body">
                  {demand.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onSignClick}
              className="px-6 py-3 rounded-lg font-heading text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all cursor-pointer shadow-lg shadow-[#FF4D4D]/25"
            >
              Endorse These Demands — Sign the Petition
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
