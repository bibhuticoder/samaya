<template>
  <div class="focusToday">
    <div v-if="focus.value">
      <p class="focusTodayTitle">आज</p>
      <div class="checkboxWrapper">
        <CheckBox
          :label="focus.value"
          @cancelled="handleCancel()"
          @refreshed="handleRefresh()"
        />
      </div>
    </div>
    <div v-else>
      <p class="question">{{ question }}</p>
      <input
        type="text"
        class="answer"
        @keyup.enter="handleFocusChange"
        spellcheck="false"
      />
    </div>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox";
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "focusToday/getField",
  mutationType: "focusToday/updateField",
});

export default {
  name: "FocusToday",
  components: { CheckBox },
  props: {},
  data() {
    return {
      question: "आजको लागि तिम्रो मुख्य काम के हो ?",
    };
  },

  created() {},

  methods: {
    handleCancel() {
      this.focus = { ...this.focus, value: null };
    },
    handleRefresh() {
      this.focus = { ...this.focus, value: null };
    },

    handleFocusChange(e) {
      this.focus = { ...this.focus, value: e.target.value };
    },
  },

  computed: {
    ...mapFields(["focusToday", "focus"]),
  },
};
</script>

<style lang="scss" scoped>
.focusToday {
  color: white;
  @include not-selectable;

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
