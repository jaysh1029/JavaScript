// XHR

// 创建XHR
function createXHR(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
    // 兼容IE
    if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    throw new Error("浏览器不支持 AJAX");
}


