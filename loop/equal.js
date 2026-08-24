// 相等性比较
// 1. 相等(==) vs 严格相等(===)

// 相等==，会进行类型转换
console.log(5 == 5, 5 == '5', 0 == false, '' == false);
// true true true true
console.log(null == undefined); // true    ★★★
console.log(NaN == NaN); // false       NaN不等于任何值  ★★★


// 严格相等(===) 不进行类型转换
console.log('===');
console.log(5 === 5); // true 
console.log(5 === '5'); // false 类型不同
console.log(0 === false); // false 类型不同
console.log(null === undefined); // false 类型不同
console.log(NaN === NaN); // false

console.log('!= vs !==');
console.log(5 != '5'); // false
console.log(5 !== '5'); // true

console.log('Object.is()');
console.log(Object.is(5, 5)); // true
console.log(Object.is(+0, -0)); // false  ★★★
console.log(+0 === -0); // true

console.log(Object.is(NaN, NaN)); // true  ★★★

console.log(Object.is(null, undefined)); // false  ★★★

console.log('引用类型比较');
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };
const obj3 = obj1;
console.log(obj1 == obj2); // false 不同引用  ★★★
console.log(obj1 === obj2); // false  ★★★
console.log(obj1 === obj3); // true 相同引用  ★★★
console.log(obj1.name === obj2.name); // true 类型和值都相同    ★★★

console.log('类型转换规则');

console.log('10' > 5); // true "10"转为10
console.log('10' > '5'); // false 字符串比较   ★★★
console.log(true == 1); // true true转为1   ★★★
console.log(true === 1); // false  都不转换且比较类型   ★★★
console.log(null == 0); // false null特殊处理   ★★★
console.log(undefined == 0); // false    ★★★



