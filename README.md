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

### Deployemnt to chrome extensions

```
npm run build

// To install on chrome
- Goto Chrome->Extensions->Load Unpacked
- Point to 'dist' directory inside your project
- After each build, reload extension 
```

### Todos
- [x] Consistemt design System
- [x] Functional calendar
- [x] Select best image sources from Unsplash
- [x] Build static JSON quotes api(splits data into chunks - chunk_1.json, chunk_2.json...)
- [x] Application settings
- [ ] Contributors for photographs & Quotes


### Change Log

#### 1.0.0

- Initial Release

#### 1.0.1 
- Adds background overlay & text shadow to make the text more visible/readable
- Changes current day highlight on calendar to blue
- Minor bug fixes for notepad