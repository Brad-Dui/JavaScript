/*
 * @Author: your name
 * @Date: 2021-06-29 22:55:58
 * @LastEditTime: 2021-06-29 23:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsdemo\demo\12仿Flash图片轮播\js\index.js
 */
//运动框架
function startChange(obj, attr, iTarget) {
    obj.timer = null;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let realStyle = 0;
        function getStyle(obj1, attr1) {
            if (obj1.currentStyle) {
                return obj1.currentStyle[attr1];
            }
            else {
                return getComputedStyle(obj1, false)[attr1];
            }
        }
        if (attr == 'opacity') {
            realStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        }
        else {
            realStyle = parseInt(getStyle(obj, attr));
        }
        let speed = (iTarget - realStyle) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (iTarget == realStyle) {
            clearInterval(timer);
        }
        else {
            if (attr == 'opacity') {
                obj.style[attr] = (realStyle + speed) / 100;
                obj.style.filter = 'alpha(opacity=' + (realStyle + speed) + ')';
            }
            else {
                obj.style[attr] = realStyle + speed + 'px';
            }
        }
    }, 30)
}
//选取class
function getClass(oParent, oClass) {
    let arr = [];
    let aElem = oParent.getElementsByTagName('*');
    for (let i = 0; i < aElem.length; i++) {
        if (aElem[i].className == oClass) {
            arr.push(aElem[i]);
        }
    }
    return arr;
}