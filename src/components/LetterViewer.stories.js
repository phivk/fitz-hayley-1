import LetterViewer from "./LetterViewer.vue";

const demoPage1 =
  "My dear Eliza, Your letter has indeed struck me with a double surprize. – of the first I shall not speak at present, because I feel perhaps a little too like the honest old servant, you mention, to relish it on the sudden as to your projected Travels to the south, I am, in Truth, surprized & allow me to say a little hurt, that you could in any degree settle such a Project, which, you must know, would agitate my Feelings, in no common Manner, without first consulting me on a point, so important to each of us. I shall speak on this subject with that perfect Sincerity, Tenderness & Resolution, which have ever prevailed in my Language & Conduct towards you, & I may say, towards every Creature, with whom I have had any kind of Intercourse. – When you have heard what I have to communicate on this Topic, I am persuaded, your own Goodness & Generosity of Heart will induce you to postpone your promised Visit to the old Countess to another year; & to chuse for your sea-bathing this Autumn some coast much nearer to you than Felpham -. It would be utterly impossible for me to be in Sussex, when you visit it, without having my spirits so agitated with inexpressible, & I must own painfully affectionate Inquietude about you, that I should be perfectly disabled from all profitable study – nor could I";

const demoPage2 = "This is the second page of this letter transcript";

export default { title: "LetterViewer" };

export const regular = () => ({
  components: { LetterViewer },
  data: function() {
    return {
      manuscriptPageImages: [],
      transcriptPageTexts: [demoPage1, demoPage2]
    };
  },
  template:
    "<LetterViewer :manuscriptPageImages=manuscriptPageImages :transcriptPageTexts='transcriptPageTexts'/>"
});
