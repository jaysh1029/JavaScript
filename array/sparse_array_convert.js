// 稀疏数组的转换操作

function isSparse(arr) {
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

// 1. 将稀疏数组转换为密集数组 填充undefined
function sparseToDense(arr) {
    return Array.from(arr);
    // 或： return [...arr];
    //  return arr.slice(); // 这个不行 结果还是稀疏数组  ★★★
}

const sparse = [1, , 3, , 5];
const dense = sparseToDense(sparse);
console.log(dense, isSparse(dense)); // [ 1, undefined, 3, undefined, 5 ]

// 2. 填充空位(保留现有值)
function fillEmptySlots(arr, value = null) {
    //const result = [...arr]; //  这个不能用 否则就会把空位的位置 转换为undefined 就没有空位了 ★★★
    const result = arr.slice(); // 使用这个不会改变空位的值，且原始数组不变
    for (let i = 0; i < result.length; i++) {
        if (!result.hasOwnProperty(i)) {
            result[i] = value;
        }
    }
    return result;
}

console.log(fillEmptySlots(sparse, null)); // [ 1, null, 3, null, 5 ]
console.log(fillEmptySlots(sparse, 0)); // [ 1, 0, 3, 0, 5 ]

// 3. 移除空位(压缩数组)
function compactArray(arr) {
    // 方法1：filter
    return arr.filter((_, i) => arr.hasOwnProperty(i));

    // 方法2：reduce
    // return arr.reduce((acc, val, i) => {
    //     if (arr.hasOwnProperty(i)) {
    //         acc.push(val);
    //     }
    //     return acc;
    // }, []);

}

console.log('压缩数组：', compactArray(sparse)); // 压缩数组： [ 1, 3, 5 ]

// 保留空位的位置
function preserveEmptySlots(arr) {
    return Array.from(arr, (value, index) => {
        if (arr.hasOwnProperty(index)) {
            return { hasValue: true, value, index };
        } else {
            return { hasValue: false, index };
        }
    })
}
console.log('保留空位信息：', preserveEmptySlots(sparse));

/*
保留空位信息： [
  { hasValue: true, value: 1, index: 0 },
  { hasValue: false, index: 1 },
  { hasValue: true, value: 3, index: 2 },
  { hasValue: false, index: 3 },
  { hasValue: true, value: 5, index: 4 }
]
*/

// 5. 稀疏数组的合并

function mergeSparseArrays(arr1, arr2) {
    const maxLen = Math.max(arr1.length, arr2.length);
    const result = [];
    for (let i = 0; i < maxLen; i++) {
        const has1 = arr1.hasOwnProperty(i);
        const has2 = arr2.hasOwnProperty(i);
        if (has1 && has2) {
            result[i] = [arr1[i], arr2[i]];
        } else if (has1) {
            result[i] = arr1[i];
        } else if (has2) {
            result[i] = arr2[i];
        }
        // 其他保持空位 这里的保持 是通过 result[i] 的方式设置的，
        // 比如 索引为1的位置跳过了  那么下次就是设置result[2]
        // 那么索引1的位置，自然为空位了  ★★★
    }
    return result;
}

const arr1 = [1, , 3];
const arr2 = [, 2, , 4]
console.log('合并稀疏数组：', mergeSparseArrays(arr1, arr2)); // 合并稀疏数组： [ 1, 2, 3, 4 ]

// 6. 稀疏数组的补全
function fillMissing(arr, defaltVal) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            result[i] = arr[i]
        } else {
            result[i] = defaltVal;
        }
    }
    return result;
}

console.log('补全缺失值：', fillMissing(sparse, 'missing')); // 补全缺失值： [ 1, 'missing', 3, 'missing', 5 ]

// 稀疏数组的高级操作
// 1. 稀疏数组的差分

function sparseDiff(arr1, arr2) {
    const result = [];
    const maxLen = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLen; i++) {
        const has1 = arr1.hasOwnProperty(i);
        const has2 = arr2.hasOwnProperty(i);

        if (has1 && !has2) {
            result[i] = arr1[i];
        } else if (!has1 && has2) {
            result[i] = arr2[i];
        } else if (has1 && has2 && arr1[i] == arr2[i]) {
            result[i] = [arr1[i], arr2[i]];
        }
    }
    return result;
}

// 2. 稀疏数组的交集

function sparseIntersection(arr1, arr2) {
    const result = [];
    const maxLen = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLen; i++) {
        if (arr1.hasOwnProperty(i) && arr2.hasOwnProperty(i)) {
            if (arr1[i] === arr2[i]) {
                result[i] = arr1[i];
            }
        }
    }
    return result;
}
// 3. 稀疏数组的Map操作(保持稀疏结构)
function sparseMap(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            result[i] = fn(arr[i], i);
        }
    }
    return result;
}

// 稀疏Map: [ 2, <1 empty item>, 6, <1 empty item>, 10 ]
console.log('稀疏Map:', sparseMap(sparse, (v) => v * 2));

// 4. 稀疏数组的filter (保持索引)

function sparseFilter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i) && fn(arr[i], i)) {
            result[i] = arr[i];
        }
    }
    return result;
}

console.log('稀疏Filter:', sparseFilter(sparse, (v) => v > 2));

// 5. 稀疏数组的Replace

function sparseRepalce(arr, target, replacement) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i) && arr[i] === target) {
            result[i] = replacement;
        } else if (arr.hasOwnProperty(i)) {
            result[i] = arr[i]
        }
    }
    return result;
}

console.log('稀疏Replace: ', sparseRepalce(sparse, 3, 99));
// 稀疏Replace:  [ 1, <1 empty item>, 99, <1 empty item>, 5 ]





