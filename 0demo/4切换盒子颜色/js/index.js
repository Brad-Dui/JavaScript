/*
 * @Author: your name
 * @Date: 2021-05-29 10:43:12
 * @LastEditTime: 2021-06-18 14:07:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \4切换盒子颜色\js\index.js
 */
window.onload = function () {
    var oC = document.getElementsByClassName('show')[0];
    function setColor(value) {
        oC.style.background = value;
        console.log(value);
    };
    document.getElementById('color1').onclick = function () {
        setColor('green');
    }
    document.getElementById('color2').onclick = function () {
        setColor('pink');
    }
    document.getElementById('color3').onclick = function () {
        setColor('gray');
    }

}
