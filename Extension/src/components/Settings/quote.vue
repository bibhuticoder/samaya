<template>
  <div class="d-flex flex-col h-100">
    <h1>Quote Settings</h1>

    <div class="d-flex flex-col justify-content-between flex-1">
      <div>
        <label class="title">Visibility </label>
        <Toggle v-model="visibility" :value="visibility" />
      </div>

      <p class="note">
        The quotes are fetched from
        <a href="https://bibhuticoder.github.io/samaya-quotes-api/" target="_blank" rel="noopener noreferrer">Samaya Quotes API</a>. If you want to contribute, please visit the
        <a href="https://bibhuticoder.github.io/samaya/#contribution" target="_blank" rel="noopener noreferrer"
          >Contribution Guide</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import Toggle from "@/components/Toggle";

const { mapFields } = createHelpers({
  getterType: "quote/getField",
  mutationType: "quote/updateField",
});

export default {
  name: "SettingsQuote",
  components: { Toggle },
  data() {
    return {};
  },

  created() {},

  methods: {},

  computed: {
    ...mapFields(["visibility"]),
  },
};
</script>
