// 1. 数据类型检测工具

function getType(value) {
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

// 测试不同类型

const testData = [
    42,                 // number
    'Hello',            // string
    true,               // boolean
    undefined,          // undefined
    null,               // null
    Symbol('id'),       // symbol
    9007199254740991n,  // bigint
    {},                 // object
    [],                 // array
    function () { },    // function
    new Date(),         // date
    /test/,             // regexp
    new Error(),        // error
];
console.log('类型检测结果：');
testData.forEach(item => {
    console.log(`${String(item).slice(0, 20)} -> ${getType(item)}`);
});

// 类型转换示例

console.log('类型转换');
const strNum = '123.45';
console.log('字符串转数字：', Number(strNum), parseInt(strNum), parseFloat(strNum)); // 123.45 123 123.45
console.log('数字转字符串：', String(42), (42).toString()); // 42 42
console.log('转布尔值：', Boolean(0), Boolean('Hello'), Boolean([])); // false true true

// 比较示例
console.log("比较示例");
console.log(5 === '5', 0 === false);   // false false
console.log(5 == '5', 0 == false);     // true true

// 拷贝
console.log('拷贝示例');
const originalObj = {
    name: '张三',
    address: { city: '北京', street: '朝阳区' },
    date: new Date(),
    //func: () => 'hello'  // 函数 不能使用structuredClone 深拷贝，会报错
};

// 浅拷贝
const shallow = { ...originalObj };
shallow.address.city = '上海';
console.log('浅拷贝后，原对象地址：', originalObj.address.city); // 上海 被修改了

// 深拷贝

const deepObj = structuredClone(originalObj);  // structuredClone 不能赋值函数和Symbol
deepObj.address.city = "广州";
console.log('深拷贝后，原对象地址：', originalObj.address.city); // 上海 不会被修改



// 表单验证
console.log('表单验证示例');

function validateInput(input) {
    if (typeof input === 'undefined') {
        return { valid: false, error: '输入不能为空' };
    }
    if (typeof input === 'string' && input.trim().length == 0) {
        return { valid: false, error: '字符串不能为空' };
    }

    if (typeof input === 'number' && isNaN(input)) {
        return { valid: false, error: '无效数字' };
    }

    return { valid: true };


}

console.log(validateInput('Hello'));    // { valid: true }
console.log(validateInput(''));         // { valid: false, error: '字符串不能为空' }
console.log(validateInput(NaN));        // { valid: false, error: '无效数字' }