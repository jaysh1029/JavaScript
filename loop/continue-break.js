// 循环控制语句

console.log('break');

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(` 找到偶数:${i}`);
        break;
    }
    console.log(` ${i}不是偶数`);
}
/*
 1不是偶数
 找到偶数:2
*/

console.log('continue');
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(` ${i}`);
}
/*
 1
 3
 5
 7
 9
*/

console.log('break嵌套循环');
console.log('查找二维数组中的目标值:');
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const target2 = 5;
let found2 = false;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target2) {
            console.log(` 找到${target2}, 位置 [${i}][${j}]`);
            found2 = true;
            break; // 只跳出内层循环
        }
    }
    if (found2) break;// 跳出外层循环
}
// 找到5, 位置 [1][1]

console.log('label 语句');
console.log('使用 label 跳出多层循环');
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            console.log(` 跳出所有循环 (i=${i}, j=${j})`);
            break outerLoop;
        }
        console.log(` i=${i}, j=${j}`);
    }
    console.log(` 外层循环:${i}`);
}
/*
 i=0, j=0
 i=0, j=1
 i=0, j=2
 外层循环:0
 i=1, j=0
 跳出所有循环 (i=1, j=1)
*/

console.log('无限循环的避免');
let counter = 0;
while (true) {
    counter++;
    console.log(` 循环次数:${counter}`);
    if (counter >= 3) {
        console.log(' 达到最大次数,退出循环');
        break;
    }
}
/*
 循环次数:1
 循环次数:2
 循环次数:3
 达到最大次数,退出循环
*/
