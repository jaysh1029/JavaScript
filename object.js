
// 对象字面量
const person = {
    name: '张三',
    age: 25,
    city: '郑州',
    hobbies: ['看电影', '看小说'],
};

// new Object() 创建对象
const car =new Object();
car.brand = ' Audi'; 
car.model = 'A4';

// Object.create() 创建属性 
const prototype = {type:'动物'};
const animal = Object.create(prototype);   
animal.name='小猫';
console.log(animal.type); // 输出: 动物
console.log(animal.name); // 输出: 小猫

// 类

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const student = new Person('李四',20);
const user = {
    name:'王五',
    age:30,
    'user-email':'wangwu@163.com'
};

// 属性访问方式
console.log(user.name);
console.log(user['name']);
console.log(user['user-email']);