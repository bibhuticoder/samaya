<template>
  <div>
    <h1>Clock Settings</h1>

    <label class="title">Visibility</label>
    <div class="formGroup">
      <input
        type="radio"
        name="clock-visibility"
        id="clock-visibility-visible"
        v-model="visibility"
        value="visible"
      />
      <label for="clock-visibility-visible">Visible</label>
    </div>

    <div class="formGroup">
      <input
        type="radio"
        name="clock-visibility"
        id="clock-visibility-hidden"
        v-model="visibility"
        value="hidden"
      />
      <label for="clock-visibility-hidden">Hidden</label>
    </div>

    <label class="title">Format</label>
    <div class="formGroup">
      <input type="radio" name="clock-format" id="clock-format-24" v-model="format" value="24" />
      <label for="clock-format-24">24 Hr</label>
    </div>

    <div class="formGroup">
      <input type="radio" name="clock-format" id="clock-format-12" v-model="format" value="12" />
      <label for="clock-format-12">12 Hr</label>
    </div>

    <label class="title">Language</label>
    <div class="formGroup">
      <input type="radio" name="clock-lang" id="clock-lang-en" v-model="language" value="en" />
      <label for="clock-lang-en">English</label>
    </div>

    <div class="formGroup">
      <input type="radio" name="clock-lang" id="clock-lang-np" v-model="language" value="np" />
      <label for="clock-lang-np">नेपाली </label>
    </div>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';

const { mapFields } = createHelpers({
  getterType: 'clock/getField',
  mutationType: 'clock/updateField',
});

export default {
  name: "SettingsClock",
  computed: {
    ...mapFields(["visibility", "language", "format"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
