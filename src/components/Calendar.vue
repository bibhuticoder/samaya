<template>
  <div class="calendarContainer">
    <div class="miniCalendar" :class="{'--active': visibility}" @click="toggleFullCal()">
      <div class="date">
        <div class="dayInMonth">{{calData.dayInMonth}}</div>
        <div class="month">{{calData.month}}</div>
      </div>
      <div class="dayInWeek">{{calData.dayInWeek}}</div>
    </div>

    <div class="fullCalendar" v-if="visibility">
      <div class="toolbar">
        <div class="arrow --left">
          <i class="fal fa-chevron-left"></i>
        </div>
        <div class="monthName">{{calData.month}}</div>
        <div class="arrow --right">
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
            <td v-for="(day, j) in week" :key="j" :class="{'--today': day == calData.dayInMonthEn}">
              <span>{{day | npNumber}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import adbs from "ad-bs-converter";
import _ from "lodash";

export default {
  name: "Calendar",
  props: {},
  data() {
    return {
      showFullCal: false,
      fullCal: null,
      fullCalMonth: null
    };
  },

  created() {
    this.fullCalMonth = this.calData.monthEn;
    this.computeFullCal();
  },

  methods: {
    computeClockText() {
      let now = new Date();
      let hr = now.getHours();
      if (this.clockFormat == 12) hr = hr % 12 || 12;
      let mins = now.getMinutes() + "";
      if (mins.length === 1) mins = "0" + mins;
      return hr + ":" + mins;
    },

    computeFullCal() {
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
      this.$store.commit("calendar/setVisibility", !this.visibility);
    },

    getFirstDayOfMonth(date, dayofWeek) {
      while (date > 1) {
        dayofWeek--;
        if (dayofWeek < 0) dayofWeek = 6;
        date--;
      }
      return dayofWeek;
    }
  },

  computed: {
    ...mapGetters("calendar", ["visibility"]),

    calData() {
      let now = new Date();
      let date =
        now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
      let bsData = adbs.ad2bs(date);

      return {
        month: bsData.ne.strMonth,
        monthEn: bsData.en.month,
        dayInMonth: bsData.ne.day,
        dayInMonthEn: bsData.en.day,
        dayInWeek: bsData.ne.strDayOfWeek,
        dayOfWeekEn: bsData.en.dayOfWeek,
        totalDaysInMonthEn: bsData.en.totalDaysInMonth
      };
    }
  }
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
    background-color: $white-background;
    color: #373737;
    border-radius: 5px;
    text-align: center;

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
      }
    }

    .calTable {
      width: 100%;
      font-size: 0.8rem;
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
