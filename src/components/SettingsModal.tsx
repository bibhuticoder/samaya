'use client';

import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  X,
  Clock,
  Image as ImageIcon,
  Calendar,
  Info,
  Check,
} from 'lucide-react';
import { FEATURED_WALLPAPERS, WallpaperInfo } from '@/lib/wallpapers';

export interface AppSettings {
  clockFormat: '12' | '24';
  clockLanguage: 'np' | 'en';
  showCalendar: boolean;
  showQuote: boolean;
  showFocusToday: boolean;
  wallpaperSource: 'featured' | 'custom';
  currentWallpaperId: string;
}

interface SettingsModalProps {
  settings: AppSettings;
  onSettingsChange: (newSettings: AppSettings) => void;
  onWallpaperSelect: (wallpaper: WallpaperInfo) => void;
  currentWallpaper: WallpaperInfo | null;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  settings,
  onSettingsChange,
  onWallpaperSelect,
  currentWallpaper,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'clock' | 'wallpapers' | 'widgets' | 'about'
  >('clock');

  const updateSetting = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="relative select-none z-40 font-sans">
      {/* Settings Gear Button with Black Backdrop */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-center p-3 rounded-2xl bg-black/45 hover:bg-black/65 backdrop-blur-md border text-white transition-all shadow-xl ${isOpen ? 'border-sky-400 ring-2 ring-sky-500/20' : 'border-white/20 hover:border-white/40'
          }`}
        title="Settings"
        aria-label="Settings"
      >
        <SettingsIcon className="w-5 h-5 text-white/90" />
      </button>

      {/* Modal / Dialog (Fixed Width and Fixed Height) */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 bottom-full mb-3 w-[540px] h-[400px] max-w-[94vw] max-h-[85vh] bg-slate-950/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl text-white z-50 animate-fade-in flex flex-col">
            {/* Fixed Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <SettingsIcon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-white">Samaya Settings</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content: Fixed Sidebar + Fixed Scrollable Body */}
            <div className="flex-1 flex gap-5 mt-4 min-h-0 overflow-hidden">
              {/* Navigation Tabs */}
              <div className="w-36 flex flex-col gap-1.5 border-r border-white/10 pr-3 shrink-0">
                <button
                  onClick={() => setActiveTab('clock')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${activeTab === 'clock'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'hover:bg-white/5 text-slate-300'
                    }`}
                >
                  <Clock className="w-4 h-4 shrink-0" /> Clock
                </button>

                <button
                  onClick={() => setActiveTab('wallpapers')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${activeTab === 'wallpapers'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'hover:bg-white/5 text-slate-300'
                    }`}
                >
                  <ImageIcon className="w-4 h-4 shrink-0" /> Wallpapers
                </button>

                <button
                  onClick={() => setActiveTab('widgets')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${activeTab === 'widgets'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'hover:bg-white/5 text-slate-300'
                    }`}
                >
                  <Calendar className="w-4 h-4 shrink-0" /> Widgets
                </button>

