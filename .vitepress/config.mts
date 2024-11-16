import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ArthanexData",
  description: "Quality Indian Market Datasets",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Datasets", link: "/datasets" },
      { text: "Contact", link: "/contact" },
    ],

    sidebar: {
      "/datasets": {
        base: "/datasets/",
        items: [
          {
            text: "Datasets",
            items: [
              {
                text: "Bhav",
                link: "/bhav",
                collapsed: true,
                items: [
                  { text: "NSE", link: "/nse" },
                  { text: "BSE", link: "/bse" },
                ],
              },
              {
                text: "Stock Symbols",
                link: "/bhav",
                collapsed: true,
                items: [
                  { text: "NSE", link: "/nse" },
                  { text: "BSE", link: "/bse" },
                ],
              },
              {
                text: "Index Constituents",
                link: "/bhav",
                collapsed: true,
                items: [
                  { text: "NSE Indices", link: "/nse" },
                  { text: "BSE Indices", link: "/bse" },
                ],
              },
              {
                text: "Company Information",
                link: "/company",
                collapsed: true,
                items: [
                  { text: "Source: NSE", link: "/nse" },
                  { text: "Source: MoneyControl", link: "/bse" },
                ],
              },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
