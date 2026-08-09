
// 常用修饰符 i 忽略大小写，g 全局， m 多行匹配
const regex1 = /hello/i;
const regex2 = new RegExp('hello', 'i');

const txt = 'Hello World';
console.log(regex1.test(txt));  // true
console.log(txt.match(/Hello/));    // [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]