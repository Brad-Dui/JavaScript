/*
 * @Author: your name
 * @Date: 2021-07-04 17:54:52
 * @LastEditTime: 2021-07-04 21:02:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\4事件\3JS事件高级\css\templete.js
 */
//获取样式
function getStyle(obj, attr) {
    if (obj.currentStyel) {
        return obj.currentStyel[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
//完美运动框架
function startChange(obj, json, fnNext) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let flag = true;
        let realStyle = 0;
        for (let attr in json) {
            if (attr == 'opacity') {
                realStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                realStyle = parseInt(getStyle(obj, attr));
            }
            let speed = (json[attr] - realStyle) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (attr == 'opacity') {
                obj.style[attr] = (realStyle + speed) / 100;
                obj.style['filter'] = 'alpha(opcity =' + (realStyle + speed) + ')';
            }
            else {
                obj.style[attr] = realStyle + speed + 'px';
            }
            if (json[attr] != realStyle) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            fnNext && fnNext();
        }
    }, 30)
}
//获取鼠标绝对坐标
function position(ev) {
    let oEvent = ev || event;
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        x: oEvent.clientX + scrollLeft,
        y: oEvent.clientY + scrollTop
    }
}
