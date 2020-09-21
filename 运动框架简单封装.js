   // 运动函数封装
   function move(obj, json, callback) {//元素 要循环的对象 回调函数
    // 先清在开
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var onOff = true;
        //    使用for-in循环对象
        for (var attr in json) {
            // 定义目标值（取值）
            var target = json[attr];
            // 获取样式
            // 透明度和运动结合
            var speed = 0;
            if (attr === 'opacity') {
                speed = getStyle(obj, attr) * 100;
            } else {
                speed = parseInt(getStyle(obj, attr));
            }

            var dir = (target - speed) / 10;
            dir = dir > 0 ? Math.ceil(dir) : Math.floor(dir);
            speed += dir;

            if ((speed > target && dir > 0) || (speed < target && dir < 0)) {
                speed = target;
            }
            if (speed != target) { // 当前值不等于目标值
                onOff = false;
            }
            // 如果开关为真，清除定时器，并调用回调函数
            if (onOff) {
                clearInterval(obj.timer);
                callback && callback();
            }
            // 透明度和运动结合
            if (attr === 'opacity') {
                obj.style.opacity = speed / 100;
                obj.style.filter = 'alpha(opacity = ' + speed + ' )';
            } else {
                obj.style[attr] = speed + 'px';
            }
        }
    }, 20)
}
// 获取非行间样式的函数
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
