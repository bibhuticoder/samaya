'use client';

import React, { useState, useEffect } from 'react';
import { BackgroundView } from './BackgroundView';
import { ClockWidget } from './ClockWidget';
import { GreetingsWidget } from './GreetingsWidget';
import { FocusTodayWidget } from './FocusTodayWidget';
import { CalendarWidget } from './CalendarWidget';
import { QuoteWidget } from './QuoteWidget';
import { SettingsModal, AppSettings } from './SettingsModal';
import { FEATURED_WALLPAPERS, WallpaperInfo } from '@/lib/wallpapers';
import { storage } from '@/lib/storage';
import { Camera, MapPin } from 'lucide-react';

const DEFAULT_SETTINGS: AppSettings = {
  clockFormat: '12',
  clockLanguage: 'np',
  showCalendar: true,
  showQuote: true,
  showFocusToday: true,
  wallpaperSource: 'featured',
  currentWallpaperId: FEATURED_WALLPAPERS[0].id,
};

interface DashboardProps {
  isExtension?: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ isExtension = false }) => {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [userName, setUserName] = useState<string>('');
  const [currentWallpaper, setCurrentWallpaper] = useState<WallpaperInfo>(
    FEATURED_WALLPAPERS[0]
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadData() {
      const savedSettings = await storage.get<AppSettings>('settings', DEFAULT_SETTINGS);
      const savedName = await storage.get<string>('user_name', '');
      const savedWpId = savedSettings?.currentWallpaperId || FEATURED_WALLPAPERS[0].id;
      const matchedWp =
        FEATURED_WALLPAPERS.find((w) => w.id === savedWpId) || FEATURED_WALLPAPERS[0];

      if (savedSettings) setSettings(savedSettings);
      if (savedName) setUserName(savedName);
      setCurrentWallpaper(matchedWp);
      setLoaded(true);
    }
    loadData();
  }, []);

  const handleSettingsChange = (newSettings: AppSettings) => {
    setSettings(newSettings);
    storage.set('settings', newSettings);
  };

  const handleNameChange = (name: string) => {
    setUserName(name);
    storage.set('user_name', name);
  };

  const handleWallpaperSelect = (wallpaper: WallpaperInfo) => {
    setCurrentWallpaper(wallpaper);
    const updated = {
      ...settings,
      currentWallpaperId: wallpaper.id,
    };
    setSettings(updated);
    storage.set('settings', updated);
  };

  const locationName =
    typeof currentWallpaper?.location === 'string'
      ? currentWallpaper.location
      : currentWallpaper?.location?.name;

  const authorName = currentWallpaper?.author?.name || currentWallpaper?.user?.name;
  const authorProfile =
    currentWallpaper?.author?.profile ||
    currentWallpaper?.user?.links?.html ||
    'https://unsplash.com';

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none font-sans bg-black">
      {/* Background Wallpaper */}
      <BackgroundView wallpaper={currentWallpaper} />

      {/* Top Header Row: Calendar (Right) */}
      <div className="w-full flex items-start justify-end z-30 relative">
        <div className="flex items-center gap-3">
          {settings.showCalendar && <CalendarWidget />}
        </div>
      </div>

      {/* Center Content: Floating Clock + Greeting + Focus Goal with seamless soft dark blur halo (NO box) */}
      <div className="my-auto flex flex-col items-center justify-center text-center z-20 px-4 relative">
        {/* Diffuse soft dark blur halo behind text only */}
        <div
          className="absolute inset-0 max-w-2xl mx-auto -z-10 rounded-full pointer-events-none scale-125"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.25) 45%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />

        <ClockWidget
          format={settings.clockFormat}
          language={settings.clockLanguage}
          onFormatChange={(fmt) => handleSettingsChange({ ...settings, clockFormat: fmt })}
          onLanguageChange={(lang) => handleSettingsChange({ ...settings, clockLanguage: lang })}
        />

        <div className="mt-3">
          <GreetingsWidget name={userName} onNameChange={handleNameChange} />
        </div>

        {settings.showFocusToday && <FocusTodayWidget />}
      </div>

      {/* Bottom Footer Row: Settings (Left), Quote (Center), Wallpaper Info (Right) */}
      <div className="w-full flex items-end justify-between z-30 relative gap-4">
        {/* Left: Settings */}
        <div className="flex items-center gap-2 shrink-0">
          <SettingsModal
            settings={settings}
            onSettingsChange={handleSettingsChange}
            onWallpaperSelect={handleWallpaperSelect}
            currentWallpaper={currentWallpaper}
          />
        </div>

        {/* Center: Quote */}
        <div className="flex-1 flex justify-center px-2 pb-1 min-w-0">
          {settings.showQuote && <QuoteWidget />}
        </div>

        {/* Right: Clickable Wallpaper Info */}
        <div className="shrink-0 text-right text-xs relative flex flex-col items-end pointer-events-auto">
          {/* Diffuse soft dark blur halo behind credit text */}
          <div
            className="absolute inset-0 -z-10 rounded-full pointer-events-none scale-125"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 80%)',
              filter: 'blur(16px)',
            }}
          />

          <div className="flex flex-col items-end gap-0.5 px-2 py-1">
            {locationName && (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-sans">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{locationName}</span>
              </div>
            )}
            {authorName && (
              <div className="flex items-center gap-1 text-[11px] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-sans">
                <Camera className="w-3 h-3 shrink-0 text-white/70" />
                <span>
                  Photo by{' '}
                  <a
                    href={authorProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-sky-300 font-semibold transition-colors cursor-pointer inline-block"
                  >
                    {authorName}
                  </a>{' '}
                  on Unsplash
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
