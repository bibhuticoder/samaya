import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        quote: null
    },

    getters: {
        quote(state) {
            return state.quote;
        }
    },

    mutations: {
        setQuote(state, quote) {
            Vue.set(state, 'quote', quote);
        }
    }
}