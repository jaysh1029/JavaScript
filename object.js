// 对象字面量
const person = {
    name: '张三',
    age: 25,
    city: '郑州',
    hobbies: ['看电影', '看小说'],
};

// new Object() 创建对象
const car = new Object();
car.brand = ' Audi';
car.model = 'A4';

// Object.create() 创建属性 
const prototype = { type: '动物' };
const animal = Object.create(prototype);
animal.name = '小猫';
console.log(animal.type); // 输出: 动物
console.log(animal.name); // 输出: 小猫

// 类

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student = new Person('李四', 20);
const user = {
    name: '王五',
    age: 30,
    'user-email': 'wangwu@163.com'
};

// 属性访问方式
console.log(user.name);
console.log(user['name']);
console.log(user['user-email']);

user.address = '上海';
user.age = 31;
delete user.address;

console.log('name' in user);
console.log('phone' in user);
console.log(user.hasOwnProperty('name'));

// 对象方法
const calculator = {
    x: 10,
    y: 20,
    add() {
        return this.x + this.y;
    },
    subtract() {
        return this.x - this.y;
    },
    divide: () => {
        // 箭头函数不绑定this，此处会指向全局 因此会输出 NaN
        return this.x / this.y;
    }

};
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.divide()); // NaN
console.log(undefined / undefined); // NaN

const product = { name: 'iphone 15', price: 5999, brand: 'Apple' };
for (const key in product) {
    console.log(` ${key}: ${product[key]}`);
}
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

const original = {
    name: '张三',
    address: { city: '北京', street: '朝阳区' }
};

// 浅拷贝
const shallowCopy = { ...original };
shallowCopy.address.city = "上海";
console.log(original.address.city); // 上海

// 深拷贝
const deepCopy1 = JSON.parse(JSON.stringify(original));
deepCopy1.address.city = '广州';
console.log(original.address.city);  // 上海

// 深拷贝
const deepCopy2 = structuredClone(original);
deepCopy2.address.city = '深圳';
console.log(original.address.city); // 上海

// 深拷贝 递归实现
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    const clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

const deepCopy3 = deepClone(original);
console.log(deepCopy3);
deepCopy3.address.city = '郑州';
console.log(original.address.city);// 上海

// 冻结 密封

const config = { appName: 'MyApp', version: '1.0.0' };
const frozen = Object.freeze(config);
frozen.appName = 'NewApp'; // 更改无效 严格模式下会报错
console.log(frozen);
const sealed = Object.seal({ name: 'Sealed', value: 100 });
sealed.value = 200;     //  可以修改属性值
sealed.newProp = 'new'; // 不能添加或删除属性
delete sealed.name;  // 不能删除
console.log(sealed);
console.log(Object.isFrozen(frozen));
console.log(Object.isSealed(sealed));




