import type { Metadata } from 'next';
import { Mukta, Rhodium_Libre, Inter } from 'next/font/google';
import './globals.css';

const mukta = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-mukta',
  display: 'swap',
});

const rhodiumLibre = Rhodium_Libre({
  subsets: ['devanagari', 'latin'],
  weight: ['400'],
  variable: '--font-rhodium',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Samaya - Nepali Calendar, Daily Quotes & Wallpapers',
  description:
    'A friendly personal dashboard & browser extension featuring Nepali Bikram Sambat calendar, daily Nepali quotes, and Himalayan wallpapers.',
  keywords: [
    'Samaya',
    'Nepali Calendar',
    'Bikram Sambat',
    'Nepali Quotes',
    'Nepal Wallpapers',
    'Chrome Extension',
    'Firefox Addon',
    'Daily Focus',
    'Manifest V3',
  ],
  authors: [{ name: 'Bibhuti Poudyal' }],
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ne" className={`${mukta.variable} ${rhodiumLibre.variable} ${inter.variable}`}>
      <body className="font-mukta antialiased bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
