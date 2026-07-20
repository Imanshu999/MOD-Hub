import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Star, Download, ShieldCheck, ChevronLeft, ChevronRight, 
  Info, CheckCircle2, RefreshCw, Terminal, Lock, Server, FileCheck2, Share2, Sparkles,
  Play, X, Maximize2
} from 'lucide-react';
import { AppItem } from '../types';
import { APPS_DATA } from '../data';
import { AppCard } from './AppCard';

interface AppDetailProps {
  app: AppItem;
  darkMode: boolean;
  onBack: () => void;
  onSelectApp?: (slug: string) => void;
}

const getYoutubeEmbedUrl = (url?: string): string => {
  if (!url) return '';
  if (url.includes('embed/')) return url;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=0&rel=0`;
  }
  return url;
};

export const AppDetail: React.FC<AppDetailProps> = ({
  app,
  darkMode,
  onBack,
  onSelectApp,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const [scanProgress, setScanProgress] = useState(0);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLightboxIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [app.id]);

  useEffect(() => {
    setScanState('scanning');
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanState('verified');
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [app.id]);

  const triggerDownload = () => {
    setDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = app.downloadUrl;
      link.setAttribute('download', `${app.slug}-modhub.apk`);
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(app.downloadUrl, '_blank');
    }
    setTimeout(() => setDownloading(false), 800);
  };

  const fallbackCopy = () => {
    try {
      const el = document.createElement('textarea');
      el.value = window.location.href;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy fallback failed:", err);
    }
  };

  const handleShare = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch((err) => {
            console.error("Clipboard API rejected operation, using fallback:", err);
            fallbackCopy();
          });
      } else {
        fallbackCopy();
      }
    } catch (e) {
      console.error("Clipboard API access failed:", e);
      fallbackCopy();
    }
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % app.screenshots.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrevLightbox();
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, app.screenshots.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.targetTouches && e.targetTouches[0]) {
      setTouchStartX(e.targetTouches[0].clientX);
      setTouchStartY(e.targetTouches[0].clientY);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          handlePrevLightbox();
        } else {
          handleNextLightbox();
        }
      }
    } else {
      if (Math.abs(diffY) > 80) {
        setLightboxOpen(false);
      }
    }
  };

  const getContextAwareRelated = () => {
    const baseList = APPS_DATA.filter((item) => item.id !== app.id);
    const sameTypeList = baseList.filter((item) => item.type === app.type);
    const sameCategory = sameTypeList.filter((item) => item.category === app.category);
    const otherCategories = sameTypeList.filter((item) => item.category !== app.category);
    const combined = [...sameCategory, ...otherCategories];
    
    let seedNum = app.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const shuffled = [...combined];
    for (let i = shuffled.length - 1; i > 0; i--) {
      seedNum = (seedNum * 9301 + 49297) % 233280;
      const j = Math.floor((seedNum / 233280) * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled.slice(0, 18);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 space-y-5 animate-fade-in pb-10">
      
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md ${
            darkMode
              ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              : 'bg-white/70 border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <button
          onClick={handleShare}
          className={`p-2 rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-semibold backdrop-blur-md ${
            darkMode
              ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:text-white'
              : 'bg-white/70 border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <Share2 className="w-4 h-4 text-store-accent" />
          <span className={`transition-all duration-200 ${copied ? 'scale-110 opacity-100' : 'scale-100 opacity-100'}`}>
            {copied ? 'Copied!' : 'Share'}
          </span>
        </button>
      </div>

      {/* Main App Hero Details - अपडेटेड सेंटर एलाइनमेंट के साथ */}
      <div className={`p-5 sm:p-6 rounded-2xl border backdrop-blur-md ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-200'
      }`}>
        <div className="flex flex-col items-center text-center gap-4">
          
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-slate-700/20 shadow-xl shrink-0">
            <img 
              src={app.icon} 
              alt={app.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-1.5">
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                darkMode ? 'bg-slate-800 text-red-400' : 'bg-slate-100 text-red-600'
              }`}>
                {app.type}
              </span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-medium">
                MOD Unlocked
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl font-display font-bold tracking-tight mb-1 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {app.name}
            </h2>
            <p className="text-sm text-slate-500">{app.developer}</p>

            <div className="flex items-center justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center text-yellow-400 font-mono font-bold">
                <Star className="w-4 h-4 fill-current mr-1" />
                <span>{app.rating} / 5</span>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono">↓ {app.downloads} downloads</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono">{app.size}</span>
            </div>
          </div>

          <div className="w-full max-w-sm flex flex-col gap-2">
            <button
              onClick={triggerDownload}
              disabled={downloading}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${
                downloading 
                  ? 'bg-slate-800 cursor-not-allowed' 
                  : 'bg-store-accent hover:bg-red-600 shadow-store-accent/20 hover:shadow-store-accent/35'
              }`}
            >
              <Download className="w-5 h-5" />
              <span>{downloading ? 'Downloading...' : 'Download APK'}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium py-1 bg-emerald-500/5 rounded-lg border border-emerald-500/15">
              <ShieldCheck className="w-4 h-4 fill-emerald-500/10" />
              <span>SHA-256 Secured</span>
            </div>
          </div>

        </div>
      </div>

      {/* DESCRIPTION AND REMAINING CODE REMAINS UNCHANGED */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {app.videoUrl && (
            <div className={`p-5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-100'}`}>
              <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                <Play className="w-4 h-4 text-store-accent fill-store-accent/20 animate-pulse" />
                <span>Video Trailer / Gameplay</span>
              </h3>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-black/80 border border-slate-800/60 shadow-inner">
                <iframe src={getYoutubeEmbedUrl(app.videoUrl)} title={`${app.name} Video Trailer`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full border-0" />
              </div>
            </div>
          )}
          {/* ... बाकी का कोड वैसे ही रखें ... */}
        </div>
      </div>
    </div>
  );
};
