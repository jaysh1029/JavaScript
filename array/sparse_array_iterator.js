// 遍历稀疏数组

const sparseArr = [1, , 3, , 5];

// 1. for 会遍历所有索引包含空位
for (let i = 0; i < sparseArr.length; i++) {
    console.log(`索引 ${i}: ${sparseArr[i]}`);
}

// 2. for...of 遍历所有值(空位的值为 undefined)
for (const value of sparseArr) {
    console.log(value);
    /*
    1
    undefined
    3
    undefined
    5
    */
}

// 3. for...in 只遍历存在的索引(跳过空位)  ★★★
for (const key in sparseArr) {
    console.log(`for...in索引 ${key}: ${sparseArr[key]}`);
    /*
    for...in索引 0: 1
    for...in索引 2: 3
    for...in索引 4: 5
    */
}

// 4. forEach 跳过空位 不执行回调  ★★★
sparseArr.forEach((value, index) => {
    console.log(`forEach索引 ${index}: ${value}`);
});

// 5. map 跳过空位，结果mapped保持稀疏  ★★★
const mapped = sparseArr.map((value, index) => {
    console.log(`索引 ${index}: ${value}`);
    /*
    索引 0: 1
    索引 2: 3
    索引 4: 5
    */
    return value * 2;
});
console.log(mapped); // [ 2, <1 empty item>, 6, <1 empty item>, 10 ]

// 6. filter 跳过空位  ★★★
const filtered = sparseArr.filter((value) => {
    console.log(value);
    /*
    1
    3
    5
    */
    return value > 2;
});
console.log(filtered); // [ 3, 5 ]

// 7. reduce 跳过空位  ★★★

const sum = sparseArr.reduce((acc, curr) => {
    console.log(curr);
    /*
    1
    3
    5
    */
    return acc + curr;
}, 0);
console.log(sum); // 9

// 8. some 跳过空位

const hasEven = sparseArr.some((value) => {
    console.log(value);
    /*
    1
    3
    5
    */
    return value % 2 === 0;
});
console.log(hasEven); // false;

// 9. every 跳过空位
const allPositive = sparseArr.every(value => {
    console.log(value);
    /*
    1
    3
    5
    */
    return value > 0;
});
console.log(allPositive); // true

// 10. find 不会跳过空位，找到第一个符合条件的就结束   ★★★
const found = sparseArr.find((value) => {
    console.log(value);
    /*
    1
    undefined
    3
    */
    return value > 2;
});
console.log(found); // 3

// 11. findIndex 不会跳过空位，找到第一个符合条件的就结束   ★★★
const foundIndex = sparseArr.findIndex((value) => {
    console.log(value);
    /*
    1
    undefined
    3
    */
    return value > 2;
})
console.log(foundIndex); // 2

// 遍历方法的对比总结

function compareInterationMethods(arr) {
    console.log('原数组：', arr);
    console.log('长度：', arr.length);
    console.log('存在的索引：', Object.keys(arr));

    const methods = {
        'for 循环': () => {
            const result = [];
            for (let i = 0; i < arr.length; i++) {
                result.push(arr[i]);
            }
            return result;
        },
        'for..of': () => {
            const result = [];
            for (const v of arr) {
                result.push(v);
            }
            //console.log(result);
            return result;
        },
        'for...in': () => {
            const result = [];
            for (const k in arr) {
                result.push(k);
            }
            return result;
        },
        'forEach': () => {
            const result = [];
            arr.forEach(v => result.push(v));
            return result;
        },
        'map': () => {
            return arr.map(v => v);
        },
        'filter': () => {
            return arr.filter(v => true);
        },
        'reduce': () => {
            return arr.reduce((acc, v) => {
                acc.push(v);
                return acc;
            }, []);
        },
    };
    console.log('遍历方法对比：');
    for (const [name, fn] of Object.entries(methods)) {
        try {
            const result = fn();
            console.log(`长度：${result.length} ${name}:`,result);
        } catch (e) {
            console.log(`${name}: 错误 - ${e.message}`);
        }
    }

}

compareInterationMethods([1, , 3, , 5]);

