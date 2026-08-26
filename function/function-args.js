// 函数参数

function greet3(name, greeting) {
    return `${greeting}, ${name}!`;
}
console.log(greet3('张三', '你好')); // 你好, 张三!

console.log('默认参数 ES6');

// 默认参数 ES6   ★★★
function greet4(name = '访客', greeting = '你好') {
    return `${greeting},${name}`;
}
console.log(greet4(), greet4('张三'), greet4('李四', '嗨')); // 你好,访客 你好,张三 嗨,李四

// 默认参数可以使用表达式   ★★★
function getDefaultName() { return '默认用户'; }
function greet5(name = getDefaultName()) {
    return `你好,${name}`;
}
console.log(greet5()); // 你好,默认用户

// 剩余参数 Rest Parameters   ★★★
function sumAll2(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll2(1, 2, 3, 4, 5), sumAll2(12, 3, 15)); // 15 30

// 剩余参数与其他参数结合   ★★★
function greet6(greeting, ...names) {
    return names.map(name => `${greeting},${name}`).join(' ');
}
console.log(greet6('你好', '张三', '李四', '王五')); // 你好,张三 你好,李四 你好,王五

// arguments 对象   ★★★
function testArguments2() {
    console.log('arguments:', arguments); // arguments: [Arguments] { '0': 'a', '1': 'b', '2': 'c' }
    console.log('arguments[0]:', arguments[0]); // arguments[0]: a
    console.log('arguments.length:', arguments.length); // arguments.length: 3
    console.log('arguments.callee:', arguments.callee); // 输出函数自身(严格模式禁用) arguments.callee: [Function: testArguments2]
}
testArguments2('a', 'b', 'c');

// 将arguments转换为数组   ★★★
function sumAll3() {
    // 方法1 Array.from()   ★★★
    const args1 = Array.from(arguments);
    // 方法2 扩展运算符   ★★★
    const args2 = [...arguments];
    // 方法3 Array.prototype.slice.call()   ★★★
    const args3 = Array.prototype.slice.call(arguments);

    return args1.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll3(1, 2, 3, 4, 5)); // 15

// 参数解构

// 对象解构  ★★★
function printUser({ name, age, city = '未知' }) {
    console.log(`姓名:${name},年龄:${age},城市:${city}`);
}
printUser({ name: '张三', age: 25, city: '北京' }); // 姓名:张三,年龄:25,城市:北京
printUser({ name: '李四', age: 30 }); // 姓名:李四,年龄:30,城市:未知

// 数组解构  ★★★
function processCoords([x, y, z = 0]) {
    return `坐标:(${x}, ${y}, ${z})`;
}
console.log(processCoords([1, 2, 3]), processCoords([1, 2])); // 坐标:(1, 2, 3) 坐标:(1, 2, 0)

// 参数传递

// 基本类型：按值传递传递的是副本  ★★★
function changeValue(x) {
    x = 100;
    console.log('函数内部 x:', x);
}

let value = 10;
changeValue(value); // 函数内部 x: 100
console.log('函数外部 value:', value); // 函数外部 value: 10 按值传递 不会改变函数外部变量的值

// 引用类型: 引用传递(传递的是引用地址)  ★★★

function changeObject(obj) {
    obj.name = '修改后的名字';
    console.log('函数内部 obj.name:', obj.name);
}
const user14 = { name: '原始名字' };
changeObject(user14); // 函数内部 obj.name: 修改后的名字
console.log('函数外部 user14.name:', user14.name); // 函数外部 user14.name: 修改后的名字





















