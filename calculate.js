// 数值计算和运算符

let intNum = 42;
console.log(intNum, typeof intNum);  // 42  number

let floatNum = 3.14;
console.log(floatNum, typeof floatNum); // 3.14 number

let scientific = 1.5e3; // 1500 
console.log(scientific); // 1500

// 无穷大，负无穷大，非数字
console.log(Infinity, -Infinity, NaN); //  Infinity -Infinity NaN

let dec = 255;
console.log(dec); // 255 

let bin = 0b11111111;
console.log(bin); // 255


let oct = 0o377;  // 0o 八进制前缀 ES6新增  严格模式下 0前缀禁用
console.log(oct); // 255

let num = 255;
console.log(num.toString(2)); // 转二进制 11111111
console.log(num.toString(8)); // 8进制 377
console.log(num.toString(16)); // 16进制 ff

// 基本算术运算符  true->1 false->0 null->0
console.log(5 + 3, 5 + "3", "5" + 3, "5" + "3", true + 1, false + 1); // 8 53 53 53 2 1
console.log(5 - 3, 5 - "3", "5" - 3, 5 - true, 5 - null, 5 - undefined); // 2 2 2 4 5 NaN
console.log(5 * 3, 5 * "3", 5 * true, 5 * null, 5 * 'abc');// 15 15 5 0 NaN

//5 3.3333333333333335 5 Infinity -Infinity NaN
console.log(10 / 2, 10 / 3, 10 / "2", 10 / 0, -10 / 0, 0 / 0); //

// 1 1 -1 -1 1.5 NaN NaN
console.log(10 % 3, 10 % -3, -10 % 3, -10 % -3, 10.5 % 3, 5 % 0, Infinity % 2);

// 幂运算 ** ES7 新增

//8 1 0.5 8 4 4  
console.log(2 ** 3, 2 ** 0, 2 ** -1, Math.pow(2, 3), "平方根", 16 ** 0.5, (-2) ** 2);



