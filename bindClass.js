/*
    类的构造函数 不能使用call/apply 否则会报错
    但可以使用bind
    使用bind后，this由new操作符自动创建，bind的第一个参数thisArg会被忽略
    必须使用 new 来调用绑定后的函数，如果直接调用（不加 new），this 会指向全局对象，导致意外修改全局变量
*/

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`User created: ${this.name}`);
    }
}
// 预设参数
const bindUser = User.bind(null, 'John', 25);

// 创建对象，依然需要使用new
const user = new bindUser();    // User created: John
console.log(user.name, user.age, user instanceof User); // John 25 true

// 核心原理：bind 作用于构造函数时，会返回一个新函数，这个新函数内部使用了 new 操作符来调用原构造函数
// 类似以下代码
function myBind(Constructor, ...persetArgs) {
    return function BoundConstructor(...args) {
        // 必须使用new来调用
        return new Constructor(...persetArgs, ...args)
    }
}


// 预设部分参数

class Logger {
    constructor(level, message) {
        this.level = level;
        this.message = message;
        this.timestamp = new Date();
    }
    log() {
        console.log(`[${this.timestamp}] ${this.level}: ${this.message}`);
    }
}

// 预设level
const ErrorLogger = Logger.bind(null, 'ERROR');
const WarnLogger = Logger.bind(null, 'WARN');

const error = new ErrorLogger('Something went wrong!');
const warn = new WarnLogger('Please check this warning');
error.log(); // [Mon Aug 10 2026 18:34:50 GMT+0800 (中国标准时间)] ERROR: Something went wrong!
warn.log(); // [Mon Aug 10 2026 18:34:50 GMT+0800 (中国标准时间)] WARN: Please check this warning

// 工厂函数模式
class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
    speak() {
        console.log(`${this.name} (${this.type}) says hello!`);
    }
}

const DogFactory = Animal.bind(null, 'dog');
const CatFactory = Animal.bind(null, 'cat');

const buddy = new DogFactory('Buddy');
const whiskers = new CatFactory('Whiskers');

buddy.speak();      // Buddy (dog) says hello!
whiskers.speak();   // Whiskers (cat) says hello!


// 在继承中复用构造函数

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        // 传统方式 继承并初始化
        super(make, model, year);
        this.doors = doors;
    }

}

// 使用bind创建特定品牌工厂

const ToyotaCar = Car.bind(null, 'Toyota');
const HondaCar = Car.bind(null, 'Honda');

const camry = new ToyotaCar('Camry', 2026, 4);
const accord = new HondaCar('Accord', 2026, 4);

console.log(camry); // Car { make: 'Toyota', model: 'Camry', year: 2026, doors: 4 }


/*
    需要特别注意的地方
    1. 不能绑定this(第一次参数会被忽略)
    构造函数的 this 由 new 操作符自动创建，所以 bind 的第一个参数（thisArg）会被忽略。
    2. instanceof  依然有效
*/


class Person {
    constructor(name) {
        this.name = name;
    }
}

const obj = { custom: 'object' };

// 由于bind的第一参数被忽略，因此 这里的obj会被忽略
const BindPerson = Person.bind(obj, 'Alice');

const alice = new BindPerson();

console.log(alice.name);    // Alice
console.log(alice.custom,); // undefined（obj 被忽略了）
console.log(alice instanceof Person); // true
console.log(alice instanceof BindPerson); // true

// 类和函数的区别： 1. 函数可以直接调用 不需要用new  2. 类必须使用new调用


// new.target问题 
/*
    bind 对 new.target 的影响：
在 JavaScript 中，当你使用 new 关键字调用一个被 bind 过的函数时，
new.target 不会指向那个被 bind 产生的新函数（即 BoundClass），
而是会穿透绑定，直接指向原始的构造函数（即 OriginalClass）
*/

class Base {
    constructor(value) {
        console.log('new.target:', new.target);
        this.value = value;
    }
}

const BindBase = Base.bind(null, 42);

const bInstance = new BindBase();
const base = new Base(42);


class Animal2 {
    constructor() {
        console.log('Animal 中的 new.target:', new.target, new.target.name);
    }
}

class Dog extends Animal2 {
    constructor() {
        super(); // 触发父类构造函数
    }
}

// 将 Dog 类 bind 一下
const BoundDog = Dog.bind(null);

// 实例化 BoundDog
const dog = new BoundDog(); // Animal 中的 new.target: [class Dog extends Animal2] Dog


function OriginalClass() {
    console.log('new.target 指向:', new.target.name, new.target);
}

// 1. 使用 bind 创建一个新函数
const BoundClass = OriginalClass.bind(null);

// 2. 使用 new 关键字实例化这个被 bind 过的函数
const instance = new BoundClass();  // new.target 指向: OriginalClass [Function: OriginalClass]



