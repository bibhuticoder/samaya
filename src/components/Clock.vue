<template>
  <div class="clock">{{timeTxt | npNumber}}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Clock",
  props: {},
  data() {
    return {
      clockTimer: null,
      timeTxt: null
    };
  },

  created() {
    this.startClock();
    this.$store.commit("clock/setFormat", 24);
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
    }
  },

  computed: {
    ...mapGetters("clock", ["format"])

    // timeTxt() {
    //   let now = new Date();
    //   let hr = now.getHours();
    //   if (this.clockFormat == 12) hr = hr % 12 || 12;
    //   let mins = now.getMinutes() + "";
    //   if (mins.length === 1) mins = "0" + mins;
    //   return hr + ":" + mins;
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.clock {
  color: white;
  font-size: 8rem;
  font-family: "Rhodium Libre", serif;
  letter-spacing: 1rem;
  @include not-selectable;
}
</style>
Zas09229