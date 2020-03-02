<template>
  <div class="avatar-background absolute w-100 h-100 bg-creme overflow-hidden">
    <AvatarItem
      v-for="avatar in avatars"
      :type="avatar.type"
      :bgImageSrc="avatar.bgImageSrc"
      class="absolute opacity-05"
      :style="{ 
        left: randomXPos(),
        top: randomYPos(),
      }"
    />
  </div>
</template>

<script>
import AvatarItem from "./AvatarItem";
export default {
  name: "AvatarBackground",
  components: {
    AvatarItem,
  },
  props: {
    avatars: { type: Array, default: () => [] },
  },
  computed: {
    clientWidth () {
      return document.body.clientWidth || document.documentElement.clientWidth
    },
    clientHeight () {
      return document.body.clientHeight || document.documentElement.clientHeight
    },
  },
  methods: {
    randomXPos () {
      return Math.random() * this.clientWidth + 'px'
    },
    randomYPos () {
      return Math.random() * this.clientHeight + 'px'
    },
  },
};
</script>

<style scoped>
.avatar-background {
  z-index: -1;
}
.opacity-05 {
  opacity: 0.5;
}
</style>