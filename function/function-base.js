// 函数基础

console.log('函数声明和调用');

function greet(name) {
    return `你好，${name}`;
}
console.log(greet('张三')); // 你好，张三

// 函数表达式
const greet2 = function (name) {
    return `Hello, ${name}!`;
}
console.log(greet2('John')); // Hello, John!

// 函数提升 先调用后声明  ★★★
console.log(add(2, 3)); // 5
function add(a, b) { return a + b; }

// 函数表达式 不会被提升  ★★★
//console.log(subtract(5, 2)); // 会报错 Cannot access 'subtract' before initialization
const subtract = function (a, b) { return a - b; }

// 函数的属性和方法
function testFunc(a, b, c) {
    return a + b + c;
}
console.log(testFunc.name, testFunc.length); // testFunc 3  函数名和形参个数
console.log(testFunc.toString()); // 函数源码
/*
 function testFunc(a, b, c) {
    return a + b + c;
}
*/

// 函数作为值 函数可以赋值给变量 也是函数表达式
const sayHello = function () { return 'Hello!'; }
console.log(sayHello()); // Hello!

// 函数可以作为对象属性
const calculator = {
    add: function (a, b) { return a + b; },
    multiply: function (a, b) { return a * b; }
}
console.log(calculator.add(3, 4), calculator.multiply(3, 4)); // 7 12



