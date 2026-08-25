// while 循环
let count = 0;
while (count < 5) {
    console.log(` 计数:${count}`);
    count++;
}
/*
 计数:0
 计数:1
 计数:2
 计数:3
 计数:4
*/

// 遍历数组
const colors = ['red', 'green', 'blue'];
let index = 0;
while (index < colors.length) {
    console.log(` [${index}]: ${colors[index]}`);
    index++;
}
/*
 [0]: red
 [1]: green
 [2]: blue
*/

// 处理不确定量的数据
let num3 = 12345;
let digits = [];
while (num3 > 0) {
    digits.push(num3 % 10);
    num3 = Math.floor(num3 / 10);
}
console.log('数字拆解', digits.reverse()); // 数字拆解 [ 1, 2, 3, 4, 5 ]

// 用户输入验证(模拟)
function getValidInput() {
    let input = '';
    let attempts = 0;
    const validInputs = ['yes', 'no', 'y', 'n'];

    while (attempts < 3) {
        attempts++;
        // 模拟用户输入
        input = attempts === 1 ? 'maybe' : attempts === 2 ? '' : 'yes';
        console.log(`尝试${attempts}: ${input}`);
        if (validInputs.includes(input)) {
            return `有效输入: ${input}`;
        }
        console.log('无效输入，请重新输入');
    }
    return '超过最大尝试次数';

}
console.log('结果', getValidInput());
/*
尝试1: maybe
无效输入，请重新输入
尝试2: 
无效输入，请重新输入
尝试3: yes
结果 有效输入: yes
*/

// 使用break提前退出

let searchIndex = 0;
const target = 7;
const numbers = [3, 1, 7, 4, 9, 2];
while (searchIndex < numbers.length) {
    if (numbers[searchIndex] === target) {
        console.log(`找到 ${target}, 索引为 ${searchIndex}`);
        break;
    }
    searchIndex++;
}
// 找到 7, 索引为 2