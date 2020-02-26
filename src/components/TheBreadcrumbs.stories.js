import TheBreadcrumbs from "./TheBreadcrumbs.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "TheBreadcrumbs" };

export const withPathList = () => ({
  components: { TheBreadcrumbs },
  data: function() {
    return {
      pathList: [
        {
          text: "First",
          path: "/first"
        }, 
        {
          text: "Second",
          path: "/first/second"
        }, 
        {
          text: "Third",
          path: "/first/second/third"
        }
      ],
    }
  },
  template: 
    `
    <div class="pa4">
      <TheBreadcrumbs 
        :pathList='pathList' 
      />
    </div>
    `
});

export const withoutPathList = () => ({
  components: { TheBreadcrumbs },
  data: function() {
    return {}
  },
  template: 
    `
    <div class="pa4">
      <TheBreadcrumbs/>
    </div>
    `
});
