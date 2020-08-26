import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        focus: {
            value: null,
            done: false
        }
    },

    getters: {
        focus(state) {
            return state.focus;
        }
    },

    mutations: {
        setFocus(state, focus) {
            Vue.set(state, 'focus', focus);
        }
    }
}