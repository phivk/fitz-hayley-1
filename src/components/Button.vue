<template>
  <div class="dib">
    <a
      :href="link"
      :class="[
        square ? 'button--square' : '',
        'serif flex justify-center items-center bg-green creme f4 fw7 pa2 mt3 no-underline button'
      ]"
      ><slot
    /></a>
  </div>
</template>

<script>
import "../css/global-styles.scss";
import Icon from "./Icon";
export default {
  name: "PaginationButton",
  props: {
    square: { type: Boolean, default: false },
    link: { type: String, default: "#" },
    onClick: { type: Function }
  },
  componenents: { Icon }
};
</script>

<style scoped>
.button {
  height: 36px;
}

.button--square {
  width: 36px;
}
</style>
