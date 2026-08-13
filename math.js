// Math

// 生成指定范围的随机整数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 角度转弧度

function degToRad(deg) {
    return deg * Math.PI / 180;
}

// 弧度转角度
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}

// 限制值在指定范围内
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

console.log(Math.floor(3.7)); // 3 向下取整
console.log(Math.ceil(3.1)); // 4 向上取整
console.log(Math.round(3.5)); // 4 四舍五入
console.log(Math.trunc(3.7)); // 3 去除小数部分 ES6
console.log(Math.trunc(-3.7)); // -3

console.log(Math.abs(-5)); // 5 绝对值
console.log(Math.abs(-0)); // 0

// 符号 ES6
console.log(Math.sign(5), Math.sign(-5), Math.sign(0), Math.sign(-0), Math.sin(NaN)); // 1 -1 0 -0 NaN

console.log(Math.cos(5).toFixed(2), Math.cos(-5).toFixed(2), Math.cos(0), Math.cos(-0), Math.cos(NaN)); // 0.28 0.28 1 1 NaN

console.log(Math.max(1, 3, 2)); // 3 最大值
console.log(Math.min(1, 3, 2)); // 1 最小值
console.log(Math.max(...[1, 3, 2])); // 3 展开数组

// 幂运算

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3 立方根 ES6
console.log(Math.hypot(3, 4)); 5 // 平方和的平方根 ES6

// 指数和对数

console.log(Math.exp(1)); // 2.718281828459045  e^1 
console.log(Math.log(Math.E)); // 1 自然对数
console.log(Math.log10(100)); // 2 常数对数 ES6
console.log(Math.log2(8)); // 3 以2为底的对数 ES6

// 三角函数

console.log(Math.sign(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); //  0.9999999999999999
console.log(Math.asin(1)); // π/2
console.log(Math.acos(0)); // π/2
console.log(Math.atan(1)); // π/4
console.log(Math.atan2(1, 1)); //  π/4   从x轴到点 (x,y) 的角度

// 随机数

// 生成指定范围的随机整数 min 到 max 包含
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10)); // 8

// 判断正负零 ES6
console.log(Object.is(-0, -0)); // true
console.log(Object.is(0, -0)); // false

// 浮点比较
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

console.log(Math.PI); // 3.141592653589793
console.log(Math.E);  // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2);  // 0.6931471805599453 ln2 
console.log(Math.LN10); // 2.302585092994046 ln10
console.log(Math.LOG2E); // 1.4426950408889634 log2e
console.log(Math.LOG10E); // 0.4342944819032518 log10e

// 判断是否为数字
function isNumber(val) {
    return typeof val === 'number' && !isNaN(val);
}

// 安全地获取数字
function toNumber(val, defaultVal = 0) {
    const num = Number(val);
    return isNaN(num) ? defaultVal : num;
}

// 精确的浮点数加法
function preciseAdd(a, b) {
    const factor = Math.pow(10, Math.max(
        (String(a).split('.')[1] || '').length,
        (String(b).split('.')[1] || '').length,
    ));
    return (Math.round(a * factor) + Math.round(b * factor)) / factor;
}

// 生成随机颜色
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// 数字千分位格式化
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log(formatNumber(1234567)); // 1,234,567

// 检查是否为整数
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false
console.log(Number.isInteger(5.0)); // true

// 检查是否为安全整数
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1));// true


console.log('=== 重点对比 ===')
console.log(Number('123abc')); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number(true)); // 1 
console.log(Number(false)); // 0
console.log(parseInt('123abc')); // 123
console.log(parseInt('abc123')); // NaN
console.log(parseInt('12.3')); // 12
console.log(parseInt(false)); // NaN
console.log(parseInt(true)); // NaN
console.log(parseInt(undefined)); // NaN
console.log(parseInt(null)); // NaN
console.log(parseInt("")); // NaN

console.log('+true =', +true);            // 1
console.log('+false =', +false);          // 0
console.log('+null =', +null);            // 0
console.log('+undefined =', +undefined);  // NaN





