import { NewsCardItem, SocialPlatformConfig, PetitionSignature } from '../types/campaign';

export const CAMPAIGN_STATS = {
  currentSignatures: 84219,
  goalSignatures: 100000,
  countriesRepresented: 48,
  civilSocietyGroups: 34,
  daysActive: 42,
};

export const LEGISLATIVE_CARDS: NewsCardItem[] = [
  {
    id: 'hb-2659-nigeria',
    tag: 'NIGERIA · HB 2659 IN ASSEMBLY',
    title: "Nigeria's National Assembly Pushes HB 2659",
    source: 'National Assembly Gazette & HURIWA Legal Memorandum',
    date: 'Active Session 2025/2026',
    leadSummary:
      "Nigeria's National Assembly Pushes HB 2659 — The Nutritionists Registration Council of Nigeria Bill (2025/2026), sponsored by Hon. Chike Okafor, faces national backlash as over 2,100 citizens and civil rights groups (HURIWA) petition for immediate withdrawal over criminalization of traditional food guidance.",
    fullBody:
      'House Bill 2659 seeks to establish a monopolistic regulatory council with expansive, unchecked powers to police, license, and penalize any individual providing nutrition recommendations. Under Section 17 & 21 of the draft, providing non-registered dietary advice or selling traditional food preparations without council certification carries steep financial penalties and possible imprisonment of up to 2 years. The Human Rights Writers Association of Nigeria (HURIWA) alongside a coalition of over 2,100 civil society petitioners has submitted an emergency memorandum to the Speaker of the House of Representatives demanding the bill be halted immediately.',
    keyDangers: [
      'Criminalizes traditional herbalists, birth attendants, and elders giving ancestral dietary guidance',
      'Imposes severe fines and prison terms up to 24 months for unlicensed nutritional counsel',
      'Concentrates accreditation in a single body susceptible to multinational food lobbying',
      'Leaves zero statutory exemptions for community health volunteers and rural culinary leaders',
    ],
    billClause: 'Section 19(2) & 22(1): "Any person not being a registered dietitian or nutritionist who practices, takes or uses the title or gives dietary counseling for consideration or public advice commits an offence."',
    image: '/src/assets/images/legislative_assembly_petition_1793281805663.jpg',
  },
  {
    id: 'food-sovereignty-risk',
    tag: 'SYSTEMIC RISK · SOVEREIGNTY',
    title: 'Food Sovereignty & Ancestral Knowledge at Risk',
    source: 'Pan-African Agroecology & Food Sovereignty Watch',
    date: 'Policy Brief',
    leadSummary:
      'Vague language in proposed bills fails to protect generational family recipes, traditional herbs, and local food knowledge, opening doors to centralized regulatory monopolies and unrestricted foreign influence.',
    fullBody:
      'Across the continent, industrial agribusiness and ultra-processed food conglomerates have steadily pushed standardized regulatory templates into national parliaments. By framing nutrition through a rigid pharmaceutical lens, indigenous superfoods—such as fonio, teff, moringa, hibiscus sabdariffa, bitter leaf, and fermented locust beans (iru/ogiri)—are pushed to the regulatory margins while synthetic processed food products receive streamlined compliance pathways.',
    keyDangers: [
      'Stigmatizes generational African culinary wisdom in favor of imported ultra-processed standards',
      'Disempowers female food artisans, grain millers, and local fermentation cooperatives',
      'Paves the way for mandatory corporate certifications on indigenous staple preservation',
      'Weakens community resilience against global food supply disruptions',
    ],
    billClause: 'Regulatory standard definition: restricts "therapeutic diet planning" to proprietary chemical matrices while omitting indigenous botanical taxonomies.',
    image: '/src/assets/images/hero_african_food_sovereignty_1793281804907.jpg',
  },
  {
    id: 'pan-african-mobilization',
    tag: 'REGIONAL ALLIANCE · EXPANSION',
    title: 'Pan-African Grassroots Mobilization Expands',
    source: 'West, East & Southern Africa Coalition Dispatch',
    date: 'Coalition Alert',
    leadSummary:
      'Grassroots coalition expands across West, East, and Southern Africa to defend community-based nutrition and protect smallholder food ecosystems.',
    fullBody:
      'What began as a domestic fight against Nigeria HB 2659 has catalyzed an interconnected regional defense. Activists from Ghana (Food Sovereignty Ghana), Kenya (Biovision Africa Trust), South Africa (Surplus People Project), and Senegal have coordinated alerts against uniform model bills being quietly introduced in regional bodies (ECOWAS & EAC health harmonization committees). Civil society organizations are calling for a formal African Charter for Indigenous Food Protection.',
    keyDangers: [
      'Model legislation being replicated across ECOWAS, EAC, and SADC national assemblies',
      'Undermining the African Union’s own declaration on agroecology and traditional medicine',
      'Depriving rural populations of low-cost, nutrient-dense ancestral foods',
      'Silencing community-led public health education outside elite urban medical centers',
    ],
    billClause: 'Harmonization Annex 4: Recommends criminalizing uncertified dietary communication across regional borders.',
    image: '/src/assets/images/pan_african_community_rally_1793281805378.jpg',
  },
];

