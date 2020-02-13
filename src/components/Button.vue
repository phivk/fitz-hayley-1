<template>
  <div class="dib" @click="onClick">
    <div
      :class="[
        square ? 'button--square' : '',
        'serif flex justify-center items-center bg-green creme f4 fw7 pa2 mt3 button'
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import "../css/global-styles.scss";
export default {
  name: "PaginationButton",
  props: {
    square: { type: Boolean, default: false },
    onClick: { type: Function }
  }
};
</script>

<style scoped>
.button {
  height: 36px;
  cursor: pointer;
}

.button--square {
  width: 36px;
}
</style>
