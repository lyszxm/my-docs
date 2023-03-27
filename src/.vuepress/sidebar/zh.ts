import { sidebar } from "vuepress-theme-hope";
import { getCatalogueByPath } from "../../utils/forMD";
console.log(__dirname, "tests");
export const zhSidebar = sidebar({
  "/zh/": [
    "",
    /*
    {
      icon: 'typescript',
      text: 'typescript',
      prefix: 'typescript/',
      link: 'typescript/', //给它就是可以点击了(作为父亲需不需要点击并有自己页面这就要看自己了)
      collapsible: true,
      children: [
        {
          icon: 'typescript',
          text: 'jimei',
          prefix: 'jimei/',
          link: 'jimei/', //给它就是可以点击了
          collapsible: true,
        },
        {
          icon: 'typescript',
          text: 'mk_ts',
          prefix: 'mk_ts/',
          link: '', //给它就是可以点击了
          collapsible: true,
          children: [
            {
              icon: 'typescript',
              text: '1',
              prefix: '1/',
              link: '1/', //给它就是可以点击了
              collapsible: true,
              // children: []
            }
          ]
        },
      ]
    },*/
    getCatalogueByPath("zh/typescript", {
      cateIcon: "typescript",
      isLink: true,
      fileIcon: "blog",
      collapsible: true,
    }),
    {
      icon: "discover", //项目图标
      text: "案例", //项目文字
      prefix: "demo/",
      link: "demo/", //项目链接

      collapsible: true, // 可选的, 设置分组是否可以折叠，默认值是 false,
      children: "structure",
    },
    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
