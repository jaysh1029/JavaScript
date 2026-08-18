// 数组与类数组对比
console.log('检测方法');

const arr = [1, 2, 3];
const like = { 0: 1, 1: 2, 2: 3, length: 3 };
const str = 'hello';
console.log(Array.isArray(arr), Array.isArray(like), Array.isArray(str)); // true false false

console.log('自定义检测类数组(包含数组)');
//   ★★★
function isArrayLike(obj) {
    if (!obj || typeof obj !== 'object') { return false; }
    if (Array.isArray(obj)) { return true; }
    const len = obj.length;
    return typeof len === 'number' && len >= 0 && Number.isInteger(len);
}
console.log(isArrayLike(arr), isArrayLike(like), isArrayLike(str)); // true true false

const arr2 = [1, 2, 3];
const like2 = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(arr2[0], like2[0]); // 1 1

// 添加非数字属性
arr2.name = 'myArray';
like2.name = 'myLike';
console.log(arr2.name, like2.name, arr2.length, like2.length); // myArray myLike 3 3  name不影响length

// 遍历方式对比
const arr3 = ['a', 'b', 'c'];
const like3 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
for (let i = 0; i < arr3.length; i++) {
    console.log(` arr3[${i}] = ${arr3[i]}`);
    /*
     arr3[0] = a
     arr3[1] = b
     arr3[2] = c
    */
}
for (let i = 0; i < like3.length; i++) {
    console.log(` like3[${i}] = ${like3[i]}`);
    /*
     like3[0] = a
     like3[1] = b
     like3[2] = c
    */
}

// for...of  类数组不支持  ★★★

for (let item of arr3) {
    console.log('    ', item);
}

try {
    for (let item of like3) {
        console.log(item);
    }
} catch (e) {
    console.log('错误：', e.message); // 错误： like3 is not iterable
}
// forEach 类数组不支持    ★★★
arr3.forEach((item, index) => {
    console.log(`[${index}]: ${item}`);
    /*
        [0]: a
        [1]: b
        [2]: c
    */
})

try {
    like3.forEach((item, index) => {
        console.log(item);
    });
} catch (e) {
    console.log('错误：', e.message); // 错误： like3.forEach is not a function
}

// 可用方法对比

const methods = ['push', 'pop', 'shift', 'unshift', 'map', 'filter', 'reduce', 'forEach'];
const arr4 = [1, 2, 3];
const like4 = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log('数组方法可用性：');
methods.forEach(method => {
    console.log(`${method}:`, method in arr4);
    /*
        push: true
        pop: true
        shift: true
        unshift: true
        map: true
        filter: true
        reduce: true
        forEach: true
    */
});
console.log('类数组方法可用性');
methods.forEach(method => {
    console.log(`${method}:`, method in like4);

    /*
    push: false
    pop: false
    shift: false
    unshift: false
    map: false
    filter: false
    reduce: false
    forEach: false
    */
})
