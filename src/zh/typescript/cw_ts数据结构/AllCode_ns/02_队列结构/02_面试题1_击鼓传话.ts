import ArrayQueue from './01_实现队列结构Queue'
// 老师的
function hotPotato(names: string[], num: number): number {
  if (names.length === 0) return -1

  // 1.创建队列结构
  const queue = new ArrayQueue<string>()

  // 2.将所有的name入队操作
  for (const name of names) {
    queue.enqueue(name)
  }

  //3.淘汰的规则
  while (queue.size() > 1) {
    // 1/2 不淘汰
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }

    // 3.淘汰
    queue.dequeue()
  }

  // 4.取出最后一个
  const leftName = queue.dequeue()!
  const index = names.indexOf(leftName)
  return index
}
console.log('----------------------------')
const index = hotPotato(['l', 'y', 's'], 3)
console.log('🚀 ~ file: 02_面试题1_击鼓传话.ts:30 ~ index:', index)
console.log('----------------------------')

/*我的 */
function hotPotato1(names: string[], num?: number) {
  if (names.length === 0) return {}

  let number: number = 0
  if (num) {
    number = num
  }
  let result = {
    finalPotato: '',
    ary: [] as string[]
  }

  // 知道循环只剩下一个时才结束
  while (names.length != 1) {
    // 前面的都要重新入队
    for (let i = 0; i < number - 1; i++) {
      const name = names.shift()
      if (name) names.push(name)
    }
    // 拿到了烫红薯就得不用入队了，直接送走
    let str = names.shift() as string
    console.log(str)

    result.ary.push(str)
  }

  result.finalPotato = names[0]
  return result
}

let result = hotPotato1(['l', 'y', 's'], 3)
console.log('🚀 ~ file: 02_面试题1_击鼓传话.ts:30 ~ result:', result)
