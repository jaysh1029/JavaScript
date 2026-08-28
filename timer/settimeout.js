const obj = {
    name: '对象',
    regularFunc: function () {
        setTimeout(function () {
            console.log(this.name);  // undefined（this 指向全局）  ★★★
        }, 100);
    },
    arrowFunc: function () {
        setTimeout(() => {
            console.log(this.name);  // '对象'（箭头函数继承父级 this）  ★★★
        }, 100);
    },
    bindFunc: function () {
        setTimeout(function () {
            console.log(this.name);  // '对象'（bind 绑定）  ★★★
        }.bind(this), 100);
    }
};

obj.regularFunc();
obj.arrowFunc();
obj.bindFunc();
