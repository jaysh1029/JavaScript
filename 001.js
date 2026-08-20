//"use strict" // 这条语句必须放在脚本或函数的顶部，前面只能有注释或空行，任何可执行语句，都会让它失效
/* var varVariable;
console.log(varVariable);
var v2 ="声明并赋值";
console.log(v2);

let let01;
console.log(let01);

let let02 = "let 变量";
console.log(let02);

const c1="const变量";
console.log(c1);

console.log(window.v2);
console.log(window.let02);
console.log(window.c1);

 */

function testScope() {
    var funcScope = "函数内的var";
    let funcLet = "函数内的let";
    const funConst = "函数内的const";
    winVar = '全局变量，在浏览器中会绑定到window对象上,NodeJS中会绑定到globalThis对象上'; //  ★★★

    console.log('函数内部访问 var: ', funcScope);
    console.log('函数内部访问 let: ', funcLet);
    console.log("函数内部访问 const: ", funConst);
    console.log("全局变量 没有修饰符", winVar);

    if (true) {
        var insideIfVar = "if块内的var ";
        let insideIfLet = "if块内的let ";
        const insideIfConst = "if块内的const";
        winVar2 = '全局变量，在浏览器中会绑定到window对象上,NodeJS中会绑定到globalThis对象上'; //  ★★★
    }
    console.log('if块外的 var: ', insideIfVar);
    console.log('if块外的 全局变量winVar2 : ', winVar2);
    //console.log('if块外的 let: ',insideIfLet);
    //console.log('if块外的 const: ',insideIfConst);
}

testScope();
console.log('winVar：', winVar, globalThis.winVar);
console.log('winVar2：', winVar2);




function testFor() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log('var i:', i);
        }, 100);
    }

    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            console.log('let j:', j);
        }, 100);
    }
    console.log(i);
    //console.log(j);
}
testFor();

console.log(a);
var a = 10;
console.log(a);

function varTiSheng() {
    console.log(b);
    var b = 20;
    console.log(b);

    console.log(c, d);
    var c = 1;
    var d = 2;
    console.log(c, d);



}

varTiSheng();



//console.log("let",letVar);
let letVar = "11";
console.log(letVar);


//console.log("const",conVar);
const conVar = "11";
console.log(conVar);

let x = "外部x";
{
    //console.log(x); // 下面的语句若没有声明，这里会显示外部x，但是内部声明后，这一句就变成了访问未定义和初始化的内部x，于是报错
    let x = "内部x";
    console.log('内部x：', x);
}
console.log('外部x', x);

//console.log(typeof y); // 若下面不声明 则输出undefined，声明成let就报错了
let y = 10;

console.log(typeof z); // 由于下面使用的是var声明，因此无论下面一句是否声明，都会输出undefined   
var z = 20;

const conStr = "字符串";
// conStr ="aaa";  不可修改，否则会报错

// 对象，可以修改属性，但不能重新赋值
const person = {
    name: '张三',
    age: 26
};

// person={name:'李四'}; // 报错

person.name = "李四";
console.log(person);

// 可以添加或删除属性
person.city = "郑州";
console.log(person);

delete person.city;
console.log(person);

// 数组 可以修改数组里面的内容，但不能重新赋值整个数组

const arr = [2, 3, 4];
arr.push(5);
console.log(arr);

arr[0] = 30;
console.log(arr);

// 冻结对象
//"use strict" // 这个在这里失效，必须放到顶部
const frozenObj = { name: '冻结对象', value: 34 };
Object.freeze(frozenObj);

frozenObj.name = "新名字";
frozenObj.newPro = "新属性";
console.log(frozenObj);


const debugData = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' }
];
console.log(debugData);
console.table(debugData);
console.log(typeof Symbol() === "symbol");
console.log(typeof Symbol("foo") === "symbol");
console.log(typeof Symbol.iterator === "symbol");
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
