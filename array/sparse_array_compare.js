// 稀疏数组与密集数组对比

// 性能对比

function performanceComparison() {
    const size = 100000;

    // 创建密集数组
    console.time('创建密集数组');
    const dense = new Array(size).fill(1);
    console.timeEnd('创建密集数组'); // 创建密集数组: 0.159ms

    // 创建稀疏数组
    console.time('创建稀疏数组');
    const sparse = new Array(size);
    for (let i = 0; i < size; i += 2) {
        sparse[i] = 1;
    }
    console.timeEnd("创建稀疏数组"); // 创建稀疏数组: 0.836ms

    // 遍历密集数组(for)
    console.time('遍历密集数组(for)');
    let sum1 = 0;
    for (let i = 0; i < dense.length; i++) {
        sum1 += dense[i];
    }
    console.timeEnd('遍历密集数组(for)'); // 遍历密集数组(for): 0.828ms

    // 遍历稀疏数组(for)

    console.time('遍历稀疏数组(for)');
    let sum2 = 0;
    for (let i = 0; i < sparse.length; i++) {
        sum2 += sparse[i] || 0;
    }
    console.timeEnd('遍历稀疏数组(for)'); // 遍历稀疏数组(for): 1.116ms

    // 密集数组(forEach)
    console.time('密集数组(forEach)');
    let sum3 = 0;
    dense.forEach(v => sum3 += v);
    console.timeEnd('密集数组(forEach)'); // 密集数组(forEach): 0.509ms

    // 稀疏数组(forEach) 只遍历存在的元素
    console.time('稀疏数组(forEach)');
    let sum4 = 0;
    sparse.forEach(v => sum4 += v);
    console.timeEnd('稀疏数组(forEach)'); // 稀疏数组(forEach): 0.331ms

    // 密集数组 reduce
    console.time('密集数组 reduce');
    dense.reduce((a, b) => a + b, 0);
    console.timeEnd('密集数组 reduce'); // 密集数组 reduce: 0.478ms

    // 稀疏数组 reduce 只遍历存在的元素
    console.time('稀疏数组 reduce');
    sparse.reduce((a, b) => a + b, 0);
    console.timeEnd('稀疏数组 reduce'); // 稀疏数组 reduce: 0.322ms

}
performanceComparison();

// 内存对比

function memoryComparison() {
    const size = 100000;
    // 密集数组
    const dense = new Array(size).fill(1);
    const denseKeys = Object.keys(dense);
    console.log('密集数组:', ' 长度:', dense.length, ' 属性数:', denseKeys.length, ' 实际存储:', denseKeys.length);
    // 密集数组:  长度: 100000  属性数: 100000  实际存储: 100000

    // 稀疏数组
    const sparse = new Array(size);
    for (let i = 0; i < sparse.length; i += 10) {
        sparse[i] = 1;
    }
    const sparseKeys = Object.keys(sparse);

    console.log('稀疏数组:', ' 长度:', sparse.length, ' 属性数:', sparseKeys.length, ' 实际存储:', sparseKeys.length, ' 节省内存:', ` ${((1 - sparseKeys.length / sparse.length) * 100).toFixed(2)}%`);
    // 稀疏数组:  长度: 100000  属性数: 10000  实际存储: 10000  节省内存:  90.00%
}

memoryComparison();

// 场景：存储用户访问记录

function userAccessExample() {
    // 稀疏数组: 只记录有访问的日期

    const sparseAccess = [];
    sparseAccess[0] = 100;
    sparseAccess[5] = 200;
    sparseAccess[12] = 150;
    sparseAccess[30] = 300;

    console.log('稀疏访问记录:');
    console.log(`总天数: ${sparseAccess.length}`); // 总天数: 31
    console.log('有访问的天数:', Object.keys(sparseAccess).length); // 有访问的天数: 4
    console.log('总访问量:', sparseAccess.reduce((a, b) => a + b, 0)); // 总访问量: 750

    // 密集数组: 每天都有记录
    const denseAccess = new Array(31).fill(0);
    denseAccess[0] = 100;
    denseAccess[5] = 200;
    denseAccess[12] = 150;
    denseAccess[30] = 300;

    console.log('密集访问记录：');
    console.log('总天数:', denseAccess.length);
    console.log('有访问的天数:', denseAccess.filter(v => v > 0).length);
    console.log('总访问量:', denseAccess.reduce((a, b) => a + b, 0));

    // 内存对比

    const sparseSize = Object.keys(sparseAccess).length;
    const denseSize = Object.keys(denseAccess).length;

    console.log(`内存对比: 稀疏 ${sparseSize} bytes vs 密集 ${denseSize} bytes`);
    // 内存对比: 稀疏 4 bytes vs 密集 31 bytes
    console.log(`节省:`, ((1 - sparseSize / denseSize) * 100).toFixed(2), '%');
    // 节省: 87.10 %
}

userAccessExample();