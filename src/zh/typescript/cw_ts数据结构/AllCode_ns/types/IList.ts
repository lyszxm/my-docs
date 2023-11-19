interface IList<T> {
  // peek方法
  peek(): T | undefined

  // isEmpty是否位空
  isEmpty(): boolean

  // 元素的个数
  size(): number
}
