// 函数返回值

// 基本返回值 return
function add3(a, b) { return a + b; }
console.log(add3(5, 3)); // 8

// 多返回值 通过数组或对象  ★★★

// 返回数组
function getMinMax(numbers) {
    return [Math.min(...numbers), Math.max(...numbers)];
}
const [min, max] = getMinMax([1, 3, 5, 6, 76, 7, 5]); //   ★★★ 变量格式
console.log(min, max); // 1 76

//返回对象  ★★★
function getUserInfo(id) {
    return {
        id: id,
        name: `用户${id}`,
        age: 20 + id,
    };
}
const userInfo = getUserInfo(100);
console.log(userInfo); // { id: 100, name: '用户100', age: 120 }

// 默认返回值 undefined  ★★★
function noReturn() {
    // 没有return语句  ★★★
}
console.log(noReturn()); // undefined

function reEmpty() {
    return; // 返回 undefined
}
console.log(reEmpty()); // undefined

// 提前返回
function validateAge(age) {
    if (typeof age !== 'number' || age < 0) {
        return false; // 提前返回
    }
    if (age < 18) {
        return '未成年人';
    }
    return '成年人';
}
console.log(validateAge(20), validateAge(15), validateAge(-5)); // 成年人 未成年人 false

// 函数作为返回值  ★★★
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}
const double2 = createMultiplier(2); //  ★★★
const triple2 = createMultiplier(3);

console.log(double2(5)); // 10  ★★★
console.log(triple2(5)); // 15




















