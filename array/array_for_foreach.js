// 数组迭代方法
console.log('forEach');
const nums1 = [1, 3, 5, 6, 7, 8];
console.log(nums1); // [ 1, 3, 5, 6, 7, 8 ]
nums1.forEach((value, index, array) => {
    console.log(` [${index}]:`, value);
});
/*
 [0]: 1
 [1]: 3
 [2]: 5
 [3]: 6
 [4]: 7
 [5]: 8
*/

console.log('forEach 不能中断(不能用break)，除了抛出异常');
try {
    nums1.forEach(value => {
        if (value == 3) {
            // 不能使用break，会报错  SyntaxError: Illegal break statement
            //break;
        }
        console.log(value);
    })
} catch (e) {
    console.log('forEach 不支持 break');
}

console.log('map 转换');
const nums2 = [1, 3, 6, 7, 8, 98];
console.log(nums2); // [ 1, 3, 6, 7, 8, 98 ]

const squared = nums2.map(x => x * x);
console.log(squared); // [ 1, 9, 36, 49, 64, 9604 ] // 平方
const doubled = nums2.map((x, index) => `${index}:${x * 2}`); //    ★★★
console.log(doubled); // [ '0:2', '1:6', '2:12', '3:14', '4:16', '5:196' ]  带索引

console.log('filter 过滤');
const nums3 = [1, 3, 3, 5, 6, 7, 7, 8, 9, 10, 2, 4];
console.log(nums3);
const evens = nums3.filter(x => x % 2 == 0); // 过滤出能被2整除的元素(偶数)
console.log(evens); // [ 6, 8, 10, 2, 4 ] 

const greaterThan5 = nums3.filter(n => n > 5);// 过滤出大于5的元素
console.log(greaterThan5); // [ 6, 7, 7, 8, 9, 10 ]

// 链式操作
const result = nums3.filter(x => x % 2 == 0).map(x => x * x).filter(x => x > 20); //   ★★★
console.log(result); // [ 36, 64, 100 ]

console.log('reduce 归并');
const nums4 = [1, 3, 4, 5, 6, 7];
console.log(nums4);

const sum2 = nums4.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);  // 26 求和 ★★★  

const product = nums4.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 2520 求积 ★★★  

const max = nums4.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 7 求最大值  ★★★  

const duplicates = [1, 2, 1, 3, 2, 4, 3, 6, 5, 5, 6];
console.log(duplicates);
const unique = duplicates.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(unique); // [ 1, 2, 3, 4, 6, 5 ] 数组去重  ★★★  

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eve', grade: 'B' },
];
const grouped = students.reduce((acc, student) => {
    const key = student.grade;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(student);
    return acc;
}, []);
console.log(grouped); // 数组分组  ★★★  
/*
[
  A: [ { name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' } ],
  B: [ { name: 'Bob', grade: 'B' }, { name: 'Eve', grade: 'B' } ],
  C: [ { name: 'David', grade: 'C' } ]
]
*/

console.log('some every 测试');
const nums5 = [1, 2, 3, 4, 5];
console.log(nums5);
console.log(nums5.some(x => x > 3)); // true  是否存在大于3的元素
console.log(nums5.some(x => x > 5)); // false  是否存在大于5的元素  ★★★  
console.log(nums5.every(x => x > 0));// true 是否所有元素都大于0  ★★★  
console.log(nums5.every(x => x > 3));// false 是否所有元素都大于3

console.log('find findIndex  查找');

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
console.log(users);
const found2 = users.find(user => user.id === 2);
console.log(found2); // { id: 2, name: 'Bob' } 找元素
const foundIndex2 = users.findIndex(user => user.id === 3);
console.log(foundIndex2); // 2 找索引

const notFound = users.find(user => user.id === 5);
console.log(notFound); // 未找到 undefined

console.log('includes 包含检查');

const nums6 = [1, 2, 3, 4, 56];
console.log(nums6);
console.log(nums6.includes(3), nums6.includes(6)); // true false
console.log(nums6.includes(3, 3)); // false 从索引3开始向后查找    ★★★  




