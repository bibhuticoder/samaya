import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        visibility: false, // true, false
        selectedNote: null,
        notes: []
    },

    getters: {
        visibility(state) {
            return state.visibility;
        },

        selectedNote(state) {
            return state.selectedNote;
        },

        notes(state) {
            return state.notes;
        }
    },

    mutations: {
        setVisibility(state, visibility) {
            Vue.set(state, 'visibility', visibility);
        },

        setSelectedNote(state, selectedNote) {
            Vue.set(state, 'selectedNote', selectedNote);
        },

        setNotes(state, notes) {
            Vue.set(state, 'notes', notes);
        },

        addNote(state, note) {
            state.notes.push(note);
        },

        updateNote(state, note) {
            let index = state.notes.findIndex(n => n.id === note.id);
            Vue.set(state.notes, index, note);
        },

        deleteNote(state, noteId) {
            state.notes.splice(state.notes.findIndex(note => note.id === noteId), 1);
        }
    }
}