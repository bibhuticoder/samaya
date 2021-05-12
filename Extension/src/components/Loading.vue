<template>
  <div class="loading">
    <i class="fas fa-spinner fa-spin" :style="'color:' + color"></i>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    color: {
      type: String,
      default: "#373737",
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
}
</style>