<template>
  <div class="bg-white mw6 pa3 tc sans-serif">
    <AvatarItem type="Person" backgroundId="hayley" class="center" />
    <h2 class="serif f2 mt4 mb3">{{ title }}</h2>
    <div><NumberBullet :number="numberLetters + ''" class="mr2" />letters</div>
    <p class="sans-serif mt3">{{ curatorialStatement }}</p>
    <Button buttonText="Explore" />
  </div>
</template>

<script>
import "../css/global-styles.scss";
import Button from "./Button";
import NumberBullet from "./NumberBullet";
import AvatarItem from "./AvatarItem";

export default {
  name: "CorrespondenceCard",
  props: {
    title: String,
    numberLetters: Number,
    curatorialStatement: { type: String, default: "" },
    link: { type: String, default: "#" }
  },
  components: {
    Button,
    NumberBullet,
    AvatarItem
  }
};
</script>
