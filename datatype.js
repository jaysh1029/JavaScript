// 数据类型
/* console.log('基本数据类型：');
console.log(typeof 'hello');
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof 123n);
console.log('\n引用类型');
console.log(typeof {})  ;
console.log(typeof []);
console.log(typeof function(){});
console.log(typeof new Date());
console.log(typeof /regex/); */



/* const text = '  JavaScript is awesome!  ';
console.log(text);
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.indexOf('Script'));
console.log(text.includes('Java'));
console.log(text.startsWith("  J"));
console.log(text.endsWith('!  '));
console.log(text.replace('awesome', 'great'));
console.log(text.replaceAll('a', 'A'));

console.log('分割: ', text.trim().split(' '));
console.log('拼接：', 'Hello'.concat(' ', 'World'));
console.log('重复：', 'Ha'.repeat(3));

console.log('切片', text.slice(2, 12));

console.log('截取：', text.substring(2,12));
console.log('指定长度截取：',text.substr(2,10)); */

// 模版字符串

const name='张三';
const age = 25;
const city='郑州';

const introduction=`
    姓名：${name}
    年龄：${age}
    城市：${city}
    信息：${name}今年${age}岁，住在${city}
`;
console.log(introduction);

const price = 100;
const tax = 0.1;
console.log(`总价：${price * (1 + tax)}元`);

const isLoggedIn = true;
const userStatus = `用户状态：${isLoggedIn?'已登录':'未登录'}`;
console.log(userStatus);

console.log('换行：\n第二行');
console.log('制表符：\t缩进');
console.log('反斜杠：\\');
console.log('单引号：\'');
console.log("双引号：\"");
console.log('Unicode: \u4F60\u597D');