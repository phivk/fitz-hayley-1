<template>
  <section class="letter-list">
    <LetterPreviewCard 
      v-for="(letter, index) in letters" key="index"
      :title='letter.title'
      :date='letter.date'
      :author='letter.author'
      :recipient='letter.recipient'
      :entityCount='letter.entityCount'
      :link='letter.link'
      class="mb3"
    />
  </section>
</template>

<script>
import LetterPreviewCard from "./LetterPreviewCard";
export default {
  name: "LetterList",
  components: {
    LetterPreviewCard,
  },
  props: {
    letters: { type: Array, default: () => [] },
  },
};
</script>
