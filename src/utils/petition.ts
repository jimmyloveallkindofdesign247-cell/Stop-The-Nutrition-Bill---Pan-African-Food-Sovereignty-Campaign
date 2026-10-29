import { PetitionFormData, PlatformId } from '../types/campaign';

export interface ValidationResult {
  isValid: boolean;
  errors: {
    fullName?: string;
    email?: string;
    country?: string;
  };
}

export function validatePetitionForm(data: PetitionFormData): ValidationResult {
  const errors: { fullName?: string; email?: string; country?: string } = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.country || data.country.trim() === '') {
    errors.country = 'Please select your country or region.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function calculateGoalProgress(current: number, goal: number): number {
  if (goal <= 0) return 100;
  const percentage = (current / goal) * 100;
  return Math.min(100, Math.max(0, parseFloat(percentage.toFixed(1))));
}

export function generatePostContent(
  platformId: PlatformId,
  hashtags: string[] = ['#FreeAfrica', '#StoptheNutritionBill'],
  customUrl?: string
): string {
  const url = customUrl || (typeof window !== 'undefined' ? window.location.href : 'https://stopnutritionbill.africa');
  const tagString = hashtags.join(' ');

  switch (platformId) {
    case 'x':
    case 'threads':
      return `URGENT: Protect African Food Sovereignty! Nigeria's National Assembly & regional bodies are pushing HB 2659 which restricts traditional nutrition wisdom and criminalizes community food practices. Demand immediate withdrawal now: ${url} ${tagString}`;
    case 'whatsapp':
    case 'telegram':
      return `🚨 *EMERGENCY CAMPAIGN: STOP THE NUTRITION BILL (HB 2659)*\n\nAfrican families, indigenous crops, and herbal nutrition traditions are under threat from proposed monopoly licensing laws.\n\nOver 2,100+ citizens and HURIWA have petitioned the Nigerian National Assembly for immediate withdrawal.\n\n✍️ *Add your voice now:* ${url}\n\n${tagString}`;
    case 'facebook':
    case 'reddit':
      return `Defend African Food Sovereignty: Nigeria's National Assembly is considering HB 2659 (The Nutritionists Registration Council Bill). This legislation threatens family food freedom, indigenous recipes, and community herbal knowledge under heavy fines and centralized monopolies. Stand with grassroots coalitions across Africa to demand total withdrawal: ${url} ${tagString}`;
    case 'instagram':
    case 'tiktok':
      return `Our ancestors gave us food wisdom. We will not allow it to be criminalized by corporate nutrition monopolies! Stand up against HB 2659. Link in bio to sign the petition. ${tagString} #FoodSovereignty #PanAfrican`;
    case 'line':
    case 'wechat':
    case 'bilibili':
      return `Defend indigenous food rights and health freedom in Africa. Reject HB 2659 and monopolized nutritional control. Sign and share: ${url} ${tagString}`;
    default:
      return `Stand for African Food Sovereignty. Stop HB 2659 now: ${url} ${tagString}`;
  }
}

export function getShareUrl(platformId: PlatformId, shareText: string, targetUrl: string): string | null {
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(targetUrl);

  switch (platformId) {
    case 'x':
      return `https://twitter.com/intent/tweet?text=${encodedText}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodedText}`;
    case 'telegram':
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(shareText.replace(targetUrl, ''))}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
    case 'reddit':
      return `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent('Protect African Food Sovereignty - Stop HB 2659')}`;
    case 'threads':
      return `https://www.threads.net/intent/post?text=${encodedText}`;
    case 'line':
      return `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`;
    default:
      return null;
  }
}
