// 假设我们在开发一个可 check 的树组件，请编写一个 handleUnCheck 方法,用于实现某个树节点被取消选中后，计算整棵树的选中状态，所有子孙节点需要被取消选中。方法参数说明:
// 1.treeData-嵌套型的树结构，结构描述见下面代码块中的TreeData。
// 2.preCheckedKeys-之前的选中状态，值内容为选中节点的 key数组。
// 3.key-将要被取消选中的节点 key。
// 方法输出说明:取消选中之后的树选中状态，值内容为选中节点的 key数组。
// 输入:preCheckedKeys: ['1', '1-1', '1-1-1', '2'], key: '1'输出:['2']，请用ts实现type Key = string;

type oneNode<Key> = {
  key: Key
  children?: TreeData<Key>
}
type TreeData<Key> = Array<oneNode<Key>>

type CheckedKeys<Key> = Array<Key>

function handleUnCheck<Key>(
  treeData: TreeData<Key>,
  preCheckedKeys: CheckedKeys<Key>,
  key: Key
): [] {
  /**
   * @description 是否有子节点
   * @param oneNode
   * @returns Boolean
   */
  function isHasChildren<Key>(oneNode: oneNode<Key> | undefined): Boolean {
    return (oneNode && oneNode.children && oneNode.children.length > 0) as Boolean
  }

  /**
   * @description 递归找出这个要被取消选中的节点的树
   * @param td  大树
   * @param willBeCancelKey 要被取消的key
   * @returns
   */
  function tree2FindNode<Key>(td, willBeCancelKey): oneNode<Key> | undefined {
    console.log(td, '\n')
    for (let i = 0; i < td.length; i++) {
      let node: oneNode<Key> = td[i]
      let nowKey = td[i].key as String

      // console.log(nowKey, willBeCancelKey)

      if (nowKey === willBeCancelKey) {
        return node
      }
      // 如果有子节点
      if (isHasChildren(node)) {
        return tree2FindNode(node.children, willBeCancelKey)
      }
    }
  }

  /**
   * @description 节点操作
   * @param willBeCanceledTreeData  节点数据
   * @param cancelCheckedArrayKeys
   * @param canCancelCheckedArrayKeys
   */
  function node2FindKeys<Key>(
    willBeCancelednodeData: oneNode<Key>,
    cancelCheckedArrayKeys: String[],
    canCancelCheckedArrayKeys: String[]
  ) {
    let nowKey = willBeCancelednodeData!.key as String
    let nowChildrenArray = willBeCancelednodeData!.children
    // 这里可以操作了，因为nowkey就是从树中找出的节点需要被取消选中的
    !cancelCheckedArrayKeys.includes(nowKey) && cancelCheckedArrayKeys.push(nowKey)
    removeOneFromArray(canCancelCheckedArrayKeys, nowKey)

    if (nowChildrenArray == undefined) return

    for (let i = 0; i < nowChildrenArray!.length; i++) {
      let nowClNode = nowChildrenArray[i]!.children
      let nowClKey = nowChildrenArray[i]!.key as String
      console.log('🚀 ~ file: 树节点选中状态.ts:76 ~ nowClKey:', nowClKey)
      if (isHasChildren(willBeCancelednodeData) && nowClNode) {
        nowClNode.forEach(item => {
          node2FindKeys(item, cancelCheckedArrayKeys, canCancelCheckedArrayKeys)
        })
      }

      // 递归继续操作
      if (canCancelCheckedArrayKeys.includes(nowClKey)) {
        !cancelCheckedArrayKeys.includes(nowClKey) &&
          cancelCheckedArrayKeys.push(nowClKey)
        removeOneFromArray(canCancelCheckedArrayKeys, nowClKey)
      }
    }
  }

  /**
   * @description 在数组中删除一项
   * @param ary
   * @param willRemove
   */
  function removeOneFromArray(ary: String[], willRemove: String) {
    let nowIndex = ary.findIndex(item => {
      return willRemove === item
    })
    nowIndex > -1 && ary.splice(nowIndex, 1)
  }

  let preCheckedArrayLength = preCheckedKeys.length
  let cancelCheckedArrayKeys: String[] = []
  let canCancelCheckedArrayKeys: String[] = preCheckedKeys.slice(0) as String[]

  if (!key || !(preCheckedArrayLength > 0) || !preCheckedKeys.includes(key)) {
    return []
  }
  let willBeCancelednodeData: oneNode<Key> | undefined = tree2FindNode<Key>(treeData, key) // !有用
  // 循环所有已选中的
  if (willBeCancelednodeData == undefined) return []
  for (let i = 0; i < preCheckedArrayLength; i++) {
    let nowCheckedKey = preCheckedKeys[i] as String
    if (cancelCheckedArrayKeys.includes(nowCheckedKey)) continue
    node2FindKeys<Key>(
      willBeCancelednodeData,
      cancelCheckedArrayKeys,
      canCancelCheckedArrayKeys
    )
  }

  return canCancelCheckedArrayKeys as []
}

const TREE_DATA = [
  {
    key: 'a-1',
    children: [
      {
        key: 'b-1',
        children: [{ key: 'c-1-1' }, { key: 'c-1-2' }]
      },
      { key: 'b-2' },
      { key: 'b-3' }
    ]
  },
  {
    key: 'a-2'
  }
]

// console.log(handleUnCheck<String>(TREE_DATA, ['a-1', 'b-1', 'b-2', 'c-1-1'], 'c-1-1')) // ['a-1', 'b-1', 'b-2']
console.log(handleUnCheck<String>(TREE_DATA, ['a-1', 'b-1', 'b-2', 'c-1-1'], 'c-1-1')) // ['a-1', 'b-1', 'b-2']
console.log(handleUnCheck<String>(TREE_DATA, ['a-1', 'b-1', 'c-1-1', 'a-2'], 'a-1')) // ['a-2']

// export {}
