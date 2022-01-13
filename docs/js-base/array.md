---
title: 数组基础
author: Tmier
date: 2022-01-12
---
<ToxicSoup />
# 数组

##  声明

### 创建空数组

```js
let arr = new Array()
let arr = []
```

## 数组方法

### push

`特质`

- 作用于末端: 添加
- 直接操作原数组
- 无返回值

```js
let fruits = ['apples', 'orange', 'pear']
fruits.push('banana') // ['apples', 'orange', 'pear', 'banana']
```

### shift

`特质`

- 作用于首端: 删除
- 直接操作原数组
- 无返回值

```js
let fruits = ['apples', 'orange', 'pear']
fruits.shift() // ['orange', 'pear']
```

### pop

`特质`

- 作用于末端: 删除
- 直接操作原数组
- 无返回值

```js
let fruits = ['apples', 'orange', 'pear']
fruits.pop() // ['apples', 'orange']
```

### unshift

`特质`

- 作用于首端: 添加
- 直接操作原数组
- 无返回值

```js
let fruits = ['apples', 'orange', 'pear']
fruits.unshift('watermelon') // ['watermelon', 'apples', 'orange', 'pear']
```

### splice

`特质`

- 直接操作原数组
- 返回被删除的数组
- 允许负向索引(索引值  `-1`为末端第二位)

> 如何从数组中删除元素?
>
> 数组是对象, 所有我们可以尝试使用 `delete`
>
> ```js
> let arr = [1,2,'Go']
> delete arr[1]
> console.log(arr[1]) // undefined
> console.log(arr.length) // 3
> ```
>
> 元素被删除了, 但是数组仍然有三个元素
>
> 因为 `delete obj.key`是通过`key`来移除对应的值, 对于对象来说是可以的. 但是对于数组来说, 我们通常希望剩下的元素能够移动并且占据被释放的位置, 即`删除元素`的坐标后的元素能够整体向前移动
>
> 所有`delete`方法是办不到的, 需要使用特殊方法
>
> `Array.splice` 方法可以说是处理数组的屠龙刀. 它可以做所有事情: 添加, 删除, 和插入元素

```js
arr.splice(start[, deleteCount, elem1, ..., elemN])
// 它从索引`start`开始修改`arr`: 删除 `deleteCount`个元素并且在当前位置插入`elem1,...,elemN`. 最后返回被删除元素的数组
// PS: 当只有 `start` 参数时, 将删除从索引 `start` 开始到数组最后索引的所有值
```

usage:

```js
// - 删除
let arr = ['I', 're', 'study', 'JS']
arr.splice(1,1) // 从索引1开始删除1个元素
console.log(arr) // ["I", "study", "JS"]

// - 替换
let arr = ['I', 're', 'study', 'JS', 'right', 'now']
// --删除数组的前四项, 并使用其他内容代替他们
arr.splice(0, 4, "Let's", 'Go')
console.log(arr) // ["Let's", "Go", "right", "now"]

// - 获取被删除数组
let arr = ['I', 're', 'study', 'JS', 'right', 'now']
let removedArr  = arr.splice(1, 2)
console.log(removedArr) // ["re", "study"]

// - 允许负向索引
// -- 从索引 -1(倒数第二位) 开始删除0个元素然后插入678
// -- 好像是没办法定位倒数第一位,0是整数第一位, -1是倒数第二位,当然定位到好像也没啥意思, 最后一位了,添加的话有push, 删除的话有pop或者splice正向索引删除
let arr = [1,3,5,9]
arr.splice(-1,0,6,7,8)
console.log(arr) // [1, 3, 5, 6, 7, 8, 9]
```

### slice

`特质`

- 不改变原数组
- 获取原数组的副本(不传参时)
- 所切数组包含`start`, 到`end`之前结束(不包括`end`)
- 允许负向索引(索引值  `-1`为末端第一位)

> `slice`方法比`splice`简单的多!

```js
arr.slice([start], [end])
```

> 它会返回一个新数组, 将所有从索引 `start`到 `end`(不包括`end`)的数组想复制到一个型的数组. `start`和`end` 都可以是负数, 在这种情况下, 从末尾计算索引
>
> 它和字符串的slice有点像, 就是把子字符串替换成子数组

`usage`

```js
let arr = ['t', 'e', 's', 't']
console.log(arr.slice(1,3)) // ["e", "s"]
console.log(arr) // ["t", "e", "s", "t"]
console.log(arr.slice(-3,-1)) // ["e", "s"]
```

> 所有的支持负向索引的方法, 所谓的 `-1` 应当是末尾第一个, 因为0已经被正向索引占据了

### concat

`特质`

- 不改变原数组
- 返回全新组合的数组

> `arr.concat`创建一个新数组

语法:

```js
arr.concat(arg1, arg2,...)
```

> 参数任意: 数量任意, 值也任意(可以是数组, 可以是值)
>
> 如果参数`argN`是一个数组, 那么其中的所有元素都会被复制, 否则, 将复制参数本身
>
> 返回的是一个大杂烩, 是由调用者`arr`,参数`arg1`, `arg2`,`...`组成的全新的数组

usage:

