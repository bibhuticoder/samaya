<template>
  <div class="d-flex flex-col h-100">
    <h1>Wallpapers Setting</h1>

    <div class="d-flex flex-col justify-content-between flex-1">
      <div>
        <label class="title">Wallpaper Source</label>
        <Toggle
          v-model="source"
          :value="source"
          lblChecked="Featured"
          lblUnchecked="Collections"
          :width="85"
          :config="{ featured: true, collections: false }"
        />
      </div>

      <!-- Collections -->
      <div v-if="source == 'collections'">
        <div class="d-flex justify-content-between">
          <label class="title align-self-center">Unsplash collection Ids</label>
          <button class="btn d-flex" @click="loadRandomImageFromCollections()" :disabled="fetchRandomLoading">
            <Loading v-if="fetchRandomLoading" color="white" /> 
            <span class="ml-1">Load Random Image</span>
          </button>
        </div>
        <textarea
          class="w-100"
          rows="5"
          style="resize: none"
          v-model="collections"
        ></textarea>
      </div>

      <!-- Source -->
      <div v-else-if="source == 'featured'" class="d-flex flex-col">
        <label class="title">Featured Images</label>
        <vue-custom-scrollbar>
          <div class="featuredImagesContainer">
            <div
              v-for="(image, index) in featuredThumbnails"
              :key="index"
              class="featuredImage"
              :class="{
                '--checked': image.id === currentWallpaper.id,
              }"
              :style="'background-image: url(' + image.url + ')'"
              @click="selectWallpaper(image.id)"
            >
              <i
                class="fas fa-check-circle checkmark"
                v-if="image.id === currentWallpaper.id"
              ></i>
            </div>
          </div>
        </vue-custom-scrollbar>
      </div>

      <p class="note">
        The wallpapers are loaded from
        <a href="http://" target="_blank" rel="noopener noreferrer">Unsplash</a>
        . If you want to contribute, please visit the
        <a href="http://" target="_blank" rel="noopener noreferrer"
          >Contribution Guide</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import Toggle from "@/components/Toggle";
import Loading from "@/components/Loading";
import { getUnsplashImageById, fetchRandomUnsplashImage } from "@/helpers";
import vueCustomScrollbar from "vue-custom-scrollbar";
import { cacheImage } from "@/helpers";

const { mapFields } = createHelpers({
  getterType: "wallpapers/getField",
  mutationType: "wallpapers/updateField",
});

export default {
  name: "SettingsWallpapers",
  components: { Toggle, vueCustomScrollbar, Loading },
  data() {
    return {
      featuredThumbnails: [],

      fetchRandomLoading: false,
    };
  },

  created() {
    this.featuredImages.forEach(async (imageId) => {
      let imageData = await getUnsplashImageById(imageId);
      if (imageData)
        this.featuredThumbnails.push({
          url: imageData.urls.thumb,
          id: imageId,
        });
    });
  },

  methods: {
    async selectWallpaper(id, callback) {
      this.currentWallpaper = {
        ...(await getUnsplashImageById(id)),
        fetchedAt: Date.now(),
      };

      // Cache & render
      cacheImage(this.currentWallpaper.urls.regular, "background_image", () => {
        document.getElementById(
          "background"
        ).style.backgroundImage = `url(${localStorage.getItem(
          "background_image"
        )})`;
        if (callback) callback();
      });
    },

    async loadRandomImageFromCollections() {
      this.fetchRandomLoading = true;
      let data = await fetchRandomUnsplashImage(this.collections);
      if (data) {
        data.fetchedAt = Date.now();
        this.currentWallpaper = data;
        await this.selectWallpaper(
          this.currentWallpaper.id,
          () => (this.fetchRandomLoading = false)
        );
      }
    },
  },

  computed: {
    ...mapFields([
      "collections",
      "source",
      "featuredImages",
      "currentWallpaper",
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.featuredImagesContainer {
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;

  .featuredImage {
    width: 50px;
    height: 40px;
    background-color: white;
    border-radius: 0.15rem;
    background-size: cover;
    background-position: center;
    margin: 0.15rem;
    opacity: 0.6;
    cursor: pointer;
    position: relative;

    .checkmark {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }

    &.--checked {
      opacity: 1;
      border-color: #373737;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
