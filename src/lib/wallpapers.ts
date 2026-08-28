// Unsplash & Local Wallpaper manager

export interface WallpaperInfo {
  id: string;
  url?: string;
  urls: {
    raw?: string;
    full: string;
    regular: string;
    small?: string;
    thumb?: string;
  };
  location?: {
    name?: string;
  } | string;
  user?: {
    name?: string;
    links?: {
      html?: string;
    };
  };
  author?: {
    name: string;
    profile: string;
  };
  description?: string;
  fetchedAt?: number;
}

export const FEATURED_WALLPAPERS: WallpaperInfo[] = [
  {
    id: '1580424917967-a8867a6e676e',
    url: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e',
    urls: {
      full: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?auto=format&fit=crop&w=3840&q=90',
      regular: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?auto=format&fit=crop&w=2560&q=85',
      thumb: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?auto=format&fit=crop&w=300&q=70',
    },
    location: { name: 'Kathmandu, Nepal' },
    author: { name: 'Avel Chuklanov', profile: 'https://unsplash.com/@chuklanov' },
    user: { name: 'Avel Chuklanov', links: { html: 'https://unsplash.com/@chuklanov' } },
  },
  {
    id: '1718179634911-8551f8b0cccf',
    url: 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf',
    urls: {
      full: 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?auto=format&fit=crop&w=3840&q=90',
      regular: 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?auto=format&fit=crop&w=2560&q=85',
      thumb: 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?auto=format&fit=crop&w=300&q=70',
    },
    location: { name: 'Pokhara, Nepal' },
    author: { name: 'Martin Skřivánek', profile: 'https://unsplash.com/@skrivan' },
    user: { name: 'Martin Skřivánek', links: { html: 'https://unsplash.com/@skrivan' } },
  },
  {
    id: '1718180555560-0c5f890f8098',
    url: 'https://images.unsplash.com/photo-1718180555560-0c5f890f8098',
    urls: {
      full: 'https://images.unsplash.com/photo-1718180555560-0c5f890f8098?auto=format&fit=crop&w=3840&q=90',
      regular: 'https://images.unsplash.com/photo-1718180555560-0c5f890f8098?auto=format&fit=crop&w=2560&q=85',
      thumb: 'https://images.unsplash.com/photo-1718180555560-0c5f890f8098?auto=format&fit=crop&w=300&q=70',
    },
    location: { name: 'Pokhara, Nepal' },
    author: { name: 'Martin Skřivánek', profile: 'https://unsplash.com/@skrivan' },
    user: { name: 'Martin Skřivánek', links: { html: 'https://unsplash.com/@skrivan' } },
  },
  {
    id: '1606710607626-350820daa247',
    url: 'https://images.unsplash.com/photo-1606710607626-350820daa247',
    urls: {
      full: 'https://images.unsplash.com/photo-1606710607626-350820daa247?auto=format&fit=crop&w=3840&q=90',
      regular: 'https://images.unsplash.com/photo-1606710607626-350820daa247?auto=format&fit=crop&w=2560&q=85',
      thumb: 'https://images.unsplash.com/photo-1606710607626-350820daa247?auto=format&fit=crop&w=300&q=70',
    },
    location: { name: 'Nepal' },
    author: { name: 'Kabita Darlami', profile: 'https://unsplash.com/@itskabita' },
    user: { name: 'Kabita Darlami', links: { html: 'https://unsplash.com/@itskabita' } },
  },
];

export async function getRandomWallpaper(): Promise<WallpaperInfo> {
  const index = Math.floor(Math.random() * FEATURED_WALLPAPERS.length);
  return {
    ...FEATURED_WALLPAPERS[index],
    fetchedAt: Date.now(),
  };
}
