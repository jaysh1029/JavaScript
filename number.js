/* const integer = 42;
const float = 3.14;
const scientific = 1.23e5;
const negative = -100;
const hex = 0xFF;
const octal = 0o755;
const binary = 0b1010;
console.log(integer, float, scientific, negative, hex, octal, binary); //42 3.14 123000 -100 255 493 10

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log((0.1 + 0.2).toFixed(1));
console.log(Number((0.1 + 0.2).toFixed(1)));

const result = (0.1 * 10 + 0.2 * 10) / 10; // 使用整数运算
console.log(result); */

/* console.log('最大值：', Number.MAX_VALUE);
console.log('最小值：', Number.MIN_VALUE);
console.log('正无穷：', Infinity);
console.log('负无穷：', -Infinity);

console.log('非数字:',NaN);
console.log("最大安全整数：",Number.MAX_SAFE_INTEGER);
console.log('最小安全整数：', Number.MIN_SAFE_INTEGER); */


/* console.log('\n--- Number 方法 ---');
//const num = 123.456;
console.log('isInteger',Number.isInteger(123));
console.log('isInteger', Number.isInteger(123.5));
console.log('isNaN',Number.isNaN(NaN));

// Number.isFinite  是否是真正的数字，不进行类型转换
// 满足三个条件为true：必须是number类型‌、‌不能是NaN‌、‌不能是Infinity或-Infinity‌
console.log('isFinite', Number.isFinite(Infinity)); // false
console.log('isFinite',Number.isFinite(100)); // true
console.log('isFinite',Number.isFinite('100')); // false */
console.clear();
const num = 123.456;
console.log(num.toString());  // 123.456
console.log(num.toFixed(2)); // 保留两位小数  123.46
console.log(num.toPrecision(4)); // 保留4位精度 123.5

console.log(Math.floor(3.9));  // 向下取整 3
console.log(Math.ceil(3.1));  // 向上取整   4
console.log(Math.round(3.5)); // 四舍五入 4 
console.log(Math.trunc(3.9));  // 去除小数部分 3
console.log(Math.abs(-5));  // 取绝对值 5
console.log(Math.random()); // 0-1之前的随机数 0.0016887471705558932
console.log(Math.min(1,3,5));  // 取最小值 1
console.log(Math.max(1,3,5)); // 取最大值 5
console.log(Math.pow(2,3)); // 幂运算 2的3次方 8
console.log(Math.sqrt(16)); // 平方根 4
console.log(Math.PI); // 圆周率 3.141592653589793


const bigNum1 = 9007199254740993n;
const bigNum2 = BigInt('9007199254740994');
console.log(typeof bigNum1);
console.log(bigNum1 + bigNum2);
console.log(bigNum1*2n);

//console.log(bigNum1+1);  // BigInt 不能与Number直接运算，需要转换
let n = Number(bigNum1);
console.log(n);
console.log(n+1); 

// bigNum1的值已经超出了Number的最大安全范围，9007199254740993 在双精度浮点数中无法精确表示，它会被向下舍入到最近的偶数
// 也就是9007199254740992

