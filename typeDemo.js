class UserManager {
    constructor() {
        this.users = [];
        this.cache = new Map();
    }

    addUser(name, age) {
        const id = Symbol('user');
        this.users.push({ id, name, age });
        this.cache.set(id, { name, age });
    }

    getUser(id) {
        return this.cache.get(id);
    }

    getStats() {
        const total = this.users.length;
        const ages = this.users.map(u => u.age);
        const avgAge = ages.reduce((a, b) => a + b, 0) / total;
        return { total, avgAge };
    }

}

const manager = new UserManager();
manager.addUser('张三',25);
manager.addUser('李四',30);
manager.addUser('王五',39);
manager.addUser('小刘',34);
console.log('用户统计',manager.getStats());