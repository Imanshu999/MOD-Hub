import React from 'react';
import { X, Home, Gamepad2, Smartphone, BookOpen, Mail, ShieldAlert, Sparkles, ChevronRight, Instagram, Youtube, Send, Facebook } from 'lucide-react';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  activeTab: 'all' | 'games' | 'apps' | 'blog' | 'contact';
  setActiveTab: (tab: 'all' | 'games' | 'apps' | 'blog' | 'contact') => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  darkMode,
  activeTab,
  setActiveTab,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'all', label: 'Home', icon: Home, description: 'Main page and updates' },
    { id: 'games', label: 'Games', icon: Gamepad2, description: 'Action, racing, and arcade MODs' },
    { id: 'apps', label: 'Apps', icon: Smartphone, description: 'Tools, music, and premium editors' },
    { id: 'blog', label: 'Info Blog', icon: BookOpen, description: 'Installation guides and Android news' },
    { id: 'contact', label: 'Contact Studio', icon: Mail, description: 'Send requests to Takano3D' },
  ] as const;

  const handleSelect = (tab: 'all' | 'games' | 'apps' | 'blog' | 'contact') => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className={`absolute inset-y-0 right-0 max-w-xs w-full shadow-2xl flex flex-col transition-transform duration-300 transform translate-x-0 ${
        darkMode ? 'bg-slate-950 border-l border-slate-900 text-white' : 'bg-white border-l border-slate-200 text-slate-800'
      }`}>
        {/* Drawer Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          darkMode ? 'border-slate-900' : 'border-slate-100'
        }`}>
          <div>
            <h2 className="font-display font-bold text-base tracking-tight text-store-accent">
             MOD Hub
            </h2>
            <p className="text-[10px] text-slate-500 font-mono">TAKANO3D APPS CATALOG</p>
          </div>
          <button 
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-slate-900 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left flex items-center gap-3.5 p-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-store-accent text-white font-semibold shadow-[0_4px_12px_rgba(59,130,246,0.25)]' 
                    : darkMode 
                      ? 'hover:bg-slate-900 text-slate-300 hover:text-white' 
                      : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20' : darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <Icon className="w-4.5 h-4.5 shrink-0" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium leading-none mb-0.5">{item.label}</div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {item.description}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50 shrink-0" />
              </button>
            );
          })}

          {/* Social Media Section - एनिमेटेड, कलरफुल पट्टी */}
          <div className="mt-6 mx-3 p-4 rounded-xl flex justify-between items-center relative overflow-hidden transition-all duration-500 border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse">
            <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
            <a href="https://www.facebook.com/share/19JUUNiUBb/" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/look_mod.vercel.app?igsh=MXh6NzUyZmY1ajRqZw==" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/xi_r7.czx_?igsh=N3VwbDNzMGs5OWps" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@look-mod.vercel?si=AQ4duw4Yz0g6itdC" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110 transition-transform">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://t.me/Imaanshu_N" target="_blank" rel="noreferrer" className="text-[#0088cc] hover:scale-110 transition-transform">
              <Send className="w-6 h-6" />
            </a>
          </div>
                    {/* New Social Media Container (WhatsApp, TikTok, Reddit, Discord) */}
          <div className="mt-4 mx-3 p-4 rounded-xl flex justify-between items-center relative overflow-hidden transition-all duration-500 border border-white/10 shadow-[0_0_15px_rgba(234,179,8,0.3)] bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 animate-pulse">
            <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
            
            {/* WhatsApp */}
            <a href="https://whatsapp.com/channel/0029Vb8dkf78V0tqvNMOiW3B" target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.89 9.89 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg>
            </a>

            {/* TikTok */}
            <a href="https://look-mod.vercel.app" target="_blank" rel="noreferrer" className="text-[#000000] dark:text-white hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89h.73v-3.39h-.73a6.28 6.28 0 1 0 6.28 6.28V7.55a8.21 8.21 0 0 0 3.77.92z"/></svg>
            </a>

            {/* Reddit - ठीक किया हुआ आइकन */}
            <a href="https://www.reddit.com/u/Imaanshu-N/s/rOyKNsQcXR" target="_blank" rel="noreferrer" className="text-[#FF4500] hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M16.5 10c0-1.75-1.42-3.17-3.17-3.17-.67 0-1.29.21-1.81.56C10.74 5.92 9.17 5.25 7.5 5.25l-.75 2.58c-.68.12-1.31.42-1.84.86-.53-.37-1.18-.58-1.87-.58-1.75 0-3.17 1.42-3.17 3.17 0 1.25.7 2.34 1.74 2.9-.06.37-.09.75-.09 1.13 0 3.86 4.39 7 9.83 7 5.44 0 9.83-3.14 9.83-7 0-.38-.03-.76-.09-1.13 1.04-.56 1.74-1.65 1.74-2.9zM7.5 12.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm5 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-2.5 3.33c-1.33 0-2.5-1.17-2.5-2.5h5c0 1.33-1.17 2.5-2.5 2.5z"/></svg>
            </a>

            {/* Discord */}
            <a href="https://discord.gg/faU6rtKA" target="_blank" rel="noreferrer" className="text-[#5865F2] hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.103 18.055a.07.07 0 0 0 .026.046 19.82 19.82 0 0 0 5.982 3.03.07.07 0 0 0 .078-.027 14.16 14.16 0 0 0 1.228-2.02.07.07 0 0 0-.038-.096 11.23 11.23 0 0 1-1.63-.787.07.07 0 0 1-.006-.116c.108-.08.216-.162.32-.243a.07.07 0 0 1 .075-.008c3.92 1.786 8.18 1.786 12.06 0a.07.07 0 0 1 .075.008c.104.08.212.163.32.243a.07.07 0 0 1-.006.116 11.23 11.23 0 0 1-1.63.787.07.07 0 0 0-.038.096c.38.68.796 1.34 1.228 2.02a.07.07 0 0 0 .078.027 19.82 19.82 0 0 0 5.982-3.03.07.07 0 0 0 .026-.046c.535-5.568-.787-10.428-3.37-14.658a.07.07 0 0 0-.032-.027zM8.02 15.332c-1.18 0-2.155-1.085-2.155-2.419 0-1.333.955-2.419 2.155-2.419 1.21 0 2.176 1.096 2.155 2.419 0 1.333-.955 2.419-2.155 2.419zm7.974 0c-1.18 0-2.155-1.085-2.155-2.419 0-1.333.955-2.419 2.155-2.419 1.21 0 2.176 1.096 2.155 2.419 0 1.333-.955 2.419-2.155 2.419z"/></svg>
            </a>
          </div>       
        </nav>

        {/* Brand footer inside drawer */}
        <div className={`p-4 border-t text-center font-mono ${
          darkMode ? 'border-slate-900 bg-slate-900/25' : 'border-slate-100 bg-slate-50/50'
        }`}>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <ShieldAlert className="w-3.5 h-3.5 text-store-accent" />
            <span>Verified by Takano3D</span>
          </div>
          <div className="text-[9px] text-slate-600 mt-1">
            Copyright © 2026 - MOD Hub
          </div>
        </div>
      </div>
    </div>
  );
};
