<template>
  <div class="home">
    <Background />
    <div class="notepadWrapper">
      <NotePad />
    </div>

    <div class="calendarWrapper">
      <Calendar />
    </div>

    <div class="settingsWrapper">
      <Settings />
    </div>

    <div class="content">
      <div class="clockWrapper">
        <Clock />
      </div>

      <div class="greetingsWrapper">
        <Greetings />
      </div>

      <div class="focusTodayWrapper">
        <FocusToday />
      </div>

      <div class="quoteWrapper">
        <Quote />
      </div>
    </div>
  </div>
</template>

<script>
import Background from "@/components/Background";
import NotePad from "@/components/NotePad";
import Settings from "@/components/Settings";
import Clock from "@/components/Clock";
import Calendar from "@/components/Calendar";
import Quote from "@/components/Quote";
import Greetings from "@/components/Greetings";
import FocusToday from "@/components/FocusToday";

export default {
  name: "Home",
  data: () => {
    return {
      backgroundImage: null
    };
  },
  components: {
    Settings,
    NotePad,
    Clock,
    Quote,
    Calendar,
    Greetings,
    FocusToday,
    Background
  },

  created() {},

  methods: {}
};
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;

  .notepadWrapper {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .settingsWrapper {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  .calendarWrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }

  .content {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    min-width: 500px;
    z-index: 1;
    text-align: center;

    .clockWrapper {
      // margin-top: 170px;
    }

    .quoteWrapper {
      padding-top: 2.5rem;
      margin-top: 1rem;
      margin: 0 auto;
    }
  }
}
</style>
