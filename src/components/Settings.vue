<template>
  <div class="settings">
    <div class="toggle" :class="{'--active': visibility}" @click="toggleSettings()">
      <i class="fal fa-cogs"></i>
    </div>

    <div class="settingsContainer" v-if="visibility">
      <div class="settingsNav">
        <div class="settigsNavBody">
          <div
            class="settingsNavItem"
            :class="{'--active': selectedMenuItem && menuItem.id === selectedMenuItem.id}"
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            @click="selectMenuItem(menuItem)"
          >
            <span>{{menuItem.name}}</span>
          </div>
        </div>
      </div>

      <div class="settingsDetails">
        <div v-if="selectedMenuItem.id === 'clock'">
          <h3>Clock</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { v1 as uuid } from "uuid";
import moment from "moment";
// import vueCustomScrollbar from "vue-custom-scrollbar";

export default {
  name: "Settings",
  components: {
    // vueCustomScrollbar
  },
  data() {
    return {
      menuItems: [
        { id: "clock", name: "Clock" },
        { id: "notepad", name: "Notepad" },
        { id: "calendar", name: "Calendar" },
        { id: "greeting", name: "Greeting" },
        { id: "focus-today", name: "Focus Today" },
        { id: "quote", name: "Quote" },
        { id: "photographs", name: "Photographs" }
      ]
    };
  },

  created() {},

  methods: {
    toggleSettings() {
      this.$store.commit("settings/setVisibility", !this.visibility);
    },

    selectMenuItem(menuItem) {
      this.$store.commit("settings/setSelectedMenuItem", menuItem);
    }
  },

  computed: {
    ...mapGetters("settings", ["visibility", "selectedMenuItem"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toggle {
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  @include transition;
  @include not-selectable;

  i {
    font-size: 1.2rem;
  }

  span {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: rgba($color: white, $alpha: 0.1);
  }

  &.--active {
    background-color: rgba($color: white, $alpha: 0.1);
  }
}

.settingsContainer {
  $background: $white-background;

  display: flex;
  position: absolute;
  left: calc(100% + 10px);
  bottom: 0;
  height: 400px;
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
    bottom: 10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: $background;
    border-left: 0;
    border-bottom: 0;
    margin-top: -5px;
    margin-left: -10px;
  }

  .settingsNav {
    display: flex;
    flex-direction: column;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    .settingsNavItem {
      display: flex;
      justify-content: space-between;
      width: 120px;
      padding: 0.25rem 0.5rem;
      padding-right: 0.25rem;
      text-align: left;
      font-size: 0.9rem;
      border-radius: 5px;
      cursor: pointer;
      @include transition;
      @include not-selectable;

      &.--active {
        background-color: rgba(white, 0.5);
        color: $blue;
      }

      span {
        flex: 1;
        max-width: 90px;
        align-self: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .settingsDetails {
    position: relative;
    flex: 1;
    background-color: rgba(white, 0.5);
    // height: 300px;
    border-radius: 5px;
  }
}
</style>
