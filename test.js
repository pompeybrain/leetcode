if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}

function generateArr (specArr) {
  let arr = specArr[0]
  for (let i = 1; i < specArr.length; i++) {
    arr = cartesianProduct(arr, specArr[i])
  }
  return arr
}

//笛卡尔积
function cartesianProduct (arr1, arr2) {
  let product = []
  for (let i = 0; i < arr1.length; i++) {
    let a = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
      let b = arr2[j]
      let res
      if (!Array.isArray(a) && !Array.isArray(b)) {
        res = [a, b]
      } else if (Array.isArray(a) && !Array.isArray(b)) {
        res = a.slice()
        res.push(b)
      } else {
        res = a.concat(b)
      }
      product.push(res)
    }
  }
  return product
}

const a = ['red', 'blue', 'green']
const b = [10, 20, 30]
const c = [39, 40, 59]

// console.log(generateArr([a, b, c]))

/**
 *
 * ArrayList 存了所有的数据
 * 初始新建一个空的Map用来存MaterialNo：key为MaterialNo，可能的值为1, 2, 3
 * 1：表示仍没有EngrgData为1的
 * 2：表示有且只有一个EngrgData为1且workCenter为空的MaterialNo
 * 3：表示不只一个EngrgData为1的MaterialNo
 *  遍历list:
 *   if Map has MaterialNo
 *      取val (val为Map中对应MaterialNo的值)
 *      if EngrgData == 1
 *         if val == 2 : 有非法数据 不导入 返回（超过一个EngrgData == 1的限制了！）
 *         else if val == 1
 *            if workCenter 为空 : 设置对应的值为2
 *            else 有非法数据 不导入 返回（EngrgData == 1但workCenter不为空！）
 *      else : 忽略
 *   else
 *      if EngrgData == 1 && workCenter 为空: 设置对应的值为2
 *      else : 设置值为1
 *
 *  遍历完之后要校验是否Map中是否仍有为1的值 即： 一直没有EngrgData == 1 的 MaterialNo 数据
 *  if 全为2数据合法 导入
 *  else 数据不合法  不导入 返回
 */


function wrapper () {
  let i = 0
  return function () {
    this.id = i++
  }
}

let componentFn = wrapper()

console.log(new componentFn())
console.log(new componentFn())
console.log(new componentFn())
