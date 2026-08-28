'use client';

import React, { useState, useEffect } from 'react';
import { toNpNumber } from '@/lib/np-number';
import { getNepaliGreeting } from '@/lib/greetings';
import { Calendar, Quote, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [clockText, setClockText] = useState<string>('');
  const [greetingText, setGreetingText] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hr = now.getHours();
      hr = hr % 12 || 12;
      const mins = String(now.getMinutes()).padStart(2, '0');
      setClockText(`${toNpNumber(hr)}:${toNpNumber(mins)}`);
      setGreetingText(getNepaliGreeting().fullGreeting);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mukta text-slate-100 bg-[#080d1a] min-h-screen relative selection:bg-sky-500/30 selection:text-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-hidden bg-cover bg-center text-white select-none"
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
      >
        {/* Subtle Dark Radial Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.75) 100%)',
          }}
        />

        {/* Top Logo */}
        <div className="relative z-10 flex items-center p-6 sm:p-8">
          <img
            src="/assets/favicon.png"
            width="32"
            height="32"
            alt="Samaya Logo"
            className="self-center drop-shadow"
          />
          <div className="ml-2 flex items-baseline">
            <span className="text-2xl font-bold tracking-wide font-rhodium text-white ml-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Samaya
            </span>
            <span className="text-xs text-white/70 ml-2 font-sans">2.0.0</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto">
          {/* Clock */}
          <div className="w-full text-white">
            <p className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-[0.5rem] sm:tracking-[1rem] font-rhodium drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-0">
              {clockText || '१२:००'}
            </p>
          </div>

          {/* Greeting */}
          <p className="text-3xl sm:text-4xl text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] mt-2 mb-0 font-mukta">
            {greetingText || 'शुभ प्रभात'}
          </p>

          {/* Lead Description */}
          <p className="text-lg sm:text-xl text-white/95 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mt-4 max-w-2xl leading-relaxed">
            Samaya is a friendly personal dashboard featuring Nepali calendar, daily
            Nepali quotes &amp; Nepali wallpapers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              className="glass-btn flex items-center px-7 py-3.5 rounded-full text-white font-semibold text-base"
              href="https://chrome.google.com/webstore/detail/samaya/jmpipanemahgfelokjjpdilfcfboinni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/chrome_icon.png"
                width="28"
                height="28"
                alt="Chrome Icon"
                className="mr-3 drop-shadow"
              />
              <span>Download for Chrome</span>
            </a>

            <a
              className="glass-btn flex items-center px-7 py-3.5 rounded-full text-white font-semibold text-base"
              href="https://addons.mozilla.org/en-GB/firefox/addon/samaya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/firefox_icon.png"
                width="28"
                height="28"
                alt="Firefox Icon"
                className="mr-3 drop-shadow"
              />
              <span>Download for Firefox</span>
            </a>
          </div>
        </div>

        {/* Bottom Right Credits */}
        <div className="relative z-10 text-right p-6 sm:p-8 text-white/90 text-sm flex flex-col items-end">
          <div className="glass-realistic px-4 py-2 rounded-2xl flex flex-col items-end">
            <span className="font-medium text-white/95">Gokyo Lake, Khumjung, Nepal</span>
            <p className="mb-0 text-white/70 text-xs mt-0.5">
              Chinh Le Duc |{' '}
              <a
                href="https://unsplash.com/@mero_dnt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-bold pb-2 border-b-[3px] border-[#82c7eb] inline-block font-sans text-white drop-shadow">
              Why &ldquo;Samaya&rdquo;
            </span>
          </div>

          <div className="glass-realistic rounded-3xl p-8 sm:p-12 mt-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Native elements badge trio */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>Nepali Calendar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-sm font-medium">
                <Quote className="w-4 h-4" />
                <span>Nepali Quotes</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-sm font-medium">
                <ImageIcon className="w-4 h-4" />
                <span>Nepali Wallpapers</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-slate-100 font-normal leading-relaxed text-center">
              &ldquo;Samaya is a hobby project. Nepali calendar, Nepali quotes, Nepali wallpapers — looking at native stuff on a piece of tech you use daily, gives a different kind of satisfaction.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section id="contribution" className="py-20 px-4 relative border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-bold pb-2 border-b-[3px] border-[#82c7eb] inline-block font-sans text-white drop-shadow">
              Contribution guide
            </span>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 text-center font-light mt-8">
            Excited to hear that you are interested in contributing to this project!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Col 1: Code */}
            <div className="glass-realistic p-8 rounded-3xl">
              <p className="text-xl font-bold text-center text-white mb-6">Contribute to code</p>

              <ul className="space-y-4 text-slate-300 text-base leading-relaxed">
                <li>
                  Samaya is an open source project. The extension is built with React, TypeScript &amp; Manifest V3. Please refer to{' '}
                  <a
                    href="https://github.com/bibhuticoder/samaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-medium"
                  >
                    Github repo
                  </a>{' '}
                  for more technical details.
                </li>

                <li>
                  Random Nepali quotes are loaded daily from{' '}
                  <a
                    href="https://github.com/bibhuticoder/samaya-quotes-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-medium"
                  >
                    Samaya Quotes API
                  </a>
                  . Please refer to its documentation for more details or check the dedicated{' '}
                  <a
                    href="https://github.com/bibhuticoder/samaya-quotes-api/blob/master/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-medium"
                  >
                    contribution guide
                  </a>
                  .
                </li>
              </ul>

              <p className="text-slate-400 text-sm mt-6 text-center italic">
                Any kind of suggestions from technical perspective are highly welcome.
              </p>
            </div>

            {/* Col 2: Supporting Materials */}
            <div className="glass-realistic p-8 rounded-3xl">
              <p className="text-xl font-bold text-center text-white mb-6">Supporting Materials</p>

              <ul className="space-y-4 text-slate-300 text-base leading-relaxed">
                <li>
                  Do you have passion for collecting <span className="font-semibold text-white">Nepali Quotes</span>? This project needs your help to deliver daily inspirational quotes to its users.
                </li>

                <li>
                  This project is always in search of <span className="font-semibold text-white">HD Nepali landscape wallpapers</span>. If you have relevant photographs on{' '}
                  <a
                    href="https://unsplash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-medium"
                  >
                    Unsplash
                  </a>
                  , or it can be published there, please contact us.
                </li>

                <li>
                  Bug reports, changes to existing features, addition of new features etc. are always welcome.
                </li>
              </ul>

              <p className="text-slate-400 text-sm mt-6 text-center">
                To contribute for supporting materials, please contact the developer{' '}
                <a href="mailto:bibhutipd@gmail.com" className="text-sky-400 hover:underline font-medium">
                  bibhutipd@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <p className="mt-16 text-center text-slate-400 flex items-center justify-center gap-2 text-sm">
            <span>Developed &amp; maintained with</span>
            <img src="/assets/heart.png" alt="heart" className="w-4 h-4 inline mx-0.5" />
            <span>
              by{' '}
              <a
                href="https://bibhuti.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline font-medium"
              >
                Bibhuti Poudyal
              </a>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
