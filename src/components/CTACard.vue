<template>
  <div class="bg-white shadow-3 mw6 pa3">
    <h1 class="f2 ma0 mb3">{{ title }}</h1>
    <p class="ma0">{{ content }}</p>
    <a :href="link" class="dib bg-green white f4 pa2 mt3 no-underline"
      ><icon class="mr2" />{{ buttonText }}</a
    >
  </div>
</template>

<script>
import Icon from "./Icon";
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
<style scoped>
.dib {
  display: inline-block;
}
.mw6 {
  max-width: 32rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.ma0 {
  margin: 0;
}
.mb3 {
  margin-bottom: 1rem;
}
.mt3 {
  margin-top: 1rem;
}
.mr2 {
  margin-right: 0.5rem;
}
.f2 {
  font-size: 2.25rem;
}
.f4 {
  font-size: 1.25rem;
}
.bg-white {
  background-color: white;
}
.bg-green {
  background-color: green;
}
.white {
  color: white;
}
.shadow-3 {
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}
.no-underline {
  text-decoration: none;
}
</style>
