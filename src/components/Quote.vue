<template>
  <div class="quote" v-if="quote">“{{quote.text}}”</div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
import moment from "moment";

export default {
  name: "Calendar",
  created() {
    // fetch new quote if its 1 day old
    if (this.quote && this.quote.fetchedAt) {
      let stale = moment(this.quote.fetchedAt, "x").isBefore(
        moment().subtract(1, "d")
      );
      if (stale) this.fetchRandomQuote();
    } else this.fetchRandomQuote();
  },

  methods: {
    fetchRandomQuote() {
      fetch("https://bibhuticoder.github.io/samaya-quotes-api/quotes/metadata.json")
        .then(r => r.json())
        .then(metadata => {
          let randomPage = _.random(1, metadata.totalPages);
          fetch(
            "https://bibhuticoder.github.io/samaya-quotes-api/quotes/" +
              randomPage +
              ".json"
          )
            .then(r => r.json())
            .then(quotesData => {
              let randomQuote = quotesData[_.random(0, quotesData.length - 1)];
              this.$store.commit("quote/setQuote", {
                ...randomQuote,
                fetchedAt: Date.now()
              });
              console.log(randomQuote);
            });
        });
    }
  },

  computed: {
    ...mapGetters("quote", ["quote"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.quote {
  font-size: 1rem;
  color: white;
  text-align: center;
  cursor: default;
}
</style>
