<template>
  <div class="greeting">
    <span>{{ greeting }}</span>
    <div class="btnEdit" @click="handleEdit()">
      <i class="fal fa-pen"></i>
    </div>
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
      // debugger;
      return prefix + " " + trans + (this.name ? ", " + this.name : "");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.greeting {
  display: flex;
  margin-top: -3rem;
  font-size: 3rem;
  color: white;
  justify-content: center;
  cursor: default;

  span {
    align-self: center;
  }

  .btnEdit {
    $size: 30px;
    height: $size;
    width: $size;
    align-self: center;
    margin-left: 10px;
    color: rgba($color: white, $alpha: 0.9);
    font-size: 1rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    @include transition;
  }

  &:hover .btnEdit {
    opacity: 1;
    visibility: visible;
  }
}
</style>
