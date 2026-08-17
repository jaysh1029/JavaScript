// 数组方法

console.log('添加/删除元素：');

console.log('push/pop 操作末尾元素');
const stack = [1, 5, 7];
console.log(stack); // [ 1, 5, 7 ]
stack.push(9);
console.log(stack); // [ 1, 5, 7, 9 ]

const popped = stack.pop(); // 删除最后一个元素，并返回这个元素
console.log(popped, stack);  // 9 [ 1, 5, 7 ]

console.log('unshift/shift 操作开头元素');

const queue = [3, 6, 2];
console.log(queue); // [ 3, 6, 2 ]
queue.unshift(1, 7); // 向开头插入两个元素 1和7  ★★★
console.log(queue); // [ 1, 7, 3, 6, 2 ]
const shifted = queue.shift(); // 删除第一个元素并返回这个元素  ★★★
console.log(shifted, queue); // 1 [ 7, 3, 6, 2 ]

// splice 万能操作
console.log('splice 万能操作：增删改');
const arr9 = Array.from('abcde');
console.log(arr9); // [ 'a', 'b', 'c', 'd', 'e' ]

const removed = arr9.splice(1, 2); // 删除：从索引1开始删除2个元素，并返回这两个元素   ★★★
console.log('删除后：', removed, arr9); // 删除后： [ 'b', 'c' ] [ 'a', 'd', 'e' ]

arr9.splice(1, 0, 'x', 'y'); // 插入：在索引1位置插入两个元素  ★★★
console.log('插入元素：', arr9);  // 插入元素： [ 'a', 'x', 'y', 'd', 'e' ]

arr9.splice(1, 1, 'm', 'n'); // // 替换：从索引1开始删除1个并插入新元素  ★★★
console.log(arr9); // [ 'a', 'm', 'n', 'y', 'd', 'e' ]

console.log('slice 截取/复制');

const arr10 = [3, 5, 1, 2, 7];
console.log(arr10);
const sliced1 = arr10.slice(1, 4); // 取出索引1到4之间的元素，原数组不变 (不包括索引4 即不包括末尾索引元素)  ★★★
console.log(sliced1, arr10); // [ 5, 1, 2 ] [ 3, 5, 1, 2, 7 ]
const sliced2 = arr10.slice(2); // 取出从索引2到末尾的所有元素  ★★★
console.log(sliced2, arr10); // [ 1, 2, 7 ] [ 3, 5, 1, 2, 7 ]
const sliced3 = arr10.slice(-2); // 从倒数第二个元素开始取到末尾  ★★★
console.log(sliced3, arr10); // [ 2, 7 ] [ 3, 5, 1, 2, 7 ]
const copy = arr10.slice(); // 取出所有元素，浅拷贝   ★★★
console.log(copy, arr10); // [ 3, 5, 1, 2, 7 ] [ 3, 5, 1, 2, 7 ]

console.log('concat 合并数组');
const arr11 = [2, 3];
const arr12 = [5, 7];
const arr13 = [1, 9];
const merged = arr11.concat(arr12, arr13); // 合并数组   ★★★
console.log(merged); // [ 2, 3, 5, 7, 1, 9 ]
const merged2 = arr11.concat(7, 8, 0); // 添加单个元素   ★★★
console.log(merged2); // [ 2, 3, 7, 8, 0 ]

console.log('join 转字符串');
const arr14 = ['Hello', 'World', 'JavaScript'];
console.log(arr14.join()); // 拼接元素，默认使用逗号 Hello,World,JavaScript
console.log(arr14.join(' ')); // 用空格拼接元素 Hello World JavaScript
console.log(arr14.join('---')); // 用---拼接元素 Hello---World---JavaScript
console.log(arr14.join('')); // 直接拼接元素 HelloWorldJavaScript



