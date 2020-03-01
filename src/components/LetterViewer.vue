<template>
  <div class="bg-creme sans-serif pv5 letter-viewer">
    <div class="w-100">
      <agile
        v-if="$mq !== 'l'" 
        :options="agileOptions" 
        class="agile mh5 mb4" 
      >
        <div 
          v-for="(slide, index) in manuscriptPageImages" :key="index" 
          :class="`slide--${index}`"
          class="slide mb3"
        >
          <img class="mw-100" :src="slide" />
        </div>
      </agile>
    </div>
    <div class="w-100 flex justify-center">
      <div v-if="$mq === 'l'" class="mr2 letter-viewer__side">
        <div class="letter-viewer__manuscript-container">
          <div
            class="letter-viewer__manuscript-container__inner"
            :style="{
              backgroundImage: getBackgroundProp(
                manuscriptPageImages[currentIndex]
              )
            }"
          ></div>
        </div>
      </div>
      <div
        class="ml2  bg-white f-copy letter-viewer__side letter-viewer__transcript-container"
        :class="$mq !== 'l' ? 'vh-75' : ''"
      >
        <div class="pa4 letter-viewer__transcript-container__inner">
          <component
            v-bind:is="transcriptPageComponents[currentIndex]"
          ></component>
        </div>
      </div>
    </div>
    <div v-if="$mq === 'l'" class="flex justify-center mt4">
      <Pagination
        :currentIndex="indexForNonNerds"
        :totalPages="totalPages"
        :onClickForward="handleClickForward"
        :onClickBackward="handleClickBackward"
        :onClickFirst="handleClickFirst"
        :onClickLast="handleClickLast"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { VTooltip } from "v-tooltip";
import Pagination from "./Pagination";
import VueMq from 'vue-mq'
import { VueAgile } from 'vue-agile'

Vue.use(VueMq, {
  breakpoints: {
    s: 480,
    m: 960,
    l: Infinity,
  },
  defaultBreakpoint: 's'
})

Vue.directive("tooltip", VTooltip);
VTooltip.options.defaultClass = "fitz-tooltip";

export default {
  name: "LetterViewer",
  props: {
    manuscriptPageImages: { type: Array },
    transcriptPageComponents: { type: Array }
  },
  components: {
    Pagination,
    agile: VueAgile
  },
  data: function() {
    return {
      currentIndex: 0,
      agileOptions: {
        dots: true,
        fade: true,
        navButtons: true,
        infinite: false,
      },
    };
  },
  computed: {
    indexForNonNerds: function() {
      return this.currentIndex + 1;
    },
    totalPages: function() {
      return Math.max(
        this.manuscriptPageImages.length,
        this.transcriptPageComponents.length
      );
    }
  },
  methods: {
    getBackgroundProp(srcPath) {
      return "url('" + srcPath + "')";
    },
    handleClickBackward() {
      if (this.currentIndex === 0) {
        return;
      }
      this.currentIndex = this.currentIndex - 1;
    },
    handleClickForward() {
      if (this.currentIndex === this.totalPages - 1) {
        return;
      }
      this.currentIndex = this.currentIndex + 1;
    },
    handleClickFirst() {
      this.currentIndex = 0;
    },
    handleClickLast() {
      this.currentIndex = this.totalPages - 1;
    }
  },
};
</script>

<style>
.letter-viewer {
  position: relative;
}

.letter-viewer__side {
  width: 590px;
}

.letter-viewer__manuscript-container {
  margin-left: auto;
}
.letter-viewer__manuscript-container__inner {
  width: 100%;
  padding-bottom: 120%; /* Aspect ratio of image scans */
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
}

.letter-viewer__transcript-container {
  position: relative;
  line-height: 170%;
}

.letter-viewer__transcript-container__inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}

/*.Agile Carousel */

.agile__actions {
  justify-content: center;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #00470e;
  opacity: 0.6;
  cursor: pointer;
  font-size: 24px;
  transition-duration: .3s;
}

.agile .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.agile .agile__nav-button--prev {
  left: -45px;
}

.agile .agile__nav-button--next {
  right: -45px;
}

.agile__nav-button:hover {
  opacity: 1;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dot button {
  background-color: #00470e;
  opacity: 0.2;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: .3s;
  width: 10px;
}

.agile__dot--current button, .agile__dot:hover button {
  opacity: 1;
}

.agile .slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 75vh;
  justify-content: center;
}

.agile .slide img {
  height: 100%;
  object-fit: contain;
  object-position: center;
  width: 100%;
}
</style>
