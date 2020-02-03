import CTACard from "./CTACard";

export default { title: "CTACard" };

export const regular = () => ({
  components: { "cta-card": CTACard },
  template:
    '<cta-card title="Correspondences" content="A sentence explaining what’s interesting about correspondences." />'
});

export const withCustomButtonText = () => ({
  components: { "cta-card": CTACard },
  template:
    '<cta-card title="Correspondences" content="A sentence explaining what’s interesting about correspondences." buttonText="Check it out now!"/>'
});
