// 特殊数值计算


// Infinity 无穷大
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Infinity + 1); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(Infinity * 0); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Infinity > 1e308); // true

// NaN 非数字
console.log("=== NaN ===");
// 输出NaN
console.log(0 / 0); // NaN
console.log("abc" * 5); // NaN
console.log(parseInt("abc")); // NaN
console.log(Math.sqrt(-1)); // NaN

// 判断NaN
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(isNaN(NaN)); // true  先转换再判断
console.log(isNaN("abc")); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false  不转换
console.log(Number.isNaN(5)); // false

// +0  -0

console.log("=== +0 -0 ===");

console.log(+0 === -0); // true
console.log(1 / +0); // Infinity
console.log(1 / -0); // -Infinity
console.log(Object.is(+0, -0)); // false

// 最大值和最小值

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 安全整数检查
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false







