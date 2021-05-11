<template>
  <div class="calendarContainer" v-if="enable">
    <div
      v-if="calDataMinimal"
      class="miniCalendar"
      :class="{ '--active': visibility }"
      @click="toggleFullCal()"
    >
      <div class="date">
        <div class="dayInMonth">{{ calDataMinimal.dayInMonth }}</div>
        <div class="month">{{ calDataMinimal.month }}</div>
      </div>
      <div class="dayInWeek">{{ calDataMinimal.dayInWeek }}</div>
    </div>

    <div class="fullCalendar" v-if="visibility">
      <div class="toolbar">
        <div class="arrow --left" @click="changeMonth(-1)">
          <i class="fal fa-chevron-left"></i>
        </div>
        <div class="monthName">{{ calData.month }}, {{ calData.year }}</div>
        <div class="arrow --right" @click="changeMonth(1)">
          <i class="fal fa-chevron-right"></i>
        </div>
      </div>

      <table class="calTable">
        <thead>
          <th>आइत</th>
          <th>सोम</th>
          <th>मंगल</th>
          <th>बुध</th>
          <th>बिहि</th>
          <th>शुक्र</th>
          <th>शनि</th>
        </thead>
        <tbody>
          <tr v-for="(week, i) in fullCal" :key="i">
            <td
              v-for="(day, j) in week"
              :key="j"
              :class="{
                '--today': day == calData.dayInMonthEn && calData.today,
              }"
            >
              <span>{{ day | npNumber }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import adbs from "ad-bs-converter";
import _ from "lodash";
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "calendar/getField",
  mutationType: "calendar/updateField",
});

export default {
  name: "Calendar",
  props: {},
  data() {
    return {
      showFullCal: false,
      fullCal: null,

      calDataMinimal: null, // internal use
      calData: null, // to display
      year: null,
      month: null,
      day: null,
    };
  },

  created() {
    this.computeFullCal();
  },

  methods: {
    computeFullCal() {
      if (this.year == null && this.month == null) {
        let now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.day = now.getDate();
      }
      let bsData = adbs.ad2bs(
        this.year + "/" + (this.month + 1) + "/" + (this.day || 1)
      );
      this.calData = {
        year: bsData.ne.year,
        month: bsData.ne.strMonth,
        monthEn: bsData.en.month,
        dayInMonth: bsData.ne.day,
        dayInMonthEn: bsData.en.day,
        today: this.day,
        dayInWeek: bsData.ne.strDayOfWeek,
        dayOfWeekEn: bsData.en.dayOfWeek,
        totalDaysInMonthEn: bsData.en.totalDaysInMonth,
      };

      // only first-time computation
      if (!this.calDataMinimal) {
        this.calDataMinimal = JSON.parse(JSON.stringify(this.calData));
      }

      let firstDay = this.getFirstDayOfMonth(
        this.calData.dayInMonthEn,
        this.calData.dayOfWeekEn + 1
      );
      let linearCal = [];
      for (let i = 1; i < firstDay; i++) linearCal.push(null);
      for (let i = 1; i <= this.calData.totalDaysInMonthEn; i++)
        linearCal.push(i);
      this.fullCal = _.chunk(linearCal, 7);
    },

    toggleFullCal() {
      this.visibility = !this.visibility;
    },

    hide() {
      this.visibility = false;
      this.reset();
    },

    getFirstDayOfMonth(date, dayofWeek) {
      while (date > 1) {
        dayofWeek--;
        if (dayofWeek === 0) dayofWeek = 7;
        date--;
      }
      return dayofWeek;
    },

    changeMonth(by) {
      this.month = this.month + by;

      if (this.month > 11) {
        this.year++;
        this.month = 0;
      } else if (this.month < 0) {
        this.year--;
        this.month = 11;
      }

      let now = new Date();
      if (now.getFullYear() == this.year && now.getMonth() == this.month)
        this.day = now.getDate();
      else this.day = null;

      this.computeFullCal();
    },

    reset() {
      this.year = null;
      this.month = null;
      this.computeFullCal();
    },
  },

  computed: {
    ...mapFields(["visibility", "enable"]),
  },
};
</script>

<style lang="scss" scoped>
.calendarContainer {
  position: relative;
  .miniCalendar {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 0.9rem;
    font-weight: 100;
    cursor: pointer;
    min-width: 40px;
    min-height: 40px;
    padding: 0.25rem 1rem;
    border-radius: 3px;
    @include transition;
    @include not-selectable;

    .date {
      display: flex;
      justify-content: space-between;

      .dayInMonth {
        margin-right: 10px;
      }
    }

    .dayInWeek {
      text-align: center;
    }

    &:hover {
      background-color: rgba($color: white, $alpha: 0.1);
    }

    &.--active {
      background-color: rgba($color: white, $alpha: 0.1);
    }
  }

  .fullCalendar {
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    height: auto;
    width: 250px;
    padding: 0.25rem;
    background-color: $white-background;
    color: #373737;
    border-radius: 5px;
    text-align: center;
    cursor: default;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 10px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: $white-background;
      border-top: 0;
      margin-left: -10px;
      margin-top: -10px;
    }

    .toolbar {
      display: flex;
      padding: 0.25rem 0.5rem;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;

      .arrow {
        cursor: pointer;
        padding: 0 0.2rem;
        font-size: 0.9rem;
      }

      .monthName {
        flex: 1;
        @include not-selectable;
        font-size: 0.9rem;
      }
    }

    .calTable {
      width: 100%;
      font-size: 0.75rem;
      th {
        padding: 0;
        font-weight: normal;
      }

      td {
        width: 25px;
        height: 25px;

        &.--today {
          span {
            display: block;
            background-color: white;
            border-radius: 3px;
          }
        }
      }
    }
  }
}
</style>
