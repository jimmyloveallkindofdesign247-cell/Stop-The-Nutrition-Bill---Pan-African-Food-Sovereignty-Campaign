import React from 'react';
import { NewsCardItem } from '../types/campaign';
import { X, ShieldAlert, AlertTriangle, FileText, CheckCircle2, Copy } from 'lucide-react';

interface LegislativeDossierModalProps {
  card: NewsCardItem | null;
  onClose: () => void;
  onSignClick: () => void;
  onNotify: (msg: string) => void;
}

export const LegislativeDossierModal: React.FC<LegislativeDossierModalProps> = ({
  card,
  onClose,
  onSignClick,
  onNotify,
}) => {
  if (!card) return null;

  const copyClause = (text: string) => {
    navigator.clipboard.writeText(text);
    onNotify('Legislative clause copied to clipboard!');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="glass-panel-dark rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#FF4D4D]/50 shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#141520]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#FF4D4D]" />
            <span className="font-mono text-xs font-bold text-[#FF4D4D] tracking-widest uppercase">
              LEGAL DOSSIER · {card.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Dossier Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-neutral-200">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              {card.title}
            </h3>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mt-2">
              <span>{card.source}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#FF4D4D]">{card.date}</span>
            </div>
          </div>

          {/* Full Lead & Body */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-300 font-body">
            <p className="font-medium text-white bg-white/5 p-4 rounded-xl border border-white/10">
              {card.leadSummary}
            </p>
            <p>{card.fullBody}</p>
          </div>

          {/* Exact Bill Clause Excerpt */}
          {card.billClause && (
            <div className="p-5 rounded-xl bg-black/60 border border-[#FF4D4D]/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#FF4D4D] font-bold uppercase">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Draft Legislation Clause Excerpt</span>
                </span>
                <button
                  onClick={() => copyClause(card.billClause!)}
                  className="hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Clause</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-200 italic leading-relaxed">
                {card.billClause}
              </p>
            </div>
          )}

          {/* Key Dangers Breakdown */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#FF4D4D]" />
              <span>Civil Liberty & Sovereignty Threats</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {card.keyDangers.map((danger, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-neutral-900/80 border border-neutral-700/80 text-xs text-neutral-300 flex items-start gap-2.5"
                >
                  <span className="text-[#FF4D4D] font-black mt-0.5">✕</span>
                  <span>{danger}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Box in Modal */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#FF4D4D]/20 via-[#FF4D4D]/10 to-transparent border border-[#FF4D4D]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-heading font-bold text-base text-white">
                Demand Immediate Withdrawal of HB 2659
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                Your signature adds legal weight to HURIWA&apos;s memorandum to the National Assembly.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSignClick();
              }}
              className="px-6 py-3 rounded-lg font-heading text-xs uppercase font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-[#FF4D4D]/30"
            >
              Sign the Petition Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
