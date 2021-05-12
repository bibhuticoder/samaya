<template>
  <div class="settings">
    <div
      class="toggle"
      :class="{ '--active': visibility }"
      @click="toggleSettings()"
    >
      <i class="fal fa-cog"></i>
    </div>

    <div class="settingsContainer" v-if="visibility">
      <div class="settingsNav">
        <div class="settigsNavBody">
          <div
            class="settingsNavItem"
            :class="{
              '--active':
                selectedMenuItem && menuItem.id === selectedMenuItem.id,
            }"
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            @click="selectMenuItem(menuItem)"
          >
            <span>
              <i class="icon fal" :class="'fa-' + menuItem.icon"></i>
              {{ menuItem.name }}
            </span>
          </div>
        </div>
      </div>

      <div class="settingsDetails">
        <keep-alive>
          <component v-bind:is="selectedMenuItem.component"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsClock from "@/components/Settings/clock.vue";
import SettingsCalendar from "@/components/Settings/calendar.vue";
import SettingsNotepad from "@/components/Settings/notepad.vue";
import SettingsGreetings from "@/components/Settings/greetings.vue";
import SettingsQuote from "@/components/Settings/quote.vue";
import SettingsWallpapers from "@/components/Settings/wallpapers.vue";
import SettingsFocusToday from "@/components/Settings/focusToday.vue";
import SettingsAbout from "@/components/Settings/about.vue";

import { createHelpers } from "vuex-map-fields";

const { mapFields } = createHelpers({
  getterType: "settings/getField",
  mutationType: "settings/updateField",
});

export default {
  name: "Settings",
  components: {
    SettingsClock,
    SettingsCalendar,
    SettingsNotepad,
    SettingsGreetings,
    SettingsQuote,
    SettingsWallpapers,
    SettingsFocusToday,
    SettingsAbout,
  },
  data() {
    return {
      menuItems: [
        {
          id: "clock",
          name: "Clock",
          icon: "clock",
          component: "SettingsClock",
        },

        {
          id: "wallpapers",
          name: "Wallpapers",
          icon: "image-polaroid",
          component: "SettingsWallpapers",
        },

        {
          id: "calendar",
          name: "Calendar",
          icon: "calendar-alt",
          component: "SettingsCalendar",
        },

        {
          id: "notepad",
          name: "Notepad",
          icon: "clipboard-list-check",
          component: "SettingsNotepad",
        },
        
        // {
        //   id: "greeting",
        //   name: "Greetings",
        //   icon: "praying-hands",
        //   component: "SettingsGreetings",
        // },
        // {
        //   id: "focus-today",
        //   name: "Daily Goal",
        //   icon: "check-circle",
        //   component: "SettingsFocusToday",
        // },
        {
          id: "quote",
          name: "Quote",
          icon: "quote-right",
          component: "SettingsQuote",
        },

        {
          id: "about",
          name: "About",
          icon: "info-circle",
          component: "SettingsAbout",
        },
      ],
    };
  },

  created() {
    this.selectedMenuItem = this.menuItems[0];
  },

  methods: {
    toggleSettings() {
      this.visibility = !this.visibility;
    },

    hide() {
      this.visibility = false;
    },

    selectMenuItem(menuItem) {
      this.selectedMenuItem = menuItem;
    },
  },

  computed: {
    ...mapFields(["visibility", "selectedMenuItem"]),
  },
};
</script>

<style lang="scss">
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
    font-size: 0.9rem;
  }

  span {
    font-size: 0.7rem;
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
  height: 300px;
  width: 450px;
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
      margin-right: 0.25rem;
      text-align: left;
      font-size: 0.8rem;
      cursor: pointer;
      @include transition-fast;
      @include not-selectable;

      &.--active {
        background-color: rgba(white, 0.5);
      }

      span {
        flex: 1;
        max-width: 90px;
        align-self: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .icon {
        margin-right: 0.25rem;
      }
    }
  }

  .settingsDetails {
    position: relative;
    flex: 1;
    background-color: rgba(white, 0.5);
    border-radius: 5px;
    padding: 0.5rem;

    h1 {
      margin-top: 0;
      font-size: 1rem;
      color: #373737;
    }

    label.title {
      font-size: 0.8rem;
    }

    label,
    p {
      font-size: 0.7rem;
    }

    textarea {
      font-size: 0.8rem;
      color: #373737;
      outline: none;
    }

    a {
      color: #373737;
    }

    .note {
      margin: 0;
      background-color: lightgrey;
      border-radius: 0.25rem;
      padding: 0.5rem;
    }

    .formGroup {
      display: flex;

      input {
        align-self: center;
        margin: 0;
        margin-right: 0.25rem;
      }

      label {
        align-self: center;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
