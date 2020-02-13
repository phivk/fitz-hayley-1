import CorrespondenceCard from "./CorrespondenceCard.vue";

export default { title: "CorrespondenceCard" };

export const regular = () => ({
  components: { "correspondence-card": CorrespondenceCard },
  template:
    "<correspondence-card title='Firstname Lastname' numberLetters='7' curatorialStatement='A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character.'/>"
});
