// for 循环
for (let i = 1; i <= 5; i++) {
    console.log(` ${i}`); // 1, 2, 3, 4, 5
}

// 数组遍历
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(` [${i}]: ${fruits[i]}`); //  [0]: apple [1]: banana [2]: orange
}

// 倒序遍历
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(` [${i}]: ${fruits[i]}`); //  [2]: orange [1]: banana [0]: apple
}

// 步长控制
for (let i = 0; i <= 10; i += 2) {
    console.log(` ${i}`); // 0 2 4 6 8 10
}

// 多个变量
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(` i = ${i}, j = ${j}`);
}
/*
 i = 0, j = 10
 i = 1, j = 9
 i = 2, j = 8
 i = 3, j = 7
 i = 4, j = 6

*/

// 省略表达式
let i2 = 0;
for (; i2 < 5; i2++) {
    console.log(` ${i2}`);// 0 1 2 3 4
}

let i3 = 0;
for (; i3 < 5;) {
    console.log(` ${i3}`); // 0 1 2 3 4
    i3++;
}

// 无限循环
/* for(;;){
    console.log('无限循环');
} */

// 嵌套循环

for (let i = 1; i <= 9; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += `${j} x ${i} = ${i * j}\t`;
    }
    console.log(row);
}



















