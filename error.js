const error = new Error('发生错误');
console.log(error.name);    // Error
console.log(error.message); // 发生错误
console.log(error.stack);
/*

    // 浏览器执行结果
    Error: 发生错误
    at file:///D:/JavaScriptCode/JavaScript/error.js:1:15

    // NodeJS执行结果
    Error: 发生错误
    at Object.<anonymous> (d:\JavaScriptCode\JavaScript\error.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1934:14)
    at Object..js (node:internal/modules/cjs/loader:2074:10)
    at Module.load (node:internal/modules/cjs/loader:1656:32)
    at Module._load (node:internal/modules/cjs/loader:1448:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47
*/ 

// 自定义错误

class CustomError extends Error{
    constructor(message, code){
        super(message);
        this.name = 'CustomError';
        this.code = code;
    }

}

const cusErr = new CustomError('自定义错误', 1001);
console.log(cusErr);

/*
    // NodeJS执行结果
    CustomError: 自定义错误
    at Object.<anonymous> (d:\JavaScriptCode\JavaScript\error.js:22:16)
    at Module._compile (node:internal/modules/cjs/loader:1934:14)
    at Object..js (node:internal/modules/cjs/loader:2074:10)
    at Module.load (node:internal/modules/cjs/loader:1656:32)
    at Module._load (node:internal/modules/cjs/loader:1448:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 1001
}


    // 浏览器执行结果
    CustomError: 自定义错误
    at file:///D:/JavaScriptCode/JavaScript/error.js:28:16 {name: 'CustomError', code: 1001, stack: 'CustomError: 自定义错误
    at file:///D:/JavaScriptCode/JavaScript/error.js:28:16', message: '自定义错误'}
*/