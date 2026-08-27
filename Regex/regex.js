// ============================================
// 方式1：字面量创建（推荐，性能更好）
// ============================================
const regex1 = /hello/;  // 匹配字符串中的 "hello"

// ============================================
// 方式2：构造函数创建（适用于动态生成正则）
// ============================================
const regex2 = new RegExp("hello");  // 等效于 /hello/
const dynamicPattern = "world";
const regex3 = new RegExp(dynamicPattern, "g");  // 动态模式 + 全局标志

console.log(regex1.test("hello world"));  // true
console.log(regex2.test("hello world"));  // true
console.log(regex3.test("hello"));  // false（没有 "world"）

const wordsText = "open token written";
console.log(wordsText.match(/\b\w+(?!en)\b/g));

const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
console.log(formatNumber(1234567));  // "1,234,567"