// for...in 变量对象属性

const person = {
    name: '张三',
    age: 25,
    city: '北京',
    job: '工程师'
};
console.log('对象属性:');

for (let key in person) {
    console.log(` ${key}: ${person[key]}`);
}
/*
 name: 张三
 age: 25
 city: 北京
 job: 工程师
*/

console.log(' 遍历数组(不推荐)');
const colors3 = ['red', 'green', 'blue'];
colors3.custom = 'custom';
for (let index in colors3) {
    console.log(` ${index}: ${colors3[index]}`);
}
/*
 0: red
 1: green
 2: blue
 custom: custom
*/
Object.prototype.customProto = 'proto';
const user13 = {
    name: '李四',
    age: 30
};
console.log('过滤前:');
for (let key in user13) {
    console.log(` ${key}: ${user13[key]}`);
}
/*
 name: 李四
 age: 30
 customProto: proto
*/

console.log('\n过滤后:');
for (let key in user13) {
    if (user13.hasOwnProperty(key)) {
        console.log(` ${key}: ${user13[key]}`);
    }
}
/*
 name: 李四
 age: 30
*/

const array = [1, 2, 3];
array[10] = 10; // 创建稀疏数组
console.log('for...in 会遍历所有可枚举属性:');
for (let key in array) {
    console.log(` ${key}: ${array[key]}`);
}




