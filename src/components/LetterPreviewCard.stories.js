import LetterPreviewCard from "./LetterPreviewCard.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "LetterPreviewCard" };

export const regular = () => ({
  components: { LetterPreviewCard },
  data: function() {
    return {
      title: "Letter Title A",
      author: { name: "Firstname Lastname", link: "#" },
      recipient: { name: "Firstname Lastname", link: "#" },
      curatorialStatement:
        "A brief curatorial statement, describing the letter, why it was send and what are the most interesting points",
      entityCount: {
        people: 5,
        places: 3,
        events: 7
      },
      link: "#"
    };
  },
  template:
    "<LetterPreviewCard :title='title' :author='author' :recipient='recipient' :curatorialStatement='curatorialStatement' :entityCount='entityCount' :link='link'/>"
});

export const withManyEntityTypes = () => ({
  components: { LetterPreviewCard },
  data: function() {
    return {
      title: "Letter Title A",
      author: { name: "Firstname Lastname", link: "#" },
      recipient: { name: "Firstname Lastname", link: "#" },
      curatorialStatement:
        "A brief curatorial statement, describing the letter, why it was send and what are the most interesting points",
      entityCount: {
        people: 2,
        places: 2,
        events: 3,
        families: 1,
        artworks: 3
      },
      link: "#"
    };
  },
  template:
    "<LetterPreviewCard :title='title' :author='author' :recipient='recipient' :curatorialStatement='curatorialStatement' :entityCount='entityCount' :link='link'/>"
});
