<template>
  <div class="checkboxContainer">
    <div class="checkbox" @click="toggle()">
      <i class="fal fa-check" aria-hidden="true" v-if="value"></i>
    </div>
    <label :class="{'--checked': value}">{{label}}</label>
    <div class="controls">
      <div class="btnControl" @click="value ? refresh() : cancel()">
        <i v-if="value" class="fal fa-sync-alt"></i>
        <i v-else class="fal fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  name: "CheckBox",
  props: {
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: null
    };
  },

  created() {
    this.value = this.checked;
  },

  methods: {
    toggle() {
      this.value = !this.value;
    },

    cancel() {
      this.value = null;
      this.$emit("cancelled");
    },

    refresh() {
      this.value = null;
      this.$emit("refreshed");
    }
  }
};
</script>

<style lang="scss" scoped>
.checkboxContainer {
  display: flex;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
  font-family: "Nunito", sans-serif;

  .checkbox {
    position: relative;
    align-self: center;
    $size: 20px;
    height: $size;
    width: $size;
    border: 2px solid white;
    border-radius: 3px;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    opacity: 0;
    transition: all 0.25s ease-in-out;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-30%, -60%);
    }
  }

  label {
    align-self: center;
    font-size: 1.7rem;
    color: white;

    &.--checked {
      text-decoration: line-through;
    }
  }

  .controls {
    align-self: center;
    margin-left: 10px;
    opacity: 0;
    transition: all 0.25s ease-in-out;
    .btnControl {
      $size: 30px;
      height: $size;
      width: $size;
      border-radius: 50%;
      text-align: center;
      line-height: $size;
      color: rgba($color: white, $alpha: 0.9);
      cursor: pointer;
      transition: background-color 0.25s ease-in-out;

      &:hover {
        background-color: rgba($color: #373737, $alpha: 0.5);
      }
    }
  }
}

.checkboxContainer:hover .checkbox {
  opacity: 1;
}

.checkboxContainer:hover .controls {
  opacity: 1;
}
</style>
