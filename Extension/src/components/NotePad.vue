<template>
  <div class="notepad" v-if="enable">
    <div class="toggle" :class="{ '--active': visibility }" @click="toggle()">
      <i
        class="fal"
        :class="{
          'fa-clipboard-list-check': visibility,
          'fa-clipboard-list': !visibility,
        }"
      ></i>
    </div>

    <div class="notepadContainer" v-if="visibility">
      <div class="notepadNav">
        <div class="notepadNavHeader" @click="addNote()">
          <i class="fal fa-plus"></i>
          New Note
        </div>
        <vue-custom-scrollbar>
          <div class="notepadNavBody">
            <div
              class="notepadNavItem"
              :class="{
                '--active': selectedNote && note.id === selectedNote.id,
              }"
              v-for="note in notesList"
              :key="note.id"
              @click="selectNote(note)"
            >
              <span>{{ note.title || "titleless 😒" }}</span>
              <div class="btnTrash" @click="deleteNote(note.id)">
                <i class="fal fa-times"></i>
              </div>
            </div>
          </div>
        </vue-custom-scrollbar>
      </div>

      <div class="notepadEditor">
        <div v-if="notes.length">
          <div class="metadata">
            <i class="fal fa-clock"></i>
            <span>{{ noteWrittenAt }}</span>
          </div>
          <vue-editor
            v-model="editorText"
            :editorToolbar="customToolbar"
            @text-change="computeNoteTitle()"
          ></vue-editor>
        </div>

        <div v-else class="notesNotFound">
          <i class="fal fa-meh meh"></i>
          <span>No notes found</span>
          <button class="btn" @click="addNote()">Add new Note</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { v1 as uuid } from "uuid";
import { VueEditor } from "vue2-editor";
import moment from "moment";
import vueCustomScrollbar from "vue-custom-scrollbar";

import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "notepad/getField",
  mutationType: "notepad/updateField",
});

export default {
  name: "NotePad",
  components: { VueEditor, vueCustomScrollbar },
  data() {
    return {
      showNotes: false,
      editorText: null,
      customToolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["code-block"],
        [{ color: [] }, { background: [] }],
      ],
    };
  },

  created() {
    if (!this.notes.length) {
      this.addNote();
      this.selectNote(this.notes[0]);
    } else this.editorText = this.selectedNote.text;
  },

  methods: {
    hide() {
      this.visibility = false;
    },

    toggle() {
      this.visibility = !this.visibility;
    },

    selectNote(note) {
      this.selectedNote = note;
      this.editorText = this.selectedNote.text;
    },

    addNote() {
      if (this.notes.length >= 20) alert("Ohhh..that's too much");
      let now = Date.now();
      let note = {
        id: uuid(),
        title: "New note " + (this.notes.length + 1),
        text: "<h1>" + "New note " + (this.notes.length + 1) + "</h1>",
        createdAt: now,
        upadatedAt: now,
      };
      this.notes.push(note);
      this.selectedNote = note;
      // this.$store.commit("notepad/addNote", note);
      // this.$store.commit("notepad/setSelectedNote", note);
    },

    deleteNote(id) {
      // this.$store.commit("notepad/deleteNote", id);
      this.notes.splice(
        this.notes.findIndex((note) => note.id === id),
        1
      );
    },

    computeNoteTitle() {
      let doc = new DOMParser().parseFromString(
        this.editorText.slice(0, 100),
        "text/html"
      );
      let now = Date.now();
      let note = {
        ...this.selectedNote,
        text: this.editorText,
        title: doc.body.children.length
          ? doc.body.children[0].textContent
          : this.selectedNote.title,
        updatedAt: now,
      };
      let index = this.notes.findIndex((n) => n.id === note.id);
      Vue.set(this.notes, index, note);
      // this.$store.commit("notepad/setSelectedNote", this.selectedNote);
    },
  },

  computed: {
    ...mapFields(["enable", "visibility", "selectedNote", "notes"]),

    notesList() {
      return this.notes.slice().reverse();
    },

    noteWrittenAt() {
      if (this.selectedNote)
        return moment(this.selectedNote.createdAt, "x").fromNow();
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  @include transition;
  @include not-selectable;

  i {
    font-size: 1rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 100;
  }

  &:hover {
    background-color: rgba($color: white, $alpha: 0.1);
  }

  &.--active {
    background-color: rgba($color: white, $alpha: 0.1);
  }
}

.notepadContainer {
  $background: $white-background;

  display: flex;
  position: absolute;
  left: calc(100% + 10px);
  top: 0;
  height: 300px;
  width: 600px;
  padding: 0.25rem;
  background-color: $background;
  color: #373737;
  border-radius: 5px;
  z-index: 1000;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: $background;
    border-left: 0;
    border-bottom: 0;
    margin-top: -5px;
    margin-left: -10px;
  }

  .notepadNav {
    display: flex;
    flex-direction: column;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    .notepadNavHeader {
      width: 100px;
      padding: 0.25rem 0.5rem;
      text-align: left;
      font-size: 0.8rem;
      cursor: pointer;
      color: $black;
      @include not-selectable;
      font-weight: bold;

      i {
        margin-right: 5px;
      }
    }

    .notepadNavItem {
      display: flex;
      justify-content: space-between;
      width: 100px;
      padding: 0.15rem 0.5rem;
      padding-right: 0.25rem;
      text-align: left;
      font-size: 0.8rem;
      border-radius: 2.5px;
      cursor: default;
      // @include transition-fast;
      @include not-selectable;

      &.--active {
        background-color: rgba(white, 0.5);

        .btnTrash {
          opacity: 1;
        }
      }

      &:hover .btnTrash {
        opacity: 1;
      }

      span {
        flex: 1;
        max-width: 90px;
        align-self: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .btnTrash {
        $size: 1rem;
        align-self: center;
        width: $size;
        height: $size;
        line-height: $size;
        margin-left: 5px;
        font-size: 0.7rem;
        text-align: center;
        opacity: 0;
        cursor: pointer;
        @include transition-fast;

        &:hover {
          color: $red;
        }
      }
    }
  }

  .notepadEditor {
    position: relative;
    flex: 1;
    background-color: rgba(white, 0.5);
    height: 300px;
    border-radius: 5px;

    // Customize Quill Editor
    ::v-deep .ql-toolbar {
      border: none;
      padding: 0;
      padding-right: 0;
      text-align: right;

      .ql-formats {
        margin-right: 0;
        margin-bottom: 5px;

        .ql-header {
          span[role="button"] {
            outline: none;
          }
          svg {
            display: none;
          }
        }
      }

      button,
      span[role="button"] {
        svg {
          width: 1rem !important;
          height: 1rem !important;
        }
      }
    }
    ::v-deep #quill-container {
      border: none;

      .ql-editor {
        padding: 0.25rem;
        font-size: 0.8rem;
        overflow: auto;
        height: calc(300px - 30px);
        width: calc(600px - 120px);
      }
    }

    .metadata {
      display: flex;
      position: absolute;
      top: 3px;
      left: 0;
      font-size: 0.8rem;
      padding-left: 0.25rem;
      color: gray;

      i {
        align-self: center;
        margin-right: 5px;
      }

      span {
        align-self: center;
      }
    }
  }
}

.notesNotFound {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  color: $black-3;
  text-align: center;

  .meh {
    font-size: 3rem;
  }

  .btn {
    width: 120px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: rgba($blue, 0.7);
    outline: none;
    cursor: pointer;
  }
}
</style>
