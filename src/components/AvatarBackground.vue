<template>
  <div class="avatar-background absolute w-100 h-100 bg-creme overflow-hidden">
    <div
      v-if="showExclusionZone"
      class="absolute bg-red o-50"
      :style="{ 
        left: `${excludeZone.minX}px`,
        right: `${clientWidth - excludeZone.maxX}px`,
        top: `${excludeZone.minY}px`,
        bottom: `${clientWidth - excludeZone.maxY}px`,
      }"
    ></div>
    <AvatarItem
      v-for="avatar in avatars"
      :type="avatar.type"
      :bgImageSrc="avatar.bgImageSrc"
      class="absolute o-50"
      :style="randomPosExclusiveStyle()"
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
  data: function() {
    return {
      avatarSize: 150,
    }
  },
  props: {
    avatars: { type: Array, default: () => [] },
    excludeZoneRatios: { type: Object },
    showExclusionZone: { type: Boolean, default: false },
  },
  computed: {
    clientWidth () {
      return document.body.clientWidth || document.documentElement.clientWidth
    },
    clientHeight () {
      return document.body.clientHeight || document.documentElement.clientHeight
    },
    excludeZone () {
      return {
        minX: this.excludeZoneRatios.minX * this.clientWidth,
        maxX: this.excludeZoneRatios.maxX * this.clientWidth,
        minY: this.excludeZoneRatios.minY * this.clientHeight,
        maxY: this.excludeZoneRatios.maxY * this.clientHeight,
      }
    },
  },
  methods: {
    randomXPx () {
      return Math.random() * this.clientWidth
    },
    randomYPx () {
      return Math.random() * this.clientHeight
    },
    randomPos () {
      return {
        x: this.randomXPx(),
        y: this.randomYPx(),
      }
    },
    randomPosExclusive () {
      let randomPos = this.randomPos()
      return this.isInsideExclusion(randomPos)
        ? this.randomPosExclusive()
        : randomPos
    },
    randomPosExclusiveStyle () {
      let randomPosExclusive = this.randomPosExclusive()
      return { 
        left: randomPosExclusive.x - (0.5 * this.avatarSize) + 'px',
        top: randomPosExclusive.y - (0.5 * this.avatarSize) + 'px',
      }
    },
    isInsideExclusion (pos) {
      return pos.x > this.excludeZone.minX &&
             pos.x < this.excludeZone.maxX &&
             pos.y > this.excludeZone.minY &&
             pos.y < this.excludeZone.maxY
    },
  },
};
</script>

<style scoped>
.avatar-background {
  z-index: -1;
}
</style>