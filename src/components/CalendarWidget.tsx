'use client';

import React, { useState, useEffect } from 'react';
import {
  getTodayBS,
  getBSMonthCalendar,
  NEP_DAYS_SHORT,
  BSDate,
  BSMonthCalendar,
} from '@/lib/nepali-calendar';
import { toNpNumber } from '@/lib/np-number';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarWidgetProps {
  interactive?: boolean;
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({
  interactive = true,
}) => {
  const [today, setToday] = useState<BSDate>(getTodayBS());
  const [currentYear, setCurrentYear] = useState<number>(today.year);
  const [currentMonth, setCurrentMonth] = useState<number>(today.month);
  const [monthData, setMonthData] = useState<BSMonthCalendar>(
    getBSMonthCalendar(today.year, today.month)
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const todayBS = getTodayBS();
    setToday(todayBS);
    setCurrentYear(todayBS.year);
    setCurrentMonth(todayBS.month);
    setMonthData(getBSMonthCalendar(todayBS.year, todayBS.month));
  }, []);

  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setMonthData(getBSMonthCalendar(newYear, newMonth));
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setMonthData(getBSMonthCalendar(newYear, newMonth));
  };

  const handleResetToToday = () => {
    const todayBS = getTodayBS();
    setCurrentYear(todayBS.year);
    setCurrentMonth(todayBS.month);
    setMonthData(getBSMonthCalendar(todayBS.year, todayBS.month));
  };

  return (
    <div className="relative select-none z-40 font-sans">
      {/* Big Square Calendar Badge */}
      <button
        onClick={() => interactive && setIsOpen((prev) => !prev)}
        className={`w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-between p-3 rounded-3xl bg-black/45 hover:bg-black/65 backdrop-blur-md border text-white shadow-2xl transition-all duration-200 hover:scale-105 group cursor-pointer ${
          isOpen
            ? 'border-sky-400 ring-2 ring-sky-500/30'
            : 'border-white/20 hover:border-white/40'
        }`}
        title="Nepali Bikram Sambat Calendar"
      >
        {/* Month & Weekday Header */}
        <div className="w-full flex items-center justify-between px-1 text-xs sm:text-sm font-semibold text-sky-300 font-mukta leading-none pt-0.5">
          <span>{today.strMonth}</span>
          <span className="text-white/80 font-medium text-[11px] sm:text-xs">{today.strDayOfWeek}</span>
        </div>

        {/* Big Center Day Numeral */}
        <div className="my-auto flex items-center justify-center">
          <span className="text-5xl sm:text-6xl font-extrabold font-mukta text-white drop-shadow leading-none group-hover:text-sky-300 transition-colors">
            {toNpNumber(today.day)}
          </span>
        </div>

        {/* Bottom Year Strip */}
        <div className="w-full text-center pb-0.5 border-t border-white/10 pt-1.5">
          <span className="text-xs sm:text-xs font-semibold text-white/70 font-mukta tracking-wider">
            {toNpNumber(today.year)} वि.सं.
          </span>
        </div>
      </button>

      {/* Spacious, Beautiful Full Month Calendar Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-3 w-[390px] sm:w-[420px] bg-slate-950/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl text-white z-50 animate-fade-in">
            {/* Header / Month Navigation */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <button
                onClick={handlePrevMonth}
                className="p-2.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                className="flex flex-col items-center cursor-pointer group"
                onClick={handleResetToToday}
                title="Jump to Current Month"
              >
                <span className="text-2xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors font-mukta">
                  {monthData.monthNameNp} {toNpNumber(monthData.year)}
                </span>
                <span className="text-xs text-white/60 font-sans mt-0.5">
                  {monthData.monthNameEn} ({monthData.totalDays} Days)
                </span>
              </div>

              <button
                onClick={handleNextMonth}
                className="p-2.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-sm font-semibold text-slate-400 mb-3.5 font-mukta">
              {NEP_DAYS_SHORT.map((day, idx) => (
                <div key={idx} className={`py-1 ${idx === 6 ? 'text-red-400 font-bold' : ''}`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 text-center text-base font-mukta">
              {monthData.weeks.map((week, wIdx) =>
                week.map((dayNum, dIdx) => {
                  const isCurrentDay =
                    dayNum !== null &&
                    today.year === monthData.year &&
                    today.month === monthData.month &&
                    today.day === dayNum;

                  const isSaturday = dIdx === 6;

                  return (
                    <div
                      key={`${wIdx}-${dIdx}`}
                      className={`h-11 sm:h-12 flex items-center justify-center rounded-2xl text-base font-medium transition-all ${
                        dayNum === null
                          ? 'invisible'
                          : isCurrentDay
                          ? 'bg-sky-500 text-white font-bold shadow-lg shadow-sky-500/50 scale-105 ring-2 ring-sky-300/50'
                          : isSaturday
                          ? 'text-red-400 hover:bg-white/10'
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {dayNum !== null ? toNpNumber(dayNum) : ''}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/60 font-sans">
              <span className="font-mukta">Today: {today.strMonth} {toNpNumber(today.day)}, {toNpNumber(today.year)}</span>
              <button
                onClick={handleResetToToday}
                className="text-sky-400 hover:underline font-semibold cursor-pointer"
              >
                Jump to Today
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
