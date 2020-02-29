import EntityCard from "./EntityCard";
import "../css/reset.css";
import "../css/global-styles.scss";

import imageFlaxman from "../images/flaxman.jpg";
import imageSussex from "../images/sussex-place.jpg";

export default {
  title: "EntityCard"
};

export const person = () => ({
  components: { "entity-card": EntityCard },
  data: function() {
    return {
      bgImage: imageFlaxman
    };
  },
  template:
    `
    <entity-card 
      type="Person" 
      title="Firstname Lastname" 
      :bgImageSrc="bgImage"
    />
    `
});

export const personWithNoImage = () => ({
  components: { "entity-card": EntityCard },
  template:
    `
    <entity-card 
      type="Person" 
      title="Firstname Lastname" 
    />
    `
});

export const place = () => ({
  components: { "entity-card": EntityCard },
  data: function() {
    return {
      bgImage: imageSussex
    };
  },
  template:
    `
    <entity-card 
      type="Place" 
      title="Location Name" 
      :bgImageSrc="bgImage"
    />
    `
});

export const placeWithNoImage = () => ({
  components: { "entity-card": EntityCard },
  template:
    `
    <entity-card 
      type="Place" 
      title="Location Name" 
    />
    `
});
