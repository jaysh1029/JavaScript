const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello World');
    }, 1000);
});

promise2
    .then(result => {
        console.log('成功:', result);
        return result.toUpperCase();
    })
    .then(uppercase => {
        console.log('大写:', uppercase);
    })
    .catch(error => {
        console.log('错误:', error);
    });

console.log('\n=== 3.4 立即执行 ===');

// Promise.resolve()
const resolved = Promise.resolve('立即成功');
resolved.then(result => {
    console.log('resolved:', result);
});

// Promise.reject()
const rejected = Promise.reject('立即失败');
rejected.catch(error => {
    console.log('rejected:', error);
});


// 4.1 基本链式
console.log('=== 4.1 基本链式 ===');

function asyncTask(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, 500);
    });
}

asyncTask(2)
    .then(result1 => {
        console.log('结果1:', result1);
        return asyncTask(result1);
    })
    .then(result2 => {
        console.log('结果2:', result2);
        return asyncTask(result2);
    })
    .then(result3 => {
        console.log('结果3:', result3);
    });

// 4.2 返回非 Promise 值
console.log('\n=== 4.2 返回非 Promise ===');

Promise.resolve(1)
    .then(value => {
        console.log('值:', value);
        return value + 1; // 返回普通值，自动包装为 Promise
    })
    .then(value => {
        console.log('新值:', value);
        return '字符串'; // 返回任意类型
    })
    .then(value => {
        console.log('类型:', typeof value, value);
    });


// 4.3 链式错误传递
console.log('\n=== 4.3 错误传递 ===');

Promise.resolve(1)
    .then(value => {
        console.log('第一步:', value);
        throw new Error('发生错误');
    })
    .then(value => {
        console.log('第二步:', value); // 不会执行
    })
    .catch(error => {
        console.log('捕获错误:', error.message);
    })
    .then(value => {
        console.log('继续执行:', value); // 执行
    });