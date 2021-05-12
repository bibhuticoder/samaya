import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        enable: true,
        visibility: false, // true, false
        selectedNote: null,
        notes: []
    },

    getters: {
        getField,
    },

    mutations: {
        updateField
    }
}