---
home: true #设置为 true 时启用首页样式
icon: home
title: 项目主页 #设置页面标题，会用于路径导航、页面增强等
# heroImage: /logo.svg
heroImage: https://tse3-mm.cn.bing.net/th/id/OIP-C.B4u6P2tZ0QhU_nfxo4TW2AHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 #主页图标 (logo) 地址，需要填入绝对路径 (图片需要放入 .vuepress/public 文件夹)
heroText: 面试与小功能测试 #主页标题
tagline: 为了更方便的学习 #附加文字描述
actions:
  - text: 使用💡
    link: /zh/demo/
    type: primary

  - text: 文档
    link: /zh/guide/

features:
  - title: Markdown 增强
    icon: markdown
    details: 新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持
    link: https://theme-hope.vuejs.press/zh/guide/markdown/

  - title: 幻灯片页面
    icon: slides
    details: 添加幻灯片页面以显示你喜欢的内容
    link: https://theme-hope.vuejs.press/zh/guide/layout/slides.html

  - title: 布局增强
    icon: layout
    details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
    link: https://theme-hope.vuejs.press/zh/guide/layout/

  - title: 浏览量与评论
    icon: comment
    details: 配合 Waline 来开启阅读量统计与评论支持
    link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

  - title: 文章信息
    icon: info
    details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
    link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

  - title: 博客支持
    icon: blog
    details: 使用一些很棒的布局提供博客功能，通过文章的日期、标签和分类，自动生成文章、分类、标签与时间轴列表
    link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

  - title: 主题色切换
    icon: palette
    details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
    link: https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html

  - title: 深色模式
    icon: contrast
    details: 可以自由切换浅色模式与深色模式
    link: https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html

  - title: 完整的无障碍支持
    icon: support
    details: 为你的网站带来完整的无障碍支持
    link: https://theme-hope.vuejs.press/zh/guide/interface/accessibility.html

  - title: 文章加密
    icon: lock
    details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
    link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

  - title: 复制按钮
    icon: copy
    details: 一键复制代码块中的代码
    link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

  - title: 图片预览
    icon: pic
    details: 像相册一样允许你浏览、缩放并分享你的页面图片
    link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

  - title: SEO 增强
    icon: config
    details: 将最终生成的网页针对搜索引擎进行优化。
    link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

  - title: Sitemap
    icon: sitemap
    details: 自动为你的网站生成 Sitemap
    link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

  - title: Feed 支持
    icon: rss
    details: 生成你的 Feed，并通知你的用户订阅它
    link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

  - title: PWA 支持
    icon: mobile
    details: 让你的网站更像一个 APP
    link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

  - title: 更多新特性
    icon: more
    details: 包括图标支持、全屏按钮、返回顶部按钮等
    link: https://theme-hope.vuejs.press/zh/guide/feature/
copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> 主题,version - <span class="myDocs_version">0.0.0</span> 版权所有 © 2023-3
---

这是项目主页的案例。你可以在这里放置你的主体内容。

想要使用此布局，你需要在页面 front matter 中设置 `home: true`。

配置项的相关说明详见 [项目主页配置](https://theme-hope.vuejs.press/zh/guide/layout/home/)。

<script setup>
import { onMounted, h } from 'vue'
import {addReleaseTag} from '@src/utils/addReleaseTag'

onMounted(() => {
  addReleaseTag()
})

console.log("🚀 ~", process.env.NODE_ENV)
</script>
