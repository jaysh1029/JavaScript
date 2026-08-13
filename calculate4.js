// 逻辑运算符
// 返回第一个假值，若都为真，返回最后一个值
console.log(true && true, true && false, 5 && 3, 0 && 5, null && 'hello', 'a' && 'b' && 'c'); // true false 3 0 null c

// 返回第一个真值，若都为假，返回最后一个值
console.log(false || true, false || false, 0 || 5, "" || "hello", null || undefined, 0 || "" || null); // true false 5 hello undefined null

console.log(!true, !false, !0, !5, !!5); // false true true false true

// 短路求值

// &&短路：若第一个为假，不执行第二个
let value = null;
let result1 = value && value.name;
console.log(result1); // null

// ||短路：若第一个为真，不执行第二个

let result2 = 5 || someUndefined;
console.log(result2); // 5

// 设置默认值
let username = "";
let displayName = username || "匿名用户";
console.log(displayName); // 匿名用户

// 条件执行
let isloggedIn = true;
isloggedIn && console.log('用户已登录'); // 用户已登录
