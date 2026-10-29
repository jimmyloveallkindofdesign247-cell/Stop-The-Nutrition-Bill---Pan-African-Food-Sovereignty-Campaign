import React, { useState } from 'react';
import { AlertCircle, Menu, X, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onSignClick: () => void;
  onNewsClick: () => void;
  signatureCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onSignClick, onNewsClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0B0C10]/90 border-b border-[#FF4D4D]/25 transition-all">
      {/* Emergency Global Urgency Strip */}
      <div className="bg-[#FF4D4D] text-[#0B0C10] px-4 py-1.5 text-xs font-bold tracking-wider flex items-center justify-center gap-2 uppercase">
        <AlertCircle className="w-4 h-4 shrink-0 animate-pulse text-[#0B0C10]" />
        <span>URGENT: NIGERIA HB 2659 FACES PARLIAMENTARY DELIBERATION · OVER 2,100 CITIZENS & HURIWA DEMAND WITHDRAWAL</span>
      </div>

      {/* Main Top Bar Contract: Zone 1 - Zone 2 - Zone 3 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 sm:gap-6">
        {/* Zone 1: Brand Wordmark with emergency tag */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] rounded-sm py-1"
          >
            <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D4D] shrink-0" />
            <span className="font-heading font-black text-base sm:text-lg tracking-tight text-white uppercase whitespace-nowrap">
              STOP THE <span className="text-[#FF4D4D]">NUTRITION BILL</span>
            </span>
          </a>
          {/* Emergency Visual Tag [CAMPAIGN ACTIVE] */}
          <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest text-[#FF4D4D] bg-[#FF4D4D]/10 border border-[#FF4D4D]/40 whitespace-nowrap">
            [CAMPAIGN ACTIVE]
          </span>
        </div>

        {/* Zone 2: 4 Single-Line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-neutral-300">
          <button
            onClick={() => scrollToSection('legislative-tracker')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            HB 2659 Tracker
          </button>
          <button
            onClick={onNewsClick}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            Bill Analysis
          </button>
          <button
            onClick={() => scrollToSection('food-sovereignty')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            Food Sovereignty
          </button>
          <button
            onClick={() => scrollToSection('social-advocacy')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            Social Hub (#FreeAfrica)
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onSignClick}
            className="px-3 sm:px-4 py-2 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF4D4D] hover:bg-[#ff3333] shadow-lg shadow-[#FF4D4D]/25 transition-all border border-[#FF4D4D] cursor-pointer whitespace-nowrap"
          >
            <span className="sm:hidden">Sign</span>
            <span className="hidden sm:inline">Sign the Petition</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-md border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0C10]/95 px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center pb-2 border-b border-white/10">
            <span className="text-[11px] font-mono text-[#FF4D4D] font-bold">
              STATUS: [CAMPAIGN ACTIVE] · PAN-AFRICAN SOLIDARITY
            </span>
          </div>
          <button
            onClick={() => scrollToSection('legislative-tracker')}
            className="block w-full text-left py-2 text-sm text-neutral-200 hover:text-[#FF4D4D]"
          >
            HB 2659 Legislative Tracker
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNewsClick();
            }}
            className="block w-full text-left py-2 text-sm text-neutral-200 hover:text-[#FF4D4D]"
          >
            Bill Analysis & HURIWA Legal Memorandum
          </button>
          <button
            onClick={() => scrollToSection('food-sovereignty')}
            className="block w-full text-left py-2 text-sm text-neutral-200 hover:text-[#FF4D4D]"
          >
            Food Sovereignty & Indigenous Wisdom
          </button>
          <button
            onClick={() => scrollToSection('social-advocacy')}
            className="block w-full text-left py-2 text-sm text-neutral-200 hover:text-[#FF4D4D]"
          >
            Social Advocacy Grid (#FreeAfrica)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onSignClick();
            }}
            className="w-full mt-2 py-3 text-center rounded-md font-heading text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333]"
          >
            Sign the Emergency Petition
          </button>
        </div>
      )}
    </header>
  );
};
