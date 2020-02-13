<template>
  <div class="dib">
    <div
      class="bg-berry br-100 w2 h2 flex white justify-center items-center sans-serif"
    >
      <span>{{ number || ''}}</span>
    </div>
  </div>
</template>

<script>
import "../css/global-styles.scss";
export default {
  name: "NumberBullet",
  props: { number: { type: Number } }
};
</script>
