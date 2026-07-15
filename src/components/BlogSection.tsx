import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  darkMode: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, darkMode }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedPost(null)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </button>

        <article className={`p-6 sm:p-8 rounded-2xl border ${
          darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-100' : 'bg-white border-slate-100 text-slate-800'
        } space-y-6`}>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800/20">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              {selectedPost.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                By {selectedPost.author}
              </span>
            </div>
          </div>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {selectedPost.content}
          </p>

          <div className={`p-4 rounded-xl border border-dashed text-xs ${
            darkMode ? 'bg-slate-950/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
          }`}>
            The informative guides presented on MOD Hub are prepared for educational and technological research purposes. All downloadable material has been pre-verified by the Takano3D team.
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-red-500/10 text-store-accent">
          <BookOpen className="w-4.5 h-4.5" />
        </div>
        <h2 className="text-lg sm:text-xl font-display font-bold tracking-tight">
          Blog & Android News
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className={`group rounded-2xl border overflow-hidden cursor-pointer flex flex-col transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className={`text-base sm:text-lg font-display font-bold group-hover:text-store-accent transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                  {post.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/10 flex items-center justify-between text-xs font-bold text-store-accent">
                <span>Read full article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
