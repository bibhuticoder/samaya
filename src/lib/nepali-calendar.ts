import NepaliDate from 'nepali-date-converter';

export interface BSDate {
  year: number;
  month: number; // 1-12
  day: number; // 1-32
  strMonth: string; // e.g. "भदौ"
  strMonthEn: string; // e.g. "Bhadra"
  dayOfWeek: number; // 0-6 (0 = Sunday / आइतबार)
  strDayOfWeek: string; // e.g. "शुक्रबार"
  strDayOfWeekEn: string; // e.g. "Friday"
  totalDaysInMonth: number;
}

export interface BSMonthCalendar {
  year: number;
  month: number; // 1-12
  monthNameNp: string;
  monthNameEn: string;
  totalDays: number;
  startDayOfWeek: number; // 0-6 (Sunday=0)
  weeks: (number | null)[][]; // 7 items per week
}

export const NEP_MONTHS = [
  'बैशाख',
  'जेठ',
  'असार',
  'साउन',
  'भदौ',
  'असोज',
  'कार्तिक',
  'मंसिर',
  'पुष',
  'माघ',
  'फागुन',
  'चैत',
];

export const ENG_MONTHS_NP = [
  'Baisakh',
  'Jestha',
  'Ashadh',
  'Shrawan',
  'Bhadra',
  'Ashwin',
  'Kartik',
  'Mangsir',
  'Poush',
  'Magh',
  'Falgun',
  'Chaitra',
];

export const NEP_DAYS = [
  'आइतबार',
  'सोमबार',
  'मंगलबार',
  'बुधबार',
  'बिहीबार',
  'शुक्रबार',
  'शनिबार',
];

export const NEP_DAYS_SHORT = [
  'आइत',
  'सोम',
  'मंगल',
  'बुध',
  'बिहि',
  'शुक्र',
  'शनि',
];

export const ENG_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function getDaysInBSMonth(year: number, month: number): number {
  try {
    const nd = new NepaliDate(year, month - 1, 1);
    // Find how many days in this month by advancing day
    let count = 28;
    while (count <= 32) {
      try {
        const testNd = new NepaliDate(year, month - 1, count + 1);
        if (testNd.getMonth() !== month - 1 || testNd.getYear() !== year) {
          return count;
        }
        count++;
      } catch {
        return count;
      }
    }
    return count;
  } catch {
    return 30;
  }
}

export function adToBs(dateInput: Date | string | number): BSDate {
  const d = new Date(dateInput);
  const nd = new NepaliDate(d);

  const year = nd.getYear();
  const month = nd.getMonth() + 1; // 1-indexed
  const day = nd.getDate();
  const dayOfWeek = d.getDay(); // 0 = Sunday
  const totalDaysInMonth = getDaysInBSMonth(year, month);

  return {
    year,
    month,
    day,
    strMonth: NEP_MONTHS[month - 1] || '',
    strMonthEn: ENG_MONTHS_NP[month - 1] || '',
    dayOfWeek,
    strDayOfWeek: NEP_DAYS[dayOfWeek] || '',
    strDayOfWeekEn: ENG_DAYS[dayOfWeek] || '',
    totalDaysInMonth,
  };
}

export function getBSMonthCalendar(bsYear: number, bsMonth: number): BSMonthCalendar {
  const totalDays = getDaysInBSMonth(bsYear, bsMonth);

  // Find start day of week for the 1st of the BS month
  let startDayOfWeek = 0;
  try {
    const firstDay = new NepaliDate(bsYear, bsMonth - 1, 1);
    const adFirstDay = firstDay.toJsDate();
    startDayOfWeek = adFirstDay.getDay();
  } catch {
    startDayOfWeek = 0;
  }

  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = [];

  // Leading empty days
  for (let i = 0; i < startDayOfWeek; i++) {
    currentWeek.push(null);
  }

  for (let d = 1; d <= totalDays; d++) {
    currentWeek.push(d);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Trailing empty days
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return {
    year: bsYear,
    month: bsMonth,
    monthNameNp: NEP_MONTHS[bsMonth - 1] || '',
    monthNameEn: ENG_MONTHS_NP[bsMonth - 1] || '',
    totalDays,
    startDayOfWeek,
    weeks,
  };
}

export function getTodayBS(): BSDate {
  return adToBs(new Date());
}
