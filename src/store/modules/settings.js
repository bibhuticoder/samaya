import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        visibility: true, // true, false
        selectedMenuItem: null
    },

    getters: {
        visibility(state) {
            return state.visibility;
        },
        selectedMenuItem(state) {
            return state.selectedMenuItem;
        },
    },

    mutations: {
        setVisibility(state, visibility) {
            Vue.set(state, 'visibility', visibility);
        },
        setSelectedMenuItem(state, selectedMenuItem) {
            Vue.set(state, 'selectedMenuItem', selectedMenuItem);
        }
    }
}