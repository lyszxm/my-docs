/*新来的老师给班里的同学排一个队。
每个学生有一个能力值。一些学生是刺头，不会听老师的话自己选位置;
非刺头同学在剩下的位置按照能力值从小到大排。
对于非刺头同学，如果发现他前面有能力值比自己高的同学，他不满程度就增加，增加的数量等于前面能力值比他大的同学的个数。
刺头不会产生不满。
如果整个班级累计的不满程度超过k,那么老师就没有办法教这个班级了。

输入描述
输入有三行:
第一行为n,m,k空格隔开，分别表示班级总人数，刺头人数,最大不满程度k。
第二行为刺头所在位置 (从0开始，即排队数组的下标，比如1代表队伍中第2个同学是刺头)，位置的数组也是排序的
第三行有n个数，空格隔开，表示老师排好的队中每个人的能力值，其中非刺头同学一定按照能力值从小到大排好序的  

输出描述
0表示老师可以继续教这个班级
1表示老师无法继续教这个班级
输入

4 2 3
0 1
1810 1809 1801 1802

输出
1

说明
刺头在0,1位置。2号同学不满程度2(前面两个刺头能力值都比他大)，3号同学不满程度2，总不满程度4，大于3。输出不能教这班 (1)。
*/
/**
 *
 * @param param0
 * @returns
 */
function hasAbilityForClass(
  { n = 0, m = 0, k = 0 } = {},
  ciTouPos = ``,
  everyNumberAbility = ``
): 0 | 1 {
  /**
   * @description 字符转数组
   * @param str
   * @returns
   */
  function toArray(str: string) {
    if (str.trim() === '') return []
    return str
      .split(/\s+/g)
      .map(item => parseInt(item))
      .filter(item => !Number.isNaN(item))
  }

  const ciTouPosAry = toArray(ciTouPos) // 刺头位置也是排序的 从0开始，位置可以随便选

  const everyNumberAbilityAry = toArray(everyNumberAbility)

  if (n != everyNumberAbilityAry.length) {
    throw new Error('班级总人数不匹配')
  }
  if (ciTouPosAry.length != m) {
    throw new Error('刺头人数不匹配')
  }
  if (ciTouPosAry.findIndex(item => item > n - 1) != -1) {
    throw new Error('刺头的位置不符合要求')
  }

  let noSatisfactionCount_inClass = 0 // 非刺头，不满意程度

  let tempAbiliyAry: number[] = []
  for (let i = 0; i < n; i++) {
    let nowStuAbilityNumber = everyNumberAbilityAry[i]
    tempAbiliyAry.push(nowStuAbilityNumber)
    if (ciTouPosAry.includes(i)) {
      continue
    }
    console.log(tempAbiliyAry, nowStuAbilityNumber)

    tempAbiliyAry.length > 0 &&
      tempAbiliyAry.forEach((item, index) => {
        if (item > nowStuAbilityNumber) noSatisfactionCount_inClass += 1
      })
  }
  console.log(
    '🚀 ~ file: 华为od算法题1.ts:61 ~ noSatisfactionCount_inClass:',
    noSatisfactionCount_inClass
  )
  return noSatisfactionCount_inClass > k ? 1 : 0
}

console.log(hasAbilityForClass({ n: 4, m: 2, k: 3 }, `0 2 `, `1810  1802 1801 1809`))