                <button
                  onClick={() => setActiveTab('about')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${activeTab === 'about'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'hover:bg-white/5 text-slate-300'
                    }`}
                >
                  <Info className="w-4 h-4 shrink-0" /> About
                </button>
              </div>

              {/* Scrollable Tab Content with Fixed Height */}
              <div className="flex-1 h-full overflow-y-auto pr-2 text-xs space-y-4">
                {activeTab === 'clock' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between py-1">
                      <div>
                        <div className="font-semibold text-white text-sm">Time Format</div>
                        <div className="text-[11px] text-white/50">12-hour or 24-hour display</div>
                      </div>
                      <div className="flex bg-black/40 rounded-xl p-1 border border-white/10">
                        <button
                          onClick={() => updateSetting('clockFormat', '12')}
                          className={`px-3 py-1.5 rounded-lg transition-all ${settings.clockFormat === '12'
                            ? 'bg-sky-500 text-white font-bold'
                            : 'text-slate-400 hover:text-white'
                            }`}
                        >
                          12Hr
                        </button>
                        <button
                          onClick={() => updateSetting('clockFormat', '24')}
                          className={`px-3 py-1.5 rounded-lg transition-all ${settings.clockFormat === '24'
                            ? 'bg-sky-500 text-white font-bold'
                            : 'text-slate-400 hover:text-white'
                            }`}
                        >
                          24Hr
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <div>
                        <div className="font-semibold text-white text-sm">Numeral Digits</div>
                        <div className="text-[11px] text-white/50">Nepali Devanagari or English</div>
                      </div>
                      <div className="flex bg-black/40 rounded-xl p-1 border border-white/10">
                        <button
                          onClick={() => updateSetting('clockLanguage', 'np')}
                          className={`px-3 py-1.5 rounded-lg transition-all font-mukta text-xs ${settings.clockLanguage === 'np'
                            ? 'bg-sky-500 text-white font-bold'
                            : 'text-slate-400 hover:text-white'
                            }`}
                        >
                          नेपाली (०-९)
                        </button>
                        <button
                          onClick={() => updateSetting('clockLanguage', 'en')}
                          className={`px-3 py-1.5 rounded-lg transition-all ${settings.clockLanguage === 'en'
                            ? 'bg-sky-500 text-white font-bold'
                            : 'text-slate-400 hover:text-white'
                            }`}
                        >
                          English (0-9)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'wallpapers' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="font-semibold text-white text-sm">Featured Wallpapers</div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {FEATURED_WALLPAPERS.map((wp) => (
                        <div
                          key={wp.id}
                          onClick={() => onWallpaperSelect(wp)}
                          className={`group relative h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${currentWallpaper?.id === wp.id
                            ? 'border-sky-400 shadow-md shadow-sky-500/50 scale-105'
                            : 'border-transparent hover:border-white/40'
                            }`}
                        >
                          <img
                            src={wp.urls?.thumb || wp.urls?.regular || wp.url || './assets/background.jpg'}
                            alt={typeof wp.location === 'string' ? wp.location : wp.location?.name || 'Wallpaper'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {currentWallpaper?.id === wp.id && (
                            <div className="absolute inset-0 bg-sky-500/30 flex items-center justify-center">
                              <Check className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] text-white/50">
                      Curated 4K/HD wallpapers from Unsplash.
                    </div>
                  </div>
                )}

                {activeTab === 'widgets' && (
                  <div className="space-y-3.5 animate-fade-in">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="font-medium text-sm text-white">Nepali Calendar (वि.सं.)</span>
                      <input
                        type="checkbox"
                        checked={settings.showCalendar}
                        onChange={(e) => updateSetting('showCalendar', e.target.checked)}
                        className="w-4 h-4 accent-sky-500 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="font-medium text-sm text-white">Daily Quotes</span>
                      <input
                        type="checkbox"
                        checked={settings.showQuote}
                        onChange={(e) => updateSetting('showQuote', e.target.checked)}
                        className="w-4 h-4 accent-sky-500 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="font-medium text-sm text-white">Daily Focus Goal</span>
                      <input
                        type="checkbox"
                        checked={settings.showFocusToday}
                        onChange={(e) => updateSetting('showFocusToday', e.target.checked)}
                        className="w-4 h-4 accent-sky-500 cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="space-y-3 animate-fade-in text-center py-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-300 font-bold text-lg font-mukta">
                      समय
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">Samaya v2.0</h4>
                      <p className="text-[11px] text-white/60 mt-0.5">
                        Nepali Personal Dashboard &amp; New Tab Extension
                      </p>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xs max-w-xs mx-auto">
                      A friendly personal dashboard featuring Nepali calendar, daily quotes &amp; Himalayan wallpapers.
                    </p>
                    <div className="text-[11px] text-white/50">
                      Creator:{' '}
                      <a
                        href="https://bibhuti.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-300 hover:text-sky-200 underline font-semibold transition-colors cursor-pointer"
                      >
                        Bibhuti Poudyal
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
