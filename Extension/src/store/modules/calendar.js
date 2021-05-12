import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        enable: true,
        visibility: false,
    },

    getters: {
        getField
    },

    mutations: {
        updateField
    }
}