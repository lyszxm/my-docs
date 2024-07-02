import { hopeTheme } from "vuepress-theme-hope"

import { path } from "@vuepress/utils"
// import { enNavbar, zhNavbar } from './navbar/index.js'
import { zhNavbar } from "./navbar/index.js"
import { enSidebar, zhSidebar } from "./sidebar/index.js"
console.log("🚀💥💥 ~ zhSidebar: --》》", zhSidebar)
export default hopeTheme(
  {
    // sidebar: 'heading', //https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F
    //当前网站部署到的域名
    hostname: "https://lyszxm.github.io/my-docs/",
    // 站点图标
    favicon: "/images/favicon/favicon.ico",
    iconAssets: ["iconify", "//at.alicdn.com/t/c/font_3980836_9a7agvggydk.css"],
    iconPrefix: "iconfont icon-", //这个前缀就是和你的iconfont的项目设置有关的额
    author: {
      name: "lys",
      url: "https://github.com/lyszxm/my-docs", //作者网站
      /**
       * 作者 Email
       */
      email: "1774795243@qq.com"
    },
    // hotReload: true, // 是否需要在开发服务器启用完整功能与热更新。 是否在开发服务器中启用热重载。
    // pure: true, //是否开启纯净模式。
    print: true,
    fullscreen: true, //如果你需要这个功能，你可以在主题选项中设置 fullscreen: true。
    logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.ZlKootImGh6akA6hjzV6RAHaGF?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", //导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径。

    repo: "lyszxm/my-docs", // 仓库配置，用于在导航栏中显示仓库链接。
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
          editLink: "Edit this page on GitHub"
        }
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
          editLink: "在 GitHub 上编辑此页"
        }
      }
    },

    encrypt: {
      config: {
        "/demo/encrypt.html": ["1234"],
        "/zh/demo/encrypt.html": ["1234"]
      }
    },

    plugins: {
      shiki: {
        // 你想要使用的主题
        themes: {
          light: "github-light",
          dark: "one-dark-pro"
        }
      },
      notice: [
        {
          path: "/",
          title: "Notice Title",
          content: "Notice Content",
          actions: [
            {
              text: "Primary Action",
              link: "https://theme-hope.vuejs.press/",
              type: "primary"
            },
            { text: "Default Action" }
          ]
        },
        {
          path: "/zh/",
          title: "Notice Title",
          content: "Notice Content",
          actions: [
            {
              text: "Primary Action",
              link: "https://theme-hope.vuejs.press/",
              type: "primary"
            },
            { text: "Default Action" }
          ]
        }
      ],
      watermark: {
        enabled: true,
        // options,
        // https://zhensherlock.github.io/watermark-js-plus/zh/config/
        watermarkOptions: {
          parent: "body",
          contentType: "text",
          content: "lys",
          globalAlpha: 0.2
        },
        delay: 500
      },
      photoSwipe: true,
      // comment: {
      //   // provider: "Waline",   // @ts-expect-error You should generate and use your own comment service您应该生成并使用自己的评论服务
      //   provider: 'None'
      // },

      // all features are enabled for demo, only preserve features you need here所有功能都为演示启用，仅在此处保留您需要的功能
      mdEnhance: {
        gfm: true,
        hint: true, // 是否启用提示容器支持
        vPre: true,
        breaks: true, // 是否将段落中的 \n 转换为 <br>
        linkify: false, // 是否将文字中的链接格式文字转换为链接
        alert: true, // 是否启用 GFM 警告。
        tabs: true, // 是否启用选项卡。
        codetabs: true, // 是否启用代码组
        align: true,
        attrs: true, // 是否启用自定义属性支持。
        sup: true,
        sub: true,
        footnote: true,
        mark: true,
        figure: true,
        imgLazyload: true, // 是否使用原生方式懒加载页面图片
        imgMark: true, // 是否启用图片标注支持
        imgSize: true,
        obsidianImgSize: true,
        tasklist: true,
        // 添加 `@src` 别名支持
        include: {
          resolvePath: file => {
            if (file.startsWith("@src"))
              return file.replace("@src", path.resolve(__dirname, "../../src"))
            return file
          }
        }, //导入文件 https://plugin-md-enhance.vuejs.press/zh/guide/include.html
        katex: true,
        mathjax: true,
        component: true,
        chart: true,
        echarts: true,
        flowchart: true,
        mermaid: true,
        spoiler: true,
        stylize: [
          {
            matcher: "Recommended", // 字符匹配  matcher: string | RegExp;
            /**
             * 内容替换
             */
            // @ts-ignore
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended"
                }
            }
          }
        ],
        playground: {
          presets: ["ts", "vue", "unocss"] //   /** 交互演示预设 */
        },
        vuePlayground: true,
        sandpack: true,
        demo: true,
        // 在你的 VuePress 站点中添加幻灯片
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
          themes: [
            "auto",
            "beige",
            "black",
            "blood",
            "league",
            "moon",
            "night",
            "serif",
            "simple",
            "sky",
            "solarized",
            "white"
          ]
        },
        markmap: true
        // locales
      },
      nprogress: true,
      catalog: true,
      components: {
        components: [
          // 'ArtPlayer',
          // 'AudioPlayer',
          "Badge",
          "BiliBili",
          "CodePen",
          "FontIcon",
          "PDF",
          // 'Replit',
          // 'Share',
          "SiteInfo",
          "VPCard"
          // 'StackBlitz',
          // 'VideoPlayer',
          // 'XiGua',
          // 'YouTube'
        ],
        componentOptions: {
          fontIcon: {
            assets: ["//at.alicdn.com/t/c/font_3980836_9a7agvggydk.css", "iconify"],
            // assets: 'iconfont'
            prefix: "iconfont icon-" //这个前缀就是和你的iconfont的项目设置有关的额
          },
          pdf: {
            pdfjs: "/assets/lib/pdfjs"
          }
        }
      }
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
    }
  },
  {
    check: true,
    /*
    是否兼容历史版本 (v1 最新版本和 v2 beta 版本)。

仍然可以兼容的选项将继续工作，同时在控制台中留下警告。
移除的选项将在控制台中留下错误。
    */
    compact: true
  }
)
