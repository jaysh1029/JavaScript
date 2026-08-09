const map = new Map();
map.set('name', '张三');
map.set(1, '数字键');
console.log(map.get('name'));   // 张三
console.log(map.size);  // 2

const set = new Set([1, 2, 3, 4, 5]);
console.log(set);   // Set(5) { 1, 2, 3, 4, 5 }