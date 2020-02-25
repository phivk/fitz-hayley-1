import SortingSelector from "./SortingSelector.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "SortingSelector" };

export const regular = () => ({
  components: { SortingSelector },
  data: function() {
    return {
      sortOptions: ["one", "two", "three"],
    };
  },
  template: 
    `
    <div class="pa4">
      <SortingSelector 
        :sortOptions='sortOptions' 
      />
    </div>
    `
});
