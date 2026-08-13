// 数值转换

console.log(Number('123'), Number("12.3"));
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number(undefined)); // NaN

console.log(parseInt('123'), parseInt('12.3'), parseInt('123abc')); // 123 12 123
console.log(parseInt('abc123')); // NaN
console.log(parseInt('10', 2)); // 2 二进制
console.log(parseInt('FF', 16)); // 255 十六进制

console.log(parseFloat('12.345')); // 12.345
console.log(parseFloat('12.34.56')); // 12.34
console.log(parseFloat('12.abc')); // 12.34
console.log(parseFloat("abc12.3")); // NaN

console.log(+'123', +'12.3', +true, +false, +null, +undefined); // 123 12.3 1 0 0 NaN

console.log(String(123), String(12.3), String(NaN), String(Infinity)); // 123 12.3 NaN Infinity
console.log((123).toString(), (255).toString(2), (255).toString(8), (255).toString(16)); // 123 11111111(二进制) 377(八进制) ff(十六进制)

console.log((123.456).toFixed(2)); // 123.46 四舍五入
console.log((123.456).toExponential(2)); // 1.23e+2
console.log((123.456).toPrecision(4)); // 123.5



