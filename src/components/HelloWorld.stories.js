export default { title: "Button" };

export const withText = () => "<button>with text</button>";

export const asAComponent = () => ({
  template: '<button :rounded="true">rounded</button>'
});
