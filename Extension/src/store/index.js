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
import StocksModule from '@/store/modules/stocks';
import createPersistedState from "vuex-persistedstate";
import storage from "@/storage";

Vue.use(Vuex)

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
    settings: SettingsModule,
    stocks: StocksModule
  },
  plugins: [createPersistedState({
    key: "samaya_store",
    fetchBeforeUse: true,
    // storage: {
    //   getItem: async (key) => await storage.get(key),
    //   setItem: async (key, value) => await storage.set(key, value),
    //   removeItem: async (key) => await storage.set(key, null),
    // }
  })],
})