// 比较运算符
// ==  !== 比较会进行类型转换
console.log(5 == 5, 5 == '5', 0 == false, 0 == null, null == undefined, NaN == NaN); // true true true false true false

// === !== 不会进行类型转换
console.log(5 === 5, 5 === '5', 0 === false, 0 === null, null === undefined, NaN === NaN); // true false false false false false


console.log(5 != 3, 5 != '5', 0 != false); // true false false
console.log(5 !== '5', 5 !== 5); // true false

// 关系比较
console.log(5 > 3); // true
console.log(5 > '3'); // true
console.log('5' > '3'); // true
console.log('ab' > 'aa'); // true
console.log('5' > 3); // true

console.log(5 >= 5);    // true
console.log(5 >= '5'); // true
console.log('5' >= 5); // true
console.log(3 < 5); // true
console.log("3" < 5); // true

console.log(5 <= 5); // true
console.log('=== 特殊比较 ===');

console.log(Infinity > 1000); // true
console.log(Infinity == Infinity); // true
console.log(NaN > 0); // false
console.log(NaN < 0); // false
console.log(NaN === NaN); // false

// object.is()  ES6 新增

console.log(Object.is(5, 5), Object.is(+0, -0), Object.is(NaN, NaN), +0 === -0); // true false true true