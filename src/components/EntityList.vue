<template>
  <div class="">
    <EntityCard
      v-for="entity in entities"
      :type="entity.type"
      :title="entity.title"
      :bgImageSrc="entity.bgImageSrc"
    />
  </div>
</template>

<script>
import EntityCard from "./EntityCard";
export default {
  name: "EntityList",
  components: {
    EntityCard,
  },
  props: {
    entities: { type: Array, default: () => [] },
  }
};
</script>

<style scoped>

</style>
