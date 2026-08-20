// 稀疏数组检测

// 1. 检查数组是否包含空位 
// [] 算密集数组 因为不含空位置的元素  ★★★
function isSparseArray(arr) {
    if (!Array.isArray(arr) || arr.length == 0) { return false; }

    // 方法1：比较length和Object.keys的长度 这里其实不需要filter keys返回的只有索引
    //const keys = Object.keys(arr).filter(key => key != 'length');
    const keys = Object.keys(arr);
    // 如果有空位 keys的长度会小于数组的length
    return keys.length < arr.length;
}

// true false false false
console.log(isSparseArray([1, , 3]), isSparseArray([1, 2, 3]), isSparseArray([]), isSparseArray([undefined, undefined]));

// 2. 使用 for-in 循环检测  ★★★

function hasEmptySlots(arr) {
    let hasEmpty = false;
    if (!Array.isArray(arr)) { return false; }
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) {
            hasEmpty = true;
            break;
        }
    }

    return hasEmpty;
}
console.log(hasEmptySlots([1, , 3]), hasEmptySlots([1, undefined, 3])); // true false

// 3. 检测空位的位置

function getEmptySlots(arr) {
    const emptySlots = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            emptySlots.push(i);
        }
    }
    return emptySlots;
}
console.log(getEmptySlots([1, , 3, , 5])); // [ 1, 3 ]

// 4. 使用toString检测 有空位 会显化为,,
function isSparseByToString(arr) {
    const str = arr.toString();
    return str.includes(',,');
}
console.log(isSparseByToString([1, , 3]), isSparseByToString([1, 2, 3])); // true false

// 5. 完整的稀疏数组检测工具

class SparseArrayDetector {

    static isSparse(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError('参数必须是数组');
        }
        // 检查length是否为0
        if (arr.length == 0) { return false; }
        // 方法1：
        if (Object.keys(arr).length < arr.length) {
            return true;
        }

        // 方法2：遍历检测
        for (let i = 0; i < arr.length; i++) {
            if (!arr.hasOwnProperty(i)) {
                return true;
            }
        }
        return false;
    }

    //获取稀疏度(空位占比)
    static getSparsity(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError('参数必须是数组');
        }
        if (arr.length == 0) { return 0; }
        const emptyCount = arr.length - Object.keys(arr).length;
        return emptyCount / arr.length;

    }

    // 获取所有空位索引
    static getEmptyIndices(arr) {
        const indices = [];
        for (let i = 0; i < arr.length; i++) {
            if (!arr.hasOwnProperty(i)) {
                indices.push(i);
            }
        }
        return indices;
    }

    // 获取所有存在值的索引
    // Object.keys 返回的是字符串形式的索引数组
    static getFilledIndices(arr) {
        const indices = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr.hasOwnProperty(i)) {
                indices.push(i);
            }
        }
        return indices;
    }

}

// 使用示例
const testArr = [1, , 3, , 5];
console.log(SparseArrayDetector.isSparse(testArr)); // true
console.log(SparseArrayDetector.getSparsity(testArr)); // 0.4
console.log(SparseArrayDetector.getEmptyIndices(testArr)); // [ 1, 3 ]
console.log(SparseArrayDetector.getFilledIndices(testArr)); // [ 0, 2, 4 ]