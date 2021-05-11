<template>
  <div class="intro">
    <div class="inputContainer">
      <p class="question mt-0">तिम्रो नाम के हो</p>
      <input
        type="text"
        class="inputName"
        @keyup="handleKeyUp"
        v-model="inputName"
        spellcheck="false"
      />

      <div class="w-100 d-flex justify-content-between">
        <div class="suggestionsList d-flex flex-col">
          <div class="suggestionsListItem text-muted" v-if="loading">
            <i class="fas fa-spinner fa-spin"></i>
          </div>
          <template v-if="suggestions && suggestions.length && nepaliUnicode">
            <div
              class="suggestionsListItem"
              v-for="(suggestion, index) in suggestions"
              :key="index"
              @click="selectSuggestion(suggestion)"
            >
              {{ suggestion }}
            </div>
          </template>
        </div>

        <Toggle
          v-model="nepaliUnicode"
          :value="nepaliUnicode"
          lblChecked="ने"
          lblUnchecked="En"
          :width="40"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Toggle from "@/components/Toggle";
import axios from "axios";

export default {
  name: "Intro",
  components: { Toggle },
  data() {
    return {
      nepaliUnicode: true,
      suggestions: null,
      inputName: null,

      loading: false,
      cancelTokenSource: null,
    };
  },

  created() {
    // if (this.name) this.$router.push("/home");
  },

  methods: {
    handleKeyUp(e) {
      if (e.code == "Enter") {
        this.inputName =
          this.suggestions && this.suggestions.length
            ? this.suggestions[0]
            : this.inputName;
        this.setNameAndProceed();
      }

      if (this.nepaliUnicode) this.getSuggestions();
    },

    setNameAndProceed() {
      this.$store.commit("greetings/setName", this.inputName);
      this.$router.push("/home");
    },

    selectSuggestion(suggestion) {
      this.inputName = suggestion;
      this.setNameAndProceed();
    },

    getSuggestions() {
      if (!this.inputName) {
        this.suggestions = [];
        return;
      }

      if (this.cancelTokenSource) this.cancelTokenSource.cancel();
      this.loading = true;
      this.generateCancelTokenSource();
      let url = `https://inputtools.google.com/request?text=${this.inputName}&itc=ne-t-i0-und&num=3&cp=0&cs=1&ie=utf-8&oe=utf-8`;
      axios
        .post(url, null, { cancelToken: this.cancelTokenSource.token })
        .then((resp) => {
          if (resp.data[0] == "SUCCESS") this.suggestions = resp.data[1][0][1];
          this.loading = false;
        })
        .catch((e) => {});
    },

    generateCancelTokenSource() {
      const CancelToken = axios.CancelToken;
      this.cancelTokenSource = CancelToken.source();
    },
  },

  computed: {
    ...mapGetters("greetings", ["name"]),
  },
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

.suggestionsList {
  margin-right: -50px;
  height: 83px;
  width: 100%;
  .suggestionsListItem {
    padding: 0.15rem 1rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: #373737;
    border-bottom: 1px solid white;
    background-color: rgba(white, 0.8);
    max-width: 50px;
    margin: 0 auto;
    min-width: 50px;
  }
}
</style>
