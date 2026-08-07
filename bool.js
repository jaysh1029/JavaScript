// 短路运算
/* console.log("不执行", false && console.log("不执行"));
console.log('不执行', true || console.log('不执行'));
console.log('-'.repeat(10));
console.log('执行',true&& console.log('执行'));
console.log('执行', false|| console.log('执行2'));

const user = {name:'张三'};
const displayName = user.name||'匿名用户';
console.log(displayName);

const isAdmin = true;
isAdmin && console.log('管理员权限'); */

// 假值 只有8种
/* const falsyValues =[
    false,
    0,
    -0,
    0n, // BigInt 0
    '',
    null,
    undefined,
    NaN
];
console.log('假值列表：')   
falsyValues.forEach(val=>{
    console.log(`${String(val)} -> ${Boolean(val)}`);
});

// 真值 除了假值都是真值

trueVal = [
    'hello',
    1,
    ' ', // 空格
    [],
    {},
    function(){}
];
console.log('真值列表：');
trueVal.forEach(val=>{
    console.log(`${String(val)} -> ${Boolean(val)}`);
})

function checkValue(val){
    if(val){
        console.log(`"${val}" 是真值`);
    }else{
        console.log(`"${val}" 是假值`);
    }
}
console.log('检测真假值：')

falsyValues.forEach(val=>checkValue(val));
trueVal.forEach(val=>checkValue(val)); */
/* 
let undeVar;
console.log(undeVar);  // 未赋值的变量
function noReturn() { }
console.log(noReturn() === undefined); // true

let userRef = { name: '张三' };
console.log(userRef);
userRef = null;
console.log(userRef);

console.log(typeof undefined);  // undefined
console.log(typeof null);  // object  历史遗留

console.log(undefined == null);  // true
console.log(undefined === null); // false


console.log(Number(undefined));  // NaN

console.log(Number(null));  // 0
console.log(Boolean(undefined));    // false    
console.log(Boolean(null));  // false

// 判断变量是否存在

function isDefined(val) {
    let result = val !== undefined && val !== null;
    console.log(`${val}是否存在：${result}`);
    return result;
}
isDefined('hello');     // true
isDefined(undefined);   // false
isDefined(null);        // false */

// 可选操作符 ?.

const person = {
    name: '张三',
    address: {
        city: '北京'
    }
};

console.log(person.address?.city);  // 北京
console.log(person.contact?.phone);  // undefined  不会报错

// 空值合并操作符  ??

const deVal = '默认值';
const val1 = null ?? deVal;
const val2 = undefined ?? deVal;
const val3 = 0 ?? deVal;
const val4 = '' ?? deVal;

console.log(val1,val2,val3,val4,'结尾');  // 默认值 默认值 0  结尾



