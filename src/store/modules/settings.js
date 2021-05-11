import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        visibility: false,
        selectedMenuItem: null
    },

    getters: {
        getField
    },

    mutations: {
        updateField
    }
}