import { AppItem, CategoryItem, BlogPost } from './types';

export const CATEGORIES_DATA: CategoryItem[] = [
  { name: 'Action', count: 339, icon: 'Sword' },
  { name: 'Arcade', count: 139, icon: 'Gamepad2' },
  { name: 'Sports', count: 51, icon: 'Trophy' },
  { name: 'Video Editor', count: 124, icon: 'Video' },
  { name: 'Music & Audio', count: 98, icon: 'Music' },
  { name: 'Social', count: 182, icon: 'MessageCircle' },
  { name: 'Tools', count: 215, icon: 'Wrench' },
  { name: 'Productivity', count: 104, icon: 'Clock' },
  { name: 'Adventure', count: 87, icon: 'Compass' },
];

const BASE_APPS_DATA: AppItem[] = [
  // ==================== APPS (30 Items) ====================
  {
    id: "app-1",
    name: "CapCut Pro",
    slug: "capcut",
    developer: "ByteDance",
    rating: "4.8",
    downloads: "100M",
    size: "95 MB",
    version: "3.5.0",
    category: "Video Editor",
    type: "App",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    description: "All-in-one video editor with premium effects, modern filters, and professional-level transitions.",
    longDescription: "CapCut is the most downloaded all-in-one free video editor in the world. Designed specifically for content creators on TikTok, Instagram, and YouTube, it allows you to cut, reverse, and change the speed of your clips with absolute precision. This modified premium version (MOD) unlocks all VIP templates, cinematic transitions, advanced color filters, and video export in 4K resolution at 60 FPS without annoying watermarks.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/CapCut_v3.5.0_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 9e107d9d372bb6826bd81d3542a419d6",
      secureToken: "Download via verified secure token",
      cloudStorage: "High-speed cloud storage with encrypted access"
    },
    tags: ["MOD", "Free", "No Watermark"],
    isRecommendation: true,
    isRecent: true,
    videoUrl: "https://www.youtube.com/watch?v=A2Wp-Uv_M8M"
  },
  {
    id: "app-2",
    name: "Spotify Premium",
    slug: "spotify",
    developer: "Spotify AB",
    rating: "4.8",
    downloads: "500M",
    size: "65 MB",
    version: "8.9.22",
    category: "Music & Audio",
    type: "App",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=150&auto=format&fit=crop&q=80",
    description: "Listen to millions of songs, albums, and original podcasts without commercial ads.",
    longDescription: "Enjoy the best music and podcasts without limits. With Spotify Premium MOD, you will have the ultimate experience without audio or video advertising interruptions. Unlock the ability to skip songs unlimitedly, play any track you want on-demand with extreme audio quality (320kbps), and activate the music search bar.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Spotify_Premium_v8.9.22_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: f1107d9e102bc6826bd81d3542a419ff",
      secureToken: "High encryption SSL Token",
      cloudStorage: "Ultra-fast global CDN file storage"
    },
    tags: ["MOD", "Premium Unlocked", "Free"],
    isRecommendation: true,
    isRecent: true,
    videoUrl: "https://www.youtube.com/watch?v=fXvXWz6N27Y"
  },
  {
    id: "app-3",
    name: "TikTok Plus",
    slug: "tiktok-plus",
    developer: "TikTok Ltd",
    rating: "4.7",
    downloads: "1B",
    size: "110 MB",
    version: "32.8.4",
    category: "Social",
    type: "App",
    updatedAt: "05/07/2026",
    icon: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=150&auto=format&fit=crop&q=80",
    description: "Watch millions of videos from around the world and download videos without watermarks.",
    longDescription: "TikTok Plus is an advanced modified version of the social media giant. It allows you to download any video directly to your local gallery without watermarks or logos. In addition, it removes all annoying sponsored ads from the main feed, unlocks high-fidelity audio playback, and adds a special button to change regions.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/TikTok_Plus_v32.8.4_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1611162616305-c6a5ae5d2efd?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d241e4d372fc5927ad81d3542a4192dd",
      secureToken: "Direct clean download free of ads",
      cloudStorage: "Fast file storage"
    },
    tags: ["MOD", "Ad-Free", "Free"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "app-4",
    name: "Netflix Premium App",
    slug: "netflix-premium",
    developer: "Netflix Inc.",
    rating: "4.5",
    downloads: "100M",
    size: "42 MB",
    version: "10.6.2",
    category: "Video Editor", // mapped to standard category
    type: "App",
    updatedAt: "04/07/2026",
    icon: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=150&auto=format&fit=crop&q=80",
    description: "Watch exclusive movies and TV shows in 4K HDR resolution without paying a monthly subscription.",
    longDescription: "Netflix Premium MOD offers you unlimited access to the entire original Netflix catalog, trending world TV series, award-winning documentaries, and stunning cinematic feature films. The best part is that it does not require registering a credit card or paying monthly fees.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Netflix_Premium_v10.6.2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: e810e4d372fc5927ad81d3542a419ab7",
      secureToken: "Paywall bypass Mod",
      cloudStorage: "Mirror stream servers"
    },
    tags: ["Paid Subscription Unlocked", "Free", "Ultra HD 4K"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-5",
    name: "PicsArt Premium",
    slug: "picsart-premium",
    developer: "PicsArt Inc",
    rating: "4.7",
    downloads: "100M",
    size: "82 MB",
    version: "24.1.3",
    category: "Video Editor",
    type: "App",
    updatedAt: "12/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Professional photo and video editor with gold filters, fonts, and advanced AI objects remover.",
    longDescription: "Unleash your creativity with the ultimate premium graphics tool. PicsArt Premium MOD unlocks the complete Gold tier, offering ad-free photo and video templates, custom stickers, multi-layer collage adjustments, and professional AI enhancing brushes entirely for free.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/PicsArt_Gold_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d8221b3395d82a8bd57fbe6180051823",
      secureToken: "Gold Subscription Active",
      cloudStorage: "Secure Content Delivery Network"
    },
    tags: ["Gold Unlocked", "No Ads", "Premium Filters"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-6",
    name: "KineMaster Pro",
    slug: "kinemaster-pro",
    developer: "KineMaster Corp.",
    rating: "4.6",
    downloads: "50M",
    size: "108 MB",
    version: "7.4.2",
    category: "Video Editor",
    type: "App",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Multi-track video creator with chroma key, advanced blending modes, and unlocked asset store.",
    longDescription: "Make incredible mobile projects with premium timelines and precision speed curves. This MOD has all watermark lines removed, VIP asset packs enabled, and 4K ultra-smooth rendering capabilities fully activated.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/KineMaster_v7.4.2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ad37a1f5927ad81d3542a419d2b882e4d",
      secureToken: "Pro Asset Store Bypassed",
      cloudStorage: "Global CDN Cloud Servers"
    },
    tags: ["Watermark Removed", "Chroma Key", "Pro Unlocked"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-7",
    name: "Adobe Lightroom Mobile",
    slug: "lightroom-mobile",
    developer: "Adobe",
    rating: "4.8",
    downloads: "100M",
    size: "145 MB",
    version: "9.3.0",
    category: "Productivity",
    type: "App",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Capture and refine beautiful images with premium presets, healing brush, and masking features.",
    longDescription: "Refine RAW details with elite Lightroom adjustments. The Premium MOD unlocks custom masking layers, high-definition RAW edits, perspective geometry corrections, and hundreds of professional photo-editing presets.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Lightroom_Premium_v9.3.0_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 4e9042af9f239e107d9d372bb6826bd8",
      secureToken: "Premium Presets Activated",
      cloudStorage: "Adobe CDN Mirror Servers"
    },
    tags: ["Premium Unlocked", "Raw Editing", "Masking Activated"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-8",
    name: "Duolingo Plus",
    slug: "duolingo-plus",
    developer: "Duolingo",
    rating: "4.9",
    downloads: "100M",
    size: "54 MB",
    version: "5.140.4",
    category: "Productivity",
    type: "App",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Learn Spanish, French, German, or English with unlimited hearts and offline progress downloads.",
    longDescription: "Master languages effortlessly with custom AI-tailored study lessons. This Super Duolingo Plus version offers unlimited hearts, personalized mock quiz checks, and complete visual progress metrics without ads.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Duolingo_Super_v5.140.4_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: b72fc5927ad81d3542a419f9c398e4d3",
      secureToken: "Super Subscription Active",
      cloudStorage: "Fast Global Delivery Servers"
    },
    tags: ["Super Unlocked", "Unlimited Hearts", "Offline Enabled"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-9",
    name: "Canva Pro",
    slug: "canva-pro",
    developer: "Canva",
    rating: "4.7",
    downloads: "100M",
    size: "38 MB",
    version: "2.260.0",
    category: "Productivity",
    type: "App",
    updatedAt: "12/07/2026",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    description: "Design social graphics, presentations, and posters with premium premium graphics elements.",
    longDescription: "Design templates on the fly with professional high-end graphic resources. The Canva Pro MOD unlocks premium brand kits, custom high-resolution PNG transparent backgrounds, and thousands of premium vectors.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Canva_Pro_v2.260_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ad81d3542a419f9c398e4d372fc5927a",
      secureToken: "Enterprise License Active",
      cloudStorage: "Distributed Secure Sync Servers"
    },
    tags: ["Pro Features Unlocked", "Premium Elements", "No Watermark"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "app-10",
    name: "WhatsApp Plus",
    slug: "whatsapp-plus",
    developer: "HeyMods",
    rating: "4.5",
    downloads: "50M",
    size: "68 MB",
    version: "20.10.0",
    category: "Social",
    type: "App",
    updatedAt: "08/07/2026",
    icon: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=150&auto=format&fit=crop&q=80",
    description: "Custom themes, hide online blue ticks, increase attachment file limit up to 700MB.",
    longDescription: "An advanced version of the popular messenger allowing you to hide your online footprint, customize chat bubbles, auto-reply to messages, and download contacts' status images and videos instantly.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/WhatsApp_Plus_v20.10_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1611162616305-c6a5ae5d2efd?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: b1d3542a419ff1107d9e102bc6826bd8",
      secureToken: "Anti-Ban Protection Active",
      cloudStorage: "Peer-to-peer encrypted sync"
    },
    tags: ["MOD", "Privacy Mod", "Anti-Ban"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-11",
    name: "Telegram Premium",
    slug: "telegram-premium",
    developer: "Telegram FZ-LLC",
    rating: "4.8",
    downloads: "500M",
    size: "72 MB",
    version: "10.12.1",
    category: "Social",
    type: "App",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1611162616305-c6a5ae5d2efd?w=150&auto=format&fit=crop&q=80",
    description: "Unlock twice the resource limits, 4GB cloud upload size, speech-to-text, and fast downloads.",
    longDescription: "Experience social messaging at its absolute peak speed. This version grants full premium badges, high-priority chat delivery, custom premium stickers, and unique real-time speech translations.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Telegram_Premium_v10.12_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ee345672bc6826bd81d3542a419ff551",
      secureToken: "Premium Subscription Verified",
      cloudStorage: "Telegram Distributed Cloud"
    },
    tags: ["Premium Badge", "Fast Download", "Ad-Free"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-12",
    name: "Instagram Rocket",
    slug: "instagram-rocket",
    developer: "RocketDev",
    rating: "4.6",
    downloads: "100M",
    size: "52 MB",
    version: "312.4.0",
    category: "Social",
    type: "App",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1611162616305-c6a5ae5d2efd?w=150&auto=format&fit=crop&q=80",
    description: "Download stories, HD videos, zoom posts, and hide read receipts in direct messages.",
    longDescription: "Enjoy Instagram without boundaries. Automatically view high-definition profile pictures, copy caption texts, disable read status in DM, and toggle high-resolution layout configurations easily.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Instagram_Rocket_v312_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d9d372bb6826bd81d3542a419d69e107",
      secureToken: "Direct Video Downloader Hooked",
      cloudStorage: "High-speed multi-part links"
    },
    tags: ["Media Downloader", "Adblock", "Ghost Mode"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-13",
    name: "YouTube Vanced Premium",
    slug: "youtube-vanced",
    developer: "Team Vanced",
    rating: "4.9",
    downloads: "200M",
    size: "88 MB",
    version: "19.02.39",
    category: "Video Editor",
    type: "App",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1611162616305-c6a5ae5d2efd?w=150&auto=format&fit=crop&q=80",
    description: "Background play, built-in dynamic sponsorblock, adblocking, and full HDR picture mode.",
    longDescription: "Ditch repetitive mobile video ads completely. YouTube Vanced includes custom swipe controls for volume/brightness, dark AMOLED dark mode settings, and integrated community sponsor-blocking.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/YouTube_Vanced_v19.02_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: fc5927ad81d3542a419f9c398e4d372f",
      secureToken: "Built-in MicroG bypass signature",
      cloudStorage: "Vanced Redundant Mirror List"
    },
    tags: ["Adblock", "Background Play", "AMOLED Dark"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-14",
    name: "Truecaller Premium Gold",
    slug: "truecaller-premium",
    developer: "Truecaller",
    rating: "4.6",
    downloads: "100M",
    size: "61 MB",
    version: "14.2.5",
    category: "Tools",
    type: "App",
    updatedAt: "09/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Identify spam calls, block telemarketers, and reveal unknown numbers with Gold caller ID.",
    longDescription: "Never answer telemarketing spam again. Truecaller Gold MOD gives you full access to premium caller ID cards, advanced live spam lists, auto-call recording, and profile visit alerts.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Truecaller_Gold_v14.2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d3542a419f9c398e4d372fc5927ad81d",
      secureToken: "Gold Plan Unlocked",
      cloudStorage: "Secure truecaller data mirror"
    },
    tags: ["Gold Unlocked", "Spam Block", "Caller ID"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-15",
    name: "1Weather Pro",
    slug: "1weather-pro",
    developer: "OneLouder",
    rating: "4.7",
    downloads: "10M",
    size: "24 MB",
    version: "5.3.8",
    category: "Tools",
    type: "App",
    updatedAt: "06/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Live radar weather tracks, 12-week forecasts, premium custom desktop widgets.",
    longDescription: "Get the cleanest hyper-local meteorological updates. All third-party video and banner ads are completely removed, and advanced weather radars are unlocked fully.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/1Weather_Pro_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ad81d3542a419f9c398e4d372fc5927c",
      secureToken: "Ad-free Radar Token",
      cloudStorage: "NOAA Meteorological Proxy"
    },
    tags: ["Pro Unlocked", "Ad-Free", "Premium Widgets"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-16",
    name: "Nova Launcher Prime",
    slug: "nova-launcher",
    developer: "TeslaCoil Software",
    rating: "4.8",
    downloads: "50M",
    size: "12 MB",
    version: "8.0.14",
    category: "Tools",
    type: "App",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Highly customizable, performance-driven home screen replacement with Prime gestures unlocked.",
    longDescription: "Reimagine your entire Android home desktop. Nova Prime MOD unlocks multi-finger gestures, custom app icon scaling, hidden folders, card drawer categories, and custom animations.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Nova_Launcher_Prime_v8_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: f15927ad81d3542a419d2b882e4da37a",
      secureToken: "Prime License Unlocked",
      cloudStorage: "Secure Takano3D Host CDN"
    },
    tags: ["Prime Features", "Highly Custom", "Fast Layouts"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-17",
    name: "MX Player Pro",
    slug: "mx-player-pro",
    developer: "MX Media",
    rating: "4.7",
    downloads: "100M",
    size: "48 MB",
    version: "1.82.0",
    category: "Video Editor",
    type: "App",
    updatedAt: "05/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "The most powerful offline video player with full hardware acceleration, custom AC3 audio support.",
    longDescription: "Watch everything with deep multi-core decoding. Features advanced subtitle styling gestures, dynamic hardware audio booster, completely ad-free stream settings, and direct local directory browsing.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/MX_Player_Pro_v1.82_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 419d2b882e4d37a1f5927ad81d3542a1",
      secureToken: "Pro Activated License",
      cloudStorage: "Premium Storage Mirror"
    },
    tags: ["Pro", "All Codecs Unlocked", "Ad-Free"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-18",
    name: "Shazam Encore",
    slug: "shazam-encore",
    developer: "Apple Inc.",
    rating: "4.8",
    downloads: "100M",
    size: "26 MB",
    version: "14.10.1",
    category: "Music & Audio",
    type: "App",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=150&auto=format&fit=crop&q=80",
    description: "Identify any music and artists in seconds. Full premium lyric integrations.",
    longDescription: "Identify tunes playing in any app or environment. Shazam Encore removes all advertisement cards, unlocks dynamic real-time floating visualizer lyrics, and automatically logs history.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Shazam_Encore_v14_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 9d372bb6826bd81d3542a419d69e107d",
      secureToken: "Encore Unlocked Token",
      cloudStorage: "Dedicated Apple Proxy Server"
    },
    tags: ["Encore Unlocked", "Auto Shazam", "Adblock"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-19",
    name: "Poweramp Music Player",
    slug: "poweramp",
    developer: "Max MP",
    rating: "4.8",
    downloads: "10M",
    size: "18 MB",
    version: "3.976",
    category: "Music & Audio",
    type: "App",
    updatedAt: "12/07/2026",
    icon: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=150&auto=format&fit=crop&q=80",
    description: "The absolute best premium audio engine for Android with 10-band graphic equalizer.",
    longDescription: "Unchain your premium wired or Bluetooth audio hardware. Features 64-bit internal precision, absolute reverb and treble controls, customizable visualizer skins, and folder queue management.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Poweramp_Full_v3_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: aa81d3542a419f9c398e4d372fc5927a",
      secureToken: "Full License Activator Hooked",
      cloudStorage: "High-speed audio storage CDN"
    },
    tags: ["Premium License", "Audio Engine", "Equalizer"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "app-20",
    name: "Pinterest Pro",
    slug: "pinterest-pro",
    developer: "Pinterest",
    rating: "4.7",
    downloads: "500M",
    size: "34 MB",
    version: "11.45.0",
    category: "Social",
    type: "App",
    updatedAt: "08/07/2026",
    icon: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=150&auto=format&fit=crop&q=80",
    description: "Download high-definition design inspiration pictures and remove sponsored advertisements.",
    longDescription: "Pinterest Pro allows you to directly save high-definition photos and video pins in one touch without watermarks. Sponsored items and trackers are completely filtered out of your feed.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Pinterest_Pro_v11_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d542a419f9c398e4d372fc5927ad81d3",
      secureToken: "Adblock Engine Hook",
      cloudStorage: "S3 Distributed Bucket"
    },
    tags: ["HD Downloader", "Ad-Free Feed", "Free"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-21",
    name: "NordVPN Premium Mod",
    slug: "nordvpn-premium",
    developer: "Nord Security",
    rating: "4.6",
    downloads: "50M",
    size: "39 MB",
    version: "6.85.2",
    category: "Tools",
    type: "App",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Browse securely on hundreds of global servers with pre-unlocked subscription accounts.",
    longDescription: "Protect your internet identity with premium double VPN tunnels. Features secure malware blocking, high-speed WireGuard protocols, and unlocked premium server locations worldwide.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/NordVPN_v6.85_Premium_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: e81d3542a419ab7e810e4d372fc5927a",
      secureToken: "Premium Server Login Bypass",
      cloudStorage: "Secure Redundant VPN Node List"
    },
    tags: ["VPN Premium", "Unlimited Bandwidth", "Secured"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-22",
    name: "ExpressVPN Mod",
    slug: "expressvpn-mod",
    developer: "ExpressVPN",
    rating: "4.5",
    downloads: "50M",
    size: "45 MB",
    version: "12.80.1",
    category: "Tools",
    type: "App",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Bypass regional blocks instantly. Unlimited trial resets with premium server access.",
    longDescription: "ExpressVPN Mod allows you to reset trial periods dynamically to access hundreds of high-fidelity servers globally. Features secure AES-256 encryption tunnels and no-logging guarantees.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/ExpressVPN_v12.80_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: cb398e4d372fc5927ad81d3542a419f9",
      secureToken: "Unlimited Trial Reset Hook",
      cloudStorage: "Encrypted Node List Mirror"
    },
    tags: ["Unlimited Trial", "Full Servers", "Fast Connection"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-23",
    name: "WPS Office Premium",
    slug: "wps-office-premium",
    developer: "WPS Software",
    rating: "4.7",
    downloads: "100M",
    size: "91 MB",
    version: "18.6.1",
    category: "Productivity",
    type: "App",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "The complete office package with PDF editing, PPT presentation creations, and cloud storage.",
    longDescription: "WPS Office MOD unlocks elite features like PDF signature insertions, watermark-free document exports, scanned image-to-text conversion (OCR), and premium ad-free layouts.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/WPS_Office_Premium_v18_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 9e107d9d372bb6826bd81d3542a419df",
      secureToken: "Premium PDF Tools Unlocked",
      cloudStorage: "Secure Office Cloud Sync"
    },
    tags: ["Premium", "PDF Editor", "OCR Unlocked"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-24",
    name: "Evernote Premium",
    slug: "evernote-premium",
    developer: "Evernote Corp.",
    rating: "4.6",
    downloads: "100M",
    size: "55 MB",
    version: "10.88.2",
    category: "Productivity",
    type: "App",
    updatedAt: "07/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Sync files across unlimited devices. PDF search, offline notebooks, and premium tags.",
    longDescription: "Evernote Premium MOD removes standard synchronization device restrictions. Sync rich text files, audio recordings, and checklists on all devices with fully unlocked premium note sizes.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Evernote_Premium_v10_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: e102bc6826bd81d3542a419ffb72fc592",
      secureToken: "Sync Limit Bypassed",
      cloudStorage: "Redundant Backup Servers"
    },
    tags: ["Unlimited Devices", "OCR Active", "Offline Access"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-25",
    name: "PhotoRoom Pro",
    slug: "photoroom-pro",
    developer: "PhotoRoom",
    rating: "4.8",
    downloads: "10M",
    size: "44 MB",
    version: "5.1.0",
    category: "Video Editor",
    type: "App",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Extract foreground objects in one tap and replace them with premium AI templates.",
    longDescription: "Design premium commercial products and clothing photos. PhotoRoom Pro MOD unlocks watermark-free high-definition exports, batch product editors, and all AI background designs.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/PhotoRoom_Pro_v5_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d826bd81d3542a419d69e107d9d372bb",
      secureToken: "VIP Subscription Enabled",
      cloudStorage: "Secure Photo Processing Cloud"
    },
    tags: ["AI Remove BG", "VIP Unlocked", "No Watermark"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "app-26",
    name: "Alight Motion Pro",
    slug: "alight-motion",
    developer: "Alight Creative",
    rating: "4.5",
    downloads: "50M",
    size: "77 MB",
    version: "5.0.2",
    category: "Video Editor",
    type: "App",
    updatedAt: "12/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "First professional motion graphics design app bringing quality vector layout controls.",
    longDescription: "Alight Motion Pro MOD provides graphic designers with XML presets import, custom keyframe adjustment curves, premium color grading features, and premium rendering.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Alight_Motion_Pro_v5_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: f5927ad81d3542a419d2b882e4da37a1",
      secureToken: "Premium XML Presets Unlocked",
      cloudStorage: "Motion Resource Mirror"
    },
    tags: ["Pro Features", "XML Enabled", "Watermark-Free"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-27",
    name: "Deezer Premium",
    slug: "deezer-premium",
    developer: "Deezer Mobile",
    rating: "4.7",
    downloads: "100M",
    size: "36 MB",
    version: "7.15.3",
    category: "Music & Audio",
    type: "App",
    updatedAt: "09/07/2026",
    icon: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=150&auto=format&fit=crop&q=80",
    description: "Stream over 90 million tracks in high-fidelity FLAC audio format without advertisements.",
    longDescription: "Enjoy pure lossless audio streaming on demand. Deezer Premium MOD provides unlimited skips, offline music downloads, and active lyrics tracking without registration requirements.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Deezer_Premium_v7_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: a81d3542a419ff1107d9e102bc6826bd",
      secureToken: "HiFi FLAC Unlocked",
      cloudStorage: "Deezer Lossless CDN"
    },
    tags: ["HiFi Audio", "Offline Downloads", "No Ads"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "app-28",
    name: "TuneIn Radio Pro",
    slug: "tunein-radio",
    developer: "TuneIn Inc",
    rating: "4.6",
    downloads: "100M",
    size: "31 MB",
    version: "34.1.2",
    category: "Music & Audio",
    type: "App",
    updatedAt: "06/07/2026",
    icon: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=150&auto=format&fit=crop&q=80",
    description: "Stream premium commercial-free sports, news, and over 100,000 global FM stations.",
    longDescription: "TuneIn Pro MOD gives you unlimited access to global live talk shows, regional sports coverages, and podcasts without additional ad interruptions.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/TuneIn_Radio_Pro_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: de41e4d372fc5927ad81d3542a4192dd",
      secureToken: "Commercial-Free Stream Activated",
      cloudStorage: "Direct radio broadcast proxy"
    },
    tags: ["Commercial-Free", "100k Stations", "Pro Unlocked"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "app-29",
    name: "Sleep Cycle Premium",
    slug: "sleep-cycle",
    developer: "Sleep Cycle AB",
    rating: "4.7",
    downloads: "10M",
    size: "49 MB",
    version: "4.24.0",
    category: "Productivity",
    type: "App",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Track sleep cycles dynamically using your microphone and wake up feeling refreshed.",
    longDescription: "Improve overall night rest with customized biometric audio analyses. This Premium MOD unlocks sleep aids, historic charts comparisons, snore statistics, and premium alarm sounds.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Sleep_Cycle_Premium_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d3542a419f9c398e4d372fc5927ad812",
      secureToken: "Premium Biometric Tracking Active",
      cloudStorage: "Encrypted Health Sync Node"
    },
    tags: ["Sleep Aid", "Detailed Statistics", "Premium Alarms"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "app-30",
    name: "CamScanner Premium",
    slug: "camscanner",
    developer: "INTSIG",
    rating: "4.8",
    downloads: "100M",
    size: "67 MB",
    version: "6.55.0",
    category: "Tools",
    type: "App",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Turn your device into a portable high-resolution scanner with OCR features.",
    longDescription: "CamScanner Premium MOD unlocks unlimited scanned document sizes, direct high-fidelity PDF editing tools, text recognition (OCR) and removes camscanner watermark text from all pages.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/CamScanner_Premium_v6_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: f1107d9e102bc6826bd81d3542a419ff",
      secureToken: "Enterprise License Active",
      cloudStorage: "camscanner proxy mirror"
    },
    tags: ["Watermark Removed", "Premium PDF", "OCR Enabled"],
    isRecommendation: true,
    isRecent: true
  },

  // ==================== GAMES (30 Items) ====================
  {
    id: "game-1",
    name: "Subway Surfers",
    slug: "subway-surfers",
    developer: "SYBO Games",
    rating: "4.7",
    downloads: "1B",
    size: "135 MB",
    version: "3.24.1",
    category: "Arcade",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Dodge trains, run at full speed, and escape from the grumpy inspector with unlimited coins.",
    longDescription: "The ultimate endless runner game arrives at MOD Hub with everything unlocked! Join Jake, Tricky, and Fresh in their exciting escape through the train tracks of the world. This premium MOD version includes infinite gold coins, unlimited resurrection keys, and all premium characters and surfboards unlocked from the first second.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Subway_Surfers_v3.24.1_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: a1e87d9d372bc6826bd81d3542a419f1",
      secureToken: "Secure direct download in a single click",
      cloudStorage: "Dedicated premium SYBO servers"
    },
    tags: ["MOD", "Unlimited Coins", "Free"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "game-2",
    name: "Minecraft PE",
    slug: "minecraft",
    developer: "Mojang Studios",
    rating: "4.9",
    downloads: "50M",
    size: "620 MB",
    version: "1.21.10",
    category: "Adventure",
    type: "Game",
    updatedAt: "09/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Explore infinite worlds, build anything from the simplest home to the grandest castle.",
    longDescription: "Explore randomly generated worlds and build amazing things, from the simplest homes to the most majestic castles. Play in creative mode with unlimited resources, or delve into survival mode, where you will have to craft weapons and armor to defend yourself against dangerous creatures. Our special MOD version offers you completely free access to all premium aspects of the store, unlocked paid textures.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Minecraft_v1.21.10_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: c398e4d372fc5927ad81d3542a419f9",
      secureToken: "License unlocked and clean",
      cloudStorage: "Hosting on distributed premium network"
    },
    tags: ["Paid Subscription Unlocked", "Free", "MOD Menu"],
    isRecommendation: false,
    isRecent: true,
    videoUrl: "https://www.youtube.com/watch?v=MmB9b5njVbA"
  },
  {
    id: "game-3",
    name: "Brawl Stars",
    slug: "brawl-stars",
    developer: "Supercell",
    rating: "4.6",
    downloads: "100M",
    size: "380 MB",
    version: "55.220",
    category: "Action",
    type: "Game",
    updatedAt: "08/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Fast-paced 3v3 multiplayer and mobile battle royale mode with unlocked brawlers.",
    longDescription: "Brawl Stars by Supercell is the action multiplayer game of the moment! Enjoy quick three-minute battles in a variety of exciting game modes. This MOD grants you free unlimited gems, unlimited boxes to open immediately, and spectacular gold skins to show off to all your rivals.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Brawl_Stars_v55.220_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: b882e4d372fc5927ad81d3542a4192b3",
      secureToken: "High security anti-ban bypass",
      cloudStorage: "Dedicated Nulls private servers"
    },
    tags: ["MOD", "Unlimited Gems", "Free"],
    isRecommendation: false,
    isRecent: true,
    videoUrl: "https://www.youtube.com/watch?v=Nn_ZfPLaXz4"
  },
  {
    id: "game-4",
    name: "8 Ball Pool MOD",
    slug: "8-ball-pool",
    developer: "Miniclip",
    rating: "4.7",
    downloads: "500M",
    size: "115 MB",
    version: "5.14.2",
    category: "Sports",
    type: "Game",
    updatedAt: "01/07/2026",
    icon: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=150&auto=format&fit=crop&q=80",
    description: "The number one multiplayer pool game with infinite guideline lines for perfect shots.",
    longDescription: "Play with friends and become a pool legend. Face competitors from all over the world in competitive 1v1 matches or participate in international tournaments to win exclusive trophies. This modified version provides the coveted long line guide that allows you to visualize the exact trajectory of the balls.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/8_Ball_Pool_v5.14.2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 7810e4d372fc5927ad81d3542a41942",
      secureToken: "Secure accounts without ban risk",
      cloudStorage: "Direct connection to Miniclip servers"
    },
    tags: ["MOD", "Long Line", "Free"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-5",
    name: "PUBG Mobile",
    slug: "pubg-mobile",
    developer: "Tencent Games",
    rating: "4.5",
    downloads: "500M",
    size: "1.2 GB",
    version: "3.1.0",
    category: "Action",
    type: "Game",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Survival shooter battle royale. Modified premium Recoil and Esp Radar options.",
    longDescription: "The premiere Battle Royale shooter on mobile devices. Drop into massive 100-player maps. This modified version includes ESP Radar locations overlays, custom recoil compensations, and unlocked ultra graphics frame rates.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/PUBG_Mobile_v3.1_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: c192b3a1e87d9d372bc6826bd81d3542",
      secureToken: "Anti-Ban Safe Bypass Installed",
      cloudStorage: "Mirror CDN High-Speed Servers"
    },
    tags: ["No Recoil", "ESP Radar", "Max Frame Rate"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-6",
    name: "Free Fire Max Mod",
    slug: "free-fire",
    developer: "Garena International",
    rating: "4.6",
    downloads: "100M",
    size: "620 MB",
    version: "2.102.1",
    category: "Action",
    type: "Game",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Fast-paced battle royale game with custom high-damage rates and automatic aimlock.",
    longDescription: "Garena Free Fire Max with exclusive game advantages. The MOD features custom aimlock, high damage modifications, safe ESP visual boxes and premium characters fully unlocked.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/FreeFire_Max_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d3542a4192b37810e4d372fc5927ad81",
      secureToken: "AimBot Injector V2",
      cloudStorage: "Dedicated high speed game mirror"
    },
    tags: ["Auto AimLock", "ESP Box", "Max Damage"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-7",
    name: "Shadow Fight 3",
    slug: "shadow-fight",
    developer: "Nekki",
    rating: "4.7",
    downloads: "50M",
    size: "180 MB",
    version: "1.34.0",
    category: "Action",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "RPG ninja fighting game with high physics, legendary gear, and a custom frozen enemy freeze menu.",
    longDescription: "Enter the world of ninja shadows. The custom fighting MOD includes a toggle to freeze enemies when they jump, enabling you to land incredible combat combos and collect legendary equipment easily.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Shadow_Fight_3_v1.34_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 7a46d19cd8195145252531617a46d19c",
      secureToken: "Freeze Combat Menu",
      cloudStorage: "High performance mirror CDN"
    },
    tags: ["Frozen Enemy", "Infinite Combos", "MOD Menu"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "game-8",
    name: "Asphalt 9 Legends",
    slug: "asphalt-9",
    developer: "Gameloft SE",
    rating: "4.8",
    downloads: "100M",
    size: "2.1 GB",
    version: "4.5.1",
    category: "Sports",
    type: "Game",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=150&auto=format&fit=crop&q=80",
    description: "Incredible arcade hyper-racing game with dynamic speed boosts and premium drift controls.",
    longDescription: "Drive the most spectacular real supercar models. This MOD has infinite custom nitro, disabled enemy speed blocks, and unlocked elite vehicle classes from the garage menu.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Asphalt_9_Legends_v4_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: c398e4d372fc5927ad81d3542a419f9c",
      secureToken: "Unlimited Nitro Injection",
      cloudStorage: "Fast Gameloft Mirror Server"
    },
    tags: ["Infinite Nitro", "All Cars Unlocked", "No Crash"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-9",
    name: "FIFA Mobile Soccer",
    slug: "fifa-mobile",
    developer: "EA Sports",
    rating: "4.5",
    downloads: "100M",
    size: "150 MB",
    version: "21.0.0",
    category: "Sports",
    type: "Game",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=150&auto=format&fit=crop&q=80",
    description: "Build your ultimate team of stars. MOD features perfect shot alignments and high speed.",
    longDescription: "Challenge dynamic soccer matchups with high performance advantages. This modified premium game lets you strike perfect shots with complete accuracy, bypassing goalkeeper catch limits easily.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/FIFA_Mobile_v21_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 7810e4d372fc5927ad81d3542a419a42",
      secureToken: "Perfect Strike Mod",
      cloudStorage: "EA servers dynamic connection"
    },
    tags: ["Perfect Kick", "Speed Boost", "Unlocking All Stars"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "game-10",
    name: "Temple Run 2",
    slug: "temple-run-2",
    developer: "Imangi Studios",
    rating: "4.4",
    downloads: "500M",
    size: "112 MB",
    version: "1.108.0",
    category: "Arcade",
    type: "Game",
    updatedAt: "04/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Run from cursed idols. Infinite resurrection rings and golden coins mod.",
    longDescription: "Escape through custom temple cliffs. This modified endless running arcade game guarantees you infinite coin levels and instant resurrection whenever you fall.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Temple_Run_2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: e810e4d372fc5927ad81d3542a419ab7",
      secureToken: "Infinite Resurrection Tokens",
      cloudStorage: "Encrypted Direct Download Cloud"
    },
    tags: ["Unlimited Gems", "All Characters", "Free"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-11",
    name: "Vector Full Mod",
    slug: "vector-full",
    developer: "Nekki",
    rating: "4.7",
    downloads: "10M",
    size: "94 MB",
    version: "1.4.4",
    category: "Arcade",
    type: "Game",
    updatedAt: "03/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "High-octane totalitarian runner with spectacular parkour tricks unlocked.",
    longDescription: "Dodge the dystopian guards in this parkour action game. The MOD version completely unlocks all premium vectors tracks, skills, gear, and supplies from the first play.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Vector_Full_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d826bd81d3542a419d69e107d9d372bb",
      secureToken: "Deluxe Features Active",
      cloudStorage: "Nekki mirror server hosting"
    },
    tags: ["Premium Version", "All Moves Unlocked", "Free"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "game-12",
    name: "Angry Birds 2 Mod",
    slug: "angry-birds-2",
    developer: "Rovio Entertainment",
    rating: "4.6",
    downloads: "100M",
    size: "240 MB",
    version: "3.20.0",
    category: "Arcade",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Slingshot action with custom infinite lives and high energy boosts entirely unlocked.",
    longDescription: "Destruct modular structures in this famous franchise game. Features infinite standard power items, custom black spells, and maximum gold stars unlocked.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Angry_Birds_2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: cb398e4d372fc5927ad81d3542a419f9",
      secureToken: "Infinite Gem Wallet Hack",
      cloudStorage: "Rovio Premium Cloud Mirror"
    },
    tags: ["Infinite Gems", "Super Boost", "Ad-Free"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-13",
    name: "Plants vs Zombies 2",
    slug: "pvz-2",
    developer: "ELECTRONIC ARTS",
    rating: "4.7",
    downloads: "100M",
    size: "50M", // Adjusted size to typical
    version: "11.2.1",
    category: "Adventure",
    type: "Game",
    updatedAt: "08/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Defense strategy in ancient time eras with infinite sun energy and direct plant unlocks.",
    longDescription: "Guard your lawn against hordes of funny zombies. The modified game features infinite tactical sun energies, zero cooling reload periods for all seed slots, and massive gold bags.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/PvZ_2_v11_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d3542a419f9c398e4d372fc5927ad81d",
      secureToken: "Infinite Sun energy enabled",
      cloudStorage: "EA Servers Redundant Proxy"
    },
    tags: ["Infinite Sun", "No Cooldown", "All Plants Unlocked"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "game-14",
    name: "Hill Climb Racing 2",
    slug: "hill-climb-2",
    developer: "Fingersoft",
    rating: "4.5",
    downloads: "100M",
    size: "185 MB",
    version: "1.59.1",
    category: "Arcade",
    type: "Game",
    updatedAt: "12/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Dizzying physics car driver with unlimited custom gas fuels and engine coins.",
    longDescription: "Take up challenging multiplayer races over crazy offroad slopes. The MOD unlocks infinite coins, infinite fuel levels, and complete maximum engine tuning stats automatically.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Hill_Climb_Racing_2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: a81d3542a419ff1107d9e102bc6826bd",
      secureToken: "Unlimited Gold & Fuel Engine",
      cloudStorage: "Fingersoft secure cloud mirror"
    },
    tags: ["Infinite Fuel", "Unlimited Coins", "All Cars Unlocked"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-15",
    name: "Fruit Ninja Mod",
    slug: "fruit-ninja",
    developer: "Halfbrick Studios",
    rating: "4.4",
    downloads: "100M",
    size: "122 MB",
    version: "3.55.0",
    category: "Arcade",
    type: "Game",
    updatedAt: "02/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Classic swipe juice-splatting arcade game with all swords and blade-effects unlocked.",
    longDescription: "Slash delicious tropical fruits to set global leaderboard high scores. The MOD provides you with premium blades, customized dojos, and multiplier scores instantly.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Fruit_Ninja_v3_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d542a419f9c398e4d372fc5927ad81d",
      secureToken: "All Blades Unlocked",
      cloudStorage: "Halfbrick premium data mirror"
    },
    tags: ["All Blades Unlocked", "Infinite Starfruit", "Ad-Free"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "game-16",
    name: "Sonic Dash Mod",
    slug: "sonic-dash",
    developer: "SEGA",
    rating: "4.6",
    downloads: "100M",
    size: "118 MB",
    version: "6.12.0",
    category: "Arcade",
    type: "Game",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Speed runs with Sonic the Hedgehog. Features infinite red star rings.",
    longDescription: "Speed dash through loops. This arcade running modified game gives you infinite red star rings, gold rings, and instantly unlocks super sonic form levels.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Sonic_Dash_v6_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d826bd81d3542a419d69e107d9d372bb",
      secureToken: "Sega Ring bypass signature",
      cloudStorage: "High-speed redundant nodes"
    },
    tags: ["Unlimited Rings", "All Characters", "Free"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-17",
    name: "Candy Crush Saga",
    slug: "candy-crush",
    developer: "King",
    rating: "4.7",
    downloads: "1B",
    size: "89 MB",
    version: "1.265.0",
    category: "Arcade",
    type: "Game",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Pop delicious sweet candy matching grids. Unlimited lives and premium helpers.",
    longDescription: "Get the sweetest swipe booster bonuses. The match-3 MOD provides you with infinite lives, maximum dynamic candies, and pre-unlocked progressive stages.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Candy_Crush_v1_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: fc5927ad81d3542a419f9c398e4d372f",
      secureToken: "Infinite Moves Enabled",
      cloudStorage: "King direct cloud storage mirror"
    },
    tags: ["Infinite Lives", "Unlimited Boosters", "All Stages Unlocked"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-18",
    name: "Pokemon GO Mod",
    slug: "pokemon-go",
    developer: "Niantic, Inc.",
    rating: "4.4",
    downloads: "100M",
    size: "140 MB",
    version: "0.301.0",
    category: "Adventure",
    type: "Game",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Capture pokemon with premium GPS joystick spoofer controls entirely built-in.",
    longDescription: "Travel around the pokemon region from home comfort. The MOD features integrated PGS joystick overlay controllers, auto walking speeds, and direct teleport maps locations.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Pokemon_Go_v0.301_PGS_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d3542a4192b37810e4d372fc5927ad81",
      secureToken: "PGS Joystick Unlocked",
      cloudStorage: "Encrypted teleport proxy lists"
    },
    tags: ["GPS Joystick", "Safe Spoofing", "Teleport Map"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-19",
    name: "GTA San Andreas PE",
    slug: "gta-san-andreas",
    developer: "Rockstar Games",
    rating: "4.8",
    downloads: "10M",
    size: "1.8 GB",
    version: "2.11.32",
    category: "Adventure",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Dizzying open-world gangster game. Custom Cleo cheat code inject menu.",
    longDescription: "Live out CJ's legendary rise to power. This modified mobile game package integrates the absolute legendary Cleo Cheat Menu with quick toggles for infinite ammo, health, vehicles, and weapons spawners.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/GTA_SA_Cleo_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: a1e87d9d372bc6826bd81d3542a419f1",
      secureToken: "Cleo Cheats Menu Active",
      cloudStorage: "High-speed Rockstar mirror mirror"
    },
    tags: ["Cleo Menu", "Infinite Cash", "Mod Cheats"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "game-20",
    name: "Roblox Mod Menu",
    slug: "roblox-mod",
    developer: "Roblox Corporation",
    rating: "4.6",
    downloads: "500M",
    size: "155 MB",
    version: "2.610.0",
    category: "Adventure",
    type: "Game",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Explore multiplayer sandboxes. MOD includes wallhacks and custom fly triggers.",
    longDescription: "Dve into thousands of custom social minigames. The MOD menu overlays toggles for flying, jumping higher, wallhacking, and walking on water elements.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Roblox_Mod_Menu_v2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ad37a1f5927ad81d3542a419d2b882e4d",
      secureToken: "Anti-Ban wallhack module",
      cloudStorage: "Global CDN Cloud Server"
    },
    tags: ["MOD Menu", "Fly Hack", "WallHack"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-21",
    name: "Clash of Clans Private Server",
    slug: "clash-of-clans",
    developer: "Supercell",
    rating: "4.7",
    downloads: "500M",
    size: "290 MB",
    version: "16.100.2",
    category: "Action",
    type: "Game",
    updatedAt: "08/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Build castles and raid. Dedicated private servers with infinite resources.",
    longDescription: "Rule your ultimate clan base on highly stable private servers (Nulls Clash) with unlimited gold, elixir, gems, and dark elixir instantly.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/CoC_PrivateServer_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ee345672bc6826bd81d3542a419ff551",
      secureToken: "Dedicated Nulls Server bypass",
      cloudStorage: "Distributed multiplayer server mirror"
    },
    tags: ["Infinite Resources", "Custom troops", "Free Servers"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-22",
    name: "Clash Royale Private Server",
    slug: "clash-royale",
    developer: "Supercell",
    rating: "4.6",
    downloads: "100M",
    size: "160 MB",
    version: "6.220.1",
    category: "Action",
    type: "Game",
    updatedAt: "07/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Fast-paced castle cards fights with infinite free gold cards chest openings.",
    longDescription: "Enjoy tower defense card battling on safe private networks. Features unlimited free premium chest openings, custom emojis, and maximum level gold cards.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Royale_Private_v6_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: d9d372bb6826bd81d3542a41969e107d",
      secureToken: "Premium private cards activator",
      cloudStorage: "Nulls dedicated game server"
    },
    tags: ["Unlimited Chests", "Max Cards Level", "Free Gems"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "game-23",
    name: "Call of Duty Mobile",
    slug: "cod-mobile",
    developer: "Activision Publishing",
    rating: "4.6",
    downloads: "100M",
    size: "1.9 GB",
    version: "1.0.45",
    category: "Action",
    type: "Game",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Premium multiplayer action shooter with pre-activated recoil control systems.",
    longDescription: "Battle classic FPS levels with stable gaming advantages. This modified premium game stabilizes camera vibrations and removes gun recoil entirely in offline matches.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/CoD_Mobile_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: fc5927ad81d3542a419f9c398e4d372f",
      secureToken: "AimAssist Booster V4",
      cloudStorage: "Secure CoD high speed mirror"
    },
    tags: ["Reduced Recoil", "Wall ESP", "Max Frames Unlocked"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-24",
    name: "Sniper 3D Assassin",
    slug: "sniper-3d",
    developer: "Wildlife Studios",
    rating: "4.5",
    downloads: "100M",
    size: "155 MB",
    version: "4.30.1",
    category: "Action",
    type: "Game",
    updatedAt: "04/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Elite sniper combat game. Unlimited silver coins and damage upgrades.",
    longDescription: "Contract hits in 3D realistic cities. The modified action game enables unlimited silencer modifications, maximum rifle bullet clip sizes, and endless credits.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Sniper_3D_v4_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: ad81d3542a419f9c398e4d372fc5927c",
      secureToken: "Infinite Weapon Cash",
      cloudStorage: "Dedicated high capacity server mirror"
    },
    tags: ["Infinite Money", "All Rifles Unlocked", "High Damage"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "game-25",
    name: "Real Racing 3 Mod",
    slug: "real-racing-3",
    developer: "EA Sports",
    rating: "4.6",
    downloads: "100M",
    size: "520 MB",
    version: "12.2.0",
    category: "Sports",
    type: "Game",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=150&auto=format&fit=crop&q=80",
    description: "Realistic driving experiences with unlimited gold wallets and pre-purchased cars.",
    longDescription: "Compete in licensed real motorsport tracks. The modified version provides you with preloaded maximum career cash balances, unlocking all tracks and cars.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Real_Racing_3_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: f15927ad81d3542a419d2b882e4da37a",
      secureToken: "EA Career Profile Pre-Completed",
      cloudStorage: "Dedicated premium EA speed server"
    },
    tags: ["Max Profile Credits", "All Tracks Open", "No Damage Repair"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-26",
    name: "Vector 2 Premium",
    slug: "vector-2-premium",
    developer: "Nekki",
    rating: "4.6",
    downloads: "10M",
    size: "96 MB",
    version: "1.2.1",
    category: "Arcade",
    type: "Game",
    updatedAt: "01/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Run through high-tech lab complexes. Full premium version with infinite armor kits.",
    longDescription: "Escape procedural research labs with sci-fi gadgets. Premium package unlocks upgrade kits, infinite health boosters, and complete character maneuvers.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Vector_2_Premium_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 419d2b882e4d37a1f5927ad81d3542a1",
      secureToken: "Premium Edition Active",
      cloudStorage: "Takano3D secure backup servers"
    },
    tags: ["Premium Edition", "Infinite Armor Kits", "Fast Upgrades"],
    isRecommendation: false,
    isRecent: false
  },
  {
    id: "game-27",
    name: "Jetpack Joyride Mod",
    slug: "jetpack-joyride",
    developer: "Halfbrick Studios",
    rating: "4.6",
    downloads: "100M",
    size: "142 MB",
    version: "1.80.0",
    category: "Arcade",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Fly wacky jetpacks with dynamic coin magnets and complete skin sets.",
    longDescription: "Escape corporate labs wearing high-flying bullet-powered machinery. Features infinite coins, permanent magnets, and pre-activated scientific shield generators.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Jetpack_Joyride_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 9d372bb6826bd81d3542a419d69e107d",
      secureToken: "Magnetic Coins Injector Active",
      cloudStorage: "Halfbrick direct data mirror"
    },
    tags: ["Coin Magnet", "All Jetpacks", "Infinite Gold"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "game-28",
    name: "Monument Valley",
    slug: "monument-valley",
    developer: "ustwo games",
    rating: "4.9",
    downloads: "5M",
    size: "240 MB",
    version: "2.5.22",
    category: "Adventure",
    type: "Game",
    updatedAt: "14/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Guide Princess Ida through beautiful optical illusions and isometric geometry castles.",
    longDescription: "Explore majestic optical architectures. This full premium version includes all additional campaign chapters like Forgotten Shores and Ida's Dream completely free.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Monument_Valley_Premium_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: aa81d3542a419f9c398e4d372fc5927a",
      secureToken: "All DLC Campaigns Unlocked",
      cloudStorage: "High-speed secure assets mirror"
    },
    tags: ["Paid Version Free", "All DLC Unlocked", "Art Game"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "game-29",
    name: "Limbo Premium",
    slug: "limbo",
    developer: "Playdead",
    rating: "4.8",
    downloads: "5M",
    size: "130 MB",
    version: "1.20.1",
    category: "Adventure",
    type: "Game",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=150&auto=format&fit=crop&q=80",
    description: "Award-winning dark atmospheric monochrome side-scrolling puzzle adventure.",
    longDescription: "Enter the haunting and silent monochrome forest world of Limbo. This premium version unlocks the complete game without trial limitations, offering flawless resolution graphics optimizations.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Limbo_Premium_v1_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: e81d3542a419ab7e810e4d372fc5927a",
      secureToken: "Full Edition Paid Bypass",
      cloudStorage: "Secure Redundant Storage Node"
    },
    tags: ["Full Version Free", "High HD Graphics", "Atmospheric"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "game-30",
    name: "Dead Trigger 2",
    slug: "dead-trigger-2",
    developer: "Deca Games",
    rating: "4.6",
    downloads: "50M",
    size: "510 MB",
    version: "1.10.2",
    category: "Action",
    type: "Game",
    updatedAt: "13/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Classic first-person zombie survival shooter with infinite ammo and fast firing mod.",
    longDescription: "Join the Global Resistance and wipe out zombie plagues. The combat MOD provides you with infinite rifle bullets, zero reload delay intervals, and high firing rates.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Dead_Trigger_2_v1_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: cb398e4d372fc5927ad81d3542a419f9",
      secureToken: "Infinite Ammo & Speed Fire Active",
      cloudStorage: "Deca Games high speed mirror"
    },
    tags: ["Infinite Ammo", "Fast Fire", "God Mode Options"],
    isRecommendation: false,
    isRecent: true
  }
];

