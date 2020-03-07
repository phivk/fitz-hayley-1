<template>
   <div class="sans-serif relative dib">
      {{label}} <span @click="isExpanded = !isExpanded" class="green pointer">{{options[activeIndex]}} ▾</span>
      <div class="absolute z-1 right-0 shadow-4 mt1 bg-white" :class="isExpanded ? 'db' : 'dn'">
        <span 
          v-for="(sortOption, index) in options" :key="index"
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
  name: "DropdownSelector",
  data: function () {
    return {
      isExpanded: false,
      activeIndex: 0,
    }
  },
  props: { 
    label: { type: String, default: "sorted by" },
    options: { type: Array },
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