<template>
  <section class="letter-list">
    <div class="w-100 tr mb3">
      <SortingSelector
        v-if="sortObjects"
        :sortOptions='sortNames'
        v-on:index-change="onSortIndexChange"
      />
    </div>
    <LetterPreviewCard 
      v-for="(letter, index) in lettersSorted" :key="index"
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
import SortingSelector from "./SortingSelector";
import { orderBy } from 'lodash';
export default {
  name: "LetterList",
  data: () => {
    return {
      sortIndex: 0,
      sortOrder: 'asc',
    }
  },
  components: {
    LetterPreviewCard,
    SortingSelector,
  },
  props: {
    letters: { type: Array, default: () => [] },
    sortObjects: { type: Array, default: () => [] },
  },
  computed: {
    lettersSorted () {
      return orderBy(
        this.letters, 
        [this.sortObjects[this.sortIndex].path],
        [this.sortOrder]
      )
    },
    sortNames () {
      return this.sortObjects.map(sortObject => sortObject.name)
    },
  },
  methods: {
    onSortIndexChange (newSortIndex) {
      this.sortIndex = newSortIndex
    },
  },
};
</script>
