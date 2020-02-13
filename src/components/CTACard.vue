<template>
  <div class="bg-white shadow-3 mw6 pa3">
    <h1 class="serif f2 ma0 mb3">{{ title }}</h1>
    <p class="sans-serif ma0">{{ content }}</p>
    <Button :buttonText="buttonText" />
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "CTACard",
  props: {
    title: String,
    content: String,
    buttonText: { type: String, default: "Explore" },
    link: { type: String, default: "#" }
  },
  components: {
    Button: Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
