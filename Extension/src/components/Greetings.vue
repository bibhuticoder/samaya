<template>
  <div class="greeting">
    {{ greeting }}
    <i class="fal fa-pen btnEdit ml-2" @click="handleEdit()"></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Greetings",
  props: {},
  data() {
    return {};
  },

  created() {
    // this.startClock();
  },

  methods: {
    handleEdit() {
      this.$store.commit("greetings/setName", null);
      this.$router.push("/");
    },
  },

  computed: {
    ...mapGetters("greetings", ["name"]),
    greeting() {
      var prefix = "शुभ";
      var translations = {
        morning: "प्रभात",
        noon: "मध्यान्ह",
        evening: "सन्ध्या",
        night: "रात्री",
      };
      let trans;
      let hourNow = new Date().getHours();
      if (hourNow >= 1 && hourNow <= 12) trans = translations.morning;
      else if (hourNow > 12 && hourNow <= 16) trans = translations.noon;
      else if (hourNow > 16 && hourNow <= 19) trans = translations.evening;
      else if (hourNow > 19 && hourNow <= 24) trans = translations.night;
      return prefix + " " + trans + (this.name ? ", " + this.name : "");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.greeting {
  font-size: 3rem;
  color: white;
  justify-content: center;
  cursor: default;
  @include not-selectable;

  .btnEdit {
    color: rgba($color: white, $alpha: 0.8);
    font-size: 1rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translate(-100%, 0);
    transition: opacity 0.25s ease-in-out;
  }

  &:hover .btnEdit {
    opacity: 1;
    visibility: visible;
    transform: translate(0, -50%);
  }
}
</style>
