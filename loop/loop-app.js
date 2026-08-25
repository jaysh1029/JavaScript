// 综合应用场景

// 场景1：数据验证和过滤
const users2 = [
    { name: 'Tom', age: 25, isActive: true },
    { name: 'Lucy', age: 17, isActive: true },
    { name: 'Jack', age: 30, isActive: false },
    { name: 'Lee', age: 22, isActive: true }
];
console.log('活跃的成年用户');
for (let user of users2) {
    if (user.isActive && user.age >= 18) {
        console.log(` ${user.name}, ${user.age}岁`);
    }
}
/*
 Tom, 25岁
 Lee, 22岁
*/

// 场景2：搜索和筛选

const products = [
    { id: 1, name: '笔记本电脑', price: 5999, category: '电子' },
    { id: 2, name: '智能手机', price: 3999, category: '电子' },
    { id: 3, name: '椅子', price: 599, category: '家具' },
    { id: 4, name: '桌子', price: 1299, category: '家具' },
    { id: 5, name: '耳机', price: 299, category: '电子' },
];

// 筛选电子产品，价格低于5000

const filteredProducts = [];
for (let product of products) {
    if (product.category === '电子' && product.price < 5000) {
        filteredProducts.push(product);
    }
}
console.log('符合条件的电子产品:');
for (let product of filteredProducts) {
    console.log(` ${product.name}: ￥${product.price}`);
}

/*
 智能手机: ￥3999
 耳机: ￥299
*/

// 场景3: 数据转换
const scores2 = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

// 转换为等级
const gradedScores = [];
for (let item of scores2) {
    let grade5;
    if (item.score >= 90) grade5 = 'A';
    else if (item.score >= 80) grade5 = 'B';
    else if (item.score >= 70) grade5 = 'C';
    else if (item.score >= 60) grade5 = 'D';
    else grade5 = 'F';

    gradedScores.push({
        ...item,
        grade: grade5
    });
}
console.log('成绩等级:');
for (let item of gradedScores) {
    console.log(` ${item.name}: ${item.score}分 -> ${item.grade}`);
}
/*
 Alice: 85分 -> B
 Bob: 92分 -> A
 Charlie: 78分 -> C
*/

// 场景4 统计和聚合
const orders = [
    { id: 1, amout: 100, status: '完成' },
    { id: 2, amout: 250, status: '待处理' },
    { id: 3, amout: 150, status: '完成' },
    { id: 4, amout: 300, status: '取消' },
    { id: 5, amout: 200, status: '完成' },
];

let totalAmount = 0;
let completedOrders = 0;
let pendingOrders = 0;
let cancelledOrders = 0;

for (let order of orders) {
    switch (order.status) {
        case '完成':
            totalAmount += order.amout;
            completedOrders++;
            break;
        case '待处理':
            pendingOrders++;
            break;
        case '取消':
            cancelledOrders++;
            break;
    }
}
console.log('统计结果:');
console.log(` 完成订单:${completedOrders} 笔`); //  完成订单:3 笔
console.log(` 待处理订单:${pendingOrders} 笔`); //  待处理订单:1 笔
console.log(` 取消订单:${cancelledOrders} 笔`); //  取消订单:1 笔
console.log(` 总金额:￥${totalAmount}`); //  总金额:￥450

// 场景5：分页处理
console.log('分页处理');
const allItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `项目 ${i + 1}`
}));

function paginate(items, pageSize, pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, items.length);
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(items[i]);
    }
    return result;
}

console.log('第2页(每页5条)');
const page2 = paginate(allItems, 5, 2);
for (let item of page2) {
    console.log(` ${item.id}: ${item.name}`);
}

/*
 6: 项目 6
 7: 项目 7
 8: 项目 8
 9: 项目 9
 10: 项目 10
*/