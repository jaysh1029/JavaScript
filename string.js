/*
    字符串特性：
    1. 不可变性：一旦创建，内容不可改变，所有操作方法均返回新字符串，原字符串不变
    2. 类数组：支持通过索引访问字符 str[0]，且拥有length属性
    3. 统一编码：内部使用UTF-6编码 注意处理特殊字符（如 emoji）时可能需要留意码点
    emoji字符 按UTF-16 长度为2 
*/

// 创建与转换

const str1 = 'Hello';   // 字面量创建
const str2 = new String('World'); // 对象包装 不推荐
console.log(typeof str1);   // string
console.log(typeof str2);   // object

// 转换
const num = 123;
const bool = true;
const obj = { a: 1 };
console.log(String(num));       // 123
console.log(num.toString());    // 123
console.log(String(bool));      // true
console.log(String(obj));       // [object Object]

// 模版字符串
const name = 'Alice';
const age = 25;
const multiLine = `
    姓名：${name}
    年龄：${age}
`;
console.log(multiLine);

// 查找与判断

const text = "Hello world, hello JavaScript";

console.log(text.indexOf('hello')); // 13  首次出现的索引(区分大小写)
console.log(text.lastIndexOf('hello')); // 13  最后一次出现的索引
console.log(text.indexOf('nihao')); // -1  找不到 返回 -1
console.log(text.indexOf('hello', 15)); // -1  用索引15作为起始位置，往后查找

console.log(text.includes('world')); // true  是否包含
console.log(text.startsWith('Hello')); // true  是否以xx开头
console.log(text.endsWith('Script'));   // true 是否以xxx结尾

console.log(text.search(/hello/i));  // 0 正则表达式搜索 返回索引 i表示忽略大小写
console.log(text.match(/l/g)); // [ 'l', 'l', 'l', 'l', 'l' ] 匹配所有l 返回匹配结果数组

// 提取与截取

const str = 'JavaScript is awesome!';

// slice 
console.log(str.slice(0, 10)); // JavaScript
console.log(str.slice(-8)); //  awesome!
console.log(str.slice(-8, -1)); // awesome

// substring 取两个索引之间的值 不包含结尾索引  索引不支持负数 若有负责 则视为0

console.log(str.substring(0, 10)); // JavaScript
console.log(str.substring(10, 0)); // JavaScript    第一个大于第二个索引 会自动交换
console.log(str.substring(-5, 5));// JavaS  -5被视为0 

// substr(index,length) 从索引index开始取length个字符串  已弃用
console.log(str.substr(4, 6));   // Script 


console.log(str.charAt(0)); // J 获取索引为0的字符  只支持非负整数 传入负数或非整数，被视为0  索引超出长度或无效时，返回空字符''
console.log(str[0]); // J  类数组访问
console.log(str.at(-1)); // !  倒数第一个字符 支持负数  传入内容无法转换为数字时，视为0
console.log(str.at(1)); // a 索引为1的字符  索引超出长度或无效时，返回undefined
console.log(str.charCodeAt(0)); // 74  返回索引处字符的unicode编码

// 修改与转换

const raw = '  Hello World!  ';

console.log(raw.trim()); // Hello World!
console.log(raw.trimStart()); // "Hello World!  "
console.log(raw.trimEnd()); // "  Hello World!"
console.log(raw.toLowerCase()); //'  hello world!  '
console.log(raw.toUpperCase()); //'  HELLO WORLD!  '

// 替换
const sentence = 'apple, apple, orange';
console.log(sentence.replace('apple', 'banana')); // banana, apple, orange 只替换第一个
console.log(sentence.replace(/apple/g, 'banana'));// banana, banana, orange 替换所有
console.log(sentence.replaceAll('apple', 'banana'));// banana, banana, orange 替换所有

// 填充与重复
console.log('5'.padStart(3, '0'));  // 005
console.log('5'.padEnd(3, '0'));    // 500
console.log('Ha'.repeat(3)); // HaHaHa

// 拼接
console.log('Hello' + ' ' + 'World');   // Hello World
console.log('Hello'.concat(' ', 'World')); // Hello World

// 拆分与组合

const csv = 'red,green,blue';
const colors = csv.split(',');
console.log(colors);    // [ 'red', 'green', 'blue' ]

console.log(csv.split(',', 2)); // [ 'red', 'green' ] 限制返回个数
console.log('abc'.split(''));   // [ 'a', 'b', 'c' ]
console.log(colors.join('|'));  // red|green|blue
console.log(colors.join(''));   // redgreenblue

// 遍历

const word = 'hello 😊';
// 按UTF-16码元遍历 emoji会被拆分
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// for of  按unicode码点 正确处理emoji

for (const ch of word) {
    console.log(ch);
}
// 转数组再遍历 也能正常处理emoji
Array.from(word).forEach((ch, index) => {
    console.log(`索引：${index}:${ch}`);
});


// 其他

console.log('abc'.length);
const arr = ['ä', 'a', 'z'];
arr.sort((a, b) => a.localeCompare(b, 'de')); // 按德语规则排序
console.log(arr); // ['a', 'ä', 'z']

// emoji 处理  
// length 返回的是 UTF-16 码元个数，对于 emoji（如 😊）长度为 2，但 for...of 可正确迭代
// 如需按“字符”数统计，可借助 [...str].length 或 Array.from(str).length

const emoji = '😊';
console.log(emoji.length); // 2 码元数
console.log([...emoji].length); // 1 实际字符数
console.log(Array.from(emoji).length); // 1


// 综合demo

const userInput = '  User: Alice, Age: 25, City: Beijing  ';

// 1. 去掉收尾空白
const trimmed = userInput.trim();

// 2. 转为小写，便于查找
const lower = trimmed.toLowerCase();

// 3. 检查是否包含关键字
if (lower.includes('age')) {
    // 4. 提取年龄部分
    const agePart = lower.slice(lower.indexOf('age:') + 4);
    const age = agePart.split(',')[0].trim();
    console.log(`提取年龄：${age}`);    // 提取年龄：25
}

const parts = trimmed.split(',');
const userInfo = {};
// console.log(parts); // [ 'User: Alice', ' Age: 25', ' City: Beijing' ]
parts.forEach(part => {
    // console.log(part); // User: Alice
    // let p = part.split(':').map(s => s.trim());
    // console.log(p); //[ 'User', 'Alice' ]
    const [key, value] = part.split(':').map(s => s.trim());
    userInfo[key] = value;
});
console.log(userInfo); // { User: 'Alice', Age: '25', City: 'Beijing' }

















