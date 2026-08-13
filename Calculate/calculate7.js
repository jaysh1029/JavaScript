// 浮点数精度

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.3 - 0.1); // 0.19999999999999998
console.log(0.1 * 0.2); // 0.020000000000000004

// 解决方案

// 方案1： 使用整数计算
function addFloat(a, b) {
    const factor = 10 ** Math.max(decimalPlaces(a), decimalPlaces(b));
    return (a * factor + b * factor) / factor;
}
function decimalPlaces(num) {
    const match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    // console.log(match);
    if (!match) return 0;
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}

console.log(addFloat(0.1, 0.2)); // 0.3

// 使用 toFixed()  + parseFloat()

console.log((0.1 + 0.2).toFixed(1)); // 0.3
console.log(parseFloat((0.1 + 0.2).toFixed(1))); // 0.3

// 方案3：使用Number.EPSILON进行容差比较
function numbersAlmostEqual(a, b) {
    //console.log(Number.EPSILON); // 2.220446049250313e-16
    return Math.abs(a - b) < Number.EPSILON;
}
console.log(numbersAlmostEqual(0.1 + 0.2, 0.3)); // true

// 方案4：使用第三方库(decimal.js, big.js)

// 处理大整数 ES2020新增
console.log('使用BigInt:');
const big1 = 9007199254740991n;
const big2 = 1n;
console.log(big1 + big2); // 9007199254740992n
console.log(big1 * 2n); // 18014398509481982n

// BigInt 不能与Number混用






