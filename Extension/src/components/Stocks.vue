<template>
  <div class="stocksContainer">
    <div class="stocks" v-if="visibility">
      <span class="--text-sm">
        <i class="icon fal fa-clock mr-2"></i>
        Updated {{ lastUpdatedAt }}
      </span>

      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>min</th>
            <th>max</th>
            <th>close</th>
            <th>diff</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stock, index) in myStocksData" :key="index">
            <td>{{ stock.company.code }}</td>
            <td class="--right">{{ stock.price.min }}</td>
            <td class="--right">{{ stock.price.max }}</td>
            <td class="--right">{{ stock.price.close }}</td>
            <td
              class="--right"
              :class="{
                '--green': stock.price.diff > 0,
                '--red': stock.price.diff < 0,
              }"
            >
              {{ stock.price.diff }}
              <i
                class="fal"
                :class="'fa-angle-' + (stock.price.diff > 0 ? 'up' : 'down')"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import moment from "moment";

const { mapFields } = createHelpers({
  getterType: "stocks/getField",
  mutationType: "stocks/updateField",
});

export default {
  name: "Stocks",
  props: {},
  data() {
    return {
      lastUpdatedAt: null,
      latestStocksData: null,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      fetch("https://the-value-crew.github.io/nepse-api/data/info.json")
        .then((r) => r.json())
        .then((infoData) => {
          this.lastUpdatedAt = moment
            .utc(infoData.lastUpdatedAt, "YYYY-MM-DD HH:mm:ss")
            .fromNow();
          fetch(
            "https://the-value-crew.github.io/nepse-api/data/date/latest.json"
          )
            .then((r) => r.json())
            .then((latestData) => {
              this.latestStocksData = latestData.data;
            });
        });
    },
  },

  computed: {
    ...mapFields(["watchList", "visibility"]),

    myStocksData() {
      let arr = [];
      if (this.latestStocksData)
        this.latestStocksData.forEach((data) => {
          if (data.company.code && this.watchList.includes(data.company.code))
            arr.push(data);
        });
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
.stocksContainer {
  position: relative;
  .stocks {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.15rem;
    border-radius: 3px;
    @include transition;
    @include not-selectable;
    @include text-shadow;
    background-color: rgba($color: white, $alpha: 0.3);
    color: #373737;

    &:hover {
      background-color: rgba($color: white, $alpha: 0.5);
    }

    h1 {
      font-size: 1.2rem;
      margin-top: 0;
      margin-bottom: 0.25rem;
    }

    table {
      tr {
        border-bottom: 1px solid #373737;
      }

      td {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        font-size: 0.9rem;
        color: #373737;
        font-weight: normal;
      }

      td.--green {
        color: green;
      }
      td.--red {
        color: #e53935;
      }

      td.--right {
        text-align: right;
      }
    }
  }
}
</style>
