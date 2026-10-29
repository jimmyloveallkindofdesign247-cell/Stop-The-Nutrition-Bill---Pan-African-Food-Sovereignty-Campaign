import React, { useState } from 'react';
import { SOCIAL_PLATFORMS } from '../data/campaignData';
import { PlatformId, SocialPlatformConfig } from '../types/campaign';
import { generatePostContent, getShareUrl } from '../utils/petition';
import {
  Copy,
  Check,
  Share2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Send,
  QrCode,
  Flame,
} from 'lucide-react';

interface SocialAdvocacyGridProps {
  onNotify: (msg: string) => void;
}

export const SocialAdvocacyGrid: React.FC<SocialAdvocacyGridProps> = ({ onNotify }) => {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatformConfig>(
    SOCIAL_PLATFORMS[0]
  );
  const [selectedTone, setSelectedTone] = useState<'urgent' | 'ancestral' | 'criminalization'>('urgent');
  const [customTextCopied, setCustomTextCopied] = useState(false);
  const [qrModalPlatform, setQrModalPlatform] = useState<SocialPlatformConfig | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTag(label);
      onNotify(`Copied ${label} to clipboard!`);
      setTimeout(() => setCopiedTag(null), 2500);
    } catch {
      onNotify(`Copied: ${text}`);
    }
  };

  const getCustomMessage = (platform: PlatformId, tone: 'urgent' | 'ancestral' | 'criminalization') => {
    const defaultPost = generatePostContent(platform);
    if (tone === 'ancestral') {
      return `Our ancestors nourished generations with fonio, moringa, hibiscus and native herbs. We will NOT allow commercial cartels to criminalize our herbal heritage through Nigeria HB 2659! Stand for African Food Sovereignty. #FreeAfrica #StoptheNutritionBill`;
    }
    if (tone === 'criminalization') {
      return `NO MOTHER OR ELDER SHOULD BE JAILED FOR SHARING RECIPES. Nigeria HB 2659 proposes up to 2 years imprisonment for uncertified nutritional advice. Join 2,100+ citizens and HURIWA demanding total withdrawal. #FreeAfrica #StoptheNutritionBill`;
    }
    return defaultPost;
  };

  const currentPostText = getCustomMessage(selectedPlatform.id, selectedTone);

  const handleShareClick = (platform: SocialPlatformConfig) => {
    setSelectedPlatform(platform);
    const postText = getCustomMessage(platform.id, selectedTone);
    const targetUrl = typeof window !== 'undefined' ? window.location.href : 'https://stopnutritionbill.africa';
    const shareUrl = getShareUrl(platform.id, postText, targetUrl);

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
      onNotify(`Opening ${platform.name} share composer...`);
    } else {
      // Platform requires manual copy paste or QR (Instagram, TikTok, WeChat, Bilibili)
      setQrModalPlatform(platform);
      copyToClipboard(postText, `${platform.name} caption`);
    }
  };

  return (
    <section id="social-advocacy" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF4D4D] tracking-widest uppercase mb-3">
            <Share2 className="w-4 h-4 text-[#FF4D4D]" />
            <span>Continental Digital Storm</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Advocacy & Social Sharing Grid
          </h2>
          <p className="mt-3 text-base text-neutral-300 font-body">
            Social pressure works. Lawmakers monitor trends daily. Flood parliamentary feeds,
            WhatsApp groups, and community channels with one click.
          </p>
        </div>

        {/* Hashtag Focus Boxes (Highlight #FreeAfrica and #StoptheNutritionBill in prominent light-red highlighted copy boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Hashtag 1: #FreeAfrica */}
          <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FF4D4D]/10 border-2 border-[#FF4D4D] shadow-xl shadow-[#FF4D4D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-bold">
                Primary Pan-African Movement Tag
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#FF4D4D] tracking-tight">
                #FreeAfrica
              </div>
              <p className="text-xs text-neutral-300">
                Signals continental solidarity against corporate food and health colonization.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard('#FreeAfrica', '#FreeAfrica')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-heading text-xs uppercase font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all shadow cursor-pointer whitespace-nowrap"
            >
              {copiedTag === '#FreeAfrica' ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied Tag!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Tag</span>
                </>
              )}
            </button>
          </div>

          {/* Hashtag 2: #StoptheNutritionBill */}
          <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FF4D4D]/10 border-2 border-[#FF4D4D] shadow-xl shadow-[#FF4D4D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-bold">
                Direct Legislative Campaign Tag
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#FF4D4D] tracking-tight break-all sm:break-normal">
                #StoptheNutritionBill
              </div>
              <p className="text-xs text-neutral-300">
                Directly alerts National Assembly leadership and bill sponsor Hon. Chike Okafor.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard('#StoptheNutritionBill', '#StoptheNutritionBill')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-heading text-xs uppercase font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all shadow cursor-pointer whitespace-nowrap"
            >
              {copiedTag === '#StoptheNutritionBill' ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied Tag!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Tag</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 11+ Social Platform Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold text-lg text-white">
              11+ Social Platforms: One-Click Instant Mobilization
            </h3>
            <span className="text-xs font-mono text-neutral-400">Select any platform to share</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SOCIAL_PLATFORMS.map((platform) => {
              const isSelected = selectedPlatform.id === platform.id;
              return (
                <button
                  key={platform.id}
                  onClick={() => handleShareClick(platform)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer group ${
                    isSelected
                      ? 'bg-neutral-800 border-[#FF4D4D] shadow-lg shadow-[#FF4D4D]/20'
                      : 'bg-neutral-900/60 hover:bg-neutral-800/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white group-hover:text-[#FF4D4D] transition-colors">
                      {platform.name}
                    </span>
                    {platform.supportsDirectShare ? (
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                    ) : (
                      <QrCode className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                    )}
                  </div>
                  <div className="text-[11px] text-neutral-400 line-clamp-2">
                    {platform.description}
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#FF4D4D] font-semibold uppercase">
                    <span>{platform.supportsDirectShare ? 'Launch & Share' : 'Copy & Post'}</span>
                    <span>→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Custom Post Composer Box */}
        <div className="glass-panel-dark rounded-2xl p-6 sm:p-8 border border-[#FF4D4D]/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-mono font-bold text-[#FF4D4D] uppercase">
                One-Click Action Center
              </div>
              <h3 className="text-xl font-heading font-bold text-white mt-1">
                Pre-Populated Campaign Broadcast for {selectedPlatform.name}
              </h3>
            </div>

            {/* Tone selector */}
            <div className="flex items-center gap-1 p-1 bg-black/50 rounded-lg border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setSelectedTone('urgent')}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                  selectedTone === 'urgent'
                    ? 'bg-[#FF4D4D] text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Urgent Action
              </button>
              <button
                onClick={() => setSelectedTone('ancestral')}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                  selectedTone === 'ancestral'
                    ? 'bg-[#FF4D4D] text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Ancestral Herbs
              </button>
              <button
                onClick={() => setSelectedTone('criminalization')}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                  selectedTone === 'criminalization'
                    ? 'bg-[#FF4D4D] text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Family Rights
              </button>
            </div>
          </div>

          {/* Text preview area */}
          <div className="relative">
            <textarea
              readOnly
              value={currentPostText}
              rows={4}
              className="w-full rounded-xl bg-black/60 border border-white/15 p-4 text-sm sm:text-base text-neutral-100 font-mono leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#FF4D4D]"
            />
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs text-neutral-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Optimized character count & tag weighting</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(currentPostText);
                  setCustomTextCopied(true);
                  onNotify('Custom post copied to clipboard!');
                  setTimeout(() => setCustomTextCopied(false), 2000);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-heading text-xs uppercase font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                {customTextCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleShareClick(selectedPlatform)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-heading text-xs uppercase font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] border border-[#FF4D4D] shadow-lg shadow-[#FF4D4D]/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch Share on {selectedPlatform.name}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Visual & Messaging platforms without direct web intent (Instagram, TikTok, WeChat, Bilibili) */}
        {qrModalPlatform && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="glass-panel-dark rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#FF4D4D]/40 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-[#FF4D4D]" />
                  <h4 className="font-heading font-bold text-lg text-white">
                    Share to {qrModalPlatform.name}
                  </h4>
                </div>
                <button
                  onClick={() => setQrModalPlatform(null)}
                  className="text-neutral-400 hover:text-white p-1 rounded"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
                ✓ Post caption and hashtags copied to your clipboard!
              </div>

              <p className="text-sm text-neutral-300">
                Because {qrModalPlatform.name} runs predominantly on mobile apps, paste the copied
                campaign statement into your feed or story along with our campaign link:
              </p>

              <div className="p-3 bg-black/60 rounded-lg text-xs font-mono text-[#FF4D4D] border border-white/10 break-all select-all">
                https://stopnutritionbill.africa #FreeAfrica #StoptheNutritionBill
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setQrModalPlatform(null)}
                  className="px-5 py-2.5 rounded-lg font-heading text-xs font-bold uppercase text-white bg-[#FF4D4D] hover:bg-[#ff3333]"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
