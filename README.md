<p align="center">
  <img src="https://bibhuticoder.github.io/samaya/assets/favicon.png" align="center" style="margin: 0 auto" />
</p>



<h1 align="center">Samaya</h1>

<h2 align="center">Samaya is a friendly personal dashboard featuring Nepali calendar, daily Nepali quotes & Nepali wallpapers.</h1>

<br/>

## Download extension
### Chrome 
https://chrome.google.com/webstore/detail/samaya/jmpipanemahgfelokjjpdilfcfboinni
### Firefox
https://addons.mozilla.org/en-GB/firefox/addon/samaya/

## Project setup & deployement

The Vuejs project for extension is inside the `Extension` folder.
`index.html` at root is the landing page.

### Setup & Dev
```
git clone git@github.com:bibhuticoder/samaya.git
cd samaya
npm install
npm run serve
```

### Build extension
```
npm run build
```

### Run as chrome extension
- Goto Chrome->Extensions->Load Unpacked
- Point to 'dist' directory inside your project
- After each build, reload extension 

Reference: https://developer.chrome.com/docs/extensions/mv3/getstarted/

### Run as firefox extension
Follow steps given on this link

https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/

### Todos
- [x] Consistemt design System
- [x] Functional calendar
- [x] Select best image sources from Unsplash
- [x] Build static JSON quotes api(splits data into chunks - chunk_1.json, chunk_2.json...)
- [x] Application settings
- [ ] Contributors for photographs & Quotes
- [ ] Wallpaper preview when hovered on photoprapher info
- [ ] Save applicaton data on browser storage(instead of localstorage) & sync across devices.


### Change Log

#### 1.0.0

- Initial Release

#### 1.0.1 
- Adds background overlay & text shadow to make the text more visible/readable
- Changes current day highlight on calendar to blue
- Minor bug fixes for notepad

#### 1.0.2
- Fixes Nepali calendar bug
- "selected note not rendered on creation" bug fixed
- Updates unsplash collections list & featured wallpapers
