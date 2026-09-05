const setVal = new Set([1,2,3,4]);
console.log([...setVal][0]); // 1
console.log([...setVal][setVal.size-1]); // 4
console.log([...setVal].pop()); // 4
console.log(setVal.values().next().value); // 1
console.log(setVal.values().next().value); // 1