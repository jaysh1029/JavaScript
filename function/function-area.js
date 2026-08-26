// 作用域与闭包

const globalVar = '全局变量';

// 函数作用域
function scopeDemo() {
    const localVar = '局部变量';
    console.log('localVar 函数内:', localVar);
}
scopeDemo(); // localVar 函数内: 局部变量
//console.log(localVar); // 报错: localVar is not defined

// 块级作用域 ES6 let/const

if (true) {
    let blockVar = '块级变量';
    const blockConst = '块级常量';
    var varVar = 'var 不限于块级';
    console.log('blockVar', blockVar); // blockVar 块级变量
}
// console.log(blockVar); // 报错 blockVar is not defined
// console.log(blockConst); // 报错 blockConst is not defined
console.log(varVar); // var 不限于块级

// 闭包
console.log('闭包...');

// 闭包：内部函数可以访问外部函数的变量
function outerFunction(x) {
    const outerVar = x;
    return function innerFunction(y) {
        return outerVar + y;
    };
}

const closure = outerFunction(10);
console.log(closure(5)); // 15

// 闭包的应用：私有变量

function createCounter() {
    let count = 0; // 私有变量
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        },
        reset() {
            count = 0;
            return count;
        }
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
//console.log(count); // 无法直接访问 count is not defined

console.log('闭包陷阱');

// 循环中的闭包
// ❌ 错误示例  ★★★
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log('直接var错误示例：', i); // 3 3 3
    }, 100);
}

// 使用let块级作用域
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('let方案：', i); // 0 1 2
    }, 200);
}

// 使用闭包IIFE 立即执行函数
for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log('IIFE方案：', j); // 0 1 2
        }, 300);
    })(i);
}

// 使用Function.prototype.bind()
for (var i = 0; i < 3; i++) {
    setTimeout(console.log.bind(console, 'bind方案：', i), 400);
}

// 作用域链

const global = 'global';
function outer() {
    const outer = 'outer';
    function inner() {
        const inner = 'inner';
        console.log('inner访问:', global, outer, inner);
        // inner访问: global outer inner
    }
    inner();
}
outer();

// 变量提升 Hoisting
console.log(varVariable);  // undefined（提升但未初始化）  ★★★
var varVariable = 'var 变量';

// let/const 暂时性死区
//console.log(letVariable); // 报错 Cannot access 'letVariable' before   ★★★
let letVariable = 'let 变量';













































































