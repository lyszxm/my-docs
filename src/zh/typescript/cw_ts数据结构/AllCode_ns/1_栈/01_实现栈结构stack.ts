// -01_实现栈结构stack.ts
// 封装一个栈
class ArrayStack<T = any> {
  private data: T[] = []

  /**
   * @description: 压栈
   * @param {T} element
   * @return {*}
   */
  push(element: T): void {
    this.data.push(element)
  }

  /**
   * @description: pop方法:将栈顶的元素弹出战(返同出去，并且从栈顶移除掉)
   * @return {*}
   */
  pop(): T | undefined {
    return this.data.pop() //pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
  }

  /**
   * @description: peek方法:看一眼栈顶元素,但是不进行任何的操作
   * @return {*}
   */
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  /**
   * @description: isEmpty:·判断栈是否为空
   * @return {*}
   */
  isEmpty(): boolean {
    return this.data.length == 0
  }
}

const stack1 = new ArrayStack<string>()

stack1.push('string')
stack1.push('nononn')
console.log('🚀 ~ file: 01_实现栈结构stack.ts:39 ~ isEmpty:', stack1.isEmpty())
const res = stack1.pop()

if (res) {
  console.log(res.split(''))
}
res?.split('')
// console.log(process.env)

export { ArrayStack }
