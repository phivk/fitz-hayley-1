import LetterList from "./LetterList.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "LetterList" };

export const regular = () => ({
  components: { LetterList },
  data: function() {
    return {
      letters:[
        {
          title: "William Hayley to Anna Seward: letter",
          date: "1782-06-11",
          author: { name: "Firstname Lastname", link: "#" },
          recipient: { name: "Firstname Lastname", link: "#" },
          entityCount: {
            people: 5,
            places: 3,
            events: 7
          },
          link: "#"
        },
        {
          title: "William Hayley to Anna Seward: letter",
          date: "1782-06-11",
          author: { name: "Firstname Lastname", link: "#" },
          recipient: { name: "Firstname Lastname", link: "#" },
          entityCount: {
            people: 5,
            places: 3,
            events: 7
          },
          link: "#"
        },
        {
          title: "William Hayley to Anna Seward: letter",
          date: "1782-06-11",
          author: { name: "Firstname Lastname", link: "#" },
          recipient: { name: "Firstname Lastname", link: "#" },
          entityCount: {
            people: 5,
            places: 3,
            events: 7
          },
          link: "#"
        },
      ],
    };
  },
  template:
    `
    <div class="pa3">
      <LetterList 
        :letters='letters'
      />
    </div>
    `
});
