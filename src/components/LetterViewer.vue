<template>
  <div class="bg-creme sans-serif pv5 letter-viewer">
    <div class="w-100 flex justify-center ">
      <div class="mr2 letter-viewer__side">
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
      >
        <div
          class="pa4 letter-viewer__transcript-container__inner"
          v-html="transcriptPageTexts[currentIndex]"
        ></div>
      </div>
    </div>
    <div class="flex justify-center mt4">
      <Pagination
        :currentIndex="indexForNonNerds"
        :totalPages="totalPages"
        :onClickForward="handleClickForward"
        :onClickBackward="handleClickBackward"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination";

export default {
  name: "LetterViewer",
  props: {
    manuscriptPageImages: { type: Array },
    transcriptPageTexts: { type: Array }
  },
  components: {
    Pagination
  },
  data: function() {
    return {
      currentIndex: 0
    };
  },
  computed: {
    indexForNonNerds: function() {
      return this.currentIndex + 1;
    },
    totalPages: function() {
      return Math.max(
        this.manuscriptPageImages.length,
        this.transcriptPageTexts.length
      );
    }
  },
  methods: {
    getBackgroundProp(srcPath) {
      return "url('" + srcPath + "')";
    },
    handleClickBackward: function() {
      if (this.currentIndex === 0) {
        return;
      }
      this.currentIndex = this.currentIndex - 1;
    },
    handleClickForward: function() {
      if (this.currentIndex === this.totalPages - 1) {
        return;
      }
      this.currentIndex = this.currentIndex + 1;
    }
  }
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
</style>
