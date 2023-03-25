import React from "react";
import { Layout } from "../Layout";

export default {
  title: "Layout/Layout",
  component: Layout,
};

export const withHeaderAndFooter = {
  args: {
    showHeader: true,
    children: <p>content</p>,
  },
};

export const withoutHeaderAndFooter = {
  args: {
    showHeader: false,
    children: <p>content</p>,
  },
};
