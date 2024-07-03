import { resolve } from "pathe"
import fg from "fast-glob" //https://github.com/mrmlnc/fast-glob#onlydirectories

type itemChildren = Array<item> | undefined | null
type item = {
  icon?: string
  text?: string
  prefix?: string // 'mk_ts/',
  link?: string //给它就是可以点击了
  collapsible?: boolean
  expanded?: boolean
  children?: itemChildren
}

const srcPath = resolve(process.cwd(), "src")
export function getCatalogueByPath(
  path: string,
  {
    isLink = true,
    cateIcon = "",
    fileIcon = "",
    collapsible = true,
    expanded = false
  } = {}
) {
  const mdFileReg = /(.+)\.(md|MD)$/
  let result = {
    icon: cateIcon || "", //项目图标 (可选)
    text: path.split("/")[1] || "",
    prefix: path.split("/")[1] + "/" || "", // 'mk_ts/',
    link: isLink ? path.split("/")[1] + "/" : "", //给它就是可以点击了 (项目链接)
    collapsible,
    expanded
  }

  function genChildren(item: item) {
    if (item.children == null) {
      return (item.children = [])
    }
    return item.children
  }
  function loop(path: string, val: item) {
    /*
    ! 不需要的文件可以命名有_ns的结尾
     */
    let thisDir = fg.sync(["*", "!*_ns"], {
      onlyDirectories: true,
      cwd: resolve(srcPath, path)
    })
    let thisMd = fg.sync(["*.{md,MD}"], {
      dot: true,
      cwd: resolve(srcPath, path)
    })

    // console.log("---->>", path + `\t\t`, thisDir, thisMd)

    if (thisMd.length > 0) {
      for (let md of thisMd) {
        if (md == "README.md") continue
        const item: item = {
          icon: fileIcon || "",
          text: md.split(mdFileReg)[1] || "",
          prefix: md.split(mdFileReg)[1] + "/" || "", // 'mk_ts/',
          link: isLink ? md : "", //给它就是可以点击了
          collapsible: collapsible,
          expanded: expanded
        }
        genChildren(val).push(item)
      }
      // 如果你没有这个首页那么清除父亲的link项
      if (!thisMd.includes("README.md" || "README.MD")) {
        val.link = ""
      }
    }
    // 这是文件夹的
    if (thisDir.length > 0) {
      for (const dir of thisDir) {
        const item = {
          icon: cateIcon || "",
          text: dir || "",
          prefix: dir + "/" || "", // 'mk_ts/',
          link: isLink ? dir + "/" : "", //给它就是可以点击了
          collapsible,
          expanded
        }
        genChildren(val).push(item)
        loop(path + `/${dir}`, item)
      }
    } else {
      // console.log('我是最后面的')
      // console.log(val)
    }
  }
  loop(path, result)
  return result
}
