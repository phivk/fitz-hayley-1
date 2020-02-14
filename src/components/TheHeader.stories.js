import TheHeader from "./TheHeader.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "Header" };

export const expanded = () => ({
  components: { "the-header": TheHeader },
  template: "<the-header/>"
});

export const collapsed = () => ({
  components: { "the-header": TheHeader },
  template: "<the-header isCollapsed/>"
});
