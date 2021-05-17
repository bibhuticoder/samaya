# Samaya

Samaya is a friendly personal dashboard featuring Nepali calendar, daily Nepali quotes & Nepali wallpapers.

## Download chrome extension
https://chrome.google.com/webstore/detail/samaya/jmpipanemahgfelokjjpdilfcfboinni

## Project setup & deployement

The Vuejs project for extension is inside the `Extension` folder.
`index.html` at root is the landing page.

### Setup
```
npm install

npm run serve
```

### Run as chrome extension

```
npm run build

// Steps to follow
- Goto Chrome->Extensions->Load Unpacked
- Point to 'dist' directory inside your project
- After each build, reload extension 
```

### Run as firefox extension
```
npm run build

// Follow steps given on this link
https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/
```

### Todos
- [x] Consistemt design System
- [x] Functional calendar
- [x] Select best image sources from Unsplash
- [x] Build static JSON quotes api(splits data into chunks - chunk_1.json, chunk_2.json...)
- [x] Application settings
- [ ] Contributors for photographs & Quotes
- [ ] Wallpaper preview when hovered on photoprapher info


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
