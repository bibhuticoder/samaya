<template>
  <div>
    <toggle-button
      :value="data"
      color="#82C7EB"
      :sync="true"
      :labels="{ checked: lblChecked, unchecked: lblUnchecked }"
      @input="emitChange()"
      v-model="data"
      :height="20"
      :width="width"
    />
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";

export default {
  name: "Toggle",
  components: { ToggleButton },
  props: {
    value: {
      type: null,
    },

    config: {
      type: Object,
    },

    width: {
      type: Number,
      default: 50,
    },

    lblChecked: {
      type: String,
      default: "On",
    },
    lblUnchecked: {
      type: String,
      default: "Off",
    },
  },
  data() {
    return {
      data: null,
    };
  },

  created() {
    if (this.value) {
      if (this.config) this.data = this.config[this.value];
      else this.data = this.value;
    }
  },

  methods: {
    emitChange() {
      if (this.config) {
        for (let key in this.config) {
          if (this.config[key] == this.data) this.$emit("input", key);
        }
      }
      else this.$emit("input", this.data);
    },
  },

  watch: {
    value: function (newVal, oldVal) {
      if (newVal != oldVal) {
        if (this.config) this.data = this.config[newVal];
        else this.data = newVal;
      }
    },
  },
};
</script>

<style>
</style>