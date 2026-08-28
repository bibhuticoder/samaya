'use client';

import React, { useState, useEffect } from 'react';
import { getNepaliGreeting } from '@/lib/greetings';
import { Edit2, Check } from 'lucide-react';

interface GreetingsWidgetProps {
  name: string;
  onNameChange?: (name: string) => void;
  interactive?: boolean;
}

export const GreetingsWidget: React.FC<GreetingsWidgetProps> = ({
  name,
  onNameChange,
  interactive = true,
}) => {
  const [greetingText, setGreetingText] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>(name);

  useEffect(() => {
    setGreetingText(getNepaliGreeting(name).fullGreeting);
  }, [name]);

  const handleSave = () => {
    setIsEditing(false);
    onNameChange?.(tempName);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setTempName(name);
    }
  };

  return (
    <div className="group relative inline-flex items-center justify-center text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] select-none">
      {isEditing ? (
        <div className="flex items-center gap-2 glass-realistic px-4 py-2 rounded-2xl">
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            placeholder="Enter your name..."
            className="bg-transparent border-b border-white text-white text-2xl md:text-3xl text-center outline-none px-2 py-0.5 max-w-[220px] font-mukta placeholder:text-white/40"
          />
          <button
            onClick={handleSave}
            className="p-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white transition-all shadow-md"
            title="Save"
          >
            <Check className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide text-white font-mukta">
            {greetingText}
          </h2>
          {interactive && (
            <button
              onClick={() => {
                setTempName(name);
                setIsEditing(true);
              }}
              className="ml-3 p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/15 opacity-0 group-hover:opacity-100 transition-all duration-200"
              title="Edit Name"
              aria-label="Edit Name"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
