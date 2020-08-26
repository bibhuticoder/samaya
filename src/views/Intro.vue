<template>
  <div class="intro">
    <div class="inputContainer">
      <p class="question">तिम्रो नाम के हो</p>
      <input
        type="text"
        class="inputName"
        @keyup.enter="(e) => handleKeyUp(e.target.value)"
        spellcheck="false"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Intro",

  created() {
    if (this.name) this.$router.push("/home");
  },

  methods: {
    handleKeyUp(name) {
      this.$store.commit("greetings/setName", name);
      this.$router.push("/home");
    }
  },

  computed: {
    ...mapGetters("greetings", ["name"])
  }
};
</script>

<style lang="scss" scoped>
.inputContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  .question {
    font-size: 3rem;
    margin-bottom: 0;
  }

  .inputName {
    padding: 0.25rem 0.5rem;
    border: none;
    border-bottom: 1.5px solid white;
    outline: none;
    font-size: 2rem;
    text-align: center;
    background-color: transparent;
    color: white;
  }
}

// ::-webkit-input-placeholder {
//   /* Edge */
//   color: white;
// }

// :-ms-input-placeholder {
//   /* Internet Explorer 10-11 */
//   color: white;
// }

// ::placeholder {
//   color: white;
// }
</style>
