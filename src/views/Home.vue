<template>
  <div class="home" @click="toggleControls()">
    <Background />
    <div class="notepadWrapper">
      <NotePad ref="notepad" />
    </div>

    <div class="calendarWrapper">
      <Calendar ref="calendar" />
    </div>

    <div class="settingsWrapper">
      <Settings ref="settings" />
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
    </div>
    <div class="quoteWrapper">
      <Quote />
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
      backgroundImage: null,
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
    Background,
  },

  created() {
    document.body.addEventListener("click", (e) => {
      if(e.target.className == "home"){
        this.$refs.notepad.hide();
        this.$refs.calendar.hide();
      }
    })
  },

  methods: {
    toggleControls() {
      
    },
  },
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
    top: 50%;
    // bottom: 100px;
    transform: translate(-50%, -50%);
    min-width: 500px;
    z-index: 1;
    text-align: center;
  }
  .quoteWrapper {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
