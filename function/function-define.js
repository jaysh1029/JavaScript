// 函数定义方式
console.log('函数声明');

// 1. function 声明  
// 特点：有函数提升,可以在声明前调用  ★★★
console.log(sum(2, 3)); // 5
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20)); // 30

// 2. 函数表达式
const multiply = function (a, b) {
    return a * b;
}
console.log(multiply(3, 4)); // 12

// 匿名函数表达式
const divide = function (a, b) {
    return a / b;
}
console.log(divide(10, 2)); // 5
// 具名函数表达式  ★★★
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
}
console.log(factorial(5)); // 120

//console.log(fact(5)); // 报错 fact is not defined  fact只能在函数内部使用  ★★★

// 箭头函数
const double = (x) => { return x * 2; }
console.log(double(5)); // 10

// 单个参数可以省略括号  ★★★
const triple = x => x * 3;
console.log(triple(4)); // 12

// 多个参数必须加括号  ★★★
const add2 = (a, b) => a + b;
console.log(add2(7, 8)); // 15

// 返回对象需要加括号  ★★★
const createUser = (name, age) => ({ name, age });
console.log(createUser('张三', 25)); // { name: '张三', age: 25 }

// Function构造函数 不推荐，有安全风险  ★★★
const power = new Function('base', 'exponent', 'return Math.pow(base,exponent)');
console.log(power(2, 3)); // 8

// 方法定义 简写

const person2 = {
    name: '李四',
    // 传统方式
    sayHello: function () {
        return `你好,我是${this.name}`;
    },

    // ES6简写  ★★★
    sayHi() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person2.sayHello()); // 你好,我是李四
console.log(person2.sayHi()); // Hi, I'm 李四

// 各种方式对比

// 1. 函数声明 可提升  有this，可作为构造函数
function funcDecl() { return '函数声明'; }

// 函数表达式 不可提升，灵活
const funcExpr = function () { return '函数表达式'; }

// 箭头函数 无this 无 arguments 不能作构造函数
const arrowFunc = () => '箭头函数';

//方法定义，对象方法
const obj6 = {
    method() {
        return '方法定义';
    }
}

console.log(funcDecl()); // 函数声明
console.log(funcExpr()); // 函数表达式
console.log(arrowFunc()); // 箭头函数
console.log(obj6.method()); // 方法定义








