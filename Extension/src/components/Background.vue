<template>
  <div>
    <img class="overlay" src="@/assets/images/overlay.png" />
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
import { cacheImage } from "@/helpers";

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

  mounted() {
    if (this.currentWallpaper) {
      let stale = moment(this.currentWallpaper.fetchedAt, "x").isBefore(
        moment().subtract(1, "d")
      );
      if (stale) this.fetchRandomWallpaper();
      else this.setWallpaper();
    } else this.fetchRandomWallpaper();
  },

  methods: {
    async fetchRandomWallpaper() {
      let data;
      if (this.source == "collection") data = await fetchRandomUnsplashImage();
      else if (this.source == "featured") {
        let rInd = random(0, this.featuredImages.length);
        data = await getUnsplashImageById(this.featuredImages[rInd]);
      }

      if (data) {
        data.fetchedAt = Date.now();
        this.currentWallpaper = data;
        this.setWallpaper();
      }
    },

    setWallpaper() {
      let existsAtCache = localStorage.getItem("background_image");

      if (existsAtCache) {
        this.$refs.background.style.backgroundImage = `url(${existsAtCache})`;
      } else {
        cacheImage(
          this.currentWallpaper.urls.regular,
          "background_image",
          () => {
            this.$refs.background.style.backgroundImage = `url(${localStorage.getItem(
              "background_image"
            )})`;
          }
        );
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
  z-index: -1000;
}
</style>
