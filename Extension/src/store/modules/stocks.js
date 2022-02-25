import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        visibility: true,
        watchList: ['NBL', 'ADBL', 'BPCL', 'NLIC']
    },

    getters: {
        getField
    },

    mutations: {
        updateField
    }
}