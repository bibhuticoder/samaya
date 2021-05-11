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

      <div v-if="source == 'collections'">
        <label class="title">Unsplash collection Ids</label>
        <br />
        <textarea
          class="w-100"
          rows="5"
          style="resize: none"
          v-model="collections"
        ></textarea>
      </div>
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
import { getUnsplashImageById } from "@/helpers";
import vueCustomScrollbar from "vue-custom-scrollbar";

const { mapFields } = createHelpers({
  getterType: "wallpapers/getField",
  mutationType: "wallpapers/updateField",
});

export default {
  name: "SettingsWallpapers",
  components: { Toggle, vueCustomScrollbar },
  data() {
    return {
      featuredThumbnails: [],
    };
  },

  created() {
    this.featuredImages.forEach(async (imageId) => {
      let imageData = await getUnsplashImageById(imageId);
      if (imageData) this.featuredThumbnails.push({url: imageData.urls.thumb, id: imageId});
    });
  },

  methods: {
    async selectWallpaper(id) {
      this.currentWallpaper = {
        ...(await getUnsplashImageById(id)),
        fetchedAt: Date.now(),
      };

      document.getElementsByTagName(
        "html"
      )[0].style.backgroundImage = `url(${this.currentWallpaper.urls.full})`;
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
