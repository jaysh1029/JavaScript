// 创建对象
const obj41 = {};
console.log('obj41.__proto__:', obj41.__proto__); // 输出: Object.prototype
console.log('obj41.__proto__ === Object.prototype:',
    obj41.__proto__ === Object.prototype); // 输出: true

function Person14(name) {
    this.name = name;
}

const p11 = new Person14('张三');

console.log('p11.__proto__:', p11.__proto__); // 输出: Person14.prototype
console.log('p11.__proto__ === Person14.prototype:',
    p11.__proto__ === Person14.prototype); // 输出: true
console.log('Person14.prototype:', Person14.prototype);
console.log('Person14.prototype.constructor:', Person14.prototype.constructor);
