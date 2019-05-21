import { css } from "docz-plugin-css";

export default {
  title: "Node Rockets",
  description: "Node Rockets",
  themeConfig: {
    colors: {
      primary: "#6A1B9A"
    }
  },
  dest: "/dist",
  plugins: [
    css({
      preprocessor: "stylus",
      cssmodules: true
    })
  ]
};
