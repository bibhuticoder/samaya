import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        visibility: false, // true, false
    },

    getters: {
        visibility(state) {
            return state.visibility;
        }
    },

    mutations: {
        setVisibility(state, visibility) {
            Vue.set(state, 'visibility', visibility);
        }
    }
}