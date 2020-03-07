<template>
   <div class="sans-serif relative dib w5 tr">
      sorted by <span @click="isExpanded = !isExpanded" class="green pointer">{{sortOptions[activeIndex]}} ▾</span>
      <div class="absolute z-1 right-0 shadow-4 mt1 bg-white" :class="isExpanded ? 'db' : 'dn'">
        <span 
          v-for="(sortOption, index) in sortOptions" :key="index"
          @click="onOptionClick(index)"
          class="ph3 pv1 db hover-bg-light-green"
        >
          {{sortOption}}
        </span>
      </div>
    </div> 
</template>

<script>
export default {
  name: "SortingSelector",
  data: function () {
    return {
      isExpanded: false,
      activeIndex: 0,
    }
  },
  props: { 
    sortOptions: { type: Array },
  },
  methods: {
    onOptionClick (index) {
      this.activeIndex = index
      this.isExpanded = false
      this.$emit('index-change', index)
    },
  }
};
</script>