export const SOCIAL_PLATFORMS: SocialPlatformConfig[] = [
  {
    id: 'x',
    name: 'X (Twitter)',
    category: 'direct',
    description: 'Broadcast to policymakers, journalists & National Assembly reps',
    accentColor: '#000000',
    supportsDirectShare: true,
    samplePost:
      'URGENT: Protect African Food Sovereignty! Nigeria’s National Assembly is pushing HB 2659 to criminalize traditional food wisdom. Demand immediate withdrawal! #FreeAfrica #StoptheNutritionBill',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'messaging',
    description: 'Forward to family groups, cooperative chats & community leaders',
    accentColor: '#25D366',
    supportsDirectShare: true,
    samplePost:
      '🚨 EMERGENCY: Stop the Nutrition Bill HB 2659. Traditional herbs and recipes risk criminalization. Sign the petition now and protect our food sovereignty!',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'messaging',
    description: 'Share in civil society channels, farmer networks & diaspora feeds',
    accentColor: '#229ED9',
    supportsDirectShare: true,
    samplePost:
      'Defend African Food Sovereignty: Nigeria HB 2659 must be withdrawn. Join over 84,000 citizens demanding food freedom. #FreeAfrica #StoptheNutritionBill',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'broadcast',
    description: 'Rally community groups, diaspora forums & town unions',
    accentColor: '#1877F2',
    supportsDirectShare: true,
    samplePost:
      'Stand up for our heritage! Stop HB 2659 and unfair nutrition legislation. Our ancestors gave us food wisdom—we will not allow it to be monopolized by corporate licensing.',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    category: 'community',
    description: 'Post in r/Nigeria, r/Africa, r/FoodSovereignty & r/Herbalism',
    accentColor: '#FF4500',
    supportsDirectShare: true,
    samplePost:
      'Over 2,100 citizens and HURIWA petition against Nigeria HB 2659 — The Nutritionists Registration Council Bill. Here is why it threatens smallholder food systems.',
  },
  {
    id: 'threads',
    name: 'Threads',
    category: 'direct',
    description: 'Engage creative advocates, youth organizers & nutrition educators',
    accentColor: '#000000',
    supportsDirectShare: true,
    samplePost:
      'African food is medicine. We reject HB 2659 and any bill that turns grandma’s herbal porridge into a punishable offence. #FreeAfrica #StoptheNutritionBill',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'broadcast',
    description: 'Copy captions for carousels, reels & story link stickers',
    accentColor: '#E1306C',
    supportsDirectShare: false,
    samplePost:
      'OUR FOOD, OUR HERITAGE, OUR RIGHT. Nigeria’s HB 2659 wants to penalize indigenous nutrition. Link in bio to sign the emergency petition! #FreeAfrica #StoptheNutritionBill',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'broadcast',
    description: 'Sound off with video scripts & viral advocacy overlays',
    accentColor: '#010101',
    supportsDirectShare: false,
    samplePost:
      'Did you know lawmakers are trying to make traditional food advice illegal? Tap the link to sign the petition against HB 2659! #StoptheNutritionBill #FreeAfrica',
  },
  {
    id: 'line',
    name: 'Line',
    category: 'messaging',
    description: 'Connect with international solidarity groups & diaspora contacts',
    accentColor: '#06C755',
    supportsDirectShare: true,
    samplePost:
      'Support African Food Sovereignty. Stop HB 2659 and protect traditional health wisdom. Please sign and share: #StoptheNutritionBill',
  },
  {
    id: 'wechat',
    name: 'WeChat',
    category: 'messaging',
    description: 'Broadcast to pan-African trade associations & overseas diaspora',
    accentColor: '#07C160',
    supportsDirectShare: false,
    samplePost:
      'Pan-African Food Sovereignty Alert: Stop Nigeria HB 2659. Defend local agricultural independence and natural food traditions.',
  },
  {
    id: 'bilibili',
    name: 'Bilibili',
    category: 'community',
    description: 'Share informational documentaries and youth cultural exchanges',
    accentColor: '#00A1D6',
    supportsDirectShare: false,
    samplePost:
      'African Food Sovereignty documentary overview: Why citizens are rejecting HB 2659 and safeguarding botanical knowledge. #FreeAfrica',
  },
];

