import React, { useState } from 'react';
import { Search, Menu, Sun, Moon, Sparkles, X, Shield, Globe } from 'lucide-react';
import takano3dAvatar from '../assets/images/takano3d_avatar_1783771284341.jpg';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onOpenDrawer: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  searchTerm,
  setSearchTerm,
  onOpenDrawer,
  onNavigateHome,
}) => {
  const [logoError, setLogoError] = useState(false);
  const characterImageUrl = takano3dAvatar;

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b ${
      darkMode 
        ? 'bg-[#0b0f19]/90 border-slate-800 text-white' 
        : 'bg-white/95 border-slate-200 text-slate-800'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Branding Area */}
        <div 
          onClick={onNavigateHome} 
          className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
        >
          {/* Logo with dynamic fallback */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg overflow-hidden border border-store-accent bg-store-card/40 transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
            {!logoError ? (
              <img 
                src={characterImageUrl} 
                alt="LM" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-red-600 to-rose-600 text-white text-sm font-bold font-display">
                MH
              </div>
            )}
            {/* Ambient indicator dot */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-store-dark rounded-full shadow-lg"></span>
          </div>

          <div className="hidden sm:block">
            <h1 className="font-display font-bold text-lg tracking-tight flex items-center gap-1">
              <span>MOD Hub</span>
              <span className="text-xs bg-store-accent/15 text-store-accent px-1.5 py-0.5 rounded font-sans font-medium tracking-normal border border-store-accent/30">
                MOD
              </span>
            </h1>
            <p className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">Takano3D Studio</p>
          </div>
          
          <div className="sm:hidden block">
            <span className="font-display font-bold text-base text-store-accent">MH</span>
          </div>
        </div>

        {/* Dynamic Search Bar */}
        <div className="flex-1 max-w-md relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-store-accent transition-colors">
            <Search className="w-4.5 h-4.5" />
          </div>
          <input
            type="text"
            placeholder="Search apps, games, MODs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 text-sm rounded-full outline-none transition-all border ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-store-accent focus:bg-slate-900/90'
                : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-store-accent focus:bg-white'
            } focus:ring-1 focus:ring-store-accent`}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-100"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          )}
        </div>

        {/* Control Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all ${
              darkMode 
                ? 'hover:bg-slate-800/80 text-yellow-400' 
                : 'hover:bg-slate-100 text-slate-600'
            } border border-transparent hover:border-slate-800`}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Hamburger Sidebar Trigger */}
          <button
            onClick={onOpenDrawer}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Navigation Menu"
          >
            <Menu className="w-5.5 h-5.5" />
          </button>

        </div>
      </div>
    </header>
  );
};
