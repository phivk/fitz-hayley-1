<template>
  <div class="">
    <EntityCard
      v-for="entity in entitiesFiltered"
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
    typeFilter: { type: String },
  },
  computed: {
    entitiesFiltered () {
      return this.typeFilter 
        ? this.entities.filter(entity => entity.type === this.typeFilter)
        : this.entities
    },
  }
};
</script>
