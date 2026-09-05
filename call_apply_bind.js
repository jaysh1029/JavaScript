// call apply bind 是JavaScript中函数对象自带的三个方法
// 都定义在Function.prototype 上
// 主要作用：改变函数执行时的this指向
// call 和 apply 会立即执行， bind只改变this指向并返回一个函数，并不立即执行
// call 和 apply 只是临时一次绑定this  bind是永久绑定this
// 被bind绑定过的函数，再次调用call/apply this不会变化

// call 

const person = { name: 'John' };

function greet(msg) {
    console.log(msg + ', my name is ' + this.name);
}

// 第一个参数 person 改变了 greet内部使用this对象位person 后面的参数是传入greet方法的参数
// 第一个参数若为null，则this默认指向window 严格模式下是null或undefined
// 第一个参数若是原始值 如(Number String Boolean)  this 会被自动包装成对应的对象(如 new Number()  new String())
// 若有多个参数，则要一个一个地传入  apply 唯一的区别是：后面的参数是数组形式传入
greet.call(person, 'Hello');
greet.apply(person, ['Hello']);

// 多参数示例

function introduce(age, city) {
    console.log(`${this.name} is ${age} years old, lives in ${city}`);
}
const user = { name: 'Alice' };

introduce.call(user, 30, '郑州');

introduce.apply(user, [30, '郑州']);

// 常见应用场景
// 1. 借用数组方法操作类数组

function sum() {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    const total = Array.prototype.reduce.call(arguments, (acc, cur) => acc + cur, 0);
    const total2 = Array.prototype.reduce.apply(arguments, [(acc, cur) => acc + cur, 0]);
    console.log(total2);
    console.log(total);
}

sum(1, 2, 3, 4, 5); // 15

// 2. 验证数据类型

function isArray(obj) {
    const type = Object.prototype.toString.call(obj);
    const type2 = Object.prototype.toString.apply(obj);
    //console.log(type, type2);
    return type === '[object Array]';
}
console.log(isArray([1, 2, 3])); // true
console.log(isArray({})); // false

// 3. 方法借用 对象继承

const apple = {
    color: 'red',
    say: function () {
        console.log(`My color is ${this.color}`);
    }
}
const banana = { color: 'yellow' };
apple.say.call(banana); // My color is yellow
apple.say.apply(banana);
// 相当于 banana也有了apple的say 方法



// 4. 将类数组转换为真正的数组

function getArgs() {
    const argsArr = Array.prototype.slice.call(arguments);
    const argsArr2 = Array.prototype.slice.apply(arguments);
    console.log(Array.isArray(argsArr));// true
    return argsArr.map(item => item * 2);
}
console.log(getArgs(1, 3, 4)); // [ 2, 6, 8 ]

// 5. 求最大值

const numbers = [1, 3, 56, 6, 2, 6, 7, 8, 9];
const max = Math.max.apply(null, numbers);
console.log(max); // 56

// 6. 构造函数继承  在ES6 class和extends出现之前的继承实现方式

function Animal(name, type) {
    this.name = name;
    this.type = type || 'Animal';
    this.sayHello = function () {
        console.log(`Hello, my name is ${name}, my type is ${type}`);
    };
}

function Dog(name, breed) {
    Animal.call(this, name, '哺乳类'); // 这句就让Dog继承了所有Animal的属性和方法
    this.breed = breed;
}
const dog = new Dog('Buddy', 'Golden');
console.log(dog.name); // Buddy
console.log(dog.type); // 哺乳类
dog.sayHello(); // Hello, my name is Buddy, my type is 哺乳类


// 7. 合并数组
const arr1 = [1, 3, 5];
const arr2 = [3, 6, 7];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [ 1, 3, 5, 3, 6, 7 ]

// 8. 代理console.log() 参数量不确定

function log() {
    console.log.apply(console, arguments);
}
log(1); // 1
log(1, 3, 5);   // 1 3 5

/* 

针对数组方法的借用，主要的原理是在数组方法底层有两个硬性要求：
1. 对象有length属性     参数个数
2. 对象可以使用数字索引(键名) 0,1,2...索引

若对象没有length属性，则返回空数组 []   
以下以slice为例 来讲解其中的底层原理

Tips:
1. slice 是浅拷贝 若arguments存入的是引用类型，新数组里的对象依然指向原地址，修改新数组对象的属性，原
arguments中对象的属性也会改变
2. 在 ES6 中，引擎对 Array.from 和展开运算符 [...arguments] 做了高度优化，执行效率更高

下面是模拟Array.prototype.slice的简化内部实现
*/

