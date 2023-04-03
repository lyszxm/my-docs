import { ArrayStack } from './01_实现栈结构stack'
// -04_prac_十进制转二进制.ts
/**
 * @description: 我的
 * @param {number} decmial
 * @param {number} baseData
 * @return {*}
 */
function decimalToBinaryByMe(decmial: number, baseData: number): string {
  const stackInstance = new ArrayStack<number>()
  let result: string = ''
  while (decmial >= baseData) {
    let yuNumber: number = decmial % baseData
    stackInstance.push(yuNumber)
    decmial = Math.floor(decmial / baseData)
    decmial < baseData && stackInstance.push(decmial)
  }

  while (!stackInstance.isEmpty()) {
    result += stackInstance.pop()
  }

  return result
}

console.log(decimalToBinaryByMe(35, 2))
console.log(decimalToBinaryByMe(35, 8))

/**
 * @description: 老师的
 * @param {number} decmial
 * @return {*}
 */
function decimalToBinary(decmial: number): string {
  const stackInstance = new ArrayStack<number>()
  let result: string = ''
  while (decmial > 0) {
    const result = decmial % 2
    stackInstance.push(result)
    decmial = Math.floor(decmial / 2)
  }

  let binary = ''
  while (!stackInstance.isEmpty()) {
    binary += stackInstance.pop()
  }

  return binary
}
console.log('∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟∟')

console.log('😂', decimalToBinary(35), decimalToBinary(100))
console.log(decimalToBinary(35))

export { }