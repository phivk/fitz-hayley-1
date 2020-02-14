import CorrespondenceCard from "./CorrespondenceCard.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "CorrespondenceCard" };

export const single = () => ({
  components: {
    CorrespondenceCard
  },
  data: function() {
    return {
      names: ["Firstname Lastname"],
      backgroundIds: ["hayley"],
      numberLetters: "7",
      curatorialStatement:
        "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character."
    };
  },
  template:
    "<CorrespondenceCard :names='names' :backgroundIds='backgroundIds' :numberLetters='numberLetters' :curatorialStatement='curatorialStatement'/>"
});

export const multi = () => ({
  components: {
    CorrespondenceCard
  },
  data: function() {
    return {
      names: ["Firstname Lastname", "Firstname Lastname", "Firstname Lastname"],
      backgroundIds: ["hayley", "flaxman", "blake"],
      numberLetters: "7",
      curatorialStatement:
        "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character."
    };
  },
  template:
    "<CorrespondenceCard :names='names' :backgroundIds='backgroundIds' :numberLetters='numberLetters' :curatorialStatement='curatorialStatement'/>"
});
