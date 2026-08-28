'use client';

import React, { useState, useEffect } from 'react';
import { WallpaperInfo } from '@/lib/wallpapers';

interface BackgroundViewProps {
  wallpaper: WallpaperInfo | null;
}

export const BackgroundView: React.FC<BackgroundViewProps> = ({ wallpaper }) => {
  const defaultFallback = './assets/background.jpg';
  const targetUrl =
    wallpaper?.urls?.full || wallpaper?.urls?.regular || wallpaper?.url || defaultFallback;
  const [imgSrc, setImgSrc] = useState<string>(targetUrl);

  useEffect(() => {
    if (wallpaper) {
      setImgSrc(
        wallpaper.urls?.full || wallpaper.urls?.regular || wallpaper.url || defaultFallback
      );
    } else {
      setImgSrc(defaultFallback);
    }
  }, [wallpaper]);

  const locationName =
    typeof wallpaper?.location === 'string'
      ? wallpaper.location
      : wallpaper?.location?.name;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {/* Background Image - Full Natural Brightness */}
      <img
        src={imgSrc}
        alt={locationName || 'Nepal Landscape'}
        onError={() => setImgSrc(defaultFallback)}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-700 ease-in-out z-0"
        style={{
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
        loading="eager"
      />
    </div>
  );
};
