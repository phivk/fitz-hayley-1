import CTACard from "./CTACard.vue";

export default { title: "CTACard" };

export const regular = () => ({
  components: { "cta-card": CTACard },
  template:
    '<cta-card title="Correspondences" content="A sentence explaining what’s interesting about correspondences." buttonText="Start reading 🖛" />'
});
