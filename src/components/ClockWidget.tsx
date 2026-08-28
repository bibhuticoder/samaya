'use client';

import React, { useState, useEffect } from 'react';
import { toNpNumber } from '@/lib/np-number';
import { MoreVertical } from 'lucide-react';

interface ClockWidgetProps {
  format?: '12' | '24';
  language?: 'np' | 'en';
  onFormatChange?: (format: '12' | '24') => void;
  onLanguageChange?: (language: 'np' | 'en') => void;
  interactive?: boolean;
}

export const ClockWidget: React.FC<ClockWidgetProps> = ({
  format = '12',
  language = 'np',
  onFormatChange,
  onLanguageChange,
  interactive = true,
}) => {
  const [time, setTime] = useState<string>('१२:००');
  const [showSettings, setShowSettings] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      if (format === '12') {
        hours = hours % 12 || 12;
      }
      const mins = String(now.getMinutes()).padStart(2, '0');
      const timeStr = `${hours}:${mins}`;

      if (language === 'np') {
        setTime(`${toNpNumber(hours)}:${toNpNumber(mins)}`);
      } else {
        setTime(timeStr);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [format, language]);

  return (
    <div className="relative group inline-flex items-center justify-center select-none">
      <span
        className={`text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-[0.25rem] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] tabular-nums transition-all ${
          language === 'np' ? 'font-mukta font-bold' : 'font-rhodium font-normal'
        }`}
      >
        {time}
      </span>

      {interactive && (
        <div className="relative ml-2">
          <button
            onClick={() => setShowSettings((prev) => !prev)}
            className={`p-2 rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200 ${
              showSettings ? 'opacity-100 bg-white/20' : 'opacity-0 group-hover:opacity-100'
            }`}
            title="Clock Settings"
            aria-label="Clock Settings"
          >
            <MoreVertical className="w-5 h-5" />
          </button>

          {showSettings && (
            <div className="absolute left-full top-0 ml-2 bg-slate-950/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-3.5 shadow-2xl text-white text-xs w-48 z-50 animate-fade-in font-sans">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-300 font-medium">Format</span>
                <div className="flex bg-black/40 rounded-xl p-0.5 border border-white/10">
                  <button
                    onClick={() => onFormatChange?.('12')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      format === '12'
                        ? 'bg-sky-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    12Hr
                  </button>
                  <button
                    onClick={() => onFormatChange?.('24')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      format === '24'
                        ? 'bg-sky-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    24Hr
                  </button>
                </div>
              </div>

              <div className="border-t border-white/10 my-2"></div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-300 font-medium">Digits</span>
                <div className="flex bg-black/40 rounded-xl p-0.5 border border-white/10">
                  <button
                    onClick={() => onLanguageChange?.('np')}
                    className={`px-2.5 py-1 rounded-lg transition-all font-mukta ${
                      language === 'np'
                        ? 'bg-sky-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    नेपाली
                  </button>
                  <button
                    onClick={() => onLanguageChange?.('en')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      language === 'en'
                        ? 'bg-sky-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    En
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
