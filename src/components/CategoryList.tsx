import React, { useState } from 'react';
import { 
  Sword, Gamepad2, Trophy, Video, Music, MessageCircle, Wrench, Clock, Compass, Layers 
} from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryListProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  darkMode: boolean;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  darkMode,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Helper to map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sword': return <Sword className="w-4 h-4" />;
      case 'Gamepad2': return <Gamepad2 className="w-4 h-4" />;
      case 'Trophy': return <Trophy className="w-4 h-4" />;
      case 'Video': return <Video className="w-4 h-4" />;
      case 'Music': return <Music className="w-4 h-4" />;
      case 'MessageCircle': return <MessageCircle className="w-4 h-4" />;
      case 'Wrench': return <Wrench className="w-4 h-4" />;
      case 'Clock': return <Clock className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className={`text-sm font-display font-bold uppercase tracking-wider ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Categories
          </h3>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              darkMode 
                ? 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800' 
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
            title={isCollapsed ? "Expand categories" : "Collapse categories"}
          >
            <span>↑↓</span>
            <span className="text-[10px]">{isCollapsed ? 'Show' : 'Hide'}</span>
          </button>
        </div>
        {selectedCategory && (
          <button
            onClick={() => onSelectCategory(null)}
            className="text-xs text-store-accent hover:underline cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Mobile Horizontal Carousel (collapsible) */}
      {!isCollapsed && (
        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth -mx-4 px-4 transition-all duration-300">
          <button
            onClick={() => onSelectCategory(null)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategory === null
                ? 'bg-store-accent text-white shadow-md'
                : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-300'
                  : 'bg-slate-100 border border-slate-200 text-slate-600'
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-store-accent text-white shadow-md'
                    : darkMode
                      ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                      : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="opacity-85 shrink-0">{getIcon(cat.icon)}</span>
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Desktop Vertical Menu (collapsible) */}
      {!isCollapsed && (
        <div className="hidden md:flex flex-col gap-1 transition-all duration-300">
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex items-center justify-between w-full p-2.5 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-store-accent text-white shadow-lg shadow-store-accent/15'
                : darkMode
                  ? 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 shrink-0" />
              <span>View entire catalog</span>
            </div>
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`flex items-center justify-between w-full p-2.5 rounded-xl text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-store-accent text-white shadow-lg shadow-store-accent/15'
                    : darkMode
                      ? 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`shrink-0 p-1 rounded-md ${
                    isSelected ? 'bg-white/10' : darkMode ? 'bg-slate-900' : 'bg-slate-100'
                  }`}>
                    {getIcon(cat.icon)}
                  </span>
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                  isSelected ? 'bg-white/20 text-white' : darkMode ? 'bg-slate-900 text-slate-500' : 'bg-slate-200 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
