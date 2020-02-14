<template>
  <div class="bg-white pa3 sans-serif entity-card">
    <div class="flex items-center">
      <AvatarItem :type="type" small :bgImageSrc="bgImageSrc" />
      <h2 class="serif f2 ml3">{{ title }}</h2>
    </div>
    <p class="mv2">{{ curatorialStatement }}</p>
    <ButtonLink>Read more <span class="dib sans-serif ml2">☞</span></ButtonLink>
  </div>
</template>

<script>
import AvatarItem from "./AvatarItem";
import ButtonLink from "./ButtonLink";

export default {
  name: "EntityCard",
  props: {
    type: { type: String },
    title: { type: String },
    curatorialStatement: {
      type: String
    },
    buttonText: {
      type: String
    },
    link: {
      type: String
    },
    bgImageSrc: {
      type: String
    }
  },
  components: { AvatarItem, ButtonLink }
};
</script>

<style scoped>
.entity-card {
  max-width: 590px;
}
</style>
