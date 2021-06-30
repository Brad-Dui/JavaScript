/*
 * @Author: your name
 * @Date: 2021-05-30 13:04:26
 * @LastEditTime: 2021-06-18 14:09:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \5全选不选反选\js\index.js
 */
/**
 * 改变checked属性
 */
window.onload = function () {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var box = document.getElementById('box');
    var oCk = box.getElementsByTagName('input');
    btn1.onclick = function () {
        for (var i = 0; i < oCk.length; i++) {
            oCk[i].checked = true;
        }
        console.log('allcheck');
    };
    btn2.onclick = function () {
        for (var i = 0; i < oCk.length; i++) {
            oCk[i].checked = false;
        }
        console.log('nocheck');
    };
    btn3.onclick = function () {
        for (var i = 0; i < oCk.length; i++) {
            if (oCk[i].checked == true) {
                oCk[i].checked = false;
            }
            else {
                oCk[i].checked == true;
            }
        }
        console.log('reverse');
    };
};