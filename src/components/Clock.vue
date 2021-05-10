<template>
  <div class="clock" v-if="visibility == 'visible'">
    <span v-if="language == 'np'">{{ timeTxt | npNumber }}</span>
    <span v-else>{{ timeTxt }}</span>

    <i class="fal fa-ellipsis-v btnEdit ml-2"></i>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "clock/getField",
  mutationType: "clock/updateField",
});

export default {
  name: "Clock",
  props: {},
  data() {
    return {
      clockTimer: null,
      timeTxt: null,
    };
  },

  created() {
    this.startClock();
  },

  methods: {
    startClock() {
      this.timeTxt = this.computeClockText();
      this.clockTimer = setInterval(() => {
        this.timeTxt = this.computeClockText();
      }, 1000);
    },

    computeClockText() {
      let now = new Date();
      let hr = now.getHours();
      if (this.format == 12) hr = hr % 12 || 12;
      let mins = now.getMinutes() + "";
      if (mins.length === 1) mins = "0" + mins;
      return hr + ":" + mins;
    },
  },

  computed: {
    ...mapFields(["visibility", "language", "format"]),
  },

  watch: {
    format: function () {
      this.timeTxt = this.computeClockText();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.clock {
  color: white;
  font-size: 8rem;
  font-family: "Rhodium Libre", serif;
  letter-spacing: 1rem;
  text-align: center;
  @include not-selectable;

  .btnEdit {
    color: rgba($color: white, $alpha: 0.8);
    font-size: 2rem;
    cursor: pointer;
    transform: translate(100%, -100%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease-in-out;
  }

  &:hover .btnEdit {
    opacity: 1;
    visibility: visible;
  }
}
</style>