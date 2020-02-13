<template>
  <div class="bg-white shadow-3 mw6 pa3">
    <h1 class="serif f2 ma0 mb3">{{ title }}</h1>
    <p class="sans-serif ma0">{{ content }}</p>
    <a :href="link" class="serif dib bg-green white f4 fw7 pa2 mt3 no-underline"
      ><icon class="mr2" />{{ buttonText }}</a
    >
  </div>
</template>

<script>
import Icon from "./Icon";
import "../css/global-styles.css";
export default {
  name: "CTACard",
  props: {
    title: String,
    content: String,
    buttonText: { type: String, default: "Explore" },
    link: { type: String, default: "#" }
  },
  components: {
    icon: Icon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
