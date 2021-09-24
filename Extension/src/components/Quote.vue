<template>
  <div class="quote text-shadow" v-if="quote && visibility">
    <span class="quoteText">“{{ quote.text }}”</span>
    <span class="quoteAuthor">
      - {{ quote.author || "Unknown" }}

      <a
        href="https://bibhuticoder.github.io/samaya/#contribution"
        target="_blank"
        rel="noopener noreferrer"
        ><i
          class="fal fa-hand-holding-heart btnSupport"
          title="Support Samaya"
        ></i
      ></a>
    </span>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "quote/getField",
  mutationType: "quote/updateField",
});

export default {
  name: "Quote",
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
      fetch(
        "https://bibhuticoder.github.io/samaya-quotes-api/quotes/metadata.json"
      )
        .then((r) => r.json())
        .then((metadata) => {
          let randomPage = _.random(1, metadata.totalPages);
          fetch(
            "https://bibhuticoder.github.io/samaya-quotes-api/quotes/" +
              randomPage +
              ".json"
          )
            .then((r) => r.json())
            .then((quotesData) => {
              let randomQuote = quotesData[_.random(0, quotesData.length - 1)];
              this.quote = {
                ...randomQuote,
                fetchedAt: Date.now(),
              };
            });
        });
    },
  },

  computed: {
    ...mapFields(["quote", "visibility"]),
  },
};
</script>

<style lang="scss" scoped>
.quote {
  position: relative;
  font-size: 1rem;
  color: white;
  text-align: center;
  cursor: default;
  font-weight: 100;
  transition: all 0.25s ease-in-out;

  .quoteAuthor {
    width: 100%;
    font-style: italic;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .btnSupport {
    cursor: pointer;
    margin-left: 0.5rem;
    opacity: 0.6;
    @include transition;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    transform: translate(0, -75%);
  }

  &:hover .quoteAuthor {
    opacity: 1;
  }
}
</style>
