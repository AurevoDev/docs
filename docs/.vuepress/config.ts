import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "Aurevo",
  themeConfig: {
    enableDarkMode: true,
    repo: "https://git.aurevo.org/aurevo/aurevo/docs",
    logo: "/logo.svg",
    nav: [
      { text: "Log In", link: "https://dash.aurevo.org/" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Overview",
          collapsable: false,
          children: ["/guide/", "/guide/getting-started"],
        },
        {
          title: "Guide",
          collapsable: false,
          children: [
            "/guide/home",
            "/guide/regions"
          ],
        },
        {
          title: "Contact",
          collapsable: false,
          children: [
            ['https://discord.gg/aurevo', 'Discord'],
            ['https://discord.gg/aurevo', 'Contact Support'],
          ],
        },
      ],
      // "/api/": [
      //   {
      //     title: "Config",
      //     path: "/api/",
      //     collapsable: false,
      //     children: [
      //       "/api/config-theme",
      //       "/api/config-frontmatter",
      //       "/api/config-home",
      //     ],
      //   },
      // ],
    },
    codeSwitcher: {
      groups: {
        default: {
          ts: 'TypeScript',
          js: 'JavaScript',
          go: 'Golang',
          rs: 'Rust',
        },
        'plugin-usage': { tuple: 'Tuple', object: 'Object' },
      }
    }
  },
}));