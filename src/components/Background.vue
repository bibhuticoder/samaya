<template>
  <div>
    <img class="overlay" src="@/assets/images/overlay.png" />
    <div class="credits" v-if="currentWallpaper">
      <p class="photoInfo">{{ currentWallpaper.location.name }}</p>
      <p class="ownerInfo">
        <span v-if="currentWallpaper.user.name">{{currentWallpaper.user.name}}</span>
        &nbsp;|&nbsp;
        <a :href="currentWallpaper.user.links.html" target="_blank" rel="noopener noreferrer">Unsplash</a>
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

  created() {
    if (this.currentWallpaper) {
      let stale = moment(this.currentWallpaper.fetchedAt, "x").isBefore(
        moment().subtract(1, "d")
      );
      if (stale) this.renderWallpaper();
      else
        document.getElementsByTagName(
          "html"
        )[0].style.backgroundImage = `url(${this.currentWallpaper.urls.full})`;
    } else this.renderWallpaper();
  },

  methods: {
    async renderWallpaper(fetchData) {
      let data;
      if (this.source == "collection") data = await fetchRandomUnsplashImage();
      else if (this.source == "featured")
        data = await getUnsplashImageById(
          this.featuredImages[random(0, this.featuredImages.length)]
        );

      if (data) {
        data.fetchedAt = Date.now();
        this.currentWallpaper = data;
        document.getElementsByTagName(
          "html"
        )[0].style.backgroundImage = `url(${data.urls.full})`;
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
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
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
