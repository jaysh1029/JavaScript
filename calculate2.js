// 赋值运算符
let x = 10;

let a = 5;
console.log('a = ', a); // 5
console.log("\n=== 加法赋值(+=) ===");
let b = 10;
b += 5;
console.log(5); // 15

let c = 'hello';
c += ' world'; // 字符串拼接
console.log(c); // hello world

// 减法赋值
let d = 20;
d -= 8;
console.log(d); // 12

// 乘法赋值
let e = 5;
e *= 3;
console.log(e); // 15

// 除法赋值
let f = 30;
f /= 6;
console.log(f); // 5

// 取余赋值 %=
let g = 7;
g %= 5; // g = g % 5;
console.log(g); // 2

// 幂赋值 ES7新增
let h = 3;
h **= 4;
console.log(h); // 81

// 自增 自减
let i = 5;
console.log(i, ++i, i, i++, i); // 5 6 6 6 7
let j = 10;
console.log(j, --j, j, j--, j); // 10 9 9 9 8