Array.prototype.mySlice = function (start, end) {
    // 1. 关键：将 this 转为一个对象（此时 this 就是 arguments）
    // 2. 获取 this 的 length 属性
    let len = this.length;
    // 3. 处理start和end的边界(简化版)
    let startIndex = start || 0;
    let endIndex = end || len;

    // 4. 创建一个全新的空数组（这就是我们要返回的数组）
    let result = [];

    // 5. 核心循环：遍历 this 中的每一项
    for (let i = startIndex; i < endIndex; i++) {
        // 从 this（即 arguments）中按索引取值，塞进新数组
        result.push(this[i]);
    }
    // 6. 返回这个新数组
    return result;
}

function arrTest() {
    console.log(arguments);
    let arr = Array.prototype.slice.call(arguments);

    // 手动模拟slice内部
    let mockArr = [];
    for (let i = 0; i < arguments.length; i++) {
        mockArr.push(arguments[i]);
    }
    console.log(mockArr);
    console.log(arr);
}
arrTest('a', 'b', 'c'); // [ 'a', 'b', 'c' ]

const fakeArr = {
    0: 'hello',
    1: 'world',
    length: 2
};
console.log(Array.prototype.slice.call(fakeArr)); // [ 'hello', 'world' ]


/*
    bind原型
    const boundFunc = func.bind(thisArg, arg1, arg2, ...)

    thisArg 绑定到新函数的this值
    arg1,arg2 预设参数(可选)
    返回： 一个新函数，this被永久绑定
    bind不会立即执行函数，而是返回一个永久改变this指向的新函数，需要手动调用
*/

const bindGreet = greet.bind(person); // person 和 greet在上面定义过了
bindGreet('Hello'); // Hello, my name is John

const bindUser = introduce.bind(user, 25);
bindUser('New York');   // Alice is 25 years old, lives in New York

function multiply(a, b) {
    return a * b;
}
// null表示this为默认window或严格模式下的null/undefined 这意味着内部可能不依赖this
// 2 是第一个参数，也就是第一个参数默认为2了
const doubleMul = multiply.bind(null, 2);
console.log(doubleMul(5));  // 10

// 9. 事件处理函数绑定this

const button = {
    text: '点击',
    handleClick: function () {
        console.log('Button says:' + this.text);
    }
};

// 这里若不绑定 this指向DOM元素 这个要在浏览器中访问
// document.getElementById('myButton').addEventListener('click', button.handleClick.bind(button));



// 10. setTimeout 回调

const timer = {
    count: 0,
    start: function () {
        setTimeout(function () { // 这里使用function定义函数  不用bind 则this指向window
            console.log(this);
            console.log('this.count:', this.count)
            this.count++;
            console.log(this.count);
        }.bind(this), 1000);  // 这里需要使用bind使this指向timer
    },
    startArrow: function () {
        setTimeout(() => {  // 这里使用箭头函数 this会自动继承外层函数 也就是timer 
            console.log(this);
            console.log('this.count:', this.count)
            this.count++;
            console.log(this.count);
        }, 1000);
    },
}

timer.start();
timer.startArrow();


// 创建偏函数 (部分参数固定)

function fetchData(url, method, data) {
    console.log(`Fetching from ${url} with method ${method}`);
}

const fetchFromApi = fetchData.bind(null, 'http://api.example.com');
fetchFromApi('GET'); // Fetching from http://api.example.com with method GET
fetchFromApi('POST'); // Fetching from http://api.example.com with method POST


// 11. 使用bind之后，再使用call或apply 则 this不会变化，因为已经被bind永久绑定

const obj2 = { name: 'bound' };
const another = { name: 'another' };
function sayName() {
    console.log(this.name);
}
const bindFn = sayName.bind(obj2);
bindFn.call(another); // bound  这里bindFn的this已经被永久绑定到obj2上了


// 只有函数才能调用 apply call bind  其他对象一律不行

// 类构造函数 不能用 call/apply  但可以使用bind ，只是应用场景极少
// 若类使用bind，则this由new操作符自动创建，bind的第一个参数会被忽略  即this指向new的对象

class User {
    constructor(name) {
        this.name = name;
    }
}
//User.call({}, 'test');  //会报错

Function.prototype.fullBind = function (context, ...args) {
    const fn = this;
    const boundFn = function (...newArgs) {
        // 处理 new 调用的情况
        const isNew = this instanceof boundFn;
        const ctx = isNew ? this : context;
        return fn.apply(ctx, [...args, ...newArgs]);
    };

    // 保持原型链
    boundFn.prototype = Object.create(fn.prototype);
    return boundFn;
};

function Person11(name) {
    this.name = name;
}

const BoundPerson = Person11.fullBind(null, '默认名');
const p7 = new BoundPerson();
console.log('new 调用 p7:', p7); // 输出: Person11 { name: '默认名' }





