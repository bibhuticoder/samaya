<template>
  <div class="d-flex flex-col h-100">
    <div class="d-flex flex-col justify-content-between h-100">
      <h1 class="text-center">
        Samaya
        <span class="text-vsm">v1.0.0</span>
      </h1>

      <p class="text-center">
        Friendly personal dashboard featuring Nepali Calendar, Notes, Daily
        Nepali quotes, Nepali wallpapers.
        <br />
        <span class="text-muted font-weight-light text-italic"
          >Inspired by Momentum</span
        >
      </p>

      <p class="note text-center">
        Samaya is an open source endeavour. Anyone interested is welcome to
        support this project by any means possible.
        <br />
        Please visit our
        <a href="http://" target="_blank" rel="noopener noreferrer"
          >Contribution Guide
        </a>
        for more details.
      </p>

      <p class="text-center text-italic flex-1 mb-0">
        Made with <i class="fas fa-heart" style="color: #e53935"></i> by
        <a
          href="https://github.com/bibhuticoder"
          target="_blank"
          rel="noopener noreferrer"
          >Bibhuti</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";

const { mapFields } = createHelpers({
  getterType: "quote/getField",
  mutationType: "quote/updateField",
});

export default {
  name: "SettingsQuote",
  components: {},
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
