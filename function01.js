// 函数声明
function greet(name) {
    return `你好，${name}`;
}
console.log(typeof greet);

// 函数表达式
const greetExpr = function (name) {
    return `Hello, ${name}`;
}
console.log(typeof greetExpr, greetExpr('Tom'));
// 箭头函数

const greetArrow = (name) => `Hi, ${name}`;

console.log(typeof greetArrow, greetArrow('Tom'));

// 函数属性
function testFn(a, b, c) { }

console.log(testFn.name); // 函数名称
console.log(testFn.length); // 函数参数个数

// 函数可作为对象

greet.author = "张三";
console.log(greet.author);