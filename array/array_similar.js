/*
 类数组对象
 必须满足条件：
 1. 有length属性
 2. 索引属性为数字或字符串数字
 3. 不是数组(没有数组方法)
*/

const arrayLike1 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

console.log(arrayLike1); // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
console.log(Array.isArray(arrayLike1), typeof arrayLike1, arrayLike1[0], arrayLike1.length); // false object a 3

console.log('常见的类数组对象');
function testArguments() {
    console.log(arguments, arguments[0], arguments.length, Array.isArray(arguments));// [Arguments] { '0': 'a', '1': 'b', '2': 'c' } a 3 false
}
testArguments('a', 'b', 'c');
// DOM NodeList 在浏览器中
// const nodes = document.querySelectorAll('div');
// console.log(nodes, Array.isArray(nodes)); // NodeList(3) [div, div, div] false

// 字符串
const str2 = 'hello';
console.log(str2, str2[0], str2.length, Array.isArray(str2)); // hello h 5 false

// 类数组与数组的区别

const realArray = ['a', 'b', 'c'];
const likeArray = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// 原型链不同
console.log(Object.getPrototypeOf(realArray)); // Object(0) []
console.log(Object.getPrototypeOf(likeArray)); // [Object: null prototype] {}

// 方法不同
console.log('push' in realArray, 'push' in likeArray); // true false

// length 自动更新
realArray.push('d'); console.log(realArray.length); // 4
likeArray[3] = 'd'; console.log(likeArray.length); // 3
likeArray.length = 4; console.log(likeArray.length); // 4



