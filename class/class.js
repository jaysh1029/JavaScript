// ============================================
// 实例方法详解
// ============================================

class Calculator {
    constructor() {
        this.history = [];
    }
    
    // 1. 普通实例方法
    add(a, b) {
        const result = a + b;
        this.history.push({ operation: 'add', a, b, result });
        return result;
    }
    
    // 2. 链式调用方法  ★★★
    multiply(a, b) {
        const result = a * b;
        this.history.push({ operation: 'multiply', a, b, result });
        return this;  // 返回 this 实现链式调用
    }
    
    // 3. 带默认参数的方法  ★★★
    power(base, exponent = 2) {
        const result = Math.pow(base, exponent);
        this.history.push({ operation: 'power', base, exponent, result });
        return result;
    }
    
    // 4. 使用 rest 参数的方法  ★★★
    sum(...numbers) {
        const result = numbers.reduce((acc, n) => acc + n, 0);
        this.history.push({ operation: 'sum', numbers, result });
        return result;
    }
    
    // 5. 使用 this 绑定的问题  ★★★
    getHistory() {
        return this.history;
    }
}

const calc = new Calculator();
calc.add(1, 2);  // 3
calc.multiply(3, 4).add(5, 6);  // 链式调用
console.log(calc.getHistory());

// 解决 this 绑定问题
const calc2 = new Calculator();
const addFunc = calc2.add.bind(calc2);  // 绑定 this  ★★★
addFunc(10, 20);  // 30

// ============================================
// 访问器属性（Getter & Setter）
// ============================================

class BankAccount {
    constructor(owner, initialBalance = 0) {
        this._owner = owner;
        this._balance = initialBalance;
        this._transactions = [];
        this._isLocked = false;
    }
    
    // 1. Getter - 获取余额
    get balance() {
        return this._balance;
    }
    
    // 2. 不提供 setter 的只读属性
    get owner() {
        return this._owner;
    }
    
    // 3. Getter - 格式化显示
    get formattedBalance() {
        return `￥${this._balance.toFixed(2)}`;
    }
    
    // 4. Getter - 计算属性
    get transactionCount() {
        return this._transactions.length;
    }
    
    // 5. Setter - 带验证的设置
    set balance(value) {
        if (this._isLocked) {
            throw new Error('账户已锁定，不能修改余额');
        }
        if (typeof value !== 'number' || value < 0) {
            throw new Error('余额必须是正数');
        }
        this._balance = value;
        this._transactions.push({
            type: 'set',
            amount: value,
            timestamp: new Date()
        });
    }
    
    // 6. Setter - 修改锁定状态
    set locked(value) {
        this._isLocked = Boolean(value);
        console.log(`账户${this._isLocked ? '已锁定' : '已解锁'}`);  // 输出状态
    }
    
    // 7. Getter/Setter 组合 - 虚拟属性
    get summary() {
        return {
            owner: this._owner,
            balance: this._balance,
            transactions: this._transactions.length
        };
    }
}

const account = new BankAccount('张三', 1000);

// 使用 getter
console.log(account.balance);  // 1000
console.log(account.formattedBalance);  // "￥1000.00"
console.log(account.owner);  // "张三"

// 使用 setter
account.balance = 2000;  // 修改余额
account.locked = true;  // 锁定账户

try {
    account.balance = 3000;  // 抛错：账户已锁定
} catch (e) {
    console.error(e.message);  // 输出错误信息
}

// ============================================
// 计算属性名方法
// ============================================

class DynamicMethods {
    // 1. 使用变量作为方法名
    constructor(prefix) {
        this.prefix = prefix;
    }
    
    // 2. 计算属性名  ★★★
    ['method_' + 1]() {
        console.log('方法1');
    }
    
    ['method_' + 2]() {
        console.log('方法2');
    }
    
    // 3. 使用 Symbol 作为方法名  ★★★
    [Symbol('custom')]() {
        console.log('Symbol 方法');
    }
    
    // 4. 动态生成方法名    
    static createMethod(name) {
        const methodName = `get_${name}`;
        DynamicMethods.prototype[methodName] = function() {
            return this[name] || null;
        };
        return methodName;
    }
}

DynamicMethods.createMethod('data');
const dm = new DynamicMethods('test');
dm.data = '测试数据';
console.log(dm.get_data());  // "测试数据"
dm.method_2();

// ============================================
// 方法的重载（模拟）
// ============================================

class OverloadDemo {
    // JavaScript 不支持方法重载，但可以模拟
    
    // 1. 通过参数个数区分
    process(...args) {
        if (args.length === 0) {
            return this.processDefault();
        }
        if (args.length === 1) {
            return this.processOne(args[0]);
        }
        if (args.length === 2) {
            return this.processTwo(args[0], args[1]);
        }
        return this.processMany(args);
    }
    
    processDefault() {
        console.log('处理默认');
        return 'default';
    }
    
    processOne(arg) {
        console.log(`处理一个参数: ${arg}`);
        return arg;
    }
    
    processTwo(arg1, arg2) {
        console.log(`处理两个参数: ${arg1}, ${arg2}`);
        return [arg1, arg2];
    }
    
    processMany(args) {
        console.log(`处理多个参数: ${args.join(', ')}`);
        return args;
    }
    
    // 2. 通过参数类型区分
    handle(value) {
        if (typeof value === 'string') {
            return this.handleString(value);
        }
        if (typeof value === 'number') {
            return this.handleNumber(value);
        }
        if (Array.isArray(value)) {
            return this.handleArray(value);
        }
        return this.handleUnknown(value);
    }
    
    handleString(value) {
        return `字符串: ${value}`;
    }
    
    handleNumber(value) {
        return `数字: ${value}`;
    }
    
    handleArray(value) {
        return `数组: [${value.join(', ')}]`;
    }
    
    handleUnknown(value) {
        return `未知类型: ${typeof value}`;
    }
}

const overload = new OverloadDemo();
console.log(overload.process());  // "default"
console.log(overload.process('a'));  // "a"
console.log(overload.process('a', 'b'));  // ['a', 'b']
console.log(overload.process('a', 'b', 'c'));  // ['a', 'b', 'c']

console.log(overload.handle('hello'));  // "字符串: hello"
console.log(overload.handle(123));  // "数字: 123"
console.log(overload.handle([1, 2, 3]));  // "数组: [1, 2, 3]"