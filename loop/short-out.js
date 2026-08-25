// 逻辑运算符短路特性
/*
    1. && 短路求值：返回第一个为false的值，若都为true，则返回第二个值
    2. || 短路求值：返回第一个为true的值，若都为false，则返回第二个值
*/

console.log('&& 短路');
console.log(true && 'hello', false && 'hello', 0 && 5, null && 'hello'); // hello false 0 null

console.log('安全访问对象属性');
const user6 = { name: '李四', address: { city: '北京' } };
const city = user6.address && user6.address.city; //  ★★★
console.log('城市:', city); // 城市: 北京

const user7 = { name: '王五' };
console.log(user7.address && user7.address.city); // undefined

console.log('|| 短路求值');
console.log(false || 'hello', 0 || 5, null || 'default', 'hello' || 'world'); // hello 5 default hello

// 设置默认值
const userName = '';
const displayName2 = userName || '匿名用户';
console.log(displayName2); // 匿名用户

console.log('&& 条件执行');
let isAdmin2 = true;
isAdmin2 && console.log('管理员已登录'); // 管理员已登录  ★★★
isAdmin2 = false;
isAdmin2 && console.log('管理员已登录'); // 后面一句不执行  ★★★

console.log('|| 默认值');
function greet(name) {
    name = name || '访客'; //  ★★★
    console.log(`你好,${name}!`);
}
greet('张三'); // 你好,张三!
greet(); // 你好,访客!
greet('');// 你好,访客! ★★★

console.log('组合使用');
const config = {
    debug: true,
    logLevel: 'info'
};

// 安全检查 + 默认值

const logLevel = config.debug && config.logLevel || 'erro';
console.log('日志级别', logLevel); // 日志级别 info

console.log('可选链操作符 ?. ES2020');

const user9 = {
    name: '张三',
    address: {
        city: '北京',
        street: '长安街'
    }
};
// 传统方式
const city3 = user9 && user9.address && user9.address.city;
console.log(city3); // 北京
// 可选链方式
console.log(user9?.address?.city); // 北京  ★★★

// 访问不存在的属性
const user10 = { name: '李四' };
// console.log(user10.address.city); // 会报错 Cannot read properties of undefined (reading 'city')
console.log(user10?.address?.city); // undefined   ★★★ 不会报错 

console.log('可选链与函数调用');
const obj3 = {
    getName() {
        return '张三';
    }
};
const obj4 = {};
console.log(obj3.getName?.()); // 张三
console.log(obj4.getName?.());  // undefined   ★★★ 不会报错 

// 可选链与数组
console.log('可选链与数组');

const arr4 = [1, 2, 3];
console.log(arr4?.[0], arr4?.[10]); // 1 undefined  ★★★

const arr5 = null;
console.log(arr5?.[0]); // undefined  ★★★

console.log('组合使用');
const user11 = {
    name: '王五',
    settings: {
        theme: null
    }
};

const theme4 = user11?.settings?.theme ?? 'light'; // light  ★★★
console.log(theme4);
console.log(user11?.profile?.bio ?? '无简介'); // 无简介  ★★★


console.log('空值合并运算符 ??  只对null和undefined 起作用  ES2020'); //   ★★★

console.log(0 || 10, '' || 'default', false || true); // 10 default true

console.log(0 ?? 10, '' ?? 'default', false ?? true); // 0  false 
console.log(null ?? 'default', undefined ?? 'default'); // default default  ??  只对null和undefined 起作用  ★★★

console.log('实际应用');
const settings = {
    theme: '',
    fontSize: 0,
    language: null
};

// 使用||(可能会覆盖有效值)
console.log(settings.theme || 'dark'); // dark 可能不是期待的 可能想输出 '' 这时就要用??
console.log(settings.theme ?? 'dark'); // 输出 '' 

console.log(settings.fontSize || 14); // 14
console.log(settings.fontSize ?? 14); // 0

const language2 = settings.language ?? 'zh-CN'; // zh-CN
console.log(language2);

console.log('组合使用');

const user8 = {
    name: 'Tom',
    preferences: {
        theme: null,
        notifications: false
    }
};

// 安全的深层访问 
console.log(user8?.preferences?.theme ?? 'dark'); // dark
console.log(user8?.preferences?.notifications ?? true); // false 保留了false



























