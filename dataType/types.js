// ============================================
// 4. 类型判断方法
// ============================================

// 4.1 typeof 操作符  ★★★
console.log('=== 4.1 typeof ===');

console.log('typeof 42:', typeof 42); // 输出: number
console.log('typeof "Hello":', typeof 'Hello'); // 输出: string
console.log('typeof true:', typeof true); // 输出: boolean
console.log('typeof undefined:', typeof undefined); // 输出: undefined
console.log('typeof null:', typeof null); // 输出: object（历史遗留问题）
console.log('typeof Symbol("id"):', typeof Symbol('id')); // 输出: symbol
console.log('typeof 42n:', typeof 42n); // 输出: bigint

console.log('typeof {}:', typeof {}); // 输出: object
console.log('typeof []:', typeof []); // 输出: object
console.log('typeof function(){}:', typeof function() {}); // 输出: function
console.log('typeof new Date():', typeof new Date()); // 输出: object

// 4.2 instanceof 操作符  ★★★
console.log('\n=== 4.2 instanceof ===');

console.log('[] instanceof Array:', [] instanceof Array); // 输出: true  ★★★
console.log('[] instanceof Object:', [] instanceof Object); // 输出: true  ★★★
console.log('{} instanceof Object:', {} instanceof Object); // 输出: true
console.log('new Date() instanceof Date:', new Date() instanceof Date); // 输出: true  ★★★
console.log('/hello/ instanceof RegExp:', /hello/ instanceof RegExp); // 输出: true  ★★★
console.log('function(){} instanceof Function:', function() {} instanceof Function); // 输出: true  ★★★

// 4.3 Array.isArray()
console.log('\n=== 4.3 Array.isArray() ===');

console.log('Array.isArray([]):', Array.isArray([])); // 输出: true
console.log('Array.isArray({}):', Array.isArray({})); // 输出: false
console.log('Array.isArray(new Array()):', Array.isArray(new Array())); // 输出: true

// 4.4 Object.prototype.toString.call()
console.log('\n=== 4.4 Object.prototype.toString.call() ===');

function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1); //  ★★★
}

console.log('getType(42):', getType(42)); // 输出: Number
console.log('getType("Hello"):', getType('Hello')); // 输出: String
console.log('getType(true):', getType(true)); // 输出: Boolean
console.log('getType(undefined):', getType(undefined)); // 输出: Undefined
console.log('getType(null):', getType(null)); // 输出: Null  ★★★
console.log('getType([]):', getType([])); // 输出: Array
console.log('getType({}):', getType({})); // 输出: Object
console.log('getType(function(){}):', getType(function() {})); // 输出: Function
console.log('getType(new Date()):', getType(new Date())); // 输出: Date
console.log('getType(/hello/):', getType(/hello/)); // 输出: RegExp
console.log('getType(new Map()):', getType(new Map())); // 输出: Map  ★★★
console.log('getType(new Set()):', getType(new Set())); // 输出: Set  ★★★
console.log('getType(Symbol("id")):', getType(Symbol('id'))); // 输出: Symbol
console.log('getType(42n):', getType(42n)); // 输出: BigInt

// 4.5 自定义类型判断函数
console.log('\n=== 4.5 自定义类型判断 ===');

function isPrimitive(value) {
    return value === null || 
           typeof value === 'string' || 
           typeof value === 'number' || 
           typeof value === 'boolean' || 
           typeof value === 'undefined' ||
           typeof value === 'symbol' ||
           typeof value === 'bigint';
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

console.log('isPrimitive(42):', isPrimitive(42)); // 输出: true
console.log('isPrimitive({}):', isPrimitive({})); // 输出: false
console.log('isObject({}):', isObject({})); // 输出: true
console.log('isObject(null):', isObject(null)); // 输出: false
console.log('isPlainObject({}):', isPlainObject({})); // 输出: true
console.log('isPlainObject([]):', isPlainObject([])); // 输出: false
