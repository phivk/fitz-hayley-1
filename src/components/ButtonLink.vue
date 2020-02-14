<template
  ><Button>
    <a :href="link" :class="['no-underline']"><slot /></a></Button
></template>

<script>
import Button from "./Button";

export default {
  name: "ButtonLink",
  components: {
    Button: Button,
    props: { link: { type: String, default: "#" } }
  }
};
</script>
