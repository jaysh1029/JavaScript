/*
    稀疏数组
    1. 包含空位的数组
    空位：数组中有索引位置，但没有元素(不是undefined)

    密集数组：所有索引位置都有元素

*/

const sparseArray = [1, , 3, , 5];
console.log(sparseArray, sparseArray.length); // [ 1, <1 empty item>, 3, <1 empty item>, 5 ] 5

console.log(sparseArray[1]); // undefined  ★★★
console.log(sparseArray[1] == undefined, sparseArray[1] == null);// true true  ★★★
console.log(sparseArray[1] === undefined, sparseArray[1] === null);// true false  ★★★

// 稀疏数组与包含undefined值的数组不同  ★★★
// 空元素不能作为数组的属性，值为undefined的元素可以是数组的属性
const arr1 = [, , ,];
const arrWithUndefined = [undefined, undefined, undefined];

console.log(arr1[0] === arrWithUndefined[0]); // true
console.log(arr1.hasOwnProperty(0)); // false 空位不是数组自身的属性  ★★★
console.log(arrWithUndefined.hasOwnProperty(0)); // true
console.log(0 in arr1, 0 in arrWithUndefined); // false true  ★★★

// 创建稀疏数组
console.log('创建稀疏数组');

// 1. 使用字面量
const arr01 = [1, , 3];
console.log(arr01);

// 2. 使用Array构造函数指定长度
const arr2 = new Array(5);
console.log(arr2);

// 3. 删除数组元素
const arr3 = [1, 3, 4, 5, 6, 6];
delete arr3[2];
delete arr3[4];
// 删除元素后的数组就是稀疏数组
console.log(arr3);

// 4. 修改 length属性
const arr4 = [1, 2, 3];
arr4.length = 6;
console.log(arr4);

// 5. 超出范围索引赋值
const arr5 = [];
arr5[10] = 'ten';
console.log(arr5.length, arr5);

// 6. 使用Array.from 创建
const arr6 = Array.from({ length: 5 });
console.log(arr6); // 这个不是稀疏数组，每个位置都是undefined [ undefined, undefined, undefined, undefined, undefined ]   ★★★

// 7. 使用扩展运算法...
const arr7 = [...new Array(2)];
console.log(arr7); //[ undefined, undefined ] 这个不是稀疏数组，每个位置都是undefined   ★★★

// 创建密集数组的正确方式

// 1. 使用Array.fill()

const desen1 = new Array(5).fill(0);
console.log(desen1);

// 2. 使用Array.from()
const desen2 = Array.from({ length: 5 }, (_, i) => i);
console.log(desen2); // [ 0, 1, 2, 3, 4 ]

// 3. 使用展开运算符...
const desen3 = [...new Array(2).fill(1)];
console.log(desen3);

// 4. 使用Array.apply
const desen4 = Array.apply(null, { length: 2 });
console.log(desen4); // [ undefined, undefined ]  apply 会填充 undefined，不是稀疏数组   ★★★


