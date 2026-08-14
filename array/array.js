// 创建数组
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(5, 6);
const arr4 = Array.from('hello');

console.log(arr3, arr3.length);
console.log(arr4);

const fruits = ['苹果', '香蕉', '橘子'];
console.log(fruits);
console.log('push return', fruits.push('葡萄')); // 4
console.log(fruits);
console.log('unshift return', fruits.unshift('草莓')); // 5
console.log(fruits);
console.log('pop return', fruits.pop());  // 葡萄
console.log(fruits);
console.log('shift return', fruits.shift()); // 草莓 删除开头  
console.log(fruits);
fruits[1] = '橙子';
console.log(fruits.indexOf('橙子'));
console.log(fruits.slice(1, 3));

// 遍历
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(` ${i}: ${numbers[i]}`);
}
for (const num of numbers) {
    console.log(' ' + num);
}
numbers.forEach((num, index) => {
    console.log(` ${index}: ${num}`);
});

// 高阶函数
const doubled = numbers.map(num => num * 2);
console.log('元素加倍：',doubled);

const even = numbers.filter(num => num % 2 === 0);
console.log('偶数：',even);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('求和：',sum);

console.log(numbers.find(n=>n>3));
console.log(numbers.some(n=>n % 2 ===0));
console.log(numbers.every(n=>n>0));

// 排序

const sNum = [3,1,45,6,543,3,2];
console.log(sNum.sort((a,b)=>a-b));

const arrA=[1,2,3];
const arrB =  arrA; // 引用
arrB.push(4);
console.log(arrA); // [1,2,3,4]



