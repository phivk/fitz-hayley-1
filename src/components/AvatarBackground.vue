<template>
  <div class="absolute w-100 h-100 bg-creme overflow-hidden z--1">
    <div
      v-if="showExclusionZone"
      class="absolute ba b--red b--dashed o-50"
      :style="{ 
        left: `${excludeZone.minX}px`,
        right: `${clientWidth - excludeZone.maxX}px`,
        top: `${excludeZone.minY}px`,
        bottom: `${clientHeight - excludeZone.maxY}px`,
      }"
    ></div>
    <AvatarItem
      v-for="avatar in avatarsHydrated"
      :type="avatar.type"
      :bgImageSrc="avatar.bgImageSrc"
      :style="avatar.style"
      class="absolute filter-lowcontrast"
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
      avatarsHydrated: [],
      // separationFactor: how much to separate individual avatars?
      // 0.5 = allow upto half of avatar size to overlap
      // 1   = allow upto 'border to border' fit
      // 1.5 = require at least half of avatar size in between
      separationFactor: 1.1,
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
    randomPos () {
      return {
        x: Math.random() * this.clientWidth,
        y: Math.random() * this.clientHeight,
      }
    },
    randomPosExclusive () {
      let randomPos = this.randomPos()
      return this.overlaps(randomPos, this.excludeZone)
        ? this.randomPosExclusive()
        : randomPos
    },
    getStyleForPos (pos) {
      return { 
        left: pos.x - (0.5 * this.avatarSize) + 'px',
        top: pos.y - (0.5 * this.avatarSize) + 'px',
      }
    },
    overlaps (pos, excludeArea) {
      return pos.x > excludeArea.minX &&
             pos.x < excludeArea.maxX &&
             pos.y > excludeArea.minY &&
             pos.y < excludeArea.maxY
    },
    overlapsPositions (candidatePos, existingPositions) {
      return existingPositions.some(pos => {
        return this.overlaps(candidatePos, this.getAreaForPos(pos, this.avatarSize))
      })
    },
    getAreaForPos (pos, size) {
      return {
        minX: pos.x - this.separationFactor * size,
        maxX: pos.x + this.separationFactor * size,
        minY: pos.y - this.separationFactor * size,
        maxY: pos.y + this.separationFactor * size
      }
    },
    hydrateOneAvatar (avatar) {
      let candidatePos = this.randomPosExclusive()
      let existingPositions = this.avatarsHydrated.map(a => a.pos)
      if (!this.overlapsPositions(candidatePos, existingPositions)) {
        this.avatarsHydrated.push({
          type: avatar.type,
          bgImageSrc: avatar.bgImageSrc,
          style: this.getStyleForPos(candidatePos),
          pos: candidatePos
        })
      } else {
        this.hydrateOneAvatar(avatar)
      }
    },
    hydrateAvatars () {
      this.avatars.forEach(avatar => {
        this.hydrateOneAvatar(avatar)
      })
    },
  },
  created () {
    this.hydrateAvatars()
  },
};
</script>

<style scoped>
.z--1 {
  z-index: -1;
}
.filter-lowcontrast {
  filter: contrast(40%) brightness(150%) saturate(75%);
}
</style>