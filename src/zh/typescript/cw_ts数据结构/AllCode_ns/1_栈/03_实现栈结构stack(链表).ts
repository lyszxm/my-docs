import IStack from './IStack'

// 封装一个栈
class ArrayStack<T = any> implements IStack<T> {
  push(element: T): void {
    throw new Error('Method not implemented.')
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  size(): number {
    throw new Error('Method not implemented.')
  }
}
export {}
