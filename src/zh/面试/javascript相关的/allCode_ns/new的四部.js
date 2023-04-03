/*
1- 创建一个对象用来存储构造函数的属性
2- 从arguments中取出第一个参数，这个参数便是调用时的构造函数
3- 将新对象的原型通过__proto__指向构造函数的prototype
4- 通过apply方法改变构造函数的this指向，从而实现将构造函数内部的属性添加进新创建的对象中
5- 判断构造函数是否有返回值
  - 有返回值且其类型为一个对象或者一个函数，则返回构造函数的返回值
  - 否则就返回我们新创建的对象
*/
function instantiateFactory() {
  const obj = {}
  console.log(arguments)
  // 取出第一个参数: 函数的构造函数
  const Constructor = [].shift.call(arguments)
  // 将新对象的原型指向构造函数
  console.log(arguments)
  obj.__proto__ = Constructor.prototype
  // 改变构造函数的this指向至新创建的对象
  const result = Constructor.apply(obj, arguments)
  // 如果构造函数有返回值且它的值为对象或者函数则将其返回
  if (result && (typeof result == 'object' || typeof result == 'function')) {
    return result
  }
  // 否则返回此对象
  return obj
}
//------------------测试用例--------------------
function Person(name, bodyWeight, dailyExercise) {
  this.bodyWeight = bodyWeight
  this.dailyExercise = dailyExercise
  this.name = name
}
const factory = instantiateFactory(Person, '神奇的程序员', '22')
console.log(factory.age)
console.log(factory.bodyWeight)
console.log(factory.dailyExercise)

/*!记住这个 */
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.call(obj, ...args)
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res
  }
  return obj
}

myNew(Person, '神奇的程序员', '22')