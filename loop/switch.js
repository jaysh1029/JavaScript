// swicth

const day2 = 3;
let dayName2;
switch (day2) {
    case 1:
        dayName2 = '星期一';
        break;
    case 2:
        dayName2 = '星期二';
        break;
    case 3:
        dayName2 = '星期三';
        break;
    case 4:
        dayName2 = '星期四';
        break;
    case 5:
        dayName2 = '星期五';
        break;
    case 6:
        dayName2 = '星期六';
        break;
    case 7:
        dayName2 = '星期日';
        break;
    default:
        dayName2 = '无效日期';
        break;
}
console.log('今天是：', dayName2); // 今天是： 星期三

const month2 = 2;
let daysInMoth2;
switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMoth2 = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMoth2 = 30;
        break;
    case 2:
        daysInMoth2 = 28;
        break;
    default:
        daysInMoth2 = -1;

}
console.log(`${month2}月有${daysInMoth2} 天`); // 2月有28 天

console.log('switch表达式');
const num2 = 10;
switch (true) {
    case num2 < 0:
        console.log('负数');
        break;
    case num2 === 0:
        console.log('零');
        break;
    case num2 > 0 && num2 <= 10:
        console.log('1-10的正数'); // 1-10的正数
        break;
    default:
        console.log('大于10');
}

console.log('fall-through 特性 没有break');

const level3 = 2;
let experience = 0;
switch (level3) {
    case 1:
        experience += 100;
    case 2:
        experience += 200; // 开始执行，没有break就会一直往下执行
    case 3:
        experience += 300; // 执行
        break;
    default:
        experience += 500;
}
console.log('经验值:', experience); // 经验值: 500

console.log('性能对比');

const option2 = 'C';
console.time('switch');

switch (option2) {
    case 'A': console.log('选项A'); break;
    case 'B': console.log('选项B'); break;
    case 'C': console.log('选项C'); break;
    default: console.log('默认');
}
console.timeEnd('switch'); // switch: 0.013ms

console.time('if...else');
if (option2 == 'A') {
    console.log('选项A');
} else if (option2 == 'B') {
    console.log('选项B');
} else if (option2 == 'C') {
    console.log('选项C');
} else {
    console.log('默认');
}

console.timeEnd('if...else'); // if...else: 0.033ms

console.log('决策方式对比');
const role2 = 'editor';

// 根据用户角色显示不同权限
const permissions2 = {
    admin: '所有权限',
    editor: '编辑权限',
    viewer: '只读权限'
};

// 方法一 if...else if

function getPermissionsIf(role) {
    if (role === 'admin') return '所有权限';
    else if (role === 'editor') return '编辑权限';
    else if (role === 'viewer') return '只读权限';
    else return '无权限';
}

console.log(getPermissionsIf(role2)); // 编辑权限

// 方法二 switch
function getPermissionsSwitch(role) {
    switch (role) {
        case 'admin': return '所有权限';
        case 'editor': return '编辑权限';
        case 'viewer': return '只读权限';
        default: return '无权限';
    }
}
console.log(getPermissionsSwitch(role2)); // 编辑权限

// 方法三 对象映射(推荐)
console.log(permissions2[role2] || '无权限'); // 编辑权限

// 方法4 三元运算符

const result11 = role2 === 'admin' ? '所有权限' :
    role2 === 'editor' ? '编辑权限' :
        role2 === 'viewer' ? '只读权限' : '无权限';
console.log(result11); // 编辑权限  ★★★
























