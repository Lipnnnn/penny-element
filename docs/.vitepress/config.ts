import { defineConfig } from "vitepress";
import path from "path";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

const alias = {
  "@": path.resolve(__dirname, "../../src"),
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    resolve: { alias },
  },
  markdown: {
    config(md) {
      md.use(containerPreview, { alias }), md.use(componentPreview, { alias });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Basic",
        items: [{ text: "Button", link: "/components/button" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
