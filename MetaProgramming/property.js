// 运行时检查对象结构
function inspectObject(obj) {
    console.log('对象类型:', obj.constructor.name);
    console.log('属性列表:', Object.getOwnPropertyNames(obj));
    console.log('原型:', Object.getPrototypeOf(obj));
}

const example = { name: '张三', age: 25 };
inspectObject(example);


// 2.1 属性描述符基础
console.log('=== 2.1 属性描述符 ===');

const obj25 = { name: '张三', age: 25 };

// 获取属性描述符
const descriptor2 = Object.getOwnPropertyDescriptor(obj25, 'name');
console.log('属性描述符:', descriptor2);
// 输出: { value: '张三', writable: true, enumerable: true, configurable: true }

// 2.2 设置属性描述符
console.log('\n=== 2.2 设置描述符 ===');

const obj26 = {};

// 定义属性
Object.defineProperty(obj26, 'name', {
    value: '张三',
    writable: false,    // 不可写
    enumerable: true,   // 可枚举
    configurable: true  // 可配置
});

console.log('obj26.name:', obj26.name); // 输出: 张三

// 尝试修改不可写属性
obj26.name = '李四';
console.log('修改后:', obj26.name); // 输出: 张三（未改变）


// 2.3 访问器属性
console.log('\n=== 2.3 访问器属性 ===');

const person13 = {
    _name: '张三',
    _age: 25,

    get name() {
        console.log('读取 name');
        return this._name;
    },

    set name(value) {
        console.log(`设置 name = ${value}`);
        this._name = value;
    }
};

console.log('person13.name:', person13.name);
person13.name = '李四';


// 3.5 原型链操作
console.log('\n=== 3.5 原型链操作 ===');

const parent3 = {
    name: '父对象',
    age: 25,
    hobby: ['跑步'],
    greet() {
        return 'Hello';
    }
};

const child3 = Object.create(parent3);
child3.name = '子对象';

console.log('child3.name:', child3.name, parent3.name); // 输出: 子对象
console.log(child3.age); // 25 自身没有的属性会顺着原型链找  ★★★
child3.age = 30;
console.log(child3.age, parent3.age); //30 25 原型独有属性 值类型不会被修改 但引用类型会修改  ★★★
child3.hobby.push('足球');
console.log(child3.hobby, parent3.hobby); // [ '跑步', '足球' ] [ '跑步', '足球' ]  这里是引用类型 新对象的这个属性会指向原型属性的引用 所以都会修改    ★★★
console.log(parent3.name, parent3.greet()); // 父对象 Hello
console.log('child3.greet():', child3.greet()); // 输出: Hello
console.log('原型:', Object.getPrototypeOf(child3) === parent3); // 输出: true

// 修改原型
const newPrototype = { name: '新原型' };
Object.setPrototypeOf(child3, newPrototype);
console.log(child3.name); // 子对象
console.log('修改后原型:', Object.getPrototypeOf(child3) === newPrototype); // 输出: true


// 4.5 函数调用拦截
console.log('\n=== 4.5 函数调用拦截 ===');

const loggingProxy = new Proxy(function() {
    console.log('执行原始函数');
    return '结果';
}, {
      // 这个apply类似 get set 是一个捕获器 在函数调用() call() apply() 时 会被捕获  ★★★
    apply(target, thisArg, args) {
        console.log('调用函数前');
        console.log('参数:', args);
        const result = Reflect.apply(target, thisArg, args);
        console.log('调用函数后，结果:', result);
        return result;
    }
});

loggingProxy(1, 2, 3);

/*
调用函数前
参数: [ 1, 2, 3 ]
执行原始函数
调用函数后，结果: 结果
*/
