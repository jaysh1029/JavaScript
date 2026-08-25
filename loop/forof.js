// for...of 遍历值 ES6

const colors4 = ['red', 'green', 'blue'];
for (let c of colors4) {
    console.log(` ${c}`);
}
/*
 red
 green
 blue
*/

const str3 = 'Hello';
for (let char of str3) {
    console.log(` ${char}`);
}
/*
 H
 e
 l
 l
 o
*/

console.log('遍历Map')

const map = new Map([
    ['name', '张三'],
    ['age', 25],
    ['city', '北京']
]);

for (let [key, value] of map) { //   ★★★
    console.log(` ${key}: ${value}`);
}
/*
 name: 张三
 age: 25
 city: 北京
*/

console.log('遍历Set');
const set2 = new Set([1, 2, 3, 4]);
for (let val of set2) {
    console.log(` ${val}`);
}
/*
 1
 2
 3
 4
*/

function testForOf() {
    console.log('参数列表');
    for (let arg of arguments) {
        console.log(` ${arg}`);
    }
}
testForOf('a', 'b', 'c');
/*
 a
 b
 c
*/

console.log('for...of  vs for...in');
const arr6 = ['a', 'b', 'c'];
arr6.custom = 'custom';
console.log('for...of(遍历值)');
for (let value of arr6) {
    console.log(` ${value}`);
}
/*
 a
 b
 c
*/

console.log('for...in 遍历键');
for (let key in arr6) {
    console.log(` ${key}:${arr6[key]}`);
}
/*
 0:a
 1:b
 2:c
 custom:custom  上面有个Object.prototype.custom = 'custom';
*/