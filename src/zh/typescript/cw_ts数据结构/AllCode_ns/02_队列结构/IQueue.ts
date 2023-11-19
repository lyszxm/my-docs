
interface IQueue<T> extends IList<T> {
  // 入队方法
  enqueue(element: T): void

  // 出对方法
  dequeue(): T | undefined

  // // peek方法
  // peek(): T | undefined

  // // isEmpty是否位空
  // isEmpty(): boolean

  // // 元素的个数
  // size(): number
}

export default IQueue
