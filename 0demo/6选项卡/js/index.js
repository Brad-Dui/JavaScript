/*
 * @Author: your name
 * @Date: 2021-05-29 09:19:12
 * @LastEditTime: 2021-06-18 14:17:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \4选项卡\js\index.js
 */
/**
 * for length obj[i].事件 (给每个元素添加事件)
 * this.index当前节点序号,可以用于编号
 */
window.onload = function () {
    var nav = document.getElementsByClassName('navBar')[0];
    var oLi = nav.getElementsByTagName('li');
    var oTain = document.getElementsByClassName('container')[0];
    var oTent = oTain.getElementsByTagName('div');
    for (var i = 0; i < oLi.length; i++) {//给每个li添加事件
        oLi[i].index = i;//给当前元素添加索引，对应需要修改的另一组元素
        oLi[i].onmouseover = function () {
            for (var j = 0; j < oLi.length; j++) {//不显示与隐藏内容部分
                oLi[j].className = '';
                oTent[j].style.display = 'none';
            }
            this.className = 'active'; //this为当前节点 this != oLi[i]
            oTent[this.index].style.display = 'block';
            console.log(this);
            console.log(this.index);
        }
    }

};
