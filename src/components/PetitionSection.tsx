import React, { useState } from 'react';
import { AFRICAN_COUNTRIES } from '../data/campaignData';
import { PetitionFormData, PetitionSignature } from '../types/campaign';
import { validatePetitionForm } from '../utils/petition';
import { CheckCircle2, ShieldCheck, HeartHandshake, UserPlus, AlertCircle, Sparkles } from 'lucide-react';

interface PetitionSectionProps {
  onSignSuccess: (newSigner: PetitionSignature) => void;
  signatures: PetitionSignature[];
  signatureCount: number;
  goalCount: number;
}

export const PetitionSection: React.FC<PetitionSectionProps> = ({
  onSignSuccess,
  signatures,
  signatureCount,
  goalCount,
}) => {
  const [formData, setFormData] = useState<PetitionFormData>({
    fullName: '',
    email: '',
    country: 'Nigeria',
    comment: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string; country?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSignedName, setLastSignedName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validatePetitionForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const newSignature: PetitionSignature = {
      id: `sig-${Date.now()}`,
      fullName: formData.fullName.trim(),
      country: formData.country,
      comment: formData.comment.trim() || undefined,
      timestamp: 'Just now',
      isRecent: true,
    };

    onSignSuccess(newSignature);
    setLastSignedName(formData.fullName.trim());
    setIsSubmitted(true);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      country: 'Nigeria',
      comment: '',
    });
  };

  return (
    <section id="petition-section" className="py-20 relative text-neutral-900 transition-all scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading on Light Background */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 text-[#FF4D4D] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-4 h-4 text-[#FF4D4D]" />
            <span>Official Citizen Memorandum</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#121212] tracking-tight text-balance">
            Add Your Voice — Demand the Immediate Withdrawal of HB 2659
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-body">
            Every signature strengthens the official coalition memorandum delivered directly to the
            Speaker of the House of Representatives, Hon. Tajudeen Abbas, and the Chairman of the
            House Committee on Health Institutions.
          </p>
        </div>

        {/* 2-Column Action Section: Form on Left, Live Verified Signers on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: Petition Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#FF4D4D]/30 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#121212]">
                    Thank You, {lastSignedName}!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Your signature has been officially recorded in the citizen defense ledger and
                    added to the pan-African petition queue.
                  </p>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-mono space-y-1">
                    <div>Petition Target: National Assembly of Nigeria</div>
                    <div className="text-[#FF4D4D] font-bold">Action: Total Rescission of HB 2659</div>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-neutral-700 bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
                    >
                      Sign for Another Family Member
                    </button>
                    <a
                      href="#social-advocacy"
                      className="px-6 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#FF4D4D] hover:bg-[#ff3333] shadow"
                    >
                      Share on Social Media
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="pb-3 border-b border-neutral-100 flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-[#121212]">
                      Sign the Petition
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Step 1 of 1 · Takes 30 seconds
                    </span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                      Full Name <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Amara Okonkwo / Kwame Mensah"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-sm text-[#121212] bg-neutral-50 border transition-all focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-[#FF4D4D] focus:ring-[#FF4D4D]'
                          : 'border-neutral-200 focus:border-[#FF4D4D] focus:ring-[#FF4D4D]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#FF4D4D] flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                      Email Address <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. yourname@domain.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-sm text-[#121212] bg-neutral-50 border transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-[#FF4D4D] focus:ring-[#FF4D4D]'
                          : 'border-neutral-200 focus:border-[#FF4D4D] focus:ring-[#FF4D4D]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#FF4D4D] flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Country/Region */}
                  <div>
                    <label htmlFor="country" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                      Country / Region <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => {
                        setFormData({ ...formData, country: e.target.value });
                        if (errors.country) setErrors({ ...errors, country: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-lg text-sm text-[#121212] bg-neutral-50 border border-neutral-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/20 focus:border-[#FF4D4D]"
                    >
                      {AFRICAN_COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Comment */}
                  <div>
                    <label htmlFor="comment" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                      Why does African Food Sovereignty matter to you? (Optional)
                    </label>
                    <textarea
                      id="comment"
                      rows={3}
                      placeholder="Share a short note about protecting family recipes, indigenous herbs, or community healers..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm text-[#121212] bg-neutral-50 border border-neutral-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/20 focus:border-[#FF4D4D]"
                    />
                  </div>

                  {/* Submit Button (Light Red accent button reading "Add My Voice — Stop The Bill") */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-lg font-heading text-base font-bold text-white bg-[#FF4D4D] hover:bg-[#ff3333] transition-all shadow-xl shadow-[#FF4D4D]/30 border border-[#FF4D4D] cursor-pointer hover:scale-[1.005] active:scale-[0.995]"
                    >
                      Add My Voice — Stop The Bill
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-2 text-xs text-neutral-500 font-mono text-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your privacy is safeguarded. Data used strictly for parliamentary petitioning.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Live Signers Stream & Community Quotes (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900 rounded-2xl p-6 sm:p-7 text-white border border-neutral-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-[#FF4D4D]" />
                  <h3 className="font-heading font-bold text-lg text-white">
                    Live Verified Signers
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#FF4D4D] bg-[#FF4D4D]/10 px-2.5 py-0.5 rounded border border-[#FF4D4D]/30">
                  REAL-TIME STREAM
                </span>
              </div>

              {/* Signatures List */}
              <div className="mt-4 space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
                {signatures.map((sig) => (
                  <div
                    key={sig.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      sig.isRecent
                        ? 'bg-[#FF4D4D]/10 border-[#FF4D4D]/50'
                        : 'bg-neutral-800/60 border-neutral-700/60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading font-bold text-white">
                        {sig.fullName}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {sig.timestamp}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#FF4D4D] font-mono mt-0.5">
                      {sig.country}
                    </div>
                    {sig.comment && (
                      <p className="mt-2 text-xs text-neutral-300 italic font-body leading-relaxed">
                        &ldquo;{sig.comment}&rdquo;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Guarantee Card */}
            <div className="bg-neutral-100 rounded-2xl p-6 border border-neutral-200">
              <h4 className="font-heading font-bold text-sm text-[#121212] mb-2">
                Legal Accountability & Civil Rights Guarantee
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-body">
                This petition is managed under the coalition stewardship of civil society organizations
                including HURIWA (Human Rights Writers Association of Nigeria) and pan-African food
                sovereignty partners. Certified signatures will be formally bound and presented to the
                leadership of the National Assembly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
