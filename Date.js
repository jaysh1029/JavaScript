const now = new Date();
console.log(now);   // 2026-08-09T09:22:06.890Z
console.log(typeof now);    // object

const date = new Date(2026, 0, 1);
console.log(date.getFullYear());    // 2026
console.log(date.getMonth());   // 0 月是从索引0开始的
console.log(date.getDate());
console.log(date.getTime()) // 时间戳 结果受date实际时间的限制(之类计算的是2026.1.1的时间戳)  1767196800000
console.log(Date.now());    // 时间戳，性能更高  结果永远是当下时间的时间戳 1786267774686
console.log(date.toISOString());    // 2025-12-31T16:00:00.000Z
console.log(date.toLocaleDateString()); // 2026/1/1
