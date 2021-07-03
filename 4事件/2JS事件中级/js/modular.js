/*
 * @Author: your name
 * @Date: 2021-07-03 14:07:03
 * @LastEditTime: 2021-07-03 15:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\4事件\2JS事件中级\js\modular.js
 */
//获取class数组
function getByClass(oParent, oClass) {
    let aElem = oParent.getElementsByClassName('*');
    let arr = [];
    for (let i = 0; i < aElem.length; i++) {
        if (aElem == oClass) {
            arr.push(aElem[i]);
        }
    }
    return arr;
}
//获取绝对鼠标坐标
function position(ev) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop };
}
//设置属性
function setStyle(obj, json) {
    for (let attr in json) {
        obj.style[attr] = json[attr];
    }
}
