// 位运算符
// JavaScript位运算 将操作数转换为32位有符号整数


console.log(5 & 3); // 1   5 = 0101, 3 = 0011 → 0001 = 1
console.log(5 | 3); // 7   5 = 0101, 3 = 0011 → 0111 = 7
console.log(5 ^ 3); // 6   5 = 0101, 3 = 0011 → 0110 = 6
console.log(~5, ~0, ~-1); // -6 -1 0
// 5 = 0101 → ...1010 = -6（补码）

console.log(5 << 1); // 10 相当于乘以2
console.log(5 << 2); // 20 相当于乘以4
console.log(5 >> 1); // 2 相当于除以2取整
console.log(-5 >> 1); -3

// 无符号右移
console.log(5 >>> 1, -5 >>> 1); // 2  2147483645（大数）

const READ = 1; // 001
const WRITE = 2; // 010
const EXCUTE = 4; // 100

let permissions = READ | WRITE; // 011  3
console.log('权限值：', permissions);
console.log('是否有读权限：', (permissions & READ) === READ); // true
console.log('是否有执行权限：', (permissions & EXCUTE) === EXCUTE); // false

// 添加权限
permissions |= EXCUTE; // 111 = 7
console.log(permissions);

// 移除权限
permissions &= ~WRITE; // 101 = 5
console.log(permissions);



