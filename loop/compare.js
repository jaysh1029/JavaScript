// 关系比较

console.log('数值比较');

console.log(5 > 3, 5 >= 5, 3 < 5, 5 <= 5);

console.log('字符串比较,比较ASCII码顺序');
console.log('apple' < 'banana'); // true
console.log('Apple' < 'apple'); // true 大写字母的ASCII码更小  ★★★
console.log('10' > '2'); // false 字符串"1"<"2"  ★★★
console.log('100' < '20'); // true

console.log('混合类型比较');

console.log('5' > 3); // true '5'转为数字5
console.log('5' > '3'); // true 字符串比较  ★★★
console.log(true > false); // true 都转为数字 true转为1  false转为0  ★★★
console.log('2' > true); // true "2"转为2，true转为1  ★★★

console.log('特殊值比较');
console.log(Infinity > 1000); // true
console.log(-Infinity < -1000); // true
console.log(NaN > 0, NaN < 0); // false false  ★★★
console.log(NaN == NaN, NaN === NaN); // false false  ★★★


console.log('复杂对象比较');
const date1 = new Date('2026-01-01');
const date2 = new Date('2026-12-31');
console.log(date1 < date2, date1 > date2); // true false  日期对象会转为时间戳进行比较  ★★★

// 自定义对象比较，需要实现 valueOf或toString  ★★★
console.log('自定义对象比较，需要实现 valueOf或toString');
const cusObj = {
    value: 42,
    valueOf: function () {
        return this.value;
    },
    toString() {
        return String(this.value);
    }
};

console.log(cusObj > 40, cusObj == 42); // true true  ★★★


// 特殊比较

console.log('null vs undefined');
console.log(null == undefined); // true 底层直接硬性规定，无需转换类型  ★★★
console.log(null === undefined); // false 一个object 一个undefined 类型不同  ★★★


// ECMAScript 规范硬性规定：null 在 == 比较中只与 undefined 和自身相等  ★★★
console.log(null == 0, null > 0); // false false   


// 但在 < > 比较中  会进行类型转换 Number(null) = 0   ★★★
console.log(null >= 0, null <= 0); // true true  null转为0   ★★★

console.log('NaN比较');

console.log(NaN == NaN, NaN === NaN); // false false  ★★★
console.log(Number.isNaN(NaN), Object.is(NaN, NaN)); // true true  ★★★

console.log('+0 vs -0');

console.log(+0 == -0, +0 === -0); // true true
console.log(Object.is(+0, -0)); // false
console.log(1 / +0, 1 / -0); // Infinity -Infinity

console.log('数组比较');
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false
console.log(arr1 === arr3); // true

// 比较Symbol
console.log('Symbol比较');
const sym1 = Symbol('id');
const sym2 = Symbol('id');
const sym3 = sym1;

console.log(sym1 == sym2, sym1 === sym2); // false false
console.log(sym1 === sym3); // true


//比较运算符对比总结

console.log('优先级，从高到低:');
console.log('关系比较', '>,<,>=,<=');
console.log('相等比较：', '==,!=, ===,!==');

// 类型转换对比
console.log('类型转换行为：');
const testCases = [
    [5, '5'],
    [0, false],
    ['', false],
    [null, undefined],
    [NaN, NaN]
];
console.log(' Value1     | Value2     | ==    | ===   | Object.is');
console.log(' -------    |--------    |-----  |-----  |----------');
testCases.forEach(([a, b]) => {
    const eq1 = a == b;
    const eq2 = a === b;
    const eq3 = Object.is(a, b);
    console.log(` ${String(a).padEnd(10)} | ${String(b).padEnd(10)} | ${String(eq1).padEnd(5)} | ${String(eq2).padEnd(5)} | ${String(eq3)}`);
});

/*

 Value1     | Value2     | ==    | ===   | Object.is
 -------    |--------    |-----  |-----  |----------
 5          | 5          | true  | false | false
 0          | false      | true  | false | false
            | false      | true  | false | false
 null       | undefined  | true  | false | false

*/
