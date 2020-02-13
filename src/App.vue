<template>
  <div id="app">
    <h1>Most Sacred Things</h1>
    <CTACard
      title="Correspondences"
      content="A sentence explaining what’s interesting about correspondences."
    />
  </div>
</template>

<script>
import CTACard from "./components/CTACard";
import "tachyons/css/tachyons.css";
import "./css/global-styles.scss";

export default {
  components: {
    CTACard
  },
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
