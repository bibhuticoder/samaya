<template>
  <div>
    <div class="overlay"></div>
    <div id="background" ref="background"></div>
    <div class="credits" v-if="currentWallpaper">
      <p class="photoInfo">{{ currentWallpaper.location.name }}</p>
      <p class="ownerInfo">
        <span v-if="currentWallpaper.user.name">{{
          currentWallpaper.user.name
        }}</span>
        &nbsp;|&nbsp;
        <a
          :href="currentWallpaper.user.links.html"
          target="_blank"
          rel="noopener noreferrer"
          >Unsplash</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import {
  fetchRandomUnsplashImage,
  getUnsplashImageById,
  random,
} from "@/helpers";
import { createHelpers } from "vuex-map-fields";
import moment from "moment";
import { cacheImage, getCachedImage } from "@/helpers";

const { mapFields } = createHelpers({
  getterType: "wallpapers/getField",
  mutationType: "wallpapers/updateField",
});

export default {
  name: "Background",
  props: {},
  data() {
    return {};
  },

  async mounted() {
    if (this.currentWallpaper) {
      let stale = moment(this.currentWallpaper.fetchedAt, "x").isBefore(
        moment().subtract(1, "d")
      );
      if (stale) {
        await this.fetchRandomWallpaper(stale);
      } else await this.setWallpaper();
    } else await this.fetchRandomWallpaper();
  },

  methods: {
    async fetchRandomWallpaper(isStale) {
      let data;
      if (this.source == "collections") {
        data = await fetchRandomUnsplashImage(this.collections);
      } else if (this.source == "featured") {
        let rInd = random(0, this.featuredImages.length);
        data = await getUnsplashImageById(this.featuredImages[rInd]);
      }
      if (data) {
        data.fetchedAt = Date.now();
        this.currentWallpaper = data;
        await this.setWallpaper(isStale);
      }
    },

    async setWallpaper(isStale) {
      let existsAtCache = await getCachedImage("background_image");

      if (!isStale && existsAtCache) {
        this.$refs.background.style.backgroundImage = `url(${existsAtCache})`;
      } else {
        try {
          let cachedImage = await cacheImage(
            this.currentWallpaper.urls,
            "background_image"
          );
          document.getElementById(
            "background"
          ).style.backgroundImage = `url(${cachedImage})`;
        } catch (e) {
          console.log(e);
        }
      }
    },
  },

  computed: {
    ...mapFields([
      "currentWallpaper",
      "source",
      "collections",
      "featuredImages",
    ]),
  },
};
</script>

<style lang="scss" scoped>
#background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -999;
  background: transparent no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #373737;
}
.credits {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: white;
  font-size: 0.8rem;
  font-weight: 100;

  p {
    margin-top: 0;
    margin-bottom: 0;
    text-align: right;
  }
}

.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(182, 182, 182, 1) 100%
  );
  opacity: 0.2;
}
</style>
