import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        visibility: true,
        language: 'np', // en, np
        format: 12, //12 & 24
        settingsVisibility: false
    },

    getters: {
        getField,
    },

    mutations: {
        updateField
    }
}