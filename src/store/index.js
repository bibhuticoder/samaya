import Vue from 'vue'
import Vuex from 'vuex'
import ClockModule from '@/store/modules/clock';
import GreetingsModule from '@/store/modules/greetings';
import FocusTodayModule from '@/store/modules/focusToday';
import QuoteModule from '@/store/modules/quote';
import NotePadModule from '@/store/modules/notepad';
import CalendarModule from '@/store/modules/calendar';
import WallpapersModule from '@/store/modules/wallpapers';
import SettingsModule from '@/store/modules/settings';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({ storage: window.localStorage })

// const vuexLocal = new VuexPersistence({
//   storage: {
//     getItem(key) {
//       chrome.storage.sync.get(key, function (result) {
//         result[key];
//       });
//     },

//     setItem(key, data) {
//       let obj = {};
//       obj[key] = data;
//       chrome.storage.sync.set(obj, function () {
//       });
//     },

//     removeItem(key) {
//       chrome.storage.sync.remove(key);
//     },

//     clear() {
//       chrome.storage.sync.clear();
//     },
//   }
// })

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    clock: ClockModule,
    greetings: GreetingsModule,
    focusToday: FocusTodayModule,
    quote: QuoteModule,
    notepad: NotePadModule,
    calendar: CalendarModule,
    wallpapers: WallpapersModule,
    settings: SettingsModule
  },
  plugins: [vuexLocal.plugin]
})