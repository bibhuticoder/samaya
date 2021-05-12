import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        focus: {
            value: null,
            done: false
        }
    },

    getters: {
        getField
    },

    mutations: {
        updateField
    }
}