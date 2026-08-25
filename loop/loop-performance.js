// 循环性能对比
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
console.time('for 循环');
let sumFor2 = 0;
for (let i = 0; i < largeArray.length; i++) {
    sumFor2 += largeArray[i];
}
console.timeEnd('for 循环'); // for 循环: 6.312ms

console.time('for 循环 缓存length');
let sumFor3 = 0;
for (let i = 0, len = largeArray.length; i < len; i++) {
    sumFor3 += largeArray[i];
}
console.timeEnd('for 循环 缓存length'); // for 循环: 6.312ms

console.time('for...of');
let sumForOf2 = 0;
for (let item of largeArray) {
    sumForOf2 += item;
}
console.timeEnd('for...of'); // for...of: 11.714ms

console.time('forEach');
let sumForEach2 = 0;
largeArray.forEach(item => {
    sumForEach2 += item;
});
console.timeEnd('forEach'); // forEach: 8.997ms

console.time('while 循环');
let sumWhile = 0;
let i4 = 0;
while (i4 < largeArray.length) {
    sumWhile += largeArray[i4];
    i4++;
}
console.timeEnd('while 循环'); // while 循环: 2.508ms

// 优化建议

console.log('优化建议');
console.log('缓存length');
const arr7 = [1, 2, 3, 4, 5];
// 每次都访问length ❌
for (let i = 0; i < arr7.length; i++) {

}

//  ✅ 缓存 length  ★★★
for (let i = 0, len = arr7.length; i < len; i++) {

}


for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        //console.log(i);
    }, 100);
}

for (let i = 0; i < 5; i++) {
    const index = i;
    setTimeout(() => {
        //console.log(index);
    }, 100);
}

// 3. 使用合适的循环类型

console.log('循环类型选择');

const arr8 = [1, 2, 3, 4, 5];
const obj5 = { a: 1, b: 2, c: 3 };

// 遍历对象 for...in
for (let key in obj5) {
    if (obj5.hasOwnProperty(key)) {
        console.log(`${key}: ${obj5[key]}`);
    }
}
/*
a: 1
b: 2
c: 3
*/

// 遍历可迭代对象 for...of

const set3 = new Set([1, 2, 3]);
for (let value of set3) {
    console.log(value);
}
/*
1
2
3
*/

// 减少循环中的计算

// 重复计算❌ 
for (let i = 0; i < 100; i++) {
    const result = Math.sqrt(1000) * i; // Math.sqrt(1000) 每次都在计算
}

// 提前计算✅
const sqrt1000 = Math.sqrt(1000);
for (let i = 0; i < 100; i++) {
    const result = sqrt1000 * i;
}
