<template>
  <div>
    <h1>Stocks Settings</h1>

    <label class="title">Visibility </label>
    <Toggle v-model="visibility" :value="visibility" />
    <hr />
    <label class="title">WatchList </label>
    <br />

    <select v-model="selectedSymbol">
      <option
        v-for="(compDetails, compCode, index) in companiesData"
        :key="index"
        :value="compCode"
      >
        {{ compCode }}
      </option>
    </select>

    <button @click="add()" class="btn">Add</button>

    <ul class="watchlist" v-if="watchList">
      <li v-for="(compCode, index) in watchList" :key="index">
        {{ compCode }}
        <i class="fal fa-minus-circle btn-remove" @click="remove(index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import Toggle from "@/components/Toggle";

const { mapFields } = createHelpers({
  getterType: "stocks/getField",
  mutationType: "stocks/updateField",
});

export default {
  name: "SettingsStocks",
  components: { Toggle },

  data() {
    return {
      companiesData: null,
      selectedSymbol: null,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      fetch("https://almighty569.github.io/nepse-api/data/companies.json")
        .then((r) => r.json())
        .then((companiesData) => {
          this.companiesData = companiesData;
        });
    },

    add() {
      if (this.selectedSymbol  && !this.watchList.includes(this.selectedSymbol))
        this.watchList.push(this.selectedSymbol);
    },

    remove(index) {
      this.watchList.splice(index, 1);
    },
  },

  computed: {
    ...mapFields(["visibility", "watchList"]),
  },
};
</script>


<style lang="scss" scoped>
ul.watchlist {
  padding-left: 0;
  margin-top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  height: 7.5rem;
  li {
    font-size: 0.75rem;
    list-style: none;

    .btn-remove {
      cursor: pointer;
      &:hover {
        color: black;
      }
    }
  }
}
</style>