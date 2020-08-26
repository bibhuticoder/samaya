import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        name: null,
        language: 'np', // en, np
        customText: null
    },

    getters: {
        name(state) {
            return state.name;
        },
        language(state) {
            return state.language;
        },
        customText(state) {
            return state.customText;
        }
    },

    mutations: {
        setName(state, name) {
            Vue.set(state, 'name', name);
        },

        setLanguage(state, language) {
            Vue.set(state, 'language', language);
        },

        setCustomText(state, customText) {
            Vue.set(state, 'customText', customText);
        }
    }
}