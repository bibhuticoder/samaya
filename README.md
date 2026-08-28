<p align="center">
  <img src="public/assets/favicon.png" width="80" height="80" alt="Samaya Logo" />
</p>

<h1 align="center">Samaya (समय)</h1>

<p align="center">
  <strong>A friendly personal dashboard featuring Nepali Bikram Sambat calendar, daily Nepali quotes, Himalayan wallpapers & daily focus goals.</strong>
</p>

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/samaya/jmpipanemahgfelokjjpdilfcfboinni">
    <img src="https://img.shields.io/badge/Chrome_Web_Store-Manifest_V3-blue?logo=googlechrome&logoColor=white" alt="Chrome Web Store" />
  </a>
  <a href="https://addons.mozilla.org/en-GB/firefox/addon/samaya/">
    <img src="https://img.shields.io/badge/Firefox_Add--ons-Manifest_V3-orange?logo=firefoxbrowser&logoColor=white" alt="Firefox Add-on" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-14+-black?logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 📥 Download Extension

- 🌐 **Chrome / Brave / Edge / Opera**: [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/samaya/jmpipanemahgfelokjjpdilfcfboinni)
- 🦊 **Mozilla Firefox**: [Install from Firefox Add-ons](https://addons.mozilla.org/en-GB/firefox/addon/samaya/)

---

## 🌟 Highlights & Features

- 📅 **Nepali Bikram Sambat (वि.सं.) Calendar**: Accurate BS calendar engine (2000–2090+ BS), monthly grid view, today highlight, and AD-to-BS conversion.
- ⏰ **Live Nepali Clock & Time-aware Greeting**: 12h/24h format, Devanagari (०-९) and English numerals, with dynamic Nepali greetings (*शुभ प्रभात, शुभ मध्यान्ह, शुभ सन्ध्या, शुभ रात्री*).
- 🎯 **Daily Focus Goal**: Set your primary focus task for the day with one-click completion.
- 💬 **Daily Nepali Quotes**: Fresh inspirational quotes fetched daily from the open-source [Samaya Quotes API](https://github.com/bibhuticoder/samaya-quotes-api).
- 🏔️ **Stunning Himalayan & Nepal Wallpapers**: Curated high-resolution Unsplash wallpapers of Nepal's landscapes, mountains, and cultural heritage.
- 🛡️ **Manifest V3 & Privacy First**: Zero tracking or telemetry. 100% offline-first storage.

---

## 📁 Repository Structure

```
samaya/
├── src/
│   ├── app/                      # Next.js App Router (Static Export Landing Site)
│   │   ├── layout.tsx            # Global layout with Google fonts (Mukta, Rhodium Libre, Inter)
│   │   ├── page.tsx              # Landing page (Original design preserved)
│   │   └── globals.css           # Tailwind CSS styles and animations
│   ├── components/               # Shared React + TypeScript Widgets
│   │   ├── Dashboard.tsx         # Master dashboard container
│   │   ├── ClockWidget.tsx       # Live ticking clock with quick settings
│   │   ├── GreetingsWidget.tsx   # Dynamic time-of-day greeting with name editor
│   │   ├── CalendarWidget.tsx    # Mini BS badge & popup monthly calendar grid
│   │   ├── FocusTodayWidget.tsx  # Daily priority task & completion checkbox
│   │   ├── QuoteWidget.tsx       # Daily Nepali quote with API fetcher
│   │   ├── SettingsModal.tsx     # Preferences modal (clock, wallpapers, widgets, about)
│   │   └── BackgroundView.tsx    # Landscape wallpaper renderer & photo credits
│   ├── lib/                      # Pure TypeScript Utilities & Engines
│   │   ├── nepali-calendar.ts    # Bikram Sambat <-> AD calendar conversion algorithm
│   │   ├── np-number.ts          # Devanagari numerals converter (०-९)
│   │   ├── quotes.ts             # Quotes API client with offline fallback
│   │   ├── wallpapers.ts         # Curated wallpaper library & Unsplash helper
│   │   ├── greetings.ts          # Nepali greeting translation logic
│   │   └── storage.ts            # Cross-browser & web storage abstraction
│   └── extension/                # Browser Extension Entry & Manifest Templates
│       ├── index.html            # Extension new-tab HTML template
│       ├── main.tsx              # Extension React entry point
│       ├── manifest.chrome.json  # Chrome MV3 manifest template
│       └── manifest.firefox.json # Firefox MV3 manifest template
├── extension/
│   ├── chrome/                   # Ready-to-load unpacked Chrome Manifest V3 extension
│   └── firefox/                  # Ready-to-load temporary Firefox Manifest V3 add-on
├── public/                       # Static public assets (icons, wallpapers, logos)
├── next.config.mjs               # Next.js static export config (`output: 'export'`)
├── tailwind.config.js            # Tailwind CSS configuration
├── vite.config.chrome.ts         # Vite build configuration for Chrome MV3 extension
└── vite.config.firefox.ts        # Vite build configuration for Firefox MV3 extension
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0 or higher (v20+ / v22+ fully supported)
- **npm**: v9.0 or higher

### Installation
```bash
git clone https://github.com/bibhuticoder/samaya.git
cd samaya
npm install
```

---

## 🛠️ Development & Build Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js static website local dev server (`http://localhost:3000`) |
| `npm run build` | Build the Next.js static website export (outputs to `out/`) |
| `npm run build:chrome` | Build the Chrome Manifest V3 extension to `extension/chrome/` |
| `npm run build:firefox` | Build the Firefox Manifest V3 extension to `extension/firefox/` |
| `npm run build:extension` | Build both Chrome and Firefox extensions |
| `npm run build:all` | Build Next.js static site + Chrome extension + Firefox extension |

---

## 🌐 Running Extensions in Browsers

### Chrome (Manifest V3)
1. Build the extension: `npm run build:chrome` (or use the pre-built `extension/chrome`).
2. Open Chrome and navigate to `chrome://extensions`.
3. Toggle on **Developer mode** in the top right.
4. Click **Load unpacked** and select the `extension/chrome` directory inside this project.
5. Open a new tab to see **Samaya**!

### Firefox (Manifest V3)
1. Build the extension: `npm run build:firefox` (or use the pre-built `extension/firefox`).
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on...**.
4. Select `extension/firefox/manifest.json`.
5. Open a new tab to see **Samaya**!

---

## 🤝 Contributing

We warmly welcome contributions!

- **Code & Enhancements**: Submit a Pull Request on GitHub.
- **Wallpapers**: If you have high-resolution photographs of Nepal's landscapes, upload them to [Unsplash](https://unsplash.com) and contact the maintainer.
- **Quotes**: Contribute new Nepali inspirational quotes at [samaya-quotes-api](https://github.com/bibhuticoder/samaya-quotes-api).
- **Contact / Feedback**: [bibhutipd@gmail.com](mailto:bibhutipd@gmail.com)

---

## 📄 License
Open source under the [ISC / MIT License](LICENSE). Made with ❤️ by [Bibhuti Poudyal](https://bibhuti.me).
