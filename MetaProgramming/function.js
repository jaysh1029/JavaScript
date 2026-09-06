console.log('\n=== 7.5 apply/call/bind ===');

function greet5(greeting, name) {
    return `${greeting}，${name}`;
}

const context4 = { prefix: 'Hello' };

console.log('call:', greet5.call(null, '你好', '张三'));
console.log('apply:', greet5.apply(null, ['你好', '李四']));
const boundGreet = greet5.bind(null, '你好'); // 创建偏函数 
console.log('bind:', boundGreet('王五'));