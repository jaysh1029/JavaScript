// ============================================
// 7. 自定义序列化/解析
// ============================================

// 7.1 自定义 toJSON 方法
console.log('=== 7.1 toJSON 方法 ===');

class Person6 {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.created = new Date();
    }

    // 自定义序列化
    toJSON() {
        return {
            name: this.name,
            age: this.age,
            created: this.created.toISOString(),
            // 不包含密码
            _class: 'Person'
        };
    }

    // 静态解析方法
    static fromJSON(json) {
        const data = typeof json === 'string' ? JSON.parse(json) : json;
        const person = new Person6(data.name, data.age, '');
        person.created = new Date(data.created);
        return person;
    }
}

const person31 = new Person6('张三', 25, '123456');
const jsonStr7 = JSON.stringify(person31);
console.log('自定义序列化:');
console.log(jsonStr7);

// 反序列化
const parsedPerson = Person6.fromJSON(jsonStr7);
console.log('\n反序列化:');
console.log('  name:', parsedPerson.name);
console.log('  age:', parsedPerson.age);
console.log('  created:', parsedPerson.created);

// 7.2 自定义 reviver
console.log('\n=== 7.2 自定义 reviver ===');

// 注册类型解析器
const typeRegistry = new Map();

function registerType(type, constructor, fromJSON) {
    typeRegistry.set(type, { constructor, fromJSON });
}

// 注册自定义类型
registerType('Person', Person6, (data) => {
    const person = new Person6(data.name, data.age, '');
    person.created = new Date(data.created);
    return person;
});

function parseWithTypes(jsonStr) {
    return JSON.parse(jsonStr, (key, value) => {
        if (value && value._type && typeRegistry.has(value._type)) {
            const { fromJSON } = typeRegistry.get(value._type);
            return fromJSON(value);
        }
        return value;
    });
}

const person32 = new Person6('李四', 30, '789012');
// 在序列化时添加类型标记
const jsonWithType = JSON.stringify({
    ...person32.toJSON(),
    _type: 'Person'
});

console.log('带类型标记的 JSON:');
console.log(jsonWithType);

const restored = parseWithTypes(jsonWithType);
console.log('\n恢复的对象:');
console.log('  name:', restored.name);
console.log('  age:', restored.age);
console.log('  is Person6:', restored instanceof Person6); // 输出: true

// 7.3 序列化器/解析器工具类
console.log('\n=== 7.3 序列化器工具类 ===');

class JSONSerializer {
    constructor() {
        this.serializers = new Map();
        this.deserializers = new Map();
    }

    // 注册序列化器
    register(type, serializer, deserializer) {
        this.serializers.set(type, serializer);
        this.deserializers.set(type, deserializer);
    }

    // 序列化
    serialize(obj) {
        const type = obj.constructor.name;
        if (this.serializers.has(type)) {
            return this.serializers.get(type)(obj);
        }
        return obj;
    }

    // 反序列化
    deserialize(data) {
        if (data && data._type && this.deserializers.has(data._type)) {
            return this.deserializers.get(data._type)(data);
        }
        return data;
    }

    // 字符串化
    stringify(obj, replacer = null, space = 2) {
        const self = this;
        return JSON.stringify(obj, function (key, value) {
            if (value && typeof value === 'object') {
                // 检查是否有自定义序列化
                const serialized = self.serialize(value);
                if (serialized !== value) {
                    return serialized;
                }
            }
            if (typeof replacer === 'function') {
                return replacer(key, value);
            }
            return value;
        }, space);
    }

    // 解析
    parse(str, reviver = null) {
        const self = this;
        return JSON.parse(str, function (key, value) {
            const result = self.deserialize(value);
            if (typeof reviver === 'function') {
                return reviver(key, result);
            }
            return result;
        });
    }
}

// 使用示例
const serializer = new JSONSerializer();

// 注册 Date 处理
serializer.register(
    'Date',
    (date) => ({ _type: 'Date', value: date.toISOString() }),
    (data) => new Date(data.value)
);

// 注册 RegExp 处理
serializer.register(
    'RegExp',
    (regex) => ({ _type: 'RegExp', pattern: regex.source, flags: regex.flags }),
    (data) => new RegExp(data.pattern, data.flags)
);

// 测试
const complexData = {
    name: '张三',
    birthday: new Date(2024, 0, 1),
    pattern: /test/gi
};

const serialized = serializer.stringify(complexData);
console.log('自定义序列化:');
console.log(serialized);

const deserialized = serializer.parse(serialized);
console.log('\n自定义反序列化:');
console.log('  name:', deserialized.name);
console.log('  birthday:', deserialized.birthday);
console.log('  pattern:', deserialized.pattern);


function createInstance(Constructor, name) {
    return new Constructor(name);
}

console.log('-------------传递类型作为参数----------------')
const p = createInstance(Array, "张三"); // 在js中可以传递拥有构造函数的类型名作为参数，以方便创建对象  ★★★
console.log(p[0]); 
