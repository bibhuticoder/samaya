<template>
  <div>
    <div class="credits">
      <p class="photoInfo">{{ metadata.photoAddress }}</p>
      <p class="ownerInfo" v-html="metadata.photographerName"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Background",
  props: {},
  data() {
    return {
      backgroundImage: null,
      metadata: {
        photoAddress: "Kathmandu, Nepal",
        photographerName: 'Bibhuti | <a href="#">Unsplash</a>',
      },
    };
  },

  created() {
    // this.getWallpaper();
  },

  methods: {
    getWallpaper() {
      let url = "https://api.unsplash.com/photos/random";
      let params = {
        client_id: "lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I",
        orientation: "landscape",
        featured: true,
        content_filter: "high",
        collection: "827743,162213,357786",
      };
      url =
        url +
        "?" +
        Object.keys(params)
          .map((p) => p + "=" + params[p])
          .join("&");
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.metadata.photographerName = `${data.user.name} | <a href="${data.user.links.html}" target="_blank">Unsplash</a> `;  
          this.backgroundImage = data.urls.full;
          document.getElementsByTagName(
            "html"
          )[0].style.backgroundImage = `url(${this.backgroundImage})`;
        });
    }
  },

  computed: {
    ...mapGetters("settings", ["clockFormat"]),
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
  }
}
</style>
