import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Download, Sparkles } from 'lucide-react';
import { AppItem } from '../types';

interface RecentCarouselProps {
  apps: AppItem[];
  darkMode: boolean;
  onSelect: (slug: string) => void;
}

export const RecentCarousel: React.FC<RecentCarouselProps> = ({
  apps,
  darkMode,
  onSelect,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Title block */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-red-500/10 text-store-accent">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-lg sm:text-xl font-display font-bold tracking-tight">
            Recently Added
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll('left')}
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700' 
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700' 
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sliding Viewport */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {apps.map((app) => (
          <div 
            key={app.id}
            onClick={() => onSelect(app.slug)}
            className={`snap-start shrink-0 w-[280px] sm:w-[320px] p-4 rounded-2xl cursor-pointer transition-all border group-hover:border-opacity-100 ${
              darkMode 
                ? 'bg-gradient-to-tr from-slate-900/90 to-store-card/40 border-slate-800/80 hover:border-store-accent/50 hover:shadow-[0_8px_25px_rgba(239,68,68,0.15)]' 
                : 'bg-gradient-to-tr from-white to-slate-50 border-slate-200/80 hover:border-store-accent hover:shadow-[0_8px_25px_rgba(239,68,68,0.05)]'
            }`}
          >
            <div className="flex gap-3.5 items-start mb-4">
              {/* App logo */}
              <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-slate-700/10 shadow-md group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={app.icon} 
                  alt={app.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Core Details */}
              <div className="min-w-0 flex-1">
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  darkMode ? 'bg-slate-800 text-red-400' : 'bg-slate-200/50 text-red-600'
                }`}>
                  {app.category}
                </span>
                <h3 className={`text-base font-display font-bold truncate mt-1 leading-tight ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {app.name}
                </h3>
                <p className="text-xs text-slate-500 truncate">{app.developer}</p>
                
                {/* Stars */}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="flex items-center text-yellow-400 font-mono text-xs font-semibold">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="ml-0.5">{app.rating}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">•</span>
                  <span className="text-[10px] text-slate-500 font-mono">{app.size}</span>
                </div>
              </div>
            </div>

            {/* Quick overview of MOD */}
            <p className={`text-xs line-clamp-1 mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {app.description}
            </p>

            {/* Button */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-800/10">
              <span className="text-[10px] font-mono text-slate-500">Version {app.version}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(app.slug);
                }}
                className="flex items-center justify-center gap-1.5 py-2 px-4 text-xs font-bold rounded-xl bg-store-accent hover:bg-red-600 active:scale-95 text-white transition-all shadow-[0_2px_8px_rgba(239,68,68,0.15)]"
              >
                <Download className="w-3 h-3" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
