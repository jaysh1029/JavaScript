// 显式转为字符串

// 123 true null undefined 1,2,3 [object Object]
console.log(String(123), String(true), String(null), String(undefined), String([1, 2, 3]), String({ a: 1 }));

// 使用toString() null/undefined 不能调用toString()
console.log((123).toString(), (true).toString(), [1, 2, 3].toString()); // 123 true 1,2,3

// 使用+ '' 拼接  隐式转换字符串

console.log(123 + '', true + ''); // 123 true


