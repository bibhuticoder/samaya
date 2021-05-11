<template>
  <div class="clock" v-if="visibility">
    <span v-if="language == 'np'">{{ timeTxt | npNumber }}</span>
    <span v-else>{{ timeTxt }}</span>

    <div
      class="p-relative btnEdit ml-2"
      :class="{ '--active': settingsVisibility }"
    >
      <i class="fal fa-ellipsis-v" @click="toggleQuickSettings()"></i>

      <div class="clockQuickSettings" v-if="settingsVisibility">
        <div class="d-flex flex-col">
          <Toggle
            v-model="format"
            :value="format"
            lblChecked="12Hr"
            lblUnchecked="24Hr"
            :width="50"
            :config="{ 12: true, 24: false }"
          />
          <hr />
          <Toggle
            v-model="language"
            :value="language"
            lblChecked="ने"
            lblUnchecked="En"
            :width="45"
            :config="{ en: false, np: true }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/components/Toggle";
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "clock/getField",
  mutationType: "clock/updateField",
});

export default {
  name: "Clock",
  components: { Toggle },
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

    toggleQuickSettings() {
      this.settingsVisibility = !this.settingsVisibility;
    },

    hide() {
      this.settingsVisibility = false;
    },
  },

  computed: {
    ...mapFields(["visibility", "language", "format", "settingsVisibility"]),
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
    //remove parent css
    letter-spacing: normal;
    font-size: 0.7rem;
    font-family: "Mukta", sans-serif;

    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transform: translate(100%, -100%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease-in-out;

    i {
      width: 100%;
      color: rgba($color: white, $alpha: 0.8);
      font-size: 2rem;
    }

    &.--active {
      opacity: 1;
      visibility: visible;
    }

    .clockQuickSettings {
      $background: $white-background;

      display: flex;
      position: absolute;
      left: calc(100% + 0.5rem);
      top: 0;
      padding: 0.5rem;
      background-color: $background;
      color: #373737;
      border-radius: 5px;
      z-index: 1000;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-right-color: $background;
        border-left: 0;
        border-bottom: 0;
        margin-top: -5px;
        margin-left: -10px;
      }
    }
  }

  &:hover .btnEdit {
    opacity: 1;
    visibility: visible;
  }
}
</style>