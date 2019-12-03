///<reference path="../../typings/index.d.ts" />
function go(x, i) {
    switch (x) {
        case 1:
            window.location.href = "../index.html";
            break;
        case 2:
            if (i === 0) {
                window.location.href = "hot.html";
            }
            else {
                window.location.href = "view/hot.html";
            }
            break;
        case 3:
            if (i === 0) {
                window.location.href = "find.html";
            }
            else {
                window.location.href = "view/find.html";
            }
            break;
        case 4:
            if (i === 0) {
                window.location.href = "trip.html";
            }
            else {
                window.location.href = "view/trip.html";
            }
            break;
        case 5:
            if (i === 0) {
                window.location.href = "mine.html";
            }
            else {
                window.location.href = "view/mine.html";
            }
            break;
    }
}
function login() {
    window.location.href = "login.html";
}
function register() {
    window.location.href = "register.html";
}
function back() {
    history.back();
}
function select(obj) {
    $(obj).addClass('active').siblings().removeClass('active');
}
function select2(obj) {
    $(obj).addClass('s-active').siblings().removeClass('s-active');
}
function photo() {
    window.location.href = 'news.html';
}
//禁用鼠标右键
document.oncontextmenu = function () { return false; };
//禁用键盘事件
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
        mAlert();
        e.returnValue = false;
        return (false);
    }
};
function mAlert() {
    alert("感谢您使用基础支撑平台，禁止一切想操作控制台的行为！！！");
}
/*
测试*/
