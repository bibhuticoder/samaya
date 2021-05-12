<template>
  <div>
    <h1>Notepad Settings</h1>

    <label class="title">Visibility </label>
    <Toggle
      v-model="enable"
      :value="enable"
    />
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import Toggle from "@/components/Toggle";

const { mapFields } = createHelpers({
  getterType: "notepad/getField",
  mutationType: "notepad/updateField",
});

export default {
  name: "SettingsNotepad",
  components: { Toggle },
  data() {
    return {};
  },

  created() {},

  methods: {},

  computed: {
    ...mapFields(["enable"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
