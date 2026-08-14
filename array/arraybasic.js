// 数组基础

const arr = [1, 5, 67, 7, 54, 3];

// 浏览器输出： object true true ƒ Array() { [native code] }
// nodeJs输出： object true true [Function: Array]
console.log(typeof arr, Array.isArray(arr), arr instanceof Array, arr.constructor);   // ★★★

const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0], fruits[1], fruits[2], fruits.length); // apple banana orange 3
fruits.length = 5;
// 浏览器输出 ['apple', 'banana', 'orange', empty × 2]
// nodejs 输出： [ 'apple', 'banana', 'orange', <2 empty items> ]
console.log('修改长度后的数组：', fruits);

// 通过索引添加元素
fruits[5] = 'grape';
fruits[fruits.length] = 'pear'; // 向末尾添加新元素 ★★★
console.log(fruits, fruits.length); // [ 'apple', 'banana', 'orange', <2 empty items>, 'grape', 'pear' ] 7

// 数组的稀疏性
const sparse = [1, , , 5]; // 稀疏数组

// [ 1, <2 empty items>, 5 ] 4 true false false
console.log(sparse, sparse.length, 0 in sparse, 1 in sparse, 2 in sparse);

// in 检查属性名 这里指索引是否在对象中   in会检查原型链上的属性  hasOwnProperty只检查自身属性  ★★★
// 稀疏数组中某些索引没有元素（空位）。in 操作符可以准确判断某个索引是否实际存在（无论是 undefined 还是其他值）  ★★★
// in 操作符是检测稀疏数组空位的可靠方法
console.log(sparse[1], 1 in sparse); // undefined  false 空位
console.log(3 in sparse); // true
console.log(sparse[100], 100 in sparse); // undefined  false 越界 

// 遍历数组
const colors = ['red', 'green', 'blue'];

/* 
 colors[0] =  red
 colors[1] =  green
 colors[2] =  blue
*/
for (let i = 0; i < colors.length; i++) {
    console.log(` colors[${i}] = `, colors[i]);
}

// for...of 遍历值   ★★★

/*
     red
     green
     blue
*/
for (let color of colors) {
    console.log('    ', color);
}

// for...in  遍历索引(不推荐)  ★★★
/*
 0: red
 1: green
 2: blue
*/
for (let index in colors) {
    console.log(` ${index}:`, colors[index]);
}

/*
 [0]: red
 [1]: green
 [2]: blue
*/
colors.forEach((color, index) => {
    console.log(` [${index}]:`, color);
});








