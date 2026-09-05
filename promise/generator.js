function delay(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}
async function* asyncGenerator() {
    yield await delay(100, '数据1');
    yield await delay(100, '数据2');
    yield await delay(100, '数据3');
}

async function consumeAsyncGenerator() {
    const gen = asyncGenerator();

    for await (const value of gen) {
        console.log('生成值:', value);
    }
}

// consumeAsyncGenerator();

console.log('\n=== 7.2 异步迭代器 ===');

const asyncIterable = {
    [Symbol.asyncIterator]: async function* () {
        for (let i = 0; i < 3; i++) {
            yield await delay(300, `项 ${i + 1}`);
        }
    }
};

async function consumeAsyncIterable() {
    for await (const value of asyncIterable) {
        console.log('迭代值:', value);
    }
}

// consumeAsyncIterable();

// 7.3 数据流处理
console.log('\n=== 7.3 数据流处理 ===');

async function* createDataStream() {
    let count = 0;
    while (count < 10) {
        await delay(200);
        yield `数据块 ${++count}`;
        if (count >= 5) break;
    }
}

async function processStream() {
    let processed = 0;
    for await (const data of createDataStream()) {
        processed++;
        console.log(`处理: ${data} (${processed}/10)`);
    }
    console.log('流处理完成');
}

// processStream();

// 7.4 分页数据获取
console.log('\n=== 7.4 分页获取 ===');

async function* paginatedFetch(pageSize = 3) {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        console.log(`获取第 ${page} 页...`);
        // 模拟 API 请求
        const data = await delay(300,
            Array.from({ length: pageSize }, (_, i) =>
                `数据 ${(page - 1) * pageSize + i + 1}`
            )
        );

        if (page >= 3 || data.length === 0) {
            hasMore = false;
        }

        yield data;
        page++;
    }
}

async function fetchAllPages() {
    const allData = [];
    for await (const page of paginatedFetch(3)) {
        allData.push(...page);
        console.log('当前页数据:', page);
    }
    console.log('所有数据:', allData);
}

// fetchAllPages();