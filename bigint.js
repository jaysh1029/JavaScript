const bigint1 = 123456789012345678901234567890n;
const bigint2 = BigInt('123456789012345678901234567890');
const bigint3 = BigInt(100);
console.log(bigint1);
console.log(typeof bigint1); // bigint

// 运算
const a = 10n, b = 3n;
console.log(a + b);  // 13n
console.log(a / b); // 3n 向下取整
console.log(a ** b); // 1000n 幂运算
console.log(a > b); // true
console.log(a === 10n); // true
console.log(a === 10); // false

// 与Number混合运算 (必须做类型转换，比较大小除外)

//console.log(10n +5); // BigInt和Number 不能混合运算必须做类型转换

console.log(10n + BigInt(5));  // 15n
console.log(Number(10n) + 5); // 15
console.log(10n > 5); // true  // 比较大小 无需转换类型
console.log(10n ==10); // true 抽象相等

// 注意事项 
// 不能使用Math对象方法   不能与Number进行位运算
// JSON的序列化，需要自定义toJSON

const bigObj ={
    value:12345678901234567890n,
    toJSON(){
        return  this.value.toString();
    }
};
console.log(JSON.stringify(bigObj)); // "12345678901234567890"

// 使用场景： 大数计算  对于超大数，Number无法精确表示，因此使用BigInt
const bigNum1= 9007199254740991n;
const bigNum2 = 9007199254740992n;
console.log(bigNum1*bigNum2);  // 81129638414606672688589750403072n  