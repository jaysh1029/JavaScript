console.log('\n=== 4.4 多个 then ===');

function multipleThen() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 500);
    });
    
    // 每个 then 都会收到前一个 then 的返回值
    promise
        .then(val => val * 2)
        .then(val => val + 5)
        .then(val => console.log('最终结果:', val));
}

multipleThen();


console.log('1');

new Promise((resolve) => {
    console.log('2');
    resolve('3');
}).then(console.log);

console.log('4');


