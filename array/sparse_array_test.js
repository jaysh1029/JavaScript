

function testSparseFind(funName) {

    const sparseArray = [1, , 3, , 5];
    console.log(`=== ${funName}() ===`);
    let count = 0;
    const result = sparseArray[funName]((value, index, arr) => {
        count++;
        console.log(`索引${index}: ${value}`);
        return false;
    });
    console.log(`执行次数: ${count}`);
    console.log(`结果: ${result}`);
}

testSparseFind('some'); // 会跳过空位
testSparseFind('every'); // 会跳过空位
testSparseFind('find'); // 不会跳过空位
testSparseFind('findIndex'); // 不会跳过空位

/*
=== some() ===
索引0: 1
索引2: 3
索引4: 5
执行次数: 3
结果: false
=== every() ===
索引0: 1
执行次数: 1
结果: false
=== find() ===
索引0: 1
索引1: undefined
索引2: 3
索引3: undefined
索引4: 5
执行次数: 5
结果: undefined
=== findIndex() ===
索引0: 1
索引1: undefined
索引2: 3
索引3: undefined
索引4: 5
执行次数: 5
结果: -1

*/