function shallowClone(obj) {
  const newObj = {}
  for (let prop in obj) {
    if (obj.hasownProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }
  return newObj
}

/*背这个 */
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj)

  if (obj instanceof RegExp) return new RegExp(obj)
  // 可能是对象或者普通的值  如果是普通的话是不需要深拷贝
  if (typeof obj !== 'object') return obj
  // 如果原本以引用了这个对象的值，我们就直接返回这个新创建的
  if (hash.get(obj)) return hash.get(obj)
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  let cloneObj = new obj.constructor()

  hash.set(obj, cloneObj)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}
// 深拷贝测试
const obj1 = {
  name: 'init',
  arr: [1, [2, 3], 4]
}
const obj4 = deepClone(obj1) // 一个深拷贝方法
obj4.name = 'update'
obj4.arr[1] = [5, 6, 7] // 新对象跟原对象不共享内存

console.log('obj1', obj1) // obj1 { name: 'init', arr: [ 1, [ 2, 3 ], 4 ] }
console.log('obj4', obj4) // obj4 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }
;(function () {
  //牛逼版
  function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj
    }

    let cache = null
    if (!deepClone.cache) {
      deepClone.cache = new WeakMap()
    }

    cache = deepClone.cache

    if (cache.has(obj)) {
      return cache.get(obj)
    }

    if (obj instanceof Set) {
      const target = new Set()
      // cache.set(target, obj);
      cache.set(obj, target)
      obj.forEach(item => {
        target.add(deepClone(item))
      })
      return target
    } else if (obj instanceof Map) {
      const target = new Map()
      cache.set(obj, target)
      obj.forEach((item, index) => {
        target.set(index, deepClone(item))
      })
      return target
    } else if (obj instanceof RegExp) {
      const target = new RegExp(obj)
      return target
    } else {
      const target = new obj.constructor()
      cache.set(obj, target)
      for (let key in obj) {
        target[key] = deepClone(obj[key])
      }
      return target
    }
  }
  var obj1 = {
    a: [10, { b: 10 }],
    b: new Date(),
    c: {
      f: [1, undefined, 3]
    },
    func: function () {
      console.log('function')
    },
    map: new Map([[1, 2]])
    // g: obj1.c, // 循环引用就会有问题
  }
  console.log(deepClone(obj1))
})()
