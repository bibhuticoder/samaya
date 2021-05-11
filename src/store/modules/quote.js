import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        visibility: true,
        quote: null
    },

    getters: {
        getField
    },

    mutations: {
        updateField
    }
}