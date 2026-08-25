// 三元运算符

const age4 = 20;
const status2 = age4 >= 18 ? '成年人' : '未成年人';
console.log('年龄状态:', status2); // 年龄状态: 成年人

const isLoggedIn2 = true;
const greeting = isLoggedIn2 ? '欢迎回来' : '请登录';
console.log('问候语:', greeting);

console.log('嵌套三元运算符');
const score4 = 85;
const grade4 = score4 >= 90 ? 'A' :
    score4 >= 80 ? 'B' :
        score4 >= 70 ? 'C' :
            score4 >= 60 ? 'D' : 'F';
console.log('成绩等级:', grade4); // 成绩等级: B  ★★★

console.log('函数返回值中使用');
function getFee(isMember) {
    return isMember ? '$2.00' : '$10:00';
}
console.log('会员费用', getFee(true), getFee(false));// 会员费用 $2.00 $10:00

let result7;
const x2 = 10;
if (x2 > 5) { result7 = '大于5'; }
else { result7 = '小于等于5'; }

console.log('if...else', result7); // if...else 大于5

const result8 = x2 > 5 ? '大于5' : '小于等于5';
console.log('三元运算符：', result8); // 三元运算符： 大于5

console.log('链式三元运算符');
const temperature = 25;
const weather = temperature > 30 ? '炎热' :
    temperature > 20 ? '温暖' :
        temperature > 10 ? '凉爽' : '寒冷';
console.log('天气：', weather); // 天气： 温暖

// 不推荐：复杂逻辑 
const user5 = { name: '张三', age: 25 };
const result = user5.age >= 18 ? user5.name : '未成年人';// 正确
//const result2 = user5.age >= 18 ? user5.isAdmin ? '管理员' : '用户' : '未成年人'; // 不推荐复杂逻辑

// 复杂逻辑，推荐使用if...else

let result9;
if (user5.age >= 18) {
    result9 = user5.isAdmin ? '管理员' : '用户';
} else {
    result9 = '未成年人';
}
console.log('用户类型:', result9); // 用户类型: 用户



