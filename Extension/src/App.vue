<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "wallpapers/getField",
  mutationType: "wallpapers/updateField",
});

export default {
  created() {
    // keep all store updates here

    this.collections = "S7cHx-uehAo,41305491,8878770,";
    this.featuredImages = [
      "g30P1zcOzXo",
      "x39cWh7xIYI",
      "ntBPI4OnXZ0",
      "b_IcUohrtUI",
      "59Al83Zjtf8",
      "JV78PVf3gGI",
      "CKA5ViRKHRU",
      "w5WFYzOyx9w",
      "_5-GEPZoza4",
      "-0Y22MmbOPs",
      "7bMj9_RycbI",
      "zRWq-7SWVSU",
    ];
  },

  computed: {
    ...mapFields(["collections", "featuredImages"]),
  },
};
</script>


<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Mukta", sans-serif;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
