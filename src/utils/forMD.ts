import { resolve } from "pathe";
import fg from "fast-glob"; //https://github.com/mrmlnc/fast-glob#onlydirectories

export function getCatalogueByPath(
  path: string,
  tempObj = { isLink: true, cateIcon: "", fileIcon: "", collapsible: true }
) {
  let result: any = {
    icon: tempObj.cateIcon || "",
    text: path.split("/")[1] || "",
    prefix: path.split("/")[1] + "/" || "", // 'mk_ts/',
    link: tempObj.isLink ? path.split("/")[1] + "/" : "", //给它就是可以点击了
    collapsible: tempObj.collapsible,
    children: [],
  };

  function diGui(path: string, val) {
    /*
    ! 不需要的文件可以命名有_ns的结尾
     */
    let thisDir = fg.sync(["!*_ns", "*"], {
      onlyDirectories: true,
      cwd: resolve(__dirname, "../", path),
    });
    let thisMd = fg.sync(["*.{md,MD}"], {
      dot: true,
      cwd: resolve(__dirname, "../", path),
    });
    // console.log(val)

    // console.log('000000', path + `\t\t`, thisDir, thisMd)
    // console.log(thisDir, '88', thisMd)

    if (thisMd.length > 0) {
      for (let md of thisMd) {
        if (md == "README.md") continue;
        val.children.push({
          icon: tempObj.fileIcon || "",
          text: md.split(".")[0] || "",
          prefix: md.split(".")[0] + "/" || "", // 'mk_ts/',
          link: tempObj.isLink ? md.split(".")[0] + "/" : "", //给它就是可以点击了
          collapsible: tempObj.collapsible,
        });
      }
      // 如果你没有这个首页那么清除父亲的link项
      if (!thisMd.includes("README.md" || "README.MD")) {
        val.link = "";
      }
    }
    // 这是文件的
    if (thisDir.length > 0) {
      for (let dir of thisDir) {
        let temp = {
          icon: tempObj.cateIcon || "",
          text: dir || "",
          prefix: dir + "/" || "", // 'mk_ts/',
          link: tempObj.isLink ? dir + "/" : "", //给它就是可以点击了
          collapsible: tempObj.collapsible,
          children: [],
        };
        val.children.push(temp);
        diGui(path + `/${dir}`, temp);
      }
    } else {
      // console.log('我是最后面的')
      // console.log(val)
    }
  }
  diGui(path, result);
  return result;
}
