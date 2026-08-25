// do...while

let count2 = 0;
do {
    console.log(` 计数:${count2}`);
    count2++;
} while (count2 < 5);

/*
 计数:0
 计数:1
 计数:2
 计数:3
 计数:4
*/

// 至少执行一次

let condition = false;
let execCount = 0;
do {
    execCount++;
    console.log(` 执行次数:${execCount}`);
} while (condition);
//  执行次数:1

console.log('与while对比');

let num4 = 5;
while (num4 < 0) {
    console.log('不会输出'); // 没有执行
    num4++;
}


let num5 = 5;
do {
    console.log(` 执行了 do-while`); //  执行了 do-while

    num5++;
} while (num5 < 0);


// 生成随机数

function generateUniqueRandom(min, max, existing) {
    let random;
    do {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(` 生成的随机数:${random}`);
    } while (existing.includes(random));
    return random;
}
const existingNumbers = [2, 7, 9, 12];
const newNumber = generateUniqueRandom(1, 15, existingNumbers);
console.log(' 不重复的随机数:', newNumber);
/*
生成的随机数:13
不重复的随机数: 13

 生成的随机数:1
 不重复的随机数: 1
*/




































