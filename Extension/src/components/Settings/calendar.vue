<template>
  <div>
    <h1>Calendar Settings</h1>

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
  getterType: "calendar/getField",
  mutationType: "calendar/updateField",
});

export default {
  name: "SettingsCalendar",
  components: { Toggle },

  computed: {
    ...mapFields(["enable"]),
  },
};
</script>
