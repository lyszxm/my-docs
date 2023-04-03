// 05_有效的括号.ts
/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  每个右括号都有一个对应的相同类型的左括号。
  输入：s = "()[]{}"
  输出：true
*/

interface kuohao {
  '{': '}'
  '[': ']'
  '(': ')'
}
type LeftKuohao = keyof kuohao
import { ArrayStack } from './01_实现栈结构stack'
/**
 * @description: 我的
 * @param {string} kuohao
 * @return {*}
 */
function isValidByMe(kuohao: string): boolean {
  let result = true
  let strAry = kuohao.split('')
  if (strAry.length > 0) {
    let kuohaoMap: kuohao = {
      '{': '}',
      '[': ']',
      '(': ')'
    }
    let stack = new ArrayStack<string>()
    for (let i = 0; i < strAry.length; i++) {
      let nowKuohao = strAry[i]

      //如果匹配到左括号的话
      if (Object.keys(kuohaoMap).includes(nowKuohao)) {
        //进行入栈 存与之相对应的括号
        stack.push(kuohaoMap[nowKuohao as LeftKuohao])
      } else {
        if (!(stack.pop() === nowKuohao)) {
          return (result = false)
        }
      }
    }
    console.log(kuohao, '🚀 ~ file: 05_有效的括号.ts:45 ~ isValid ~ data:', stack.get())
    !stack.isEmpty() && (result = false)
  }
  return result
}
console.log('------------------')

console.log(isValidByMe('({{{{}}}))')) // false
console.log(isValidByMe('({{{')) // false
console.log(isValidByMe('))))))')) // false

/**
 * @description: 老事的
 * @param {string} s
 * @return {*}
 */
function isValid(s: string): boolean {
  // const stack = new ArrayStack<string>()
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        //右括号
        if (c !== stack.pop()) return false
        break
    }
  }
  // return stack.isEmpty() // 最后遍历完了 也要判断一下stack是否为空
  return stack.length === 0 // 最后遍历完了 也要判断一下stack是否为空
}
console.log('------------------')
console.log(isValid('({}){')) // false
console.log(isValid('({})')) // true
console.log(isValid('({{{')) // false
console.log(isValid('))))))')) // false
