// 类型检查

console.log('---- typeof ----');
console.log(typeof 42); // number
console.log(typeof 'Hello'); // string
console.log(typeof true, typeof undefined, typeof null, typeof Symbol(), typeof 123n, typeof {}, typeof [], typeof function () { });
// boolean undefined object symbol bigint object object function
console.log(typeof new Date()); // object
console.log('--- instanceof ---'); //  检测引用类型的具体构造函数  ★★★
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date);  // true  ★★★

console.log('--- Array.isArray ---');
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

console.log('--- Object.prototype.toString.call ---');

// 获取精确的 [object Type]   ★★★
function getType(value) {
    let typeStr = Object.prototype.toString.call(value);
     // Object.prototype.toString.call 一般结果都是 [object 类型]  如[object Number] [object Null] [object Date]   ★★★
    console.log(typeStr, typeStr.slice(8, -1)); // 截取第8位到 倒数第一位
    return typeStr;
}

getType(42);        // [object Number] Number
getType('Hello');   // [object String] String
getType(null);      // [object Null] Null
getType([]);        // [object Array] Array
getType(undefined); // [object Undefined] Undefined
getType(new Date()); // [object Date] Date
getType(new Error()); // [object Error] Error
getType(/[0-9]/ig); // [object RegExp] RegExp
getType(new RegExp()); // [object RegExp] RegExp
getType(Symbol()); // [object Symbol] Symbol
getType(123n); // [object BigInt] BigInt

// 综合检测工具
function detectType(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    const type = typeof value;
    if (type !== 'object') return type;
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    if (value instanceof Error) return 'error';
    return 'object';
}