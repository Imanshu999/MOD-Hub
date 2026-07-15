import { useState, useEffect } from 'react';
import { APPS_DATA, CATEGORIES_DATA, BLOG_POSTS } from './data';
import { Header } from './components/Header';
import { SidebarDrawer } from './components/SidebarDrawer';
import { CategoryList } from './components/CategoryList';
import { AppCard } from './components/AppCard';
import { RecentCarousel } from './components/RecentCarousel';
import { AppDetail } from './components/AppDetail';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import takano3dAvatar from './assets/images/takano3d_avatar_1783771284341.jpg';

import { 
  Home as HomeIcon, Gamepad2, Smartphone, BookOpen, Mail, 
  Sparkles, CheckCircle2, ShieldCheck, AlertCircle, RefreshCw 
} from 'lucide-react';

export default function App() {
  // Theme state: defaults to premium deep dark slate #0b0f19
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  // Navigation states
  const [activeTab, setActiveTab] = useState<'all' | 'games' | 'apps' | 'blog' | 'contact'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAppSlug, setSelectedAppSlug] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Glowing avatar state click feedback
  const [glowFlash, setGlowFlash] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<boolean>(false);
  
  const customAvatarUrl = takano3dAvatar;

  // URL Hash Synchronizer (Client-Side Router simulation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/app/')) {
        const slug = hash.replace('#/app/', '');
        setSelectedAppSlug(slug);
      } else {
        setSelectedAppSlug(null);
        if (hash === '#/games') {
          setActiveTab('games');
        } else if (hash === '#/apps') {
          setActiveTab('apps');
        } else if (hash === '#/blog') {
          setActiveTab('blog');
        } else if (hash === '#/contact') {
          setActiveTab('contact');
        } else {
          setActiveTab('all');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash helper
  const navigateToHash = (newHash: string) => {
    window.location.hash = newHash;
  };

  const handleSelectApp = (slug: string) => {
    navigateToHash(`/app/${slug}`);
  };

  const handleCloseDetail = () => {
    // Return to the active section hash
    if (activeTab === 'all') navigateToHash('/');
    else navigateToHash(`/${activeTab}`);
  };

  const handleSelectTab = (tab: 'all' | 'games' | 'apps' | 'blog' | 'contact') => {
    setActiveTab(tab);
    setSelectedCategory(null);
    setSelectedAppSlug(null);
    setSearchTerm('');
    if (tab === 'all') navigateToHash('/');
    else navigateToHash(`/${tab}`);
  };

  // Filter apps based on active search, selected tab, and categories
  const getFilteredApps = () => {
    return APPS_DATA.filter((app) => {
      // 1. Filter by search term
      const matchesSearch = 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.developer.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      // 2. Filter by tab category types
      if (activeTab === 'games' && app.type !== 'Game') return false;
      if (activeTab === 'apps' && app.type !== 'App') return false;

      // 3. Filter by side categories selection
      if (selectedCategory && app.category !== selectedCategory) return false;

      return true;
    });
  };

  const filteredApps = getFilteredApps();

  // Carousel specific lists
  const recentApps = APPS_DATA.filter(app => app.isRecent);
  const recommendedApps = APPS_DATA.filter(app => app.isRecommendation);

  // Quick reset helper
  const handleClearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
  };

  // Handle Middle Glowing Avatar Button clicks
  const handleAvatarClick = () => {
    setGlowFlash(true);
    setTimeout(() => setGlowFlash(false), 1200);
    handleSelectTab('all');
  };

  // Set top-level page class on body
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0b0f19';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f8fafc';
    }
  }, [darkMode]);

  const activeAppDetail = selectedAppSlug 
    ? APPS_DATA.find(app => app.slug === selectedAppSlug) 
    : null;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      darkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Header bar with branding & search */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term);
          // If in detail mode, redirect to list to show active search results
          if (selectedAppSlug) {
            setSelectedAppSlug(null);
            navigateToHash('/');
          }
        }}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onNavigateHome={() => handleSelectTab('all')}
      />

      {/* Navigation Drawer for side elements */}
      <SidebarDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        darkMode={darkMode}
        activeTab={activeTab}
        setActiveTab={handleSelectTab}
      />

      {/* Main Container Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 sm:pb-8">
        
        {/* Dynamic Inner view dispatcher */}
        {activeAppDetail ? (
          <AppDetail 
            app={activeAppDetail}
            darkMode={darkMode}
            onBack={handleCloseDetail}
          />
        ) : activeTab === 'blog' ? (
          <BlogSection 
            posts={BLOG_POSTS}
            darkMode={darkMode}
          />
        ) : activeTab === 'contact' ? (
          <ContactSection 
            darkMode={darkMode}
          />
        ) : (
          /* Main Apps Marketplace Catalog (Home, Games, Apps) */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            
            {/* Left Sidebar Pane: Categories List */}
            <aside className={`lg:col-span-1 rounded-2xl p-4 border transition-all ${
              darkMode 
                ? 'bg-slate-900/30 border-slate-800/60' 
                : 'bg-white border-slate-200'
            }`}>
              <CategoryList
                categories={CATEGORIES_DATA}
                selectedCategory={selectedCategory}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  // Ensure we focus back onto index grid
                  if (selectedAppSlug) {
                    setSelectedAppSlug(null);
                    navigateToHash('/');
                  }
                }}
                darkMode={darkMode}
              />
            </aside>

            {/* Right Main Panel: Carousel and Grid Lists */}
            <section className="lg:col-span-3 space-y-8 min-w-0">
              
              {/* If no filters selected, show top-level hero marketing promo and recently added carousel */}
              {!selectedCategory && !searchTerm && (
                <>
                  {/* Hero banner promotion block */}
                  <div className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden border ${
                    darkMode 
                      ? 'bg-gradient-to-tr from-slate-950 to-store-card border-slate-800' 
                      : 'bg-gradient-to-tr from-white to-slate-100 border-slate-200 shadow-sm'
                  }`}>
                    {/* Glowing circular overlay */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-store-accent/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10 max-w-xl space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-store-accent font-semibold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-store-accent animate-pulse" />
                        <span>Supported by Takano3D Studio</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
                        MOD Hub
                      </h2>
                      <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        The most trusted modified APK store in the ecosystem. All premium games and tools unlocked, analyzed with SHA-256 signature and directly installable with zero ad-shorteners.
                      </p>
                      <div className="flex gap-2 flex-wrap pt-2">
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-200/50 text-slate-700'}`}>
                          ✔ High-Speed Servers
                        </span>
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-200/50 text-slate-700'}`}>
                          ✔ Certified SHA-256 Security
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recently Added Section Carousel */}
                  <RecentCarousel
                    apps={recentApps}
                    darkMode={darkMode}
                    onSelect={handleSelectApp}
                  />

                  {/* Recommendations layout */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-yellow-500/10 text-yellow-500">
                        <Sparkles className="w-4 h-4 fill-current" />
                      </div>
                      <h3 className="text-lg font-display font-bold">Recommended</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recommendedApps.slice(0, 4).map((app) => (
                        <AppCard
                          key={app.id}
                          app={app}
                          darkMode={darkMode}
                          variant="recommendation"
                          onSelect={handleSelectApp}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Grid Content List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-display font-bold">
                      {selectedCategory ? `Category: ${selectedCategory}` : 'Latest updates'}
                    </h3>
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full ${
                      darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {filteredApps.length} available
                    </span>
                  </div>

                  {(selectedCategory || searchTerm) && (
                    <button
                      onClick={handleClearAllFilters}
                      className="text-xs text-store-accent font-semibold hover:underline"
                    >
                      Reset filters
                    </button>
                  )}
                </div>

                {/* If filtered apps are empty, render clean fallback */}
                {filteredApps.length === 0 ? (
                  <div className={`p-8 rounded-2xl text-center border ${
                    darkMode ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-2" />
                    <h4 className="font-bold text-sm">No results found</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                      No MODs found matching the search "{searchTerm || selectedCategory}". Try searching for another term or request the app in the requests section.
                    </p>
                    <button
                      onClick={handleClearAllFilters}
                      className="mt-4 px-4 py-1.5 text-xs font-semibold bg-store-accent text-white rounded-lg hover:bg-red-600 cursor-pointer"
                    >
                      View entire catalog
                    </button>
                  </div>
                ) : (
                  /* Vertical dynamic updates list */
                  <div className="flex flex-col gap-3">
                    {filteredApps.map((app) => (
                      <AppCard
                        key={app.id}
                        app={app}
                        darkMode={darkMode}
                        variant="list"
                        onSelect={handleSelectApp}
                      />
                    ))}
                  </div>
                )}
              </div>

            </section>
          </div>
        )}
      </main>

      {/* Footer information bar on desktop */}
      <footer className={`hidden sm:block py-6 border-t text-center ${
        darkMode ? 'bg-slate-950/40 border-slate-900 text-slate-500' : 'bg-slate-100/55 border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-store-accent">MOD Hub</span>
            <span>• Takano3D Studio Catalog</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4 fill-emerald-500/5" />
              Verified by SSL
            </span>
            <span>•</span>
            <span>© 2026 MOD Hub. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation Bar (Mobile / Sticky Pinned Layout) */}
      <div className={`sm:hidden fixed bottom-0 inset-x-0 z-40 border-t backdrop-blur-md py-2.5 px-6 flex items-center justify-between transition-colors ${
        darkMode ? 'bg-[#0b0f19]/90 border-slate-900 text-slate-400' : 'bg-white/95 border-slate-200 text-slate-600'
      }`}>
        {/* Navigation Action 1: Inicio */}
        <button 
          onClick={() => handleSelectTab('all')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'all' && !selectedAppSlug ? 'text-store-accent' : 'hover:text-slate-300'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-[9px] font-semibold leading-none">Home</span>
        </button>

        {/* Navigation Action 2: Juegos */}
        <button 
          onClick={() => handleSelectTab('games')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'games' && !selectedAppSlug ? 'text-store-accent' : 'hover:text-slate-300'
          }`}
        >
          <Gamepad2 className="w-5 h-5" />
          <span className="text-[9px] font-semibold leading-none">Games</span>
        </button>

        {/* Special Center Button: Perfect Circular Glowing Avatar */}
        <button 
          onClick={handleAvatarClick}
          className="relative -top-3 cursor-pointer shrink-0"
        >
          {/* Pulsing ring outline */}
          <div className={`absolute -inset-1.5 rounded-full opacity-70 blur-xs transition-all duration-300 ${
            glowFlash ? 'bg-red-400 scale-110 shadow-lg' : 'bg-store-accent hover:scale-105 shadow-md'
          } animate-glow`} />
          
          {/* Inner image frame */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-slate-900 shadow-md">
            {!avatarError ? (
              <img 
                src={customAvatarUrl} 
                alt="Look Mod Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-store-accent to-red-600 text-white text-xs font-bold">
                MH
              </div>
            )}
          </div>
        </button>

        {/* Navigation Action 3: Apps */}
        <button 
          onClick={() => handleSelectTab('apps')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'apps' && !selectedAppSlug ? 'text-store-accent' : 'hover:text-slate-300'
          }`}
        >
          <Smartphone className="w-5 h-5" />
          <span className="text-[9px] font-semibold leading-none">Apps</span>
        </button>

        {/* Navigation Action 4: Contacto (Peticiones) */}
        <button 
          onClick={() => handleSelectTab('contact')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'contact' && !selectedAppSlug ? 'text-store-accent' : 'hover:text-slate-300'
          }`}
        >
          <Mail className="w-5 h-5" />
          <span className="text-[9px] font-semibold leading-none">Requests</span>
        </button>
      </div>

    </div>
  );
}
