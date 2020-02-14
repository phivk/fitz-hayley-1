<template>
  <div class="bg-white w-100 sans-serif f5  flex letter-preview-card">
    <div class="letter-preview-card__left-side pa3">
      <h2 class="f3 serif mb3">{{ title }}</h2>
      <p>
        From <a :href="author.link" class="berry dim">{{ author.name }}</a>
      </p>
      <p>
        To <a :href="recipient.link" class="berry dim">{{ recipient.name }}</a>
      </p>
      <p class="mv3 measure-narrow">{{ curatorialStatement }}</p>
      <span
        class="mr3 mb2 dib"
        v-for="entityKey in Object.keys(entityCount)"
        :key="entityKey"
        ><NumberBullet :number="entityCount[entityKey]" />
        <span class="ml2">{{ entityKey }}</span></span
      >
      <div class="db">
        <Button :link="link"
          >Read letter <span class="db sans-serif ml2">☞</span></Button
        >
      </div>
    </div>

    <div class="letter-preview-card__right-side">
      <a class="db w-100 h-100" :href="link"></a>
    </div>
  </div>
</template>

<script>
import NumberBullet from "./NumberBullet";
import Button from "./Button";
export default {
  name: "LetterPreviewCard",
  components: {
    NumberBullet,
    Button
  },
  props: {
    title: { type: String, default: "" },
    author: {
      type: Object
    },
    recipient: {
      type: Object
    },
    curatorialStatement: { type: String },
    entityCount: {
      type: Object
    },
    link: { type: String }
  }
};
</script>

<style scoped>
.letter-preview-card {
  max-width: 900px;
}

.letter-preview-card__left-side {
  width: 40%;
}

.letter-preview-card__right-side {
  background-image: url("../images/letter-page-1.jpg");
  /* Cutting away the black border around the letter */
  background-position: -60px -50px;
  background-size: calc(100% + 200px);
  background-repeat: no-repeat;
  flex-grow: 1;
}
</style>
