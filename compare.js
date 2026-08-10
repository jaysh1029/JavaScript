// 相等比较
// === 严格相等： 值与类型都相同，才为true (推荐)
// == 抽象相等： 会进行类型转换后才比较(不推荐) 
// Object.is()： 与 === 类型 但修复了 +0===-0 为true  NaN===NaN 为false等特殊情况
console.log(5 === '5'); // false 类型不同
console.log(5 == '5');  // true 类型转换后比较
console.log(0 === false); // false
console.log(0 == false);  // true
console.log('null === undefined', null === undefined); // false;
console.log('null == undefined', null == undefined); // true
console.log('NaN ===NaN', NaN === NaN);  // false (NaN不等于自身)
console.log('Object.is(NaN,NaN)', Object.is(NaN, NaN)); // true
console.log('+0 === -0', +0 === -0); // true
console.log('Object.is(+0,-0)', Object.is(+0, -0)); // false