<template>
  <div class="focusToday">
    <div v-if="focus.value">
      <p class="focusTodayTitle">आज</p>
      <div class="checkboxWrapper">
        <CheckBox :label="focus.value" @cancelled="handleCancel()" @refreshed="handleRefresh()" />
      </div>
    </div>
    <div v-else>
      <p class="question">{{question}}</p>
      <input
        type="text"
        class="answer"
        @keyup.enter="(e) => focus.value = e.target.value"
        spellcheck="false"
      />
    </div>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox";
import { mapGetters } from "vuex";

export default {
  name: "Calendar",
  components: { CheckBox },
  props: {},
  data() {
    return {
      question: "आजको लागि तिम्रो मुख्य काम के हो?",
      focus: {
        value: null,
        done: false
      }
    };
  },

  created() {
    // this.startClock();
  },

  methods: {
    handleCancel() {
      this.focus.value = null;
    },
    handleRefresh() {
      this.focus.value = null;
    }
  },

  computed: {
    ...mapGetters("settings", ["clockFormat"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.focusToday {
  color: white;

  .focusTodayTitle {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  .checkboxWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .question {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    color: white;
  }

  .answer {
    // margin-top: -0.5rem;
    background-color: transparent;
    border: none;
    border-bottom: 1.5px solid white;
    outline: none;
    color: white;
    font-size: 2rem;
    text-align: center;
  }
}
</style>
