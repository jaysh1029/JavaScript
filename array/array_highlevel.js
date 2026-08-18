// 数组高级操作
console.log('sort 排序');
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
numbers.sort();
console.log(numbers); //  [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

// 自定义升序/降序
const nums7 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
nums7.sort((a, b) => a - b); // 升序
console.log(nums7); //  [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
nums7.sort((a, b) => b - a); // 降序
console.log(nums7); //  [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]

// 对象排序
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
people.sort((a, b) => a.age - b.age); // 按年龄排序
console.log(people); // [  { name: 'Bob', age: 25 },  { name: 'Alice', age: 30 },  { name: 'Charlie', age: 35 }]

// 反转
console.log('reverse 反转');
const nums9 = [9, 2, 3, 4, 5];
nums9.reverse();
console.log(nums9); // [ 5, 4, 3, 2, 9 ]

console.log('flat/flatMap  扁平化');
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested); // [ 1, [ 2, 3 ], [ 4, [ 5, 6 ] ] ]
const flat1 = nested.flat(1);
console.log(flat1); // [ 1, 2, 3, 4, [ 5, 6 ] ] 扁平一层  ★★★ 
const flat2 = nested.flat(2);
console.log(flat2); // [ 1, 2, 3, 4, 5, 6 ] 扁平两层  ★★★ 

const deep = [1, [2, [3, [4, [5]]]]];
console.log(deep.flat(Infinity)); // [ 1, 2, 3, 4, 5 ] 无限扁平化  ★★★ 

// 映射后扁平化 flatMap 主要用于一维数组   ★★★ 
const sentences = ['Hello world', 'JavaScript is awesome'];
const words = sentences.flatMap(s => s.split(' '));
console.log(words); // [ 'Hello', 'world', 'JavaScript', 'is', 'awesome' ]

console.log('fill 填充');
const arr15 = [1, 2, 3, 4, 5];
arr15.fill(0); // 用0 填充所有元素  ★★★ 
console.log(arr15); // [ 0, 0, 0, 0, 0 ]

const arr16 = [1, 2, 3, 4, 5];
arr16.fill(9, 1, 4);  // 在索引1到4之间填充数字 9  不包含结尾索引  ★★★ 
console.log(arr16); // [ 1, 9, 9, 9, 5 ]

console.log('indexOf lastIndexOf  查找索引');
const arr17 = [1, 2, 3, 2, 1];
console.log(arr17.indexOf(2), arr17.lastIndexOf(2), arr17.indexOf(4)); // 1 3 -1  找不到返回-1
console.log(arr17.indexOf(2, 2)); // 3 从索引2开始向后查找  ★★★ 

console.log('数组拷贝 ... JSON structuredClone')

// 浅拷贝
const original = [1, 2, { a: 3 }];
const shallowCopy = [...original]; // 展开语法  ★★★ 
// [ 1, 2, { a: 3 } ] false true  由于是浅拷贝，因此shallowCopy[2] === original[2]为true
console.log(shallowCopy, shallowCopy === original, shallowCopy[2] === original[2]);

// 深拷贝 JSON 但有局限性

const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy, deepCopy[2] === original[2]); // [ 1, 2, { a: 3 } ] false

// 结构拷贝，现代浏览器支持
if (typeof structuredClone !== 'undefined') {
    const structured = structuredClone(original); //   ★★★ 
    console.log(structured, structured[2] === original[2]); // [ 1, 2, { a: 3 } ] false
}















