// Let's generate additional mock items to reach exactly 100 apps/games for testing
const generateMockData = (): AppItem[] => {
  const data = [...BASE_APPS_DATA];
  const appCategories = ['Video Editor', 'Music & Audio', 'Social', 'Tools', 'Productivity'];
  const gameCategories = ['Action', 'Arcade', 'Sports', 'Adventure'];
  
  let appCounter = 31;
  let gameCounter = 31;
  
  const appNames = [
    "VFX Editor Pro", "SoundCloud+ Mod", "InstaView Premium", "Pro Cleaner Premium",
    "TimeManager VIP", "AdBlock Browser Pro", "VPN Secure Turbo", "PDF Converter Pro",
    "Subway Tracker Pro", "PhotoEnhance AI", "Weather Live Pro", "FitTracker Premium",
    "AudioRecorder HQ", "AutoClicker Pro", "AppLock Fingerprint", "FileExplorer VIP",
    "Launcher Prime", "LanguageLearner VIP", "PasswordManager Safe", "BatterySaver Ultra",
    "Notepad Premium", "AudioEqualizer Pro", "VideoCompressor HQ", "GPS Navigator Pro",
    "CloudStorage Backup", "MemeGenerator Pro", "QR Scanner VIP", "ZArchiver Premium"
  ];

  const gameNames = [
    "Cyberpunk Run", "Modern Warzones", "Pixel Dungeon RPG", "Shadow Hunter Arena",
    "Drift Legends", "Street Basketball 3D", "Golf Master VIP", "Temple Escape 3",
    "Archery Champion", "Chess Pro Master", "Retro Pinball VIP", "Sky Force Reloaded",
    "Zombie Frontier 4", "Deadly Target 3D", "Traffic Rider Premium", "Hill Climb Legend",
    "Sonic Dash Mod", "Angry Birds Space", "Fruit Ninja VIP", "Subway Surfers Plus",
    "Clash of Heroes", "Minecraft PE Mod", "Terraria Unlimited", "Real Boxing Mod",
    "Table Tennis Elite", "Billiards 3D Mod", "Sudoku King Pro", "Asphalt Legends Mod"
  ];

  while (data.length < 100) {
    const isApp = data.length % 2 === 0;
    if (isApp) {
      const name = appNames[(appCounter - 31) % appNames.length] + ` (V${appCounter})`;
      const slug = `app-mock-${appCounter}`;
      const category = appCategories[appCounter % appCategories.length];
      data.push({
        id: `app-mock-${appCounter}`,
        name: name,
        slug: slug,
        developer: `DevStudio AppLab ${appCounter}`,
        rating: (4.0 + (appCounter % 10) * 0.1).toFixed(1),
        downloads: `${appCounter * 5}M`,
        size: `${30 + (appCounter % 80)} MB`,
        version: `1.${appCounter % 5}.0`,
        category: category,
        type: 'App',
        updatedAt: `${(10 + (appCounter % 20)).toString().padStart(2, '0')}/07/2026`,
        icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
        description: `Premium unlocked version of ${name} with fully accessible features and direct high-speed download.`,
        longDescription: `${name} is a high-performance utility designed to optimize your mobile workspace. The MOD unlocks all paid subscription services, removes tracking services, stops background analytics reporting, and optimizes internal engine configurations for battery savings.`,
        downloadUrl: `https://lookmodstore-cdn.takano3d.com/apks/mock_app_${appCounter}.apk`,
        screenshots: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"],
        security: {
          checksum: `SHA-256: mocka3542a419f9c398e4d372fc5927${appCounter}`,
          secureToken: "Verified Secure APK Signature",
          cloudStorage: "Secure global download server"
        },
        tags: ["MOD", "Premium Unlocked", "Ad-Free"],
        isRecommendation: appCounter % 5 === 0,
        isRecent: appCounter % 3 === 0
      });
      appCounter++;
    } else {
      const name = gameNames[(gameCounter - 31) % gameNames.length] + ` Mod`;
      const slug = `game-mock-${gameCounter}`;
      const category = gameCategories[gameCounter % gameCategories.length];
      data.push({
        id: `game-mock-${gameCounter}`,
        name: name,
        slug: slug,
        developer: `GameLab Interactive ${gameCounter}`,
        rating: (4.0 + (gameCounter % 10) * 0.1).toFixed(1),
        downloads: `${gameCounter * 3}M`,
        size: `${80 + (gameCounter % 200)} MB`,
        version: `2.${gameCounter % 4}.1`,
        category: category,
        type: 'Game',
        updatedAt: `${(10 + (gameCounter % 20)).toString().padStart(2, '0')}/07/2026`,
        icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
        description: `Full MOD version of ${name} with unlimited resources and all levels unlocked.`,
        longDescription: `Experience the full excitement of ${name}. This modified game injects unlimited money/gold, unlocks all premium character skins, bypasses regional level lock walls, and removes annoying interlude popups completely. Verified safe from any signatures.`,
        downloadUrl: `https://lookmodstore-cdn.takano3d.com/apks/mock_game_${gameCounter}.apk`,
        screenshots: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80"],
        security: {
          checksum: `SHA-256: mockg3542a419f9c398e4d372fc5927${gameCounter}`,
          secureToken: "Unlocked Game Package Clean",
          cloudStorage: "High-speed mirror CDN"
        },
        tags: ["Unlimited Money", "MOD", "All Levels Open"],
        isRecommendation: gameCounter % 5 === 0,
        isRecent: gameCounter % 3 === 0
      });
      gameCounter++;
    }
  }
  return data;
};

export const APPS_DATA: AppItem[] = generateMockData();

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Top 5 Android MODs of the Month",
    summary: "Discover modified apps and games with the most outstanding features unlocked completely free of charge.",
    content: "Android stands out over other mobile ecosystems for its versatility and freedom of installation. In this article, we delve into five exceptional modifications that will allow you to optimize your applications and expand your entertainment limits. From Spotify Premium to professional video editors without watermarks, we explain how to install them safely on your smartphone using the clean and pre-verified files available on MOD Hub.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    date: "11 July, 2026",
    author: "Takano3D"
  },
  {
    id: "b2",
    title: "How to Safely Install an APK / OBB File",
    summary: "Step-by-step guide for beginners and advanced users on how to enable unknown sources without compromising your phone.",
    content: "Manual installation of APK files is a simple task but requires attention to certain critical security details. First, you must go to Settings > Security and enable 'Install applications from unknown sources'. In this guide, we show you how to use our integrated SHA-256 validator to confirm that no files have been tampered with, protecting your personal information at all times.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    date: "08 July, 2026",
    author: "Takano3D Team"
  }
];
