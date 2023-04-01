import { hopeTheme } from "vuepress-theme-hope";

import { path } from "@vuepress/utils";
// import { enNavbar, zhNavbar } from './navbar/index.js'
import { zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
export default hopeTheme({
  // sidebar: 'heading', //https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F
  //当前网站部署到的域名
  hostname: "https://lyszxm.github.io/my-docs/",
  // 站点图标
  favicon: "/images/favicon/favicon.ico",
  // iconAssets: '//at.alicdn.com/t/c/font_3980836_hxbglioa3hw.css',
  iconAssets: "iconfont",
  author: {
    name: "lys",
    url: "https://github.com/lyszxm/my-docs", //作者网站
    /**
     * 作者 Email
     */
    email: "1774795243@qq.com",
  },
  // hotReload: true, // 是否需要在开发服务器启用完整功能与热更新。 是否在开发服务器中启用热重载。
  // pure: true, //是否开启纯净模式。
  fullscreen: true, //如果你需要这个功能，你可以在主题选项中设置 fullscreen: true。
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.ZlKootImGh6akA6hjzV6RAHaGF?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", //导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径。

  repo: "lyszxm/my-docs", //仓库配置，用于在导航栏中显示仓库链接。
  // repo: "https://github.com/Mister-Hope/Mister-Hope.github.io",
  docsDir: "src", //文档在仓库中的目录

  locales: {
    "/": {
      // navbar
      // navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer~ ~ ~🎃",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config中文区域设置配置
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "努力基建中~ ~ ~🎃", //页脚的默认内容，可输入 HTMLString。

      displayFooter: true,
      // rtl: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    photoSwipe: true,
    // comment: {
    //   // provider: "Waline",   // @ts-expect-error You should generate and use your own comment service您应该生成并使用自己的评论服务
    //   provider: 'None'
    // },

    // all features are enabled for demo, only preserve features you need here所有功能都为演示启用，仅在此处保留您需要的功能
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      // 添加 `@src` 别名支持
      include: {
        resolvePath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, "../../src"));
          return file;
        },
      }, //导入文件 https://plugin-md-enhance.vuejs.press/zh/guide/include.html
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    components: {
      components: [
        // 'ArtPlayer',
        // 'AudioPlayer',
        // 'Badge',
        // 'BiliBili',
        "CodePen",
        "FontIcon",
        "PDF",
        // 'Replit',
        // 'Share',
        // 'SiteInfo',
        // 'StackBlitz',
        // 'VideoPlayer',
        // 'XiGua',
        // 'YouTube'
      ],
      componentOptions: {
        fontIcon: {
          assets: [
            "//at.alicdn.com/t/c/font_3980836_hxbglioa3hw.css",
            "iconfont",
          ],
          // assets: 'iconfont'
          prefix: "iconfont icon-", //这个前缀就是和你的iconfont的项目设置有关的额
        },
        pdf: {
          pdfjs: "/assets/lib/pdfjs",
        },
      },
      rootComponents: {
        // addThis: 'ra-6421a080e9ef3860',
        backToTop: true,
        notice: [
          {
            match: /^\/$/,
            title: "通知",
            content: "Notice Content",
            actions: [
              {
                text: "Primary Action",
                link: "https://theme-hope.vuejs.press/",
                type: "primary",
              },
              { text: "Default Action" },
            ],
            fullscreen: true,
          },
        ],
      },
    },
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
