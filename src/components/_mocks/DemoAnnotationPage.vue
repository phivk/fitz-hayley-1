<template>
  <div>
    <p>My dear Eliza</p>
    <p>
      Your letter has indeed struck me with a double surprize. –
      <span class="underline pointer" v-tooltip.auto="tooltipOptions">of the first</span>
      I shall not speak at present, because I feel perhaps a little too like the
      honest old servant, you mention, to relish it on the sudden
    </p>
    <p>
      as to your projected Travels to the south, I am, in Truth, surprized &amp;
      allow me to say a little hurt, that you could in any degree settle such a
      Project, which, you must know, would agitate my Feelings, in no common
      Manner, without first consulting me on a point, so important to each of
      us. I shall speak on this subject with that perfect Sincerity, Tenderness
      &amp; Resolution, which have ever prevailed in my Language &amp; Conduct
      towards you, &amp; I may say, towards every Creature, with whom I have had
      any kind of Intercourse. – When you have heard what I have to communicate
      on this Topic, I am persuaded, your own Goodness &amp; Generosity of Heart
      will induce you to postpone your promised Visit to the old Countess to
      another year; &amp; to chuse for your sea-bathing this Autumn some coast
      much nearer to you than Felpham —
    </p>
    <p>
      It would be utterly impossible for me to be in Sussex, when you visit it,
      without having my spirits so agitated with inexpressible, &amp; I must own
      painfully affectionate Inquietude about you, that I should be perfectly
      disabled from all profitable study – nor could I
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import { VTooltip } from "v-tooltip";
Vue.directive("tooltip", VTooltip);
VTooltip.options.defaultClass = "fitz-tooltip";

export default {
  name: "DemoAnnotationPage",
  data: function() {
    return {
      tooltipOptions: {
        content: "This surprise is the marriage of Hayley's friend, John Beridge's widow to Mr Twigge.",
        trigger: "hover click focus'"
      }
    };
  }
};
</script>
