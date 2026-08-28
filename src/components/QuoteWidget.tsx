'use client';

import React, { useState, useEffect } from 'react';
import { Quote, fetchRandomQuote } from '@/lib/quotes';
import { Heart, RefreshCw } from 'lucide-react';

interface QuoteWidgetProps {
  interactive?: boolean;
}

export const QuoteWidget: React.FC<QuoteWidgetProps> = ({ interactive = true }) => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadQuote = async () => {
    setLoading(true);
    try {
      const q = await fetchRandomQuote();
      setQuote(q);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuote();
  }, []);

  if (!quote) return null;

  return (
    <div className="group relative text-center max-w-2xl px-4 py-2 transition-all duration-300 select-none font-sans">
      {/* Diffuse soft dark blur halo behind quote text only - NO box borders */}
      <div
        className="absolute inset-0 -z-10 rounded-full pointer-events-none scale-110"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="transition-all duration-300 transform group-hover:-translate-y-0.5">
        <p className="text-base sm:text-lg md:text-xl font-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] italic tracking-wide font-mukta">
          “{quote.text}”
        </p>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 mt-1.5 text-xs text-white/90 drop-shadow">
        <span className="font-mukta font-medium">— {quote.author || 'Unknown'}</span>

        {interactive && (
          <button
            onClick={loadQuote}
            disabled={loading}
            className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-all ml-1"
            title="Next Quote"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        )}

        <a
          href="https://bibhuticoder.github.io/samaya/#contribution"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-300 transition-colors ml-1"
          title="Support Samaya"
        >
          <Heart className="w-3.5 h-3.5 text-red-400 inline" />
        </a>
      </div>
    </div>
  );
};
