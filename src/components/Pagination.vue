<template>
  <div class="dib">
    <a href="#" class="green dib mr3">first</a>
    <Button square class="dib mr3" :onClick="onClickBackward">➻</Button>
    <span class="dib mr2">page</span>
    <NumberBullet :number="currentIndex" class="dib mr2" />
    <span class="dib mr3">out of {{ totalPages }}</span>
    <Button square class="dib mr3" :onClick="onClickForward">➻</Button>
    <a href="#" class="green">last</a>
  </div>
</template>

<script>
import NumberBullet from "./NumberBullet";
import Button from "./Button";
export default {
  name: "Pagination",
  props: {
    currentIndex: { type: Number },
    totalPages: { type: Number },
    onClickForward: { type: Function },
    onClickBackward: { type: Function }
  },
  components: { NumberBullet, Button }
};
</script>