export const AFRICAN_COUNTRIES = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'Uganda',
  'Tanzania',
  'Ethiopia',
  'Senegal',
  'Cameroon',
  'Rwanda',
  'Zimbabwe',
  'Zambia',
  'Ivory Coast (Côte d’Ivoire)',
  'Sierra Leone',
  'Liberia',
  'Gambia',
  'Benin',
  'Togo',
  'DR Congo',
  'Egypt',
  'Morocco',
  'Algeria',
  'Angola',
  'Mozambique',
  'Namibia',
  'Botswana',
  'African Diaspora (UK / Europe)',
  'African Diaspora (USA / Americas)',
  'African Diaspora (Asia / Global)',
  'Other / International Ally',
];

export const INITIAL_SIGNATURES: PetitionSignature[] = [
  {
    id: 'sig-1',
    fullName: 'Dr. Alero Okonbwo',
    country: 'Nigeria (Lagos)',
    comment: 'Ancestral botanical knowledge kept our communities healthy for millenia. HB 2659 is an assault on public wellbeing.',
    timestamp: '2 minutes ago',
    isRecent: true,
  },
  {
    id: 'sig-2',
    fullName: 'Kwame Mensah-Boateng',
    country: 'Ghana (Accra)',
    comment: 'We stand shoulder-to-shoulder with Nigerian activists. If this passes in Abuja, it will be brought to Accra next.',
    timestamp: '8 minutes ago',
    isRecent: true,
  },
  {
    id: 'sig-3',
    fullName: 'Wanjiku Mwangi',
    country: 'Kenya (Nairobi)',
    comment: 'Indigenous seeds, indigenous diets. We reject corporate monopoly over nutrition guidelines.',
    timestamp: '14 minutes ago',
  },
  {
    id: 'sig-4',
    fullName: 'Hon. Babatunde Adeleke',
    country: 'Nigeria (Oyo)',
    comment: 'As a local community council leader, I see mothers caring for infants with moringa and local pap. This bill would make them outlaws.',
    timestamp: '21 minutes ago',
  },
  {
    id: 'sig-5',
    fullName: 'Thabo Ndlovu',
    country: 'South Africa (Johannesburg)',
    comment: 'Food sovereignty is the foundation of African liberation. Total solidarity with HURIWA and citizen petitioners.',
    timestamp: '29 minutes ago',
  },
  {
    id: 'sig-6',
    fullName: 'Aissatou Diallo',
    country: 'Senegal (Dakar)',
    comment: 'Our millet, fonio and baobab do not require licensing from corporate lobbyists. Stop this bill now!',
    timestamp: '35 minutes ago',
  },
];

export const CORE_DEMANDS = [
  {
    title: '1. Immediate & Total Withdrawal of HB 2659',
    description:
      'We demand that Hon. Chike Okafor and the House of Representatives immediately withdraw House Bill 2659 (The Nutritionists Registration Council of Nigeria Bill 2025/2026) from all legislative consideration.',
  },
  {
    title: '2. Formal Decriminalization of Traditional Food Guidance',
    description:
      'Enact explicit statutory protections guaranteeing that generational family recipes, traditional herbs, birthing guidance, and community culinary knowledge remain fully protected from criminal or civil prosecution.',
  },
  {
    title: '3. Enactment of an African Food Sovereignty Charter',
    description:
      'Establish community-led participatory councils that champion indigenous African agroecology, smallholder farmers, and local nutrition without subservience to multinational agribusiness lobbyists.',
  },
];
