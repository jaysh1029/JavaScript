// ============================================
// 6. URL 编码
// ============================================

// 6.1 URL 编码概述
console.log('=== 6.1 URL 编码概述 ===');

/**
 * URL 编码 (Percent-encoding)：
 * - 将非 ASCII 字符和特殊字符转换为 %XX 格式
 * - 确保 URL 在不同系统间安全传输
 * - 空格: %20 或 +   ★★★
 * - 中文: %E4%BD%A0 (UTF-8)   ★★★
 */

console.log('URL 编码示例:');
console.log('  空格: %20'); //   ★★★
console.log('  /: %2F'); //   ★★★
console.log('  中文: %E4%BD%A0'); //   ★★★

// 6.2 encodeURI 和 decodeURI
console.log('\n=== 6.2 encodeURI/decodeURI ===');

const url1 = 'https://example.com/搜索?q=你好 world!';
console.log('原始 URL:', url1);

// encodeURI - 编码整个 URI   ★★★
const encodedUrl1 = encodeURI(url1);
console.log('encodeURI:', encodedUrl1);
// 输出: https://example.com/%E6%90%9C%E7%B4%A2?q=%E4%BD%A0%E5%A5%BD%20world!

// decodeURI - 解码整个 URI   ★★★
const decodedUrl1 = decodeURI(encodedUrl1);
console.log('decodeURI:', decodedUrl1);
console.log('一致:', url1 === decodedUrl1); // 输出: true

// 6.3 encodeURIComponent 和 decodeURIComponent
console.log('\n=== 6.3 encodeURIComponent ===');

const queryParam = 'name=张三&age=25';
console.log('原始参数:', queryParam);

// encodeURIComponent - 编码 URI 组件   ★★★
const encodedParam = encodeURIComponent(queryParam);
console.log('encodeURIComponent:', encodedParam);
// 输出: name%3D%E5%BC%A0%E4%B8%89%26age%3D25

// decodeURIComponent - 解码 URI 组件   ★★★
const decodedParam = decodeURIComponent(encodedParam);
console.log('decodeURIComponent:', decodedParam);
console.log('一致:', queryParam === decodedParam); // 输出: true

// 6.4 encodeURI vs encodeURIComponent 对比
console.log('\n=== 6.4 编码对比 ===');

const testUrl = 'https://example.com/search?q=你好&page=1';

console.log('原始字符串:', testUrl);
console.log('encodeURI:', encodeURI(testUrl));
console.log('encodeURIComponent:', encodeURIComponent(testUrl));

console.log('\n只编码查询参数:');
const baseUrl = 'https://example.com/search';
const params = 'q=你好&page=1';
const fullUrl = `${baseUrl}?${encodeURIComponent(params)}`;
console.log('完整 URL:', fullUrl);

// 6.5 手动构建 URL
console.log('\n=== 6.5 手动构建 URL ===');

function buildUrl(base, params) {
    const queryString = Object.entries(params)
        .map(([key, value]) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(value);
            return `${encodedKey}=${encodedValue}`;
        })
        .join('&');

    return `${base}?${queryString}`;
}

const params2 = {
    name: '张三',
    city: '北京',
    query: 'Hello World!'
};

const builtUrl = buildUrl('https://example.com/search', params2);
console.log('构建的 URL:', builtUrl); // 构建的 URL: https://example.com/search?name=%E5%BC%A0%E4%B8%89&city=%E5%8C%97%E4%BA%AC&query=Hello%20World!

// 6.6 解析 URL 参数
console.log('\n=== 6.6 解析 URL 参数 ===');

function parseUrlParams(url) {
    const urlObj = new URL(url);
    const params3 = {};
    for (const [key, value] of urlObj.searchParams) {
        params3[key] = value;
    }
    return params3;
}

const parsedParams = parseUrlParams('https://example.com?name=张三&age=25&city=北京');
console.log('解析的参数:', parsedParams); // 解析的参数: { name: '张三', age: '25', city: '北京' }