import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate safe API trigger
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', appName: '', message: '' });
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Intro branding banner */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      } text-center space-y-3 relative overflow-hidden`}>
        {/* Glow ornament */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-store-accent/10 rounded-full blur-2xl" />

        <div className="mx-auto w-12 h-12 rounded-xl bg-store-accent/10 flex items-center justify-center text-store-accent">
          <MessageSquare className="w-6 h-6" />
        </div>
        
        <div>
          <h2 className="text-xl sm:text-2xl font-display font-bold">Contact & Requests</h2>
          <p className={`text-xs sm:text-sm max-w-lg mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Can't find your favorite app or game? Request it immediately from the <strong className="text-store-accent">Takano3D</strong> developers and we will publish it verified.
          </p>
        </div>
      </div>

      {/* Main submission form or Success banner */}
      {submitted ? (
        <div className={`p-8 rounded-2xl border text-center space-y-4 animate-scale-up ${
          darkMode ? 'bg-slate-900/60 border-emerald-500/20' : 'bg-emerald-50/50 border-emerald-200'
        }`}>
          <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className={`text-lg sm:text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              Request Sent Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We have recorded your request. Our engineering team at <strong className="text-store-accent">Takano3D</strong> will analyze and securely unpack the APK to upload it within the next 48 hours.
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 rounded-xl text-xs font-semibold bg-store-accent hover:bg-red-600 text-white transition-all cursor-pointer"
          >
            Send another request
          </button>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-400">Your Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. John Doe"
                className={`w-full p-2.5 rounded-xl text-sm outline-none border ${
                  darkMode 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-store-accent' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-store-accent focus:bg-white'
                }`}
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-400">Your Email Address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
                className={`w-full p-2.5 rounded-xl text-sm outline-none border ${
                  darkMode 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-store-accent' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-store-accent focus:bg-white'
                }`}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Requested App / Game Name</label>
            <input 
              type="text" 
              value={formData.appName}
              onChange={(e) => setFormData({...formData, appName: e.target.value})}
              placeholder="e.g. Minecraft v1.21 MOD Menu"
              className={`w-full p-2.5 rounded-xl text-sm outline-none border ${
                darkMode 
                  ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-store-accent' 
                  : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-store-accent focus:bg-white'
              }`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Message or MOD Details</label>
            <textarea 
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Describe what MOD features you desire (e.g. unlimited gems, ad-free, unlocked features, etc.)"
              className={`w-full p-2.5 rounded-xl text-sm outline-none border resize-none ${
                darkMode 
                  ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-store-accent' 
                  : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-store-accent focus:bg-white'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 font-bold text-xs sm:text-sm text-white rounded-xl bg-store-accent hover:bg-red-600 transition-all flex items-center justify-center gap-2 cursor-pointer ${
              loading ? 'opacity-70 cursor-not-allowed' : 'active:scale-95 shadow-[0_2px_12px_rgba(239,68,68,0.2)]'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{loading ? 'Sending request...' : 'Send Secure Request'}</span>
          </button>
        </form>
      )}

      {/* Safety stamp */}
      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>SSL Encrypted Data</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
          <span>Designed by Takano3D Studio</span>
        </div>
      </div>

    </div>
  );
};
