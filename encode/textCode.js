// ============================================
// 4. 字符串与编码转换
// ============================================

// 4.1 TextEncoder (字符串 → 字节)
console.log('=== 4.1 TextEncoder ===');

// TextEncoder 将字符串编码为 UTF-8 字节
const encoder = new TextEncoder();

const text3 = 'Hello 世界 🚀';
const encodedBytes = encoder.encode(text3);

console.log('原始字符串:', text3);
console.log('UTF-8 字节:', Array.from(encodedBytes));
console.log('UTF-8 十六进制:', 
    Array.from(encodedBytes).map(b => b.toString(16).padStart(2, '0')).join(' '));

// 4.2 TextDecoder (字节 → 字符串)
console.log('\n=== 4.2 TextDecoder ===');

const decoder = new TextDecoder();

// 解码字节序列
const decodedText = decoder.decode(encodedBytes);
console.log('解码后的字符串:', decodedText);
console.log('解码验证:', decodedText === text3); // 输出: true

// 4.3 不同编码解码
console.log('\n=== 4.3 不同编码解码 ===');

// UTF-8 解码
const utf8Decoder = new TextDecoder('utf-8');
const utf16Decoder = new TextDecoder('utf-16le');

// 创建不同编码的字节
const utf8Bytes = new Uint8Array([0xE4, 0xBD, 0xA0, 0xE5, 0xA5, 0xBD]); // "你好" 的 UTF-8

console.log('UTF-8 解码:', utf8Decoder.decode(utf8Bytes)); // 输出: 你好

// 4.4 编码与解码的对应
console.log('\n=== 4.4 编码解码对应 ===');

function encodeDecodeDemo(str) {
    const encoder2 = new TextEncoder();
    const decoder2 = new TextDecoder();
    
    const bytes2 = encoder2.encode(str);
    const decoded = decoder2.decode(bytes2);
    
    console.log(`字符串: "${str}"`);
    console.log(`字节长度: ${bytes2.length}`);
    console.log(`十六进制: ${Array.from(bytes2).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
    console.log(`解码: "${decoded}"`);
    console.log(`一致: ${str === decoded}`);
    console.log('---');
}

encodeDecodeDemo('Hello');
encodeDecodeDemo('你好');
encodeDecodeDemo('🚀');

// 4.5 处理编码错误
console.log('\n=== 4.5 编码错误处理 ===');

// 处理无效字节序列
const invalidBytes = new Uint8Array([0xFF, 0xFE, 0xE4, 0xBD, 0xA0]);

// 默认：替换为 �
const decoder3 = new TextDecoder('utf-8', { fatal: false }); //  ★★★
console.log('替换模式:', decoder3.decode(invalidBytes)); // 输出: ��你

// 致命模式：抛出错误
try {
    const fatalDecoder = new TextDecoder('utf-8', { fatal: true });
    fatalDecoder.decode(invalidBytes);
} catch (e) {
    console.log('致命模式错误:', e.message);
}
