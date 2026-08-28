// ============================================
// 9. 常见陷阱与注意事项
// ============================================

// 9.1 相等比较的陷阱
console.log('=== 9.1 相等比较陷阱 ===');

// 值类型比较
console.log('值类型比较:');
console.log('5 == "5":', 5 == '5'); // 输出: true
console.log('5 === "5":', 5 === '5'); // 输出: false（推荐使用 ===）

// 引用类型比较
console.log('\n引用类型比较:');
const obj49 = { a: 1 };
const obj50 = { a: 1 };
console.log('obj49 == obj50:', obj49 == obj50); // 输出: false
console.log('obj49 === obj50:', obj49 === obj50); // 输出: false（不同引用）

// 9.2 null 和 undefined 的陷阱
console.log('\n=== 9.2 null 和 undefined 陷阱 ===');

console.log('null == undefined:', null == undefined); // 输出: true  ★★★
console.log('null === undefined:', null === undefined); // 输出: false  ★★★

console.log('typeof null:', typeof null); // 输出: object（历史遗留问题）  ★★★
console.log('typeof undefined:', typeof undefined); // 输出: undefined  ★★★

// 9.3 NaN 的陷阱
console.log('\n=== 9.3 NaN 陷阱 ===');

console.log('NaN == NaN:', NaN == NaN); // 输出: false  ★★★
console.log('NaN === NaN:', NaN === NaN); // 输出: false  ★★★
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // 输出: true  ★★★
console.log('Number.isNaN("abc"):', Number.isNaN('abc')); // 输出: false  ★★★ 这个不会类型转换
console.log('isNaN("abc"):', isNaN('abc')); // 输出: true   ★★★ 这个会进行类型转换

// 9.4 浮点数精度问题
console.log('\n=== 9.4 浮点数精度 ===');

console.log('0.1 + 0.2:', 0.1 + 0.2); // 输出: 0.30000000000000004
console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3); // 输出: false

// 解决方案
console.log('(0.1 * 10 + 0.2 * 10) / 10:', (0.1 * 10 + 0.2 * 10) / 10); // 输出: 0.3

// 9.5 数组的 typeof
console.log('\n=== 9.5 数组的 typeof ===');

console.log('typeof []:', typeof []); // 输出: object
console.log('Array.isArray([]):', Array.isArray([])); // 输出: true

// 9.6 函数提升 vs 变量提升
console.log('\n=== 9.6 函数提升 vs 变量提升 ===');

// 函数声明提升
console.log('funcDecl():', funcDecl()); // 输出: 函数声明（可以调用）

function funcDecl() {
    return '函数声明';
}

// 函数表达式不提升
// console.log('funcExpr():', funcExpr()); // 报错: Cannot access 'funcExpr' before initialization
const funcExpr = function () {
    return '函数表达式';
};

// 9.7 严格模式的差异
console.log('\n=== 9.7 严格模式差异 ===');

// 在严格模式下，某些行为会不同
// 'use strict';

// 非严格模式：this 指向全局对象
function testThis() {
    console.log('this:', this);
}
// testThis();

// 严格模式：this 为 undefined
// 'use strict';
// function testThisStrict() {
//     console.log('this:', this);
// }
// testThisStrict();

// 9.8 引用类型的可变性陷阱
console.log('\n=== 9.8 引用类型可变性陷阱 ===');

// 函数参数传递引用
function modifyArray(arr) {
    arr.push(100);
}

const arr23 = [1, 2, 3];
modifyArray(arr23);
console.log('arr23:', arr23); // 输出: [1,2,3,100]（被修改）

// 避免修改原数组
function safeModify(arr) {
    return [...arr, 100]; // 返回新数组
}

const arr24 = [1, 2, 3];
const arr25 = safeModify(arr24);
console.log('arr24:', arr24); // 输出: [1,2,3]（未改变）
console.log('arr25:', arr25); // 输出: [1,2,3,100]
