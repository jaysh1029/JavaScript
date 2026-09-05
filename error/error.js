console.log('\n=== 1.4 堆栈跟踪 ===');

function functionA() {
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    throw new Error('堆栈跟踪示例');
}

try {
    functionA();
} catch (error) {
    console.log('错误堆栈:');
    console.log('  message:', error.message);
    console.log('  stack:', error.stack);
}

/*
  message: 堆栈跟踪示例
  stack: Error: 堆栈跟踪示例
    at functionC (d:\JavaScriptCode\JavaScript\error\error.js:12:11)
    at functionB (d:\JavaScriptCode\JavaScript\error\error.js:8:5)
    at functionA (d:\JavaScriptCode\JavaScript\error\error.js:4:5)
    at Object.<anonymous> (d:\JavaScriptCode\JavaScript\error\error.js:16:5)
    at Module._compile (node:internal/modules/cjs/loader:1934:14)
    at Object..js (node:internal/modules/cjs/loader:2074:10)
    at Module.load (node:internal/modules/cjs/loader:1656:32)
    at Module._load (node:internal/modules/cjs/loader:1448:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)


*/