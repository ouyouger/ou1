
//随机获取RGB类型的颜色
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
//获取当前时间
function getFormateDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = patchFrontZero(month);
    var day = date.getDate();
    day = patchFrontZero(day);
    var hour = date.getHours();
    hour = patchFrontZero(hour);
    var minutes = date.getMinutes();
    minutes = patchFrontZero(minutes);
    var seconds = date.getSeconds();
    seconds = patchFrontZero(seconds);
    var format = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
    return format;
}
//获取n-m之间的整数
function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
}



