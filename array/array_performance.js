// 性能优化建议
// 字面量是最快的 5000以上 of排第二 3000以下Array()排第二
console.log('数组创建性能');
const arrLen = 100000;
console.time('字面量 []');
for (let i = 0; i < arrLen; i++) {
    const arr = [1, 2, 3];
}
console.timeEnd('字面量 []'); // 字面量 []: 0.7ms

console.time('Array()');
for (let i = 0; i < arrLen; i++) {
    const arr = new Array(1, 2, 3);
}
console.timeEnd('Array()'); // Array(): 1.507ms

console.time('Array.of');
for (let i = 0; i < arrLen; i++) {
    const arr = Array.of(1, 2, 3);
}
console.timeEnd('Array.of'); // Array.of: 10.317ms


// 遍历性能对比

const perfArr = Array.from({ length: 1000000 }, (_, i) => i);

console.time('for 循环');
let sumFor = 0;
for (let i = 0; i < perfArr.length; i++) {
    sumFor += perfArr[i];
}
console.timeEnd('for 循环'); // for 循环: 5.004ms

let sumForOf = 0;
console.time('for...of');
for (let item of perfArr) {
    sumForOf += item;
}
console.timeEnd('for...of');// for...of: 6.964ms

let sumForEach = 0;
console.time('forEach');
perfArr.forEach(item => sumForEach += item);
console.timeEnd('forEach'); // forEach: 7.6ms

let sumReduce = 0;
console.time('reduce');

perfArr.reduce((acc, curr) => acc + curr, 0);
console.timeEnd('reduce'); // reduce: 4.977ms
/*
for循环是最快的 reduce 表现不稳定
for 循环: 4.294ms
for...of: 6.135ms
forEach: 7.974ms
reduce: 5.421ms

for 循环: 4.814ms
for...of: 6.543ms
forEach: 8.779ms
reduce: 5.407ms

for 循环: 4.719ms
for...of: 5.841ms
forEach: 7.796ms
reduce: 9.701ms
*/

// 类数组转换性能
console.log('类数组转换性能');

const bigLike2 = { length: 100000 };
for (let i = 0; i < 100000; i++) {
    bigLike2[i] = i;
}
console.time('Array.from');
Array.from(bigLike2);
console.timeEnd('Array.from'); // Array.from: 2.508ms

console.time('slice.call');
Array.prototype.slice.call(bigLike2);
console.timeEnd('slice.call');
console.time('手动循环'); // slice.call: 2.927ms
function manualToArrays(obj) {
    const arr = [];
    for (let i = 0; i < obj.length; i++) {
        arr.push(obj[i]);
    }
    return arr;
}
manualToArrays(bigLike2);
console.timeEnd('手动循环'); // 手动循环: 0.917ms

console.log('最佳实践总结')

/**
 * //  ★★★
 * 1. 数组创建
 *    - 优先使用字面量 []
 *    - 需要特定长度用 new Array(length)
 *    - 需要从类数组转换用 Array.from()
 * 
 * 2. 数组遍历
 *    - 性能要求高：使用 for 循环
 *    - 普通场景：使用 forEach
 *    - 需要转换结果：使用 map
 *    - 需要筛选：使用 filter
 * 
 * 3. 类数组转换
 *    - 推荐使用 Array.from()
 *    - 需要映射时直接用 Array.from(arr, mapper)
 *    - 避免使用扩展运算符（除非确信可迭代）
 * 
 * 4. 内存优化
 *    - 避免创建过多的临时数组
 *    - 使用链式操作时注意中间数组
 *    - 大数组操作考虑使用流式处理
 */

console.log('优化建议：');

// 避免中间数组，不推荐常见很多中间数组
const result_1 = [1, 2, 3, 4, 5].filter(x => x > 2).map(x => x * 2).reduce((a, b) => a + b, 0);
console.log(result_1); // 24

// 推荐做法：减少中间数组
//  ★★★
const result_2 = [1, 2, 3, 4, 5].reduce((acc, curr) => {
    if (curr > 2) {
        acc += curr * 2;
    }
    return acc;
}, 0);
console.log(result_2); // 24

// 批量转化优化
const largeData = { length: 10000 };
for (let i = 0; i < 10000; i++) {
    largeData[i] = i;
}
// 一次性转换并处理
console.time('转换+处理 分布');
const temp = Array.from(largeData);
const processed = temp.map(x => x * 2);
console.timeEnd('转换+处理 分布');

console.time('一步处理');
//  ★★★
const processed2 = Array.from(largeData, item => item * 2);

console.timeEnd('一步处理');
/*
多次执行结果：一步处理 略快
转换+处理 分布: 0.34ms
一步处理: 0.277ms

转换+处理 分布: 0.44ms
一步处理: 0.363ms

转换+处理 分布: 0.351ms
一步处理: 0.357ms

转换+处理 分布: 0.453ms
一步处理: 0.339ms

*/






