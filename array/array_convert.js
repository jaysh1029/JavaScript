// 类数字转换为数组
console.log('Array.from()');
const like1 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(like1);
const arrFrom1 = Array.from(like1); // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
console.log(arrFrom1, Array.isArray(arrFrom1)); // [ 'a', 'b', 'c' ] true

const arrFrom2 = Array.from(like1, (item, index) => `${index}: ${item}`);
console.log(arrFrom2, Array.isArray(arrFrom2));  // [ '0: a', '1: b', '2: c' ] true 带映射

console.log('扩展运算符 展开... ');

// ★★★★★ 普通类数组无法使用...展开 转换数组 除非定义Symbol.iterator方法 ★★★★★

function testSpread() {
    console.log('arguments 转数组:', [...arguments]);
}
testSpread('x', 'y', 'z'); // arguments 转数组: [ 'x', 'y', 'z' ]

const like2 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
try {
    cookieStore.log('普通类数组: ', [...like2]); // 报错   ★★★
}
catch (e) {
    console.log('普通类数组不可迭代:', e.message); // 普通类数组不可迭代: like2 is not iterable
}

console.log('slice.call');

const like3 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const arrSlice = Array.prototype.slice.call(like3); //  ★★★
console.log(arrSlice, Array.isArray(arrSlice)); // [ 'a', 'b', 'c' ] true

// 简写方式  ★★★
const arrSlice2 = [].slice.call(like3);
console.log(arrSlice2, Array.isArray(arrSlice2)); // [ 'a', 'b', 'c' ] true

console.log('手动转换');
function toArray(arrayLike) {
    const result = [];
    for (let i = 0; i < arrayLike.length; i++) {
        result.push(arrayLike[i]);
    }
    return result;
}
const like4 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const manual = toArray(like4);
console.log(manual, Array.isArray(manual)); // [ 'a', 'b', 'c' ] true

/*
 性能对比  
 33000 以内 Array.from 最快  ★★★
 33000以上 手动最快 
 slice.call 性能最差
*/
const arrLength = 100000;
const bigLike = { length: arrLength };
for (let i = 0; i < arrLength; i++) {
    bigLike[i] = i;
}
console.time('Array.from');
Array.from(bigLike);
console.timeEnd('Array.from');// Array.from: 2.466ms

console.time('slice.call');
Array.prototype.slice.call(bigLike);
console.timeEnd('slice.call'); // slice.call: 2.857ms

console.time('手动循环');
toArray(bigLike);
console.timeEnd('手动循环'); // 手动循环: 1.136ms


// 让类数组可迭代
console.log('让类数组可迭代');

const iterableLike = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3,
    // 实现迭代器
    [Symbol.iterator]: function* () { //   ★★★
        for (let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
};

console.log('可迭代数组：', iterableLike);
/*
{
  '0': 'first',
  '1': 'second',
  '2': 'third',
  length: 3,
  Symbol(Symbol.iterator): [GeneratorFunction: [Symbol.iterator]]
}
*/

console.log('可以使用扩展运算符：', [...iterableLike]); // [ 'first', 'second', 'third' ]
console.log('可使用for...of');
for (let item of iterableLike) {
    console.log(' ', item);
    /*
    first
    second
    third
    */
}

