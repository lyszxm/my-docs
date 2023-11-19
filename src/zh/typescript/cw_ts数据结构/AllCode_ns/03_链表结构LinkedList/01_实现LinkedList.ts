// 1.创建Node 节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 2.创建LinkedList的类

class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  /**
   * @description: 追加节点
   * @param {T} value
   * @return {*}
   */
  append(value: T) {
    // 1.根据value创建一个新节点
    const newNode = new Node(value)

    //2.判断this.head是否为null
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head

      // 当它有下一个就直接一直循环到末尾的那一个
      while (current.next) {
        current = current.next
      }
      // current 肯定是指向最后一个节点
      current.next = newNode
    }
    // 3.数量加加
    this.size++

    return this
  }

  /**
   * @description: 遍历链表的方法
   * @return {*}
   */
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  /**
   * @description: 插入方法 -my
   * @return {*}
   */
  insertMy(value: T, position: number): boolean {
    console.log(position, this.size)

    // 1.越界的判读
    if (position < 0 || position > this.size) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head // 顺序不能反
      this.head = newNode
    } else {
      let current = this.head
      let index = 0
      while (current && current.next) {
        current = current.next
        if (index == position - 1) break
        index++
      }
      if (current) {
        newNode.next = current.next
        current.next = newNode
      }
    }
    this.size++

    return true
  }

  /**
   * @description: 插入方法
   * @return {*}
   */
  insert(value: T, position: number): boolean {
    console.log(position, this.size)

    // 1.越界的判读
    if (position < 0 || position > this.size) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head // 顺序不能反
      this.head = newNode
    } else {
      // 双指针
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }

      newNode.next = current
      previous!.next = newNode
    }
    this.size++

    return true
  }

  /**
   * @description: 移除数据
   * @param {number} position
   * @return {*}
   */
  removeAt(position: number): T | null {
    // 1.越界的判读
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }

      // 找到需要的节点
      previous!.next = current?.next ?? null
    }
    this.size--
    // 返回被删的那个
    return current?.value ?? null
  }

  /**
   * @description: 获取方法
   * @return {*}
   */
  get(position: number) {
    // 越界
    if (position < 0 || position >= this.length) return null

    //2.查找元素
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }

    return current?.value ?? null
  }
}
const link = new LinkedList<string>()

// link.append('a').append('b').append('c')

link.insert('3', 3)
link.insert('1', 0)
link.insert('5', 4)
link.insert('34', 1)
link.insert('347', 2)
link.traverse()
console.log(link.removeAt(2))
link.traverse()
console.log(link.get(1))
console.log('🚀 ~ file: ~ link:', link.length)

export {}
