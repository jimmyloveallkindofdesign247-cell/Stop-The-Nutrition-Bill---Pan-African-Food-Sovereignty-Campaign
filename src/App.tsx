import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegislativeTracker } from './components/LegislativeTracker';
import { FoodSovereigntySection } from './components/FoodSovereigntySection';
import { SocialAdvocacyGrid } from './components/SocialAdvocacyGrid';
import { PetitionSection } from './components/PetitionSection';
import { StickyProgressFooter } from './components/StickyProgressFooter';
import { LegislativeDossierModal } from './components/LegislativeDossierModal';
import { Footer } from './components/Footer';
import { CAMPAIGN_STATS, INITIAL_SIGNATURES, LEGISLATIVE_CARDS } from './data/campaignData';
import { NewsCardItem, PetitionSignature } from './types/campaign';
import { CheckCircle2, Info } from 'lucide-react';

export default function App() {
  const [signatureCount, setSignatureCount] = useState<number>(CAMPAIGN_STATS.currentSignatures);
  const [signatures, setSignatures] = useState<PetitionSignature[]>(INITIAL_SIGNATURES);
  const [selectedDossierCard, setSelectedDossierCard] = useState<NewsCardItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleSignPetitionClick = () => {
    const el = document.getElementById('petition-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first input
      setTimeout(() => {
        const input = document.getElementById('fullName');
        input?.focus();
      }, 500);
    }
  };

  const handleReadNewsClick = () => {
    const el = document.getElementById('legislative-tracker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewSignature = (newSigner: PetitionSignature) => {
    setSignatureCount((prev) => prev + 1);
    setSignatures((prev) => [newSigner, ...prev]);
    showNotification(`Thank you ${newSigner.fullName}! Your voice was added.`);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0B0C10] via-[#1A1A24] to-[#FFFFFF] text-white flex flex-col font-body selection:bg-[#FF4D4D] selection:text-white">
      {/* Top Header */}
      <Header
        onSignClick={handleSignPetitionClick}
        onNewsClick={handleReadNewsClick}
        signatureCount={signatureCount}
      />

      {/* Main Campaign Content */}
      <main className="flex-1">
        {/* Section 1 & 2: Hero Section */}
        <Hero
          onSignClick={handleSignPetitionClick}
          onNewsClick={handleReadNewsClick}
          signatureCount={signatureCount}
          goalCount={CAMPAIGN_STATS.goalSignatures}
        />

        {/* Section 3: Live News & Legislative Tracker */}
        <LegislativeTracker
          onSelectCard={(card) => setSelectedDossierCard(card)}
          onSignClick={handleSignPetitionClick}
        />

        {/* Food Sovereignty & Clause Comparison Section */}
        <FoodSovereigntySection onSignClick={handleSignPetitionClick} />

        {/* Section 4: Advocacy & Social Sharing Grid */}
        <SocialAdvocacyGrid onNotify={showNotification} />

        {/* Section 5: Petition Form & Signers Stream (Transitions onto crisp white base) */}
        <PetitionSection
          onSignSuccess={handleNewSignature}
          signatures={signatures}
          signatureCount={signatureCount}
          goalCount={CAMPAIGN_STATS.goalSignatures}
        />
      </main>

      {/* Action Footer */}
      <Footer />

      {/* Sticky Progress Footer with Live Counter & Progress Bar */}
      <StickyProgressFooter
        signatureCount={signatureCount}
        goalCount={CAMPAIGN_STATS.goalSignatures}
        onSignClick={handleSignPetitionClick}
      />

      {/* Detailed Legislative Dossier Modal */}
      <LegislativeDossierModal
        card={selectedDossierCard}
        onClose={() => setSelectedDossierCard(null)}
        onSignClick={handleSignPetitionClick}
        onNotify={showNotification}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 sm:right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-neutral-900/95 text-white border border-[#FF4D4D]/50 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-[#FF4D4D] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
