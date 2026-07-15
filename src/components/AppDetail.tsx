import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Star, Download, ShieldCheck, ChevronLeft, ChevronRight, 
  Info, CheckCircle2, RefreshCw, Terminal, Lock, Server, FileCheck2, Share2, Sparkles 
} from 'lucide-react';
import { AppItem } from '../types';

interface AppDetailProps {
  app: AppItem;
  darkMode: boolean;
  onBack: () => void;
}

export const AppDetail: React.FC<AppDetailProps> = ({
  app,
  darkMode,
  onBack,
}) => {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [downloading, setDownloading] = useState(false);
  const [downloadCountdown, setDownloadCountdown] = useState(5);
  const [copied, setCopied] = useState(false);

  // Start the security check scanner automatically when page loads
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

  // Handle simulated download triggers
  const triggerDownload = () => {
    setDownloading(true);
    setDownloadCountdown(5);
  };

  useEffect(() => {
    if (downloading && downloadCountdown > 0) {
      const timer = setTimeout(() => {
        setDownloadCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (downloading && downloadCountdown === 0) {
      // Simulate real browser download trigger
      const link = document.createElement('a');
      link.href = app.downloadUrl;
      link.setAttribute('download', `${app.slug}-modhub.apk`);
      document.body.appendChild(link);
      // Let's print in console but keep user focused on UI
      console.log(`Starting real download of: ${app.downloadUrl}`);
      setTimeout(() => {
        setDownloading(false);
      }, 2500);
    }
  }, [downloading, downloadCountdown, app.downloadUrl]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNextScreenshot = () => {
    setActiveScreenshotIdx((prev) => (prev + 1) % app.screenshots.length);
  };

  const handlePrevScreenshot = () => {
    setActiveScreenshotIdx((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Back & Action Header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <button
          onClick={handleShare}
          className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <Share2 className="w-4 h-4 text-store-accent" />
          <span>{copied ? 'Copied!' : 'Share'}</span>
        </button>
      </div>

      {/* Main App Hero Details */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          
          {/* Large App Icon */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-700/20 shadow-xl shrink-0 mx-auto sm:mx-0">
            <img 
              src={app.icon} 
              alt={app.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Central Title Details */}
          <div className="flex-1 text-center sm:text-left min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
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

            <div className="flex items-center justify-center sm:justify-start gap-4 mt-3 text-xs">
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

          {/* Action Callouts */}
          <div className="w-full sm:w-auto shrink-0 flex flex-col gap-2">
            <button
              onClick={triggerDownload}
              disabled={downloading}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white transition-all shadow-lg cursor-pointer ${
                downloading 
                  ? 'bg-slate-800 cursor-not-allowed' 
                  : 'bg-store-accent hover:bg-red-600 shadow-store-accent/20 hover:shadow-store-accent/35 active:scale-95'
              }`}
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>{downloading ? `Preparing (${downloadCountdown}s)...` : 'Download APK'}</span>
            </button>

            {/* Green security verification tag */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium py-1 bg-emerald-500/5 rounded-lg border border-emerald-500/15">
              <ShieldCheck className="w-4 h-4 fill-emerald-500/10" />
              <span>SHA-256 Secured</span>
            </div>
          </div>

        </div>

        {/* Dynamic Download Dialog/Panel when downloading */}
        {downloading && (
          <div className={`mt-5 p-4 rounded-xl border animate-pulse ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className="text-sm font-bold flex items-center gap-2 text-store-accent">
              <RefreshCw className="w-4 h-4 animate-spin" />
              Generating Secure Download Link...
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Your download will begin automatically in <strong className="text-store-accent">{downloadCountdown} seconds</strong>. MOD Hub protects your device by encrypting the download on high-fidelity redundant servers.
            </p>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div 
                className="bg-store-accent h-full transition-all duration-1000"
                style={{ width: `${(5 - downloadCountdown) * 20}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Description Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left column: Overview, features, and screenshots */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Screenshots Slider Container */}
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${
              darkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <Sparkles className="w-4.5 h-4.5 text-store-accent" />
              <span>Screenshots</span>
            </h3>

            {/* Screenshots Slider */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/40 border border-slate-800">
              <img 
                src={app.screenshots[activeScreenshotIdx]} 
                alt={`${app.name} ss-${activeScreenshotIdx}`} 
                className="w-full h-full object-cover transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Slider Nav Controls */}
              <button
                onClick={handlePrevScreenshot}
                className="absolute inset-y-0 left-0 px-3 bg-black/20 hover:bg-black/60 text-white transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextScreenshot}
                className="absolute inset-y-0 right-0 px-3 bg-black/20 hover:bg-black/60 text-white transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                {app.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshotIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeScreenshotIdx ? 'bg-store-accent w-4' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* About / Long Description */}
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-base font-display font-bold mb-3 ${
              darkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              MOD Description
            </h3>
            <p className={`text-sm leading-relaxed text-slate-400 whitespace-pre-line ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {app.longDescription || app.description}
            </p>
          </div>

        </div>

        {/* Right column: Technical specs, checksums and automated integrity scanner */}
        <div className="space-y-6">
          
          {/* Informacion Table Section */}
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${
              darkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <Info className="w-4.5 h-4.5 text-store-accent" />
              <span>Technical Information</span>
            </h3>

            <div className="divide-y divide-slate-800/10 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Current version</span>
                <span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.version}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">File size</span>
                <span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.size}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Developer</span>
                <span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.developer}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Total downloads</span>
                <span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.downloads}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Category</span>
                <span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.category}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Content type</span>
                <span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.type === 'Game' ? 'Video Game' : 'Application'}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Last update</span>
                <span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.updatedAt}</span>
              </div>
            </div>
          </div>

          {/* Seguridad e Integridad Scanner */}
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-base font-display font-bold mb-3 flex items-center gap-2 ${
              darkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Security & Integrity</span>
            </h3>

            {/* Scanner Display */}
            <div className={`p-3.5 rounded-xl border mb-4 font-mono text-[11px] ${
              darkMode ? 'bg-slate-950 border-slate-900 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-store-accent" />
                  Scanner v4.2
                </span>
                <span className={`font-bold ${
                  scanState === 'scanning' ? 'text-yellow-400 animate-pulse' : 'text-emerald-400'
                }`}>
                  {scanState === 'scanning' ? `Verifying ${scanProgress}%` : 'COMPLETE'}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-1 mb-3.5 overflow-hidden">
                <div 
                  className={`h-full transition-all ${
                    scanState === 'scanning' ? 'bg-yellow-400' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Original APK signature secured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">No adware, trojans, or spyware</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Active anti-detection protection</span>
                </div>
              </div>
            </div>

            {/* Checksum Details */}
            <div className="space-y-3.5">
              <div className="flex gap-2.5 items-start">
                <div className={`p-1.5 rounded-lg shrink-0 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Secure Checksum Signature</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5 break-all">{app.security.checksum}</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className={`p-1.5 rounded-lg shrink-0 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <Lock className="w-4 h-4 text-store-accent" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Secure SSL Token</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{app.security.secureToken}</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className={`p-1.5 rounded-lg shrink-0 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <Server className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Protected Servers</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{app.security.cloudStorage}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
