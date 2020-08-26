import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        visibility: true, // true, false
        language: 'np', // en, np
        format: 12, //12 & 24
    },

    getters: {
        format(state) {
            return state.format;
        },
        language(state) {
            return state.language;
        },
        visibility(state) {
            return state.visibility;
        }
    },

    mutations: {
        setVisibility(state, visibility) {
            Vue.set(state, 'visibility', visibility);
        },

        setLanguage(state, language) {
            Vue.set(state, 'language', language);
        },

        setFormat(state, format) {
            if (format == 12 || format == 24)
                Vue.set(state, 'format', format);
            else console.error('Invalid Clock Format');
        }
    }
}