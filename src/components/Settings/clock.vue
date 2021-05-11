<template>
  <div>
    <h1>Clock Settings</h1>

    <div class="d-flex justify-content-around">
      <div>
        <label class="title">Visibility</label>
        <Toggle
          v-model="visibility"
          :value="visibility"
        />
      </div>

      <div>
        <label class="title">Format</label>
        <Toggle
          v-model="format"
          :value="format"
          lblChecked="12Hr"
          lblUnchecked="24Hr"
          :width="55"
          :config="{ 12: true, 24: false }"
        />
      </div>

      <div>
        <label class="title">Language</label>
        <Toggle
          v-model="language"
          :value="language"
          lblChecked="ने"
          lblUnchecked="En"
          :width="45"
          :config="{ 'en': false, 'np': true }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import Toggle from "@/components/Toggle";

const { mapFields } = createHelpers({
  getterType: "clock/getField",
  mutationType: "clock/updateField",
});

export default {
  name: "SettingsClock",
  components: { Toggle },
  computed: {
    ...mapFields(["visibility", "language", "format"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
