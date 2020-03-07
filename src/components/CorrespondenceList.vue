<template>
  <section>
    <CorrespondenceCard 
      v-for="correspondence in correspondences"
      :names='correspondence.names' 
      :backgroundIds='correspondence.backgroundIds' 
      :numberLetters='correspondence.numberLetters' 
      :curatorialStatement='correspondence.curatorialStatement'
      class="ma3 dib v-top"
    />
  </section>
</template>

<script>
import CorrespondenceCard from "./CorrespondenceCard";
export default {
  name: "CorrespondenceList",
  components: {
    CorrespondenceCard,
  },
  props: {
    correspondences: { type: Array, default: () => [] },
  },
};
</script>
