/*
 * @Author: your name
 * @Date: 2021-07-07 13:21:03
 * @LastEditTime: 2021-07-07 16:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\6JS面向对象\2JS面向对象实例\js\index.js
 */
/**
 * window.onload                构造函数
 *         初始化程序               初始化对象
 *         全局变量                 属性
 *         全局函数                 方法
 * 选项卡用面向对象实现
 *      不能让函数内有嵌套
 *      点击事件的函数变成全局
 */
window.onload = function () {
    //创建对象
    new tabSwitch('btns');
}
//构造函数
function tabSwitch(id) {
    //this指向oBtns
    let _this = this;
    let oBtns = document.getElementById(id);
    this.aInputs = oBtns.getElementsByTagName('input');
    this.aShowDiv = document.getElementsByClassName('show');
    for (let i = 0; i < this.aInputs.length; i++) {
        this.aInputs[i].index = i;
        this.aInputs[i].onclick = function () {
            //直接this会指向aInputs
            _this.fnClick(this);
        }
    }
}
//原型对象方法
tabSwitch.prototype.fnClick = function (oInput) {
    for (let j = 0; j < this.aInputs.length; j++) {
        this.aInputs[j].className = '';
        this.aShowDiv[j].style['display'] = 'none';
    }
    oInput.className = 'active';
    this.aShowDiv[oInput.index].style['display'] = 'block';
}
