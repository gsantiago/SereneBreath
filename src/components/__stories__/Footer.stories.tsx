import { Footer } from "../Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
};

export const Visible = {
  args: {
    isVisible: true,
  },
};

export const ShowAbout = {
  args: {
    isVisible: true,
    showAbout: true,
  },
};
