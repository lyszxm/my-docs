import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
console.log(import.meta)

export default defineUserConfig({
  base: '/my-docs/', //部署站点的基础路径。如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。需要注意的是， base 应该是一个以 / 开始和结束的绝对路径名。

  // https://v2.vuepress.vuejs.org/zh/reference/config.html#lang

  locales: {
    '/': {
      lang: 'en-US',
      title: 'lys document',
      head: [['link', { rel: 'icon', href: '/images/favicon/favicon.ico' }]],
      description: 'lys document' // 站点的描述。它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖。
    },
    '/zh/': {
      head: [['link', { rel: 'icon', href: '/images/favicon/favicon.ico' }]],
      lang: 'zh-CN',
      title: 'lys的文档',
      description: 'lys的文档'
    }
  },

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
})