```js
let arr = [1,2,9]
let concatArr = arr.concat(1,['Hello', 'Tmier'], '好家伙')
console.log(concatArr)// [1, 2, 9, 1, "Hello", "Tmier", "好家伙"]
console.log(arr) // [1, 2, 9]
// 如果复制对象
let includeObjArr = arr.concat(0, {a: 'xxx', b: 9})
console.log(includeObjArr) // [1, 2, 9, 0, {a: 'xxx', b: 9}]
// 如果对象中存在数组, 只会解析参数一级的数组, 参数内的数据不会递归解析, 将当做一个整体添加到新数组中
let objIncludearrArr = arr.concat(9, {a: [1,'load', 999]}, {status: 1})
console.log(objIncludearrArr) // [1, 2, 9, 9, {…}, {…}]
```

> 如果类似数组的对象具有`length`属性且 `Symbol.isConcatSpreadable: true`, 那么它就会被`concat`当做一个数组来处理: 对象`key:value`中的`value`将被添加到新数组中(key必须为数字, 非数字的`key: value`会被忽略掉), 合并到新数组的项的数量由length属性, 如果找不到相应的`key: value`, 将传入空值, 拿到`undefined`

```js
let arr = [0, 1]
let arrayLike = {
    0: '0',
    1: '1',
    a: 1,
    2: 2,
    3: 3,
    [Symbol.isConcatSpreadable]: true,
    length: 6
}
console.log(arr.concat(arrayLike)) // [0, 1, "0", "1", 2, 3, empty × 2]
console.log(arr.concat(arrayLike)[6]) // undefined
```

### for...of...

> `for..of` 不能获取当前元素的索引, 只是获取元素值

```js
let fruits = ['Apple', 'Orange', 'Pear']
// 遍历数组元素
for(let fruit of fruits) {
    console.log(fruit) // Apple, Orange, Pear
}
```

###  for...in (不推荐遍历数组)

> 因为数组也可以算是对象, 索引使用 `for...in` 来进行遍历也是可以的

```js
let arr = ['Apple', 'Orange', 'Pear']
for(let key in arr) {
    console.log(arr[key]) // Apple, Orange, Pear
}
```

但其实不推荐使用`for...in` 来遍历, 会有一些潜在问题存在:

> 1. `for...in` 会遍历 `所有属性`, 不仅仅是这些数字属性.
>
>    在浏览器和其他环节中有一种被称为`类数组`的对象, 它们看似是 `数组` . 也就是说, 它们有`length` 和索引属性, 但是也可能有其他非数字的属性和方法, 这通常是我们不需要的. `forin` 循环会把他们都列出来. 所以如果我们需要处理类数组对象, 这些`额外`的属性就会存在问题。
>
> 2. `for...in` 循环时候作用于普通对象, 并且做了对应的优化. 但是不适用于数组, 因此速度要满10 -100倍. 当然即使这样也依然非常快. 只有在遇到瓶颈时,可能会有问题, 但是我们仍然应该了解这其中的不同.

通常来说, 我们不应该用`for...in`来处理数组

### forEach

> `arr.forEach`方法允许为数组的每一个元素都运行一个函数

语法: 

```js
arr.forEach(function(item, index, array) {
    // .. do something with item
})
```

usage:

```js
['Pig', 'Fish', 'Tiger'].forEach((item, index, array) => {
    console.log(`${item} said: "I am ${index} in ${array}, Hello EveryBody!"`)
}) 
// output: 
// Pig said: "I am 0 in Pig,Fish,Tiger, Hello EveryBody!"
// Fish said: "I am 1 in Pig,Fish,Tiger, Hello EveryBody!"
// Tiger said: "I am 2 in Pig,Fish,Tiger, Hello EveryBody!"
// 如果执行函数中存在返回值, 会被抛弃和忽略
let animal = ['Pig', 'Fish', 'Tiger']
animal.forEach((item, index, array) => {
    console.log(`${item} said: "I am ${index} in ${array}, Hello EveryBody!"`)
    return `${index}: ${item}`
}) 
console.log(animal)
```



### toString

> 数组有自己的 `toString` 方法的实现, 会返回以逗号隔开的元素列表

```js
let arr = [1,2,3, '999', 'abd']
console.log(arr.toString()) // '1,2,3,999,abd'
```

数组与数字相加:

```js
let result = [] + 1
let result2 = [1] + 1
let result3 = [1,2,3] + 1
console.log(result) // '1'
console.log(result2) // '11'
console.log(result3) //1,2,31 
```

> 数组的隐式转换调用`toString`, 当 运算符`+`把一些项加到字符串后面时, 加号后面的也会被转换成字符串



## 数组其他相关

### 关于 length 

> 当我们修改数组的时候, `length`属性会自动更新. 准确来说, 它实际上不是数组元素里元素的个数, 而是最大的数字索引值加一

例如, 一个数组只有一个元素, 但是这个元素的索引值很大, name这个数组的`length`也会很大:

```js
let arr = []
arr[221] = 'Pig'
console.log(arr.length) // 222
```

虽然我们通常不会这样使用数组...

`length` 属性的另一个有意思的点是它是可写的.

如果我们手动增加他, 则不会发生任何有趣的事, 但是如果我们减少它, 数组就会被截断. 该过程是不可逆的

```js
let arr = [1,2,3,4,5]
arr.length = 2
console.log(arr) // [1,2]
arr.length = 5
console.log(arr) [1,2,,,] // 截断掉的数据不可恢复
```

所以, 清空数组最简单的方法就是: `arr.length = 0`

