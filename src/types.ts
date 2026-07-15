export interface AppSecurity {
  checksum: string;
  secureToken: string;
  cloudStorage: string;
}

export interface AppItem {
  id: string;
  name: string;
  slug: string;
  developer: string;
  rating: string;
  downloads: string;
  size: string;
  version: string;
  category: string;
  type: 'App' | 'Game';
  updatedAt: string;
  icon: string;
  description: string;
  longDescription?: string;
  downloadUrl: string;
  screenshots: string[];
  security: AppSecurity;
  tags: string[]; // e.g. ["MOD", "Gratis", "Premium", "Suscripción pagada"]
  isRecommendation?: boolean;
  isRecent?: boolean;
  videoUrl?: string;
}

export interface CategoryItem {
  name: string;
  count: number;
  icon: string; // Lucide icon name or emoji
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: string;
}
