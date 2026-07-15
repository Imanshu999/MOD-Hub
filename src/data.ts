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

export const APPS_DATA: AppItem[] = [
  {
    id: "1",
    name: "CapCut",
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
    longDescription: "CapCut is the most downloaded all-in-one free video editor in the world. Designed specifically for content creators on TikTok, Instagram, and YouTube, it allows you to cut, reverse, and change the speed of your clips with absolute precision. This modified premium version (MOD) unlocks all VIP templates, cinematic transitions, advanced color filters, and video export in 4K resolution at 60 FPS without annoying watermarks. In addition, it features a powerful AI-powered automatic subtitle generator to save you hours of manual editing.",
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
    isRecent: true
  },
  {
    id: "2",
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
    longDescription: "The ultimate endless runner game arrives at MOD Hub with everything unlocked! Join Jake, Tricky, and Fresh in their exciting escape through the train tracks of the world. This premium MOD version includes infinite gold coins, unlimited resurrection keys, and all premium characters and surfboards unlocked from the first second. Enjoy colorful HD graphics optimized with an ultra-smooth refresh rate. Challenge your friends and dominate the global leaderboards with superior performance.",
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
    id: "3",
    name: "Minecraft Pocket Edition",
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
    longDescription: "Explore randomly generated worlds and build amazing things, from the simplest homes to the most majestic castles. Play in creative mode with unlimited resources, or delve into survival mode, where you will have to craft weapons and armor to defend yourself against dangerous creatures. Our special MOD version offers you completely free access to all premium aspects of the store, unlocked paid textures, and the ability to play on official multiplayer servers without license verification required.",
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
    isRecent: true
  },
  {
    id: "4",
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
    longDescription: "Enjoy the best music and podcasts without limits. With Spotify Premium MOD, you will have the ultimate experience without audio or video advertising interruptions. Unlock the ability to skip songs unlimitedly, play any track you want on-demand with extreme audio quality (320kbps), and activate the music search bar. This version is optimized to consume less battery and RAM, allowing you to browse playlists and artists instantly.",
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
    isRecent: true
  },
  {
    id: "5",
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
    longDescription: "Brawl Stars by Supercell is the action multiplayer game of the moment! Enjoy quick three-minute battles in a variety of exciting game modes. This MOD grants you free unlimited gems, unlimited boxes to open immediately, and spectacular gold skins to show off to all your rivals. Play on a 100% stable private server with automatic matchmaking so you never have to wait to jump into battle.",
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
    isRecent: true
  },
  {
    id: "6",
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
    longDescription: "TikTok Plus is an advanced modified version of the social media giant. It allows you to download any video directly to your local gallery without watermarks or logos. In addition, it removes all annoying sponsored ads from the main feed, unlocks high-fidelity audio playback, and adds a special button to change the geographical region of the feed to explore trends from any country in the world.",
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
    id: "7",
    name: "Netflix Premium App",
    slug: "netflix-premium",
    developer: "Netflix Inc.",
    rating: "4.5",
    downloads: "100M",
    size: "42 MB",
    version: "10.6.2",
    category: "Video Editor",
    type: "App",
    updatedAt: "04/07/2026",
    icon: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=150&auto=format&fit=crop&q=80",
    description: "Watch exclusive movies and TV shows in 4K HDR resolution without paying a monthly subscription.",
    longDescription: "Netflix Premium MOD offers you unlimited access to the entire original Netflix catalog, trending world TV series, award-winning documentaries, and stunning cinematic feature films. The best part is that it does not require registering a credit card or paying monthly fees. Stream simultaneously on up to 4 devices in UHD 4K resolution and Dolby Atmos surround sound. Includes multi-language options with perfect subtitles.",
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
    id: "8",
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
    longDescription: "Play with friends and become a pool legend. Face competitors from all over the world in competitive 1v1 matches or participate in international tournaments to win exclusive trophies. This modified version provides the coveted long line guide that allows you to visualize the exact trajectory of the balls from start to finish, ensuring perfect bank shots and mastering the most difficult tables effortlessly.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/8_Ball_Pool_v5.14.2_Mod.apk",
    screenshots: [
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 7810e4d372fc5927ad81d3542a419a42",
      secureToken: "Secure accounts without ban risk",
      cloudStorage: "Direct connection to Miniclip servers"
    },
    tags: ["MOD", "Long Line", "Free"],
    isRecommendation: false,
    isRecent: true
  }
];

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
