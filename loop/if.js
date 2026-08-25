// if...else
const age5 = 20;
if (age5 >= 18) {
    console.log('成年人'); // 成年人
}

const score4 = 45;
if (score4 >= 60) {
    console.log('及格');
} else {
    console.log('不及格'); // 不及格
}

console.log('多条件');

const grade6 = 75;
if (grade6 >= 90) {
    console.log('优秀');
} else if (grade6 >= 80) {
    console.log('良好');
} else if (grade6 >= 70) {
    console.log('中等'); // 中等
} else if (grade6 >= 60) {
    console.log('及格');
} else {
    console.log('不及格');
}

console.log('嵌套if');
const user12 = {
    name: '张三',
    age: 25,
    isAdmin: true
};
if (user12.age >= 18) {
    if (user12.isAdmin) {
        console.log(`${user12.name} 是成年管理员`); // 张三 是成年管理员
    } else {
        console.log(`${user12.name}是成年用户`);
    }
} else {
    console.log(`${user12.name} 是未成年用户`);
}

console.log('复杂条件组合');
const year2 = 2024;
// 闰年判断
if ((year2 % 4 === 0 && year2 % 100 != 0) || year2 % 400 === 0) {
    console.log(`${year2}是闰年`);
} else {
    console.log(`${year2}不是闰年`); // 2026不是闰年
}

console.log('提前返回');

function processUser(user) {
    // 提前检查并返回 避免深层嵌套
    if (!user) {
        console.log('用户不存在');
        return;
    }
    if (!user.isActive) {
        console.log('用户未激活');
        return;
    }
    if (user.age < 18) {
        console.log('用户未成年');
        return;
    }
    console.log(`处理用户:${user.name}`);
}

processUser(null); // 用户不存在
processUser({ name: 'Lucy', isActive: false }); // 用户未激活
processUser({ name: 'Jack', isActive: true, age: 25 }); // 处理用户:Jack
