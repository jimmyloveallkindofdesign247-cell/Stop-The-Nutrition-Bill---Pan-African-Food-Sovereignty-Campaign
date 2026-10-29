export interface PetitionFormData {
  fullName: string;
  email: string;
  country: string;
  comment: string;
}

export interface PetitionSignature {
  id: string;
  fullName: string;
  country: string;
  comment?: string;
  timestamp: string;
  isRecent?: boolean;
}

export interface NewsCardItem {
  id: string;
  tag: string;
  title: string;
  source: string;
  date: string;
  leadSummary: string;
  fullBody: string;
  keyDangers: string[];
  billClause?: string;
  image?: string;
}

export type PlatformId =
  | 'x'
  | 'whatsapp'
  | 'telegram'
  | 'facebook'
  | 'reddit'
  | 'threads'
  | 'instagram'
  | 'tiktok'
  | 'line'
  | 'wechat'
  | 'bilibili';

export interface SocialPlatformConfig {
  id: PlatformId;
  name: string;
  category: 'direct' | 'broadcast' | 'community' | 'messaging';
  description: string;
  accentColor: string;
  supportsDirectShare: boolean;
  samplePost: string;
}
