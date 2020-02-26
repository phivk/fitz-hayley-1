<template>
  <div class="bg-white w-100 sans-serif f5  flex letter-preview-card">
    <div class="letter-preview-card__left-side pa3">
      <h2 class="f3 serif mb2">{{ title }}</h2>
      <h3 class="f4 mb2">{{date}}</h3>
      <div class="mb2">
        <p v-if="author">
          From <a :href="author.link" class="berry dim">{{ author.name }}</a>
        </p>
        <p v-if="recipient">
          To <a :href="recipient.link" class="berry dim">{{ recipient.name }}</a>
        </p>
      </div>
      <div v-if="Object.keys(entityCount).length" class="mb2">
        <span
          class="mr3 mb2 dib"
          v-for="entityKey in Object.keys(entityCount)"
          :key="entityKey"
          ><NumberBullet :number="entityCount[entityKey]" />
          <span class="ml2">{{ entityKey }}</span>
        </span>
      </div>
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
    date: { type: String, default: "" },
    author: { type: Object },
    recipient: { type: Object },
    entityCount: { type: Object },
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
