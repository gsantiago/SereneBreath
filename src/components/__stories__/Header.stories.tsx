import { Header } from "../Header";

export default {
  title: "Layout/Header",
  component: Header,
};

export const Visible = {
  args: {
    isVisible: true,
  },
};

export const ShowSettings = {
  args: {
    isVisible: true,
    showSettings: true,
  },
};
