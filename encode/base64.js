// ============================================
// 5. Base64 编码
// ============================================

// 5.1 Base64 概述
console.log('=== 5.1 Base64 概述 ===');

/**
 * Base64 编码：
 * - 将二进制数据转换为 ASCII 文本
 * - 使用 64 个字符 (A-Z, a-z, 0-9, +, /)
 * - 常用于数据传输、存储、加密等
 * - 比原始数据大约 33%
 */

console.log('Base64 字符集:');
console.log('  A-Z (26), a-z (26), 0-9 (10), + (1), / (1) = 64 字符');

// 5.2 btoa() 和 atob()
console.log('\n=== 5.2 btoa/atob ===');

// btoa: 字符串 → Base64 (只支持 ASCII)  ★★★
const originalText = 'Hello World';
const base64Encoded = btoa(originalText);
console.log('原始:', originalText);
console.log('Base64:', base64Encoded); // 输出: SGVsbG8gV29ybGQ=

// atob: Base64 → 字符串
const decodedText2 = atob(base64Encoded);
console.log('解码:', decodedText2); // 输出: Hello World
console.log('一致性:', originalText === decodedText2); // 输出: true

// 5.3 处理 Unicode (btoa 的限制)
console.log('\n=== 5.3 Unicode 与 btoa ===');

// btoa 不能直接处理 Unicode  ★★★
try {
    btoa('你好');
} catch (e) {
    console.log('btoa 处理 Unicode 错误:', e.message);
}

// 解决方案: 先使用 encodeURIComponent  ★★★
function utf8ToBase64(str) {
    return btoa(encodeURIComponent(str));
}

function base64ToUtf8(base64) {
    return decodeURIComponent(atob(base64));
}

const unicodeText = 'Hello 世界 🚀';
const base64Utf8 = utf8ToBase64(unicodeText);
console.log('Unicode 文本:', unicodeText);
console.log('Base64:', base64Utf8);
console.log('解码:', base64ToUtf8(base64Utf8));
console.log('一致:', unicodeText === base64ToUtf8(base64Utf8));

// 5.4 使用 TextEncoder/Decoder 实现 Base64  ★★★
console.log('\n=== 5.4 TextEncoder Base64 ===');

function base64Encode(str) {
    const encoder4 = new TextEncoder();
    const bytes3 = encoder4.encode(str);
    const binary = String.fromCharCode(...bytes3); //  ★★★
    return btoa(binary);
}

function base64Decode(base64) {
    const binary = atob(base64);
    const bytes4 = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes4[i] = binary.charCodeAt(i); //  ★★★
    }
    const decoder4 = new TextDecoder();
    return decoder4.decode(bytes4);
}

const testStr = 'Hello 世界 🚀';
const encoded = base64Encode(testStr);
console.log('编码:', encoded);
console.log('解码:', base64Decode(encoded));
console.log('一致:', testStr === base64Decode(encoded));

// 5.5 Base64 URL 安全编码
console.log('\n=== 5.5 Base64 URL 安全 ===');

// URL 安全的 Base64: 将 + 替换为 -, / 替换为 _  ★★★
function base64UrlEncode(str) {
    return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

function base64UrlDecode(base64Url) {
    // 还原填充   ★★★
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
        base64 += '=';
    }
    return atob(base64);
}

const urlSafeText = 'Hello World!';
const urlEncoded = base64UrlEncode(urlSafeText);
console.log('原始:', urlSafeText);
console.log('URL 安全 Base64:', urlEncoded);
console.log('解码:', base64UrlDecode(urlEncoded));