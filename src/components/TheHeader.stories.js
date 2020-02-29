import TheHeader from "./TheHeader.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "Header" };

export const regular = () => ({
  components: { "the-header": TheHeader },
  template: "<the-header/>"
});

export const wide = () => ({
  components: { "the-header": TheHeader },
  template: "<the-header wide/>"
});
