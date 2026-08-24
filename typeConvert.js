// 显式转为字符串

// 123 true null undefined 1,2,3 [object Object]
console.log(String(123), String(true), String(null), String(undefined), String([1, 2, 3]), String({ a: 1 }));

// 使用toString() null/undefined 不能调用toString()
console.log((123).toString(), (true).toString(), [1, 2, 3].toString()); // 123 true 1,2,3

// 使用+ '' 拼接  隐式转换字符串

console.log(123 + '', true + ''); // 123 true

// 转为Number
console.log("==============Number转换==============");
console.log(Number("123")); // 123
console.log(Number(" 123 ")); // 123 自动去空格
console.log(Number('123abc')); // NaN
console.log(Number('')); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0   ★★★
console.log(Number(undefined)); // NaN   ★★★
console.log(Number([1]));  // 1   ★★★
console.log(Number([1, 2])); // NaN   ★★★
console.log(Number({ a: 1 })); // NaN

console.log("+++++++++++++++++ parseInt ++++++++++++++++++++");

console.log(parseInt('123abc')); // 123 解析到非数字就停止
console.log(parseInt(' 123 ')); // 123 自动去空格
console.log(parseInt('abc123')); // NaN  第一个字符不是数字   ★★★
console.log(parseInt('12.34')); // 12 取整
console.log(parseFloat('12.34')); // 12.34
console.log(parseInt(undefined)); // NaN  ★★★

console.log("+++++++++++++++++ 一元 + 运算符 ++++++++++++++++++++");

console.log(+'123'); // 123
console.log(+true); // 1
console.log(+null); // 0   ★★★
console.log(+undefined); // NaN   ★★★
console.log(+[]); //  0 ★★★★★ +[]结果为0 []会转为空字符串  相当于 +0 ★★★★★
console.log([] + []); // 结果为空字符串   ★★★★★ [] 会转换为空字符串 ★★★★★

// Boolean

console.log('============== 转Boolean =================');
console.log(Boolean('Hello')); // true
console.log(Boolean('')); // false
console.log(Boolean(123)); // true
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true 空对象 对象为真
console.log(Boolean({})); //true 空对象 对象为真

// 双重否定
console.log(!!'hello'); // true
console.log(!!0); // false

// 算符运算符 +

console.log('---------------- 算术运算符 ------------------');
console.log(1 + '2'); // 12 数字1 隐式转为字符串 1
console.log('1' + 2); // 12
console.log(1 + 2 + '3'); // 33 先加后拼
console.log('1' + 2 + 3); // 123  全部拼接
console.log('6' - '2'); // 4 都转数字
console.log('6' * '2'); // 12
console.log('12' / '3'); // 4
console.log('10' % '3'); // 1
console.log('hello' - 1); // NaN  hello无法转数字

// 比较运算符

console.log('============= 比较运算符 ======================');

console.log('1' == 1); // true 字符串转数字
console.log(true == 1); // true  true转为1
console.log(false == 0); // true   false转为0
console.log(null == undefined); // true  ★★★★★ 特殊规则 ★★★★★ null 只等于undefined和自身， 其他均为false
console.log(null == 0); // false
console.log('' == 0); // true  空格转为0    ★★★
console.log([1] == 1); // true  数组转字符串再转1 ★★★
console.log([1, 2] == '1,2'); // true 同上 ★★★

// 严格相等  不进行类型转换  值和类型都相同才为true
console.log('1' === 1); // false
console.log(true === 1); // false
console.log('=== 特殊情况比较开始');
console.log(+0 === -0); // true  ★★★
console.log(NaN === NaN); // false  ★★★
console.log(Object.is(+0, -0)); // false  ★★★
console.log(Object.is(NaN, NaN)); // true   ★★★
console.log('=== 特殊情况比较结束');


console.log('2' > 1); // true
console.log('b' > 'a'); // true 
console.log('2' > '10'); // true  ★★★★★ 这里进行的是字典序列比较 第一个字符 2 > 1 ★★★★★
console.log(2 > '10'); // false 数字比较  ★★★

// 逻辑运算符
console.log('------------------- 逻辑运算符 --------------------');
console.log(!'hello'); //false
console.log(!0); //true
console.log(!!'hello'); //true
console.log('hello' || 'world'); // hello  返回第一个真值  ★★★
console.log(0 || 'world'); // world  0位false  返回第一个真值或返回第二个假值  ★★★
console.log(0 || null); // null 都为false 返回最后一个 ★★★
console.log(null || 0); // 0 都为false 返回最后一个 ★★★
console.log('hello' && 'world'); // world  默认返回第一个假值，都为真，返回最后一个   ★★★
console.log(0 && 'world'); // 0 返回第一个假值  (短路)    ★★★
console.log('world' && 0); // 0 返回第一个假值  ★★★

// 其他隐式场景

console.log('------------------- 其他隐式场景 --------------------');
if ('hello') { console.log('真'); } // 真 非空为真
if (0) { console.log('假'); } // 不执行  0为false

console.log(+[]); //  0 ★★★★★ +[]结果为0 []会转为空字符串  相当于 +0 ★★★★★
console.log([] + []); // 结果为空字符串   ★★★★★ [] 会转换为空字符串 ★★★★★
console.log([] + {}); // [object Object]    []会转为空字符串
console.log({} + []); // [object Object]    []会转为空字符串
console.log([1] + [1]); // 11  [1]会转为字符串 1    ★★★

// 常见坑点 
console.log('------------------- 常见坑点 --------------------');

console.log([1, 2] + [3, 4]); // 1,23,4 都转为字符串拼接  ★★★
console.log({} + 1); // [object Object]1   {} 对象会转为字符串[object Object]  ★★★
console.log(1 + {}); // 1[object Object] 同上  ★★★

console.log('12' - '8'); // 4 减号 强制转数字
console.log('12' - '4a'); // NaN 4a无法转为数字    ★★★
console.log('12' - parseInt('4a')); // 8 

console.log(NaN == NaN); // false  ★★★
console.log(NaN === NaN); // false  ★★★
console.log(Number.isNaN(NaN)); //true  ★★★
console.log(typeof null); // object  // 历史遗留    ★★★

// 实战演练
console.log('------------------- 实战演练 --------------------');

// 表单输入
const input = '42';
const num = Number(input);
console.log(num + 10); // 52

// 条件判断防御
const value = null;
if (value != null && value != undefined) {  // ★★★★★ null == undefined 为true ★★★★★
    console.log(value);
} else {
    console.log('无效值');
}

// 模拟后台数据
const data = { score: '95' };
// 隐式转字符串了  (不推荐)
console.log(data.score + 10); // 9510 字符串拼接
// 推荐使用Number转换
console.log(Number(data.score) + 10); // 105

// 短路运算赋值
let userInput;
const name = userInput || '匿名';  // ★★★★★ 若userInput为false 使用 "匿名" 赋值给变量  这里userInput 必须提前声明 否则报错 ★★★★★
console.log(name); // 匿名
// 若不提前声明 userInput  可以用以下方式书写
const name2 = typeof userInput2 !== 'undefined' ? userInput2 : '匿名2';
console.log(name2);

console.log(0 == false); // true 隐式转换
console.log(0 === false); // false  类型不同











