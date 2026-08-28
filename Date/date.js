const now = new Date();
console.log('当前日期时间:', now); // 输出: 当前日期时间对象
console.log('typeof now:', typeof now); // 输出: object
console.log('now instanceof Date:', now instanceof Date); // 输出: true
console.log('+new Date():', +new Date()); // 输出: 时间戳（简写）  ★★★

const date3 = new Date(2024, 0, 1, 12, 30, 45); // 2024-01-01 12:30:45
console.log('new Date(2024, 0, 1, 12, 30, 45):', date3); // 输出: 2024-01-01 12:30:45  ★★★
console.log('Date.parse("2024/01/01"):', Date.parse('2024/01/01')); // 输出: 时间戳  ★★★

console.log(Number.isInteger(42.0));  // true（42.0 也是整数）  ★★★
console.log(Number.isSafeInteger(42.0));  // true（42.0 也是整数）  ★★★