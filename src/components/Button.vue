<template>
  <a :href="link" class="serif dib bg-green creme f4 fw7 pa2 mt3 no-underline"
    >{{ buttonText }}<icon class="ml2"
  /></a>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Button",
  props: { buttonText: { type: String, default: "Explore" } },
  components: { icon: Icon }
};
</script>
