<template>
<div>
<h1>Photographs Settings</h1>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SettingsClock",
  components: {
  },
  data() {
    return {
      menuItems: [
        { id: "clock", name: "Clock", icon: 'clock' },
        { id: "notepad", name: "Notepad", icon: 'clipboard-list-check' },
        { id: "calendar", name: "Calendar", icon: 'calendar-alt' },
        { id: "greeting", name: "Greeting", icon: 'praying-hands' },
        { id: "focus-today", name: "Focus Today", icon: 'check-circle' },
        { id: "quote", name: "Quote", icon: 'quote-right' },
        { id: "photographs", name: "Photographs", icon: 'image-polaroid' },
      ],
    };
  },

  created() {},

  methods: {
    toggleSettings() {
      this.$store.commit("settings/setVisibility", !this.visibility);
    },

    hide() {
      this.$store.commit("settings/setVisibility", false);
    },

    selectMenuItem(menuItem) {
      this.$store.commit("settings/setSelectedMenuItem", menuItem);
    },
  },

  computed: {
    ...mapGetters("settings", ["visibility", "selectedMenuItem"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
