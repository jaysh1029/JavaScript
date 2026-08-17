// 数组创建方式

console.log('字面量方式：');
const arr1 = [1, 3, 5, 6, 8];
console.log(arr1, Array.isArray(arr1)); // [ 1, 3, 5, 6, 8 ] true

console.log('构造函数：');
const arr2 = new Array(5);  //  传入一个值，是元素个数 ★★★
console.log(arr2, arr2.length); // [ <5 empty items> ] 5

console.log('传入多个值：');
const arr3 = new Array(1, 3, 5, 6, 7); //  传入多个值，是元素本身 ★★★
console.log(arr3);  // [ 1, 3, 5, 6, 7 ]

console.log('使用Array.of() ES6');
const arr4 = Array.of(5); // 创建一个数组，包含一个元素5
console.log(arr4, arr4.length, arr4[0]); // [ 5 ] 1 5
const arr5 = Array.of(2, 5, 7);
console.log(arr5, arr5.length, arr5[0]); // [ 2, 5, 7 ] 3 2

console.log('使用Array.from() 从类数组转换 ES6');

const arr6 = Array.from('hello');
console.log(arr6, arr6.length, arr6[arr6.length - 1]); // [ 'h', 'e', 'l', 'l', 'o' ] 5 o

console.log('从Set转换');
const set = new Set([1, 3, 6, 7]);
const arr7 = Array.from(set);
console.log(arr7, arr7.length, arr7[arr7.length - 1]); // [ 1, 3, 6, 7 ] 4 7

console.log('带映射函数：');
const arr8 = Array.from([1, 2, 3], x => x * 2);
console.log(arr8, arr8.length, arr8[arr8.length - 1]);  // [ 2, 4, 6 ] 3 6

console.log('创建指定范围的数组：');
const range = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(range, range.length); // [1, 2, 3, 4,  5,  6, 7, 8, 9, 10] 10

console.log('创建重复值数组:');
const repeat = new Array(5).fill(10);
console.log(repeat); // [ 10, 10, 10, 10, 10 ]  创建一个包含5个元素的数组，并用10来填充每一个位置

console.log('各种方式对比:');
console.log('[]:', []); // []: []
console.log('new Array():', new Array()); // new Array(): []
console.log('new Array(3):', new Array(3)); // new Array(3): [ <3 empty items> ]
console.log('Array.of(3):', Array.of(3)); // Array.of(3): [ 3 ]
console.log('Array.from([1,2]):', Array.from([1, 2])); // Array.from([1,2]): [ 1, 2 ]




