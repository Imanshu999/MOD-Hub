import React from 'react';
import { Star, Download, ShieldCheck, Gamepad2, Smartphone } from 'lucide-react';
import { AppItem } from '../types';

interface AppCardProps {
  app: AppItem;
  darkMode: boolean;
  variant: 'grid' | 'list' | 'recommendation';
  onSelect: (slug: string) => void;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  darkMode,
  variant,
  onSelect,
}) => {
  const isGame = app.type === 'Game';

  if (variant === 'grid') {
    return (
      <div 
        id={`app-grid-card-${app.id}`}
        onClick={() => onSelect(app.slug)}
        className={`group relative flex flex-col p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
          darkMode 
            ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/95 hover:border-slate-700 hover:shadow-[0_8px_30px_rgb(15,23,42,0.6)]' 
            : 'bg-white border-slate-100 hover:bg-slate-50/80 hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)]'
        }`}
      >
        {/* Category & Badge Row */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
          }`}>
            {app.category}
          </span>
          <div className="flex items-center gap-1 text-yellow-400 font-mono text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            <span>{app.rating}</span>
          </div>
        </div>

        {/* Info Layout */}
        <div className="flex gap-3 items-center mb-4">
          <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden border border-slate-700/30 group-hover:scale-105 transition-transform duration-300">
            <img 
              src={app.icon} 
              alt={app.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Play/App corner indicator */}
            <div className="absolute bottom-0 right-0 p-0.5 rounded-tl-md bg-store-accent text-white">
              {isGame ? <Gamepad2 className="w-2.5 h-2.5" /> : <Smartphone className="w-2.5 h-2.5" />}
            </div>
          </div>
          
          <div className="min-w-0 flex-1">
            <h4 className={`text-sm font-display font-bold truncate leading-tight ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {app.name}
            </h4>
            <p className="text-[11px] text-slate-500 truncate">{app.developer}</p>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">{app.size}</p>
          </div>
        </div>

        {/* MOD tags row */}
        <div className="flex flex-wrap gap-1 mb-4 h-5 overflow-hidden">
          {app.tags.slice(0, 2).map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[9px] font-mono font-medium px-1.5 py-0.2 rounded ${
                tag.includes('MOD') || tag.includes('Infinitas') || tag.includes('Desbloqueado')
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                  : 'bg-store-accent/10 text-store-accent border border-store-accent/25'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect(app.slug);
          }}
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl bg-store-accent hover:bg-red-600 active:scale-[0.98] text-white transition-all shadow-[0_2px_8px_rgba(239,68,68,0.2)] hover:shadow-[0_4px_12px_rgba(239,68,68,0.35)]"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install APK</span>
        </button>
      </div>
    );
  }

  if (variant === 'recommendation') {
    return (
      <div 
        id={`app-rec-card-${app.id}`}
        onClick={() => onSelect(app.slug)}
        className={`group relative p-5 rounded-2xl cursor-pointer overflow-hidden border transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-br from-store-card/85 to-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]' 
            : 'bg-gradient-to-br from-white to-slate-50/50 border-slate-200/80 hover:border-slate-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]'
        }`}
      >
        {/* Glow backdrop inside */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-store-accent/5 rounded-full blur-2xl group-hover:bg-store-accent/15 transition-all duration-300" />

        <div className="flex gap-4 items-start relative z-10">
          <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-slate-700/10 group-hover:scale-105 transition-transform duration-300 shadow-md">
            <img 
              src={app.icon} 
              alt={app.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <span className={`text-[10px] font-mono px-2 py-0.2 rounded-full ${
                darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
              }`}>
                {app.type}
              </span>
              <div className="flex items-center text-yellow-400 font-mono text-xs font-semibold">
                <Star className="w-3 h-3 fill-current" />
                <span className="ml-0.5">{app.rating}</span>
              </div>
            </div>

            <h4 className={`text-base font-display font-bold tracking-tight leading-snug truncate ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {app.name}
            </h4>
            <p className="text-xs text-slate-500 truncate mb-1">{app.developer}</p>
            <p className={`text-xs truncate line-clamp-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {app.description}
            </p>
          </div>
        </div>

        {/* Footer info in recommendation */}
        <div className="mt-4 pt-3 border-t border-slate-800/10 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span>↓ {app.downloads}</span>
            <span>• {app.size}</span>
          </div>
          <span className="text-xs font-bold text-store-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>View MOD</span>
            <span className="text-sm">→</span>
          </span>
        </div>
      </div>
    );
  }

  // Vertical list layout for "Últimas actualizaciones"
  return (
    <div 
      id={`app-list-card-${app.id}`}
      onClick={() => onSelect(app.slug)}
      className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all border ${
        darkMode 
          ? 'bg-slate-900/20 border-slate-800/40 hover:bg-slate-900/60 hover:border-slate-700/80' 
          : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200'
      }`}
    >
      <div className="flex gap-3.5 items-center min-w-0 w-full sm:w-auto">
        {/* App Icon */}
        <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden border border-slate-700/10">
          <img 
            src={app.icon} 
            alt={app.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Text details */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h4 className={`text-sm sm:text-base font-display font-bold leading-tight truncate ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {app.name}
            </h4>
            <div className="flex items-center gap-1">
              <span className={`text-[10px] font-mono px-1.5 py-0.1 rounded-md ${
                darkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-100 text-slate-500'
              }`}>
                {app.version}
              </span>
              <span className={`text-[10px] font-mono px-1.5 py-0.1 rounded-md ${
                isGame 
                  ? 'bg-amber-500/10 text-amber-500' 
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {app.category}
              </span>
            </div>
          </div>
          
          <p className={`text-xs line-clamp-1 mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {app.description}
          </p>

          {/* Tag labels */}
          <div className="flex flex-wrap gap-1">
            {app.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-mono font-medium px-1.5 py-0.1 rounded bg-emerald-500/10 text-emerald-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column details (hidden on mobile layout or shifted down) */}
      <div className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/10">
        <div className="flex items-center gap-5">
          {/* Rating */}
          <div className="text-left sm:text-right">
            <div className="flex items-center sm:justify-end text-yellow-400 font-mono text-xs font-semibold gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span>{app.rating}</span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">Rating</p>
          </div>

          {/* Size */}
          <div className="text-left sm:text-right">
            <div className={`font-mono text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {app.size}
            </div>
            <p className="text-[10px] text-slate-500 font-mono">Size</p>
          </div>

          {/* Security stamp */}
          <div className="hidden md:flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4 fill-emerald-500/10" />
            <span>Verified</span>
          </div>
        </div>

        {/* Descargar inline button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect(app.slug);
          }}
          className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-store-accent hover:bg-red-600 text-white transition-all flex items-center gap-1 active:scale-95"
        >
          <Download className="w-3 h-3" />
          <span>Get</span>
        </button>
      </div>
    </div>
  );
};
