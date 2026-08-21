// 类型转换

// 自动转换 
console.log('5' + 3); // 53  加法 按字符串拼接
console.log('5' - 3); // 2     减法 按算术运算

// == 相等比较 会触发类型转换，如果是连类型一起比较，则推荐使用 ===

console.log(true + 1);  // 2
console.log(5 == '5'); // true
console.log(0 == false, 0 === false); // true false
console.log(null == undefined, null === undefined); // true false


// 一元运算符转换
console.log('123', +'123', typeof '123', typeof +'123'); // 123 123 string number

console.log(+true, typeof +true);  // 1 number
console.log(!!'hello'); // true
console.log(!!0); // false

// 全部是false的情况，除了以下值 都是true
console.log(false, Boolean(0), Boolean(-0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN));

// Number转换   
console.log(Number(null), Number(undefined), Number(true), Number(false)); // 0 NaN 1 0

// String转换

console.log(String(null), String(undefined), String(true), String(NaN)); //null undefined true NaN



























