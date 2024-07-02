import { defineUserConfig } from "vuepress"
import { viteBundler } from "@vuepress/bundler-vite"
import { path } from "@vuepress/utils"
import theme from "./theme"
import { backToTopPlugin } from "@vuepress/plugin-back-to-top"

// @ts-ignore
import { searchPlugin } from "@vuepress/plugin-search" //@vuepress/plugin-search 为你的文档网站提供本地搜索能力。
// @ts-ignore
import { docsearchPlugin } from "@vuepress/plugin-docsearch" //将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。
// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro"
const IS_NETLIFY = "NETLIFY" in process.env
console.log(path.resolve(__dirname, "../../src"), "-----")
console.log(import.meta.url, IS_NETLIFY)
// console.log(process.env)

export default defineUserConfig({
  markdown: {
    importCode: {
      handleImportPath: str => str.replace(/^@src/, path.resolve(__dirname, "../../src"))
    }
  },
  // public: `${sourceDir}/.vuepress/public`, //默认值： `${sourceDir}/.vuepress/public`  //指定 Public 文件目录。
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"], //默认值： ['**/*.md', '!.vuepress', '!node_modules'] //指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的
  bundler: viteBundler({
    viteOptions: {
      server: {
        host: "0.0.0.0",
        port: 7001
      },
      resolve: {
        alias: {
          "@component": path.resolve(__dirname, "../../src/components"),
          "@src": path.resolve(__dirname, "../../src")
        }
      },
      build: {
        minify: "terser", // 'esbuild',
        terserOptions: {
          compress: {
            //生产环境时移除console.log()
            drop_console: true,
            drop_debugger: true
          }
        }
      }
    },
    vuePluginOptions: {}
  }),
  base: "/my-docs/", //部署站点的基础路径。如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。需要注意的是， base 应该是一个以 / 开始和结束的绝对路径名。

  // https://v2.vuepress.vuejs.org/zh/reference/config.html#lang
  locales: {
    "/": {
      lang: "en-US",
      title: "lys document",
      description: "lys document" // 站点的描述。它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖。
    },
    "/zh/": {
      lang: "zh-CN",
      title: "lys的文档",
      description: "lys的文档"
    }
  },

  theme,
  plugins: [
    // https://ecosystem.vuejs.press/zh/plugins/features/back-to-top.html
    backToTopPlugin({
      threshold: 120,
      progress: true
    })
    // componentsPlugin(),
    // docsearchPlugin({
    //   appId: 'LDBQGQC8Q9',
    //   apiKey: '5c3a7145aeba231c3b85b742d24fc24f',
    //   indexName: 'mrhope',
    //   locales: {
    //     '/': {
    //       placeholder: '搜索',
    //       translations: {
    //         button: {
    //           buttonText: '搜索',
    //           buttonAriaLabel: '搜索'
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: '清除查询条件',
    //             resetButtonAriaLabel: '清除查询条件',
    //             cancelButtonText: '取消',
    //             cancelButtonAriaLabel: '取消'
    //           },
    //           startScreen: {
    //             recentSearchesTitle: '搜索历史',
    //             noRecentSearchesText: '没有搜索历史!',
    //             saveRecentSearchButtonTitle: '保存至搜索历史',
    //             removeRecentSearchButtonTitle: '从搜索历史中移除',
    //             favoriteSearchesTitle: '收藏',
    //             removeFavoriteSearchButtonTitle: '从收藏中移除'
    //           },
    //           errorScreen: {
    //             titleText: '无法获取结果',
    //             helpText: '你可能需要检查你的网络连接'
    //           },
    //           footer: {
    //             selectText: '选择',
    //             navigateText: '切换',
    //             closeText: '关闭',
    //             searchByText: '搜索提供者'
    //           },
    //           noResultsScreen: {
    //             noResultsText: '无法找到相关结果',
    //             suggestedQueryText: '你可以尝试查询',
    //             reportMissingResultsText: '你认为该查询应该有结果？',
    //             reportMissingResultsLinkText: '点击反馈'
    //           }
    //         }
    //       }
    //     },
    //     '/zh/': {
    //       placeholder: '搜索',
    //       translations: {
    //         button: {
    //           buttonText: '搜索',
    //           buttonAriaLabel: '搜索'
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: '清除查询条件',
    //             resetButtonAriaLabel: '清除查询条件',
    //             cancelButtonText: '取消',
    //             cancelButtonAriaLabel: '取消'
    //           },
    //           startScreen: {
    //             recentSearchesTitle: '搜索历史',
    //             noRecentSearchesText: '没有搜索历史!',
    //             saveRecentSearchButtonTitle: '保存至搜索历史',
    //             removeRecentSearchButtonTitle: '从搜索历史中移除',
    //             favoriteSearchesTitle: '收藏',
    //             removeFavoriteSearchButtonTitle: '从收藏中移除'
    //           },
    //           errorScreen: {
    //             titleText: '无法获取结果',
    //             helpText: '你可能需要检查你的网络连接'
    //           },
    //           footer: {
    //             selectText: '选择',
    //             navigateText: '切换',
    //             closeText: '关闭',
    //             searchByText: '搜索提供者'
    //           },
    //           noResultsScreen: {
    //             noResultsText: '无法找到相关结果',
    //             suggestedQueryText: '你可以尝试查询',
    //             reportMissingResultsText: '你认为该查询应该有结果？',
    //             reportMissingResultsLinkText: '点击反馈'
    //           }
    //         }
    //       }
    //     }
    //   }
    // }),
    // searchPlugin({
    //     // 你的选项
    //     locales: {
    //         '/': {
    //             placeholder: 'search'
    //         },
    //         '/zh/': {
    //             placeholder: '搜索'
    //         }
    //     },
    //     // 排除首页
    //     isSearchable: page => page.path !== '/',
    //     // 允许搜索 Frontmatter 中的 `tags`
    //     getExtraFields: page => page.frontmatter.tags ?? []
    // }),
    // searchProPlugin({
    //     // 索引全部内容(默认情况下，插件只会索引页面的标题和摘要以及你的自定义索引项，不会索引页面的正文内容。如果需要索引页面的正文内容，可以将该选项设置为 true。)
    //     indexContent: true,
    //     // 为分类和标签添加索引
    //     customFields: [
    //         {
    //             getter: (page): any => page?.frontmatter?.category,
    //             formatter: {
    //                 '/': 'Category: $content',
    //                 '/zh/': '分类：$content'
    //             }
    //         },
    //         {
    //             getter: page => page.frontmatter.tag,
    //             formatter: {
    //                 '/': 'Tag: $content',
    //                 '/zh/': '标签：$content'
    //             }
    //         }
    //     ],
    //     hotKeys: [{ key: 'k', ctrl: true }], //https://plugin-search-pro.vuejs.press/zh/config.html#hotkeys  //当热键被按下时，搜索框的输入框会被聚焦，设置为空数组以禁用热键。
    //     queryHistoryCount: 5, //存储搜索查询词历史的最大数量，可以设置为 0 以禁用。
    //     resultHistoryCount: 5, // 存储搜索结果历史的最大数量，可以设置为 0 以禁用。
    //     worker: 'search-pro.worker.js' //输出的 Worker 文件名称
    // })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
})
