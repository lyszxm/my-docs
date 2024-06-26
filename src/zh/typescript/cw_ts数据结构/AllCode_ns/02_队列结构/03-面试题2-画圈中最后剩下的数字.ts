/*
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof

输入: n = 5, m = 3
输出: 3
*/

import ArrayQueue from './01_实现队列结构Queue'

function lastRemaining(n: number, m: number): number {
  //1.创建队列结构
  const queue = new ArrayQueue<number>()

  // 2.将所有的数字加入到队列中
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  // 3.判断队列中是否还有数字
  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }

  // 直接返回
  return queue.dequeue()!
}

console.log('🚀 ~ dequeue:', lastRemaining(5, 3)) //3
console.log('🚀 ~ dequeue:', lastRemaining(10, 17)) //2
