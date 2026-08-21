// symbol 用来表示唯一值，可作为对象属性的键，用于定义私有属性或避免冲突

const sym1 = Symbol(); //  不可以用new实例化  因为Symbol 没有构造函数 BigInt也是
const sym2 = Symbol('description');
const sym3 = Symbol('description');
console.log(sym1);
console.log(sym2, sym2.description);
console.log(sym3);
console.log(sym2 == sym3, sym2 === sym3); // false, false

// 作为对象属性名
const uniqueId = Symbol('id');
const userObj = {
    name: '张三',
    [uniqueId]: 12345,  // symbol作为键时，要用[]包裹起来，使用的时候也要用[]包裹
};
const userObj2 = {
    name: '张三',
    uniqueId: 12345,
};
console.log(userObj.name, userObj.uniqueId, userObj[uniqueId]); // 张三 undefined 12345
console.log(userObj2.name, userObj2.uniqueId, userObj2[uniqueId], userObj2["uniqueId"]); //张三 12345 undefined 12345

console.log(Object.keys(userObj)); // [ 'name' ]
console.log(JSON.stringify(userObj)); //{"name":"张三"}
console.log(Object.getOwnPropertySymbols(userObj)); // [ Symbol(id) ]

// 全局 Symbol
const gsym1 = Symbol.for('app.id');
const gsym2 = Symbol.for('app.id');
console.log(gsym1 === gsym2);       // true
console.log(Symbol.keyFor(gsym1));  // app.id

// 内置 symbol
// 使对象可迭代
const itObj = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

console.log('迭代 Symbol.iterator: ');
for (const val of itObj) {
    console.log(val);  // 1,2,3
}

// 自定义toString标签
class CustomClass {
    get [Symbol.toStringTag]() {
        return 'Custom';
    }
}
const custom = new CustomClass();
console.log(custom.toString()); // [object Custom]   若没有自定义toStringTag 则输出[object Object]

// 私有属性
const _priData = Symbol('private');

class MyClass {
    constructor(val) {
        this[_priData] = val; // 这个其实也是公有属性，知识访问的时候只能使用 cObj[_priData] 属性名不带单引号   ★★★
        //this.data = val; // 或用下面的方式 给data加 '' 这样添加的是公有属性
        this['data'] = val;
    }
    getPrivate() {
        return this[_priData];
    }
}
const mcObj = new MyClass('秘密');
console.log(mcObj.getPrivate());  // 秘密

// mcObj._priData 等价于 mcObj['_priData'] 注意这个带单引号
// mcObj[_priData] 不带单引号 就是属性名称  因此可以访问  ★★★
console.log(mcObj._priData, mcObj[_priData], mcObj.data);  //undefined 秘密 秘密  ★★★

// 不是真正的私有，通过 Object.getOwnPropertySymbols() 可以获取   ★★★
console.log(Object.getOwnPropertySymbols(mcObj), mcObj[Object.getOwnPropertySymbols(mcObj)[0]]); // [ Symbol(private) ] 秘密

// 定义常量
const COLORS = {
    RED: Symbol('red'),
    GREEN: Symbol('green'),
    BLUE: Symbol('blue')
};
function getColorName(color) {
    switch (color) {
        case COLORS.RED:
            return '红色';
        case COLORS.GREEN:
            return '绿色';
        case COLORS.BLUE:
            return '蓝色';
        default:
            return '未知';
    }
}

console.log(getColorName(COLORS.RED)); // 红色