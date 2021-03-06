import hope from "vuepress-theme-hope";

export default {
  en: hope.navbarConfig([
    { text: "Guide", link: "/guide/", icon: "creative" },
    { text: "Config", link: "/config/", icon: "config" },
    { text: "FAQ", link: "/FAQ/", icon: "question" },
    {
      text: "Basic",
      icon: "info",
      prefix: "/basic/",
      items: [
        { text: "Tutorial", link: "tutorial", icon: "creative" },
        { text: "Markdown", link: "markdown/", icon: "markdown" },
        { text: "VuePress", link: "vuepress/", icon: "vue" },
      ],
    },
    {
      text: "Project",
      icon: "info",
      items: [
        {
          text: "Changelog",
          link: "/changelog/",
        },
        {
          text: "Repo",
          link: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
        },
        {
          text: "Theme Demo",
          link: "/demo/",
        },
        {
          text: "Contribution Guide",
          link: "/contribution/",
        },
        {
          text: "Plugins",
          icon: "plugin",
          items: [
            {
              text: "Active Hash Plugin",
              link: "https://vuepress-theme-hope.github.io/active-hash/",
            },
            {
              text: "AddThis Plugin",
              link: "https://vuepress-theme-hope.github.io/add-this/",
            },
            {
              text: "Comment Plugin",
              link: "https://vuepress-theme-hope.github.io/comment/",
            },
            {
              text: "Copy Code Plugin",
              link: "https://vuepress-theme-hope.github.io/copy-code/",
            },
            {
              text: "Feed Plugin",
              link: "https://vuepress-theme-hope.github.io/feed/",
            },
            {
              text: "Git Info Plugin",
              link: "https://vuepress-theme-hope.github.io/git/",
            },
            {
              text: "Markdown Enhance Plugin",
              link: "https://vuepress-theme-hope.github.io/md-enhance/",
            },
            {
              text: "Photo Swipe Plugin",
              link: "https://vuepress-theme-hope.github.io/photo-swipe/",
            },
            {
              text: "PWA Plugin",
              link: "https://vuepress-theme-hope.github.io/pwa/",
            },
            {
              text: "Reading Time Plugin",
              link: "https://vuepress-theme-hope.github.io/reading-time/",
            },
            {
              text: "Seo Plugin",
              link: "https://vuepress-theme-hope.github.io/seo/",
            },
            {
              text: "Sitemap Plugin",
              link: "https://vuepress-theme-hope.github.io/sitemap/",
            },
          ],
        },
      ],
    },
  ]),

  zh: hope.navbarConfig([
    { text: "??????", link: "/zh/guide/", icon: "creative" },
    { text: "??????", link: "/zh/config/", icon: "config" },
    { text: "????????????", link: "/zh/FAQ/", icon: "question" },
    {
      text: "??????",
      icon: "info",
      prefix: "/zh/basic/",
      items: [
        { text: "????????????", link: "tutorial", icon: "creative" },
        { text: "Markdown", link: "markdown/", icon: "markdown" },
        { text: "VuePress", link: "vuepress/", icon: "vue" },
      ],
    },
    {
      text: "??????",
      icon: "info",
      items: [
        {
          text: "????????????",
          link: "/zh/changelog/",
        },
        {
          text: "????????????",
          link: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
        },
        {
          text: "????????????",
          link: "/zh/demo/",
        },
        {
          text: "????????????",
          link: "/zh/contribution/",
        },
        {
          text: "??????",
          icon: "plugin",
          items: [
            {
              text: "????????????????????????",
              link: "https://vuepress-theme-hope.github.io/active-hash/zh/",
            },
            {
              text: "AddThis ??????",
              link: "https://vuepress-theme-hope.github.io/add-this/zh/",
            },
            {
              text: "????????????",
              link: "https://vuepress-theme-hope.github.io/comment/zh/",
            },
            {
              text: "??????????????????",
              link: "https://vuepress-theme-hope.github.io/copy-code/zh/",
            },
            {
              text: "Feed ??????",
              link: "https://vuepress-theme-hope.github.io/feed/zh/",
            },
            {
              text: "Git ????????????",
              link: "https://vuepress-theme-hope.github.io/git/zh/",
            },
            {
              text: "Markdown ????????????",
              link: "https://vuepress-theme-hope.github.io/md-enhance/zh/",
            },
            {
              text: "??????????????????",
              link: "https://vuepress-theme-hope.github.io/photo-swipe/zh/",
            },
            {
              text: "PWA ??????",
              link: "https://vuepress-theme-hope.github.io/pwa/zh/",
            },
            {
              text: "??????????????????",
              link: "https://vuepress-theme-hope.github.io/reading-time/zh/",
            },
            {
              text: "Seo ??????",
              link: "https://vuepress-theme-hope.github.io/seo/zh/",
            },
            {
              text: "Sitemap ??????",
              link: "https://vuepress-theme-hope.github.io/sitemap/zh/",
            },
          ],
        },
      ],
    },
  ]),
};
