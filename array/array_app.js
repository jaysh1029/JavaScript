// 实际应用场景

// 求和函数 支持任意参数
function sumAll() {
    // 方法1：直接遍历 arguments
    let total1 = 0;
    for (let i = 0; i < arguments.length; i++) {
        total1 += arguments[i];
    }

    // 方法2：转为数组
    const args = Array.from(arguments);
    const total2 = args.reduce((acc, curr) => acc + curr, 0);

    // 方法3：使用扩展运算符 ES6
    const total3 = [...arguments].reduce((acc, curr) => acc + curr, 0);

    return { total1, total2, total3 };
}

const result3 = sumAll(1, 2, 3, 4, 5);
console.log(result3); // { total1: 15, total2: 15, total3: 15 }

// DOM操作
const divs = {
    0: { id: 'div1', className: 'box' },
    1: { id: 'div2', className: 'box' },
    2: { id: 'div3', className: 'box special' },
    length: 3,
    item: function (index) { return this[index] },
};
console.log('DOM集合: ', divs);
/*
DOM集合:  {
  '0': { id: 'div1', className: 'box' },
  '1': { id: 'div2', className: 'box' },
  '2': { id: 'div3', className: 'box special' },
  length: 3,
  item: [Function: item]
}
*/

// 转为数组
const divArray = Array.from(divs);
console.log('转换后: ', divArray);
/*
[
  { id: 'div1', className: 'box' },
  { id: 'div2', className: 'box' },
  { id: 'div3', className: 'box special' }
]
*/

// 使用数组方法
const ids = divArray.map(div => div.id);
console.log('提取ID: ', ids); // 提取ID:  [ 'div1', 'div2', 'div3' ]
const specialDivs = divArray.filter(div => div.className.includes('special'));
console.log('特殊div: ', specialDivs); // 特殊div:  [ { id: 'div3', className: 'box special' } ]


// 数据处理

console.log('数组处理');

const dataSet = {
    0: { name: 'Alice', score: 85, city: 'New York' },
    1: { name: 'Bob', score: 92, city: 'Los Angeles' },
    2: { name: 'Charlie', score: 78, city: 'New York' },
    3: { name: 'David', score: 95, city: 'Chicago' },
    4: { name: 'Eve', score: 88, city: 'Los Angeles' },
    length: 5
};
console.log('数据集: ', dataSet);
/*
数据集:  {
  '0': { name: 'Alice', score: 85, city: 'New York' },
  '1': { name: 'Bob', score: 92, city: 'Los Angeles' },
  '2': { name: 'Charlie', score: 78, city: 'New York' },
  '3': { name: 'David', score: 95, city: 'Chicago' },
  '4': { name: 'Eve', score: 88, city: 'Los Angeles' },
  length: 5
}
*/

// 转为数组
const dataArray2 = Array.from(dataSet);
console.log('转换后: ', dataArray2);
/*
转换后:  [
  { name: 'Alice', score: 85, city: 'New York' },
  { name: 'Bob', score: 92, city: 'Los Angeles' },
  { name: 'Charlie', score: 78, city: 'New York' },
  { name: 'David', score: 95, city: 'Chicago' },
  { name: 'Eve', score: 88, city: 'Los Angeles' }
]
*/
// 统计分析
const totalScore = dataArray2.reduce((acc, curr) => acc + curr.score, 0);
const averageScore = totalScore / dataArray2.length;
console.log('平均分: ', averageScore); // 平均分:  87.6

// 分组统计(按城市)
const groupedByCity = dataArray2.reduce((acc, curr) => {
    if (!acc[curr.city]) {
        acc[curr.city] = [];
    }
    acc[curr.city].push(curr);
    return acc;
}, {});

console.log('按城市分组: ', groupedByCity);
/*
按城市分组:  {
  'New York': [
    { name: 'Alice', score: 85, city: 'New York' },
    { name: 'Charlie', score: 78, city: 'New York' }
  ],
  'Los Angeles': [
    { name: 'Bob', score: 92, city: 'Los Angeles' },
    { name: 'Eve', score: 88, city: 'Los Angeles' }
  ],
  Chicago: [ { name: 'David', score: 95, city: 'Chicago' } ]
}
*/

// 计算各城市的平均分

const cityAverages = Object.entries(groupedByCity).map(([city, students]) => {
    const avg = students.reduce((acc, curr) => acc + curr.score, 0) / students.length;
    return { city, averate: avg };
});
console.log('城市平均分: ', cityAverages);
/*
城市平均分:  [
  { city: 'New York', averate: 81.5 },
  { city: 'Los Angeles', averate: 90 },
  { city: 'Chicago', averate: 95 }
]
*/

// 创建类数组工具   
console.log('类数组工具函数');

// 创建类数组对象
function createArrayLikeFromArray(arr) {
    const like = {};
    arr.forEach((item, index) => {
        like[index] = item;
    });
    like.length = arr.length;
    return like;
}

const array1 = [10, 20, 30, 40];
const like5 = createArrayLikeFromArray(array1);
// 从数组创建类数组:  { '0': 10, '1': 20, '2': 30, '3': 40, length: 4 } 4
console.log('从数组创建类数组: ', like5, like5.length);

// 安全的数据处理函数
function safeProcessData(data) {
    // 确保数据是数组
    const safeArray = Array.isArray(data) ? data : Array.from(data);
    return safeArray.filter(item => item !== null && item !== undefined)
        .map(item => typeof item === 'number' ? item * 2 : item);
}
console.log('处理数组: ', safeProcessData([1, null, 3, undefined, 5])); // 处理数组:  [ 2, 6, 10 ]
console.log('处理类数组: ', safeProcessData({ 0: 1, 1: null, 2: 3, length: 3 })); // 处理类数组:  [ 2, 6 ]

// 自定义类数组实现
console.log('自定义类数组实现');

class MyArrayLike {
    constructor(...items) {
        for (let i = 0; i < items.length; i++) {
            this[i] = items[i];
        }
        this.length = items.length;
    }

    // 实现迭代器
    [Symbol.iterator]() {
        let index = 0;
        const self = this;
        return {
            next() {
                if (index < self.length) {
                    return { value: self[index++], done: false };
                }
                return { done: true };
            }
        };
    }

    // 获取元素
    get(index) {
        return index >= 0 && index < this.length ? this[index] : undefined;
    }

    // 添加元素
    push(item) {
        this[this.length] = item;
        this.length++;
        return this.length;
    }

    // 转为数组
    toArray() {
        return Array.from(this);
    }
    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

}

const myLike = new MyArrayLike('a', 'b', 'c');
// 实现自定义类数组:  MyArrayLike { '0': 'a', '1': 'b', '2': 'c', length: 3 }
console.log('实现自定义类数组: ', myLike);

console.log('get(1): ', myLike.get(1)); // b
myLike.push('d');

// push后:  MyArrayLike { '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }
console.log('push后: ', myLike);
console.log('使用for...of');
for (let item of myLike) {
    console.log(' ', item);
    /*
    a
    b
    c
    d
    */
}
// toArray [ 'a', 'b', 'c', 'd' ]
console.log('toArray', myLike.toArray()); 







