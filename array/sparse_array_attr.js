// 稀疏数组的核心特性

const sparse = [1, , 3, , 5];

// 1. length属性包含空位，空位的值为undefined
console.log(sparse.length, sparse[0], sparse[1]);  // 5 1 undefined

// 2. 空位索引不会作为数组的属性  ★★★
console.log(sparse.hasOwnProperty(0), sparse.hasOwnProperty(1)); // true false
console.log(0 in sparse, 1 in sparse); // true false

// 3. keys() 只返回存在的索引  ★★★
console.log(Object.keys(sparse)); // [ '0', '2', '4' ]

// 4. 空位在JSON序列化时变为null  ★★★
console.log(JSON.stringify(sparse)); // [1,null,3,null,5]

// 稀疏数组与包含undefined元素的数组的区别
const sparseArr = [1, , 3];
const undefinedArr = [1, undefined, 3];

// 1. 比较数组的元素
console.log(sparseArr, undefinedArr); // [ 1, <1 empty item>, 3 ] [ 1, undefined, 3 ]  ★★★

// 2. 长度和值
console.log(sparseArr.length, undefinedArr.length); // 3 3
console.log(sparseArr[1], undefinedArr[1], sparseArr[1] === undefinedArr[1]); // undefined undefined true
console.log(sparseArr.hasOwnProperty(1), undefinedArr.hasOwnProperty(1)); // false true

// 稀疏数字的Object方法行为

const sparseObj = [1, , 3, , 5];

// 1. Object.keys() 只返回存在的索引
console.log(Object.keys(sparseObj)); // [ '0', '2', '4' ]  ★★★

// 2. Object.values() 只返回存在的值
console.log(Object.values(sparseObj)); // [ 1, 3, 5 ]  ★★★

// 3. Ojbect.entries() 只返回存在的键值对
console.log(Object.entries(sparseObj)); // [ [ '0', 1 ], [ '2', 3 ], [ '4', 5 ] ]  ★★★

// 4. Object.getOwnPropertyNames() 只返回存在的属性
console.log(Object.getOwnPropertyNames(sparseObj)); // [ '0', '2', '4', 'length' ]  ★★★

// 5. Object.getOwnPropertySymbols() 只返回符号属性
console.log(Object.getOwnPropertySymbols(sparseObj)); // []  ★★★

// Object.hasOwn 检查自有属性
console.log(Object.hasOwn(sparseObj, 1), Object.hasOwn(sparseObj, 0)); // false true  ★★★


