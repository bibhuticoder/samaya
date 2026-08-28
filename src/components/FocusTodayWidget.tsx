'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface FocusTodayProps {
  initialFocus?: { text: string; completed: boolean } | null;
  onFocusChange?: (focus: { text: string; completed: boolean } | null) => void;
  interactive?: boolean;
}

export const FocusTodayWidget: React.FC<FocusTodayProps> = ({
  initialFocus = null,
  onFocusChange,
  interactive = true,
}) => {
  const [focus, setFocus] = useState<{ text: string; completed: boolean } | null>(
    initialFocus
  );
  const [inputText, setInputText] = useState('');

  const handleSetFocus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newFocus = { text: inputText.trim(), completed: false };
    setFocus(newFocus);
    setInputText('');
    onFocusChange?.(newFocus);
  };

  const toggleCompleted = () => {
    if (!focus) return;
    const updated = { ...focus, completed: !focus.completed };
    setFocus(updated);
    onFocusChange?.(updated);
  };

  const handleClear = () => {
    setFocus(null);
    onFocusChange?.(null);
  };

  return (
    <div className="mt-6 flex flex-col items-center text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] select-none">
      {focus && focus.text ? (
        <div className="flex flex-col items-center animate-fade-in">
          <span className="text-xs uppercase tracking-widest text-white/80 font-bold mb-1.5 font-sans">
            TODAY
          </span>
          <div className="group flex items-center gap-3 glass-realistic px-6 py-2.5 rounded-full transition-all">
            <button
              onClick={toggleCompleted}
              disabled={!interactive}
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                focus.completed
                  ? 'bg-sky-500 border-sky-400 text-white shadow-sm shadow-sky-500/50'
                  : 'border-white/70 hover:border-white text-transparent'
              }`}
              title={focus.completed ? 'Mark incomplete' : 'Mark complete'}
            >
              <Check className="w-4 h-4 stroke-[3]" />
            </button>

            <span
              className={`text-xl sm:text-2xl font-medium tracking-wide transition-all font-mukta ${
                focus.completed ? 'line-through text-white/50' : 'text-white'
              }`}
            >
              {focus.text}
            </span>

            {interactive && (
              <button
                onClick={handleClear}
                className="p-1 rounded-full text-white/40 hover:text-red-400 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all ml-1"
                title="Clear goal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSetFocus} className="flex flex-col items-center animate-fade-in w-full max-w-md">
          <label className="text-xl sm:text-2xl font-normal text-white/95 mb-2 text-center font-sans tracking-wide">
            What is your main focus for today?
          </label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={!interactive}
            placeholder="Set your daily goal..."
            className="w-full bg-transparent border-b-2 border-white/60 focus:border-white text-white text-center text-xl sm:text-2xl py-1 px-3 outline-none transition-all placeholder:text-white/40 placeholder:text-lg font-mukta"
          />
        </form>
      )}
    </div>
  );
};
