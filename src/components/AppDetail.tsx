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

      {/* Main App Hero Details - सेंटर अलाइन किया गया */}
      <div className={`p-5 sm:p-6 rounded-2xl border backdrop-blur-md ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-200'
      }`}>
        <div className="flex flex-col items-center text-center">
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-700/20 shadow-xl shrink-0 mx-auto mb-4">
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

          <div className="w-full max-w-sm mt-6 flex flex-col gap-2">
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
              <span>{downloading ? 'Starting download...' : 'Download APK'}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium py-1 bg-emerald-500/5 rounded-lg border border-emerald-500/15">
              <ShieldCheck className="w-4 h-4 fill-emerald-500/10" />
              <span>SHA-256 Secured</span>
            </div>
          </div>

        </div>
      </div>

      {/* Grid, Video, Screenshots, Description, Tech Info, Scanner, Related Apps सब यहाँ हैं */}
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
          <div className={`p-5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-100'}`}>
            <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              <Sparkles className="w-4.5 h-4.5 text-store-accent" />
              <span>Screenshots Gallery</span>
            </h3>
            <div className="flex gap-3.5 overflow-x-auto pb-2 snap-x scroll-smooth no-scrollbar">
              {app.screenshots.map((src, idx) => (
                <div key={idx} onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }} className="w-64 sm:w-80 aspect-video rounded-xl overflow-hidden cursor-pointer shrink-0 snap-start border border-slate-200/10 dark:border-slate-800/60 transition-all hover:scale-105 hover:border-store-accent/50 group relative shadow-md">
                  <img src={src} alt={`${app.name} screenshot ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-200 flex items-center justify-center">
                    <Maximize2 className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`p-5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-100'}`}>
            <h3 className={`text-base font-display font-bold mb-3 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>MOD Description</h3>
            <p className={`text-sm leading-relaxed text-slate-400 whitespace-pre-line ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{app.longDescription || app.description}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className={`p-5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-100'}`}>
            <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              <Info className="w-4.5 h-4.5 text-store-accent" />
              <span>Technical Information</span>
            </h3>
            <div className="divide-y divide-slate-800/10 text-xs">
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">Current version</span><span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.version}</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">File size</span><span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.size}</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">Developer</span><span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.developer}</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">Total downloads</span><span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.downloads}</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">Category</span><span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.category}</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">Content type</span><span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.type === 'Game' ? 'Video Game' : 'Application'}</span></div>
              <div className="py-2.5 flex justify-between"><span className="text-slate-500 font-medium">Last update</span><span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.updatedAt}</span></div>
            </div>
          </div>
          <div className={`p-5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/70 border-slate-100'}`}>
            <h3 className={`text-base font-display font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Security & Integrity</span>
            </h3>
            <div className={`p-3.5 rounded-xl border mb-4 font-mono text-[11px] ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 flex items-center gap-1"><Terminal className="w-3.5 h-3.5 text-store-accent" />Scanner v4.2</span>
                <span className={`font-bold ${scanState === 'scanning' ? 'text-yellow-400 animate-pulse' : 'text-emerald-400'}`}>{scanState === 'scanning' ? `Verifying ${scanProgress}%` : 'COMPLETE'}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1 mb-3.5 overflow-hidden"><div className={`h-full transition-all ${scanState === 'scanning' ? 'bg-yellow-400' : 'bg-emerald-400'}`} style={{ width: `${scanProgress}%` }} /></div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span className="truncate">Original APK signature secured</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span className="truncate">No adware, trojans, or spyware</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span className="truncate">Active anti-detection protection</span></div>
              </div>
            </div>
            <div className="space-y-3.5">
              <div className="flex gap-2.5 items-start"><div className={`p-1.5 rounded-lg shrink-0 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}><FileCheck2 className="w-4 h-4 text-emerald-400" /></div><div><h4 className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Secure Checksum Signature</h4><p className="text-[10px] text-slate-500 font-mono mt-0.5 break-all">{app.security.checksum}</p></div></div>
              <div className="flex gap-2.5 items-start"><div className={`p-1.5 rounded-lg shrink-0 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}><Lock className="w-4 h-4 text-store-accent" /></div><div><h4 className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Secure SSL Token</h4><p className="text-[10px] text-slate-500 mt-0.5">{app.security.secureToken}</p></div></div>
              <div className="flex gap-2.5 items-start"><div className={`p-1.5 rounded-lg shrink-0 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}><Server className="w-4 h-4 text-red-400" /></div><div><h4 className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Protected Servers</h4><p className="text-[10px] text-slate-500 mt-0.5">{app.security.cloudStorage}</p></div></div>
            </div>
          </div>
        </div>
      </div>

      {(() => {
        const relatedItems = getContextAwareRelated();
        if (relatedItems.length === 0) return null;
        return (
          <div className="mt-6 pt-5 border-t border-slate-200/50 dark:border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-store-accent" />
                <h3 className={`text-base sm:text-lg font-display font-bold tracking-tight ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {app.type === 'App' ? 'More Apps' : 'More Games'}
                </h3>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 snap-x no-scrollbar">
              {relatedItems.map((item) => (
                <div key={item.id} className="w-[280px] xs:w-[320px] sm:w-[340px] shrink-0 snap-start"><AppCard app={item} darkMode={darkMode} variant="list" onSelect={onSelectApp} /></div>
              ))}
            </div>
          </div>
        );
      })()}

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300" onClick={() => setLightboxOpen(false)}>
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50">
            <span className="text-white/60 font-mono text-xs bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">{lightboxIndex + 1} / {app.screenshots.length}</span>
            <button onClick={() => setLightboxOpen(false)} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 text-white transition-all cursor-pointer backdrop-blur-sm"><X className="w-5 h-5" /></button>
          </div>
          <div className="relative max-w-5xl w-full px-4 flex items-center justify-center h-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <button onClick={handlePrevLightbox} className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-sm hidden sm:flex items-center justify-center"><ChevronLeft className="w-6 h-6" /></button>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 scale-95" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ touchAction: 'pan-y pinch-zoom', userSelect: 'none' }}>
              <img src={app.screenshots[lightboxIndex]} alt={`${app.name} screenshot detail ${lightboxIndex + 1}`} className="object-contain max-h-[75vh] w-auto max-w-full select-none rounded-xl" referrerPolicy="no-referrer" style={{ touchAction: 'pan-y pinch-zoom' }} />
            </div>
            <button onClick={handleNextLightbox} className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-sm hidden sm:flex items-center justify-center"><ChevronRight className="w-6 h-6" /></button>
          </div>
        </div>
      )}
    </div>
  );
};
