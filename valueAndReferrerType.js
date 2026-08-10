// 值类型和引用类型的比较

// 复制
let a = 10;
let b = a;
b = 20;
console.log(a);  // a不变  10

const objA = { name: '张三' };
const objB = objA;
objB.name = "李四";
console.log(objA.name); // 李四 objA 被修改

// 比较
console.log(10 === 10); // true
const objC = { name: '张三' };
const objD = { name: '张三' };
console.log(objC === objD); // false

// 参数传递
function changeValue(x) { x = 100; }
let num = 10;
changeValue(num);
console.log(num); // 10  不变

function changeObject(obj) { obj.name = "王五"; }
const personObj = { name: '张三' };
changeObject(personObj);
console.log(personObj.name); // 王五  被修改
