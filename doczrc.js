import { css } from "docz-plugin-css";

export default {
  title: "Node Rockets",
  logo: {
    src: "docs/images/NodeRockets-Logo-Final-03.png",
    width: null
  },
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
