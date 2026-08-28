const jsonStr = "{\"name\": \"张三\"}";
console.log(JSON.parse(jsonStr));

const obj = { "name": "张三" };
console.log(JSON.parse(JSON.stringify(obj)));

function safeJSONParse(str) {
    try {
        return { data: JSON.parse(str), error: null };
    } catch (e) {
        return { data: null, error: e.message };
    }
}

console.log('解析有效 JSON:');
const result1 = safeJSONParse('{"name":"张三"}');
console.log('  data:', result1.data);
console.log('  error:', result1.error);

console.log('\n解析无效 JSON:');
const result2 = safeJSONParse('{name: "张三"}');
console.log('  data:', result2.data);
console.log('  error:', result2.error);

// 5.3 序列化空格控制
console.log('\n=== 5.3 空格控制 ===');

const data2 = { name: '张三', age: 25, hobbies: ['读书', '运动'] };

console.log('紧凑格式（无空格）:');
console.log(JSON.stringify(data2));

console.log('\n2 空格缩进:');
console.log(JSON.stringify(data2, null, 2));

console.log('\n4 空格缩进:');
console.log(JSON.stringify(data2, null, 4));

console.log('\n字符串缩进:');
console.log(JSON.stringify(data2, null, '-->'));
