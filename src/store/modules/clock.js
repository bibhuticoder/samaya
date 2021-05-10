import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        visibility: 'visible', // visible, hidden
        language: 'np', // en, np
        format: 12, //12 & 24
    },

    getters: {
        getField,
    },

    mutations: {
        updateField
    }
}