// Nepali Greetings Logic

export interface GreetingInfo {
  prefix: string;
  translation: string;
  timeOfDay: 'morning' | 'noon' | 'evening' | 'night';
  fullGreeting: string;
}

export const TRANSLATIONS = {
  morning: 'प्रभात',
  noon: 'मध्यान्ह',
  evening: 'सन्ध्या',
  night: 'रात्री',
};

export function getNepaliGreeting(name?: string | null): GreetingInfo {
  const prefix = 'शुभ';
  const hour = new Date().getHours();

  let timeOfDay: 'morning' | 'noon' | 'evening' | 'night' = 'morning';
  let translation = TRANSLATIONS.morning;

  if (hour >= 1 && hour <= 12) {
    timeOfDay = 'morning';
    translation = TRANSLATIONS.morning;
  } else if (hour > 12 && hour <= 16) {
    timeOfDay = 'noon';
    translation = TRANSLATIONS.noon;
  } else if (hour > 16 && hour <= 19) {
    timeOfDay = 'evening';
    translation = TRANSLATIONS.evening;
  } else {
    timeOfDay = 'night';
    translation = TRANSLATIONS.night;
  }

  const base = `${prefix} ${translation}`;
  const fullGreeting = name && name.trim() ? `${base}, ${name.trim()}` : base;

  return {
    prefix,
    translation,
    timeOfDay,
    fullGreeting,
  };
}
