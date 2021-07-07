/*
 * @Author: your name
 * @Date: 2021-07-07 21:24:47
 * @LastEditTime: 2021-07-07 21:46:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\6JS面向对象\3JS面向对象高级\js\drag.js
 */
//拖拽改写 面向对象
function Drag(id) {
    let _this = this;
    this.disX = 0;
    this.disY = 0;
    this.oDragBox = document.getElementById(id);
    this.oDragBox.onmousedown = function (ev) {
        _this.fnDown(ev);
    };
}

Drag.prototype.fnDown = function (ev) {
    let _this = this;
    let oEvent = ev || event;
    this.disX = oEvent.clientX - this.oDragBox.offsetLeft;
    this.disY = oEvent.clientY - this.oDragBox.offsetTop;
    document.onmousemove = function (ev) {
        _this.fnMove(ev);
    };
    document.onmouseup = function () {
        _this.fnUp();
    };
    return false;
}
Drag.prototype.fnMove = function (ev) {
    let oEvent = ev || event;
    this.oDragBox.style['left'] = oEvent.clientX - this.disX + 'px';
    this.oDragBox.style['top'] = oEvent.clientY - this.disY + 'px';

}
Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
}