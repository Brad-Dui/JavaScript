/*
 * @Author: your name
 * @Date: 2021-05-28 14:40:10
 * @LastEditTime: 2021-06-18 10:56:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text2\js\index.js
 */
window.onload = function () {
    let oTransition = document.getElementById('oL');//获取css
    let aInput = document.getElementsByTagName('input');
    function skin1() {
        oTransition.href = './css/css1.css';
        console.log("css1");
    };
    function skin2() {
        oTransition.href = './css/css2.css';
        console.log("css2");
    }
    aInput[0].onclick = function () {
        skin1();
    }
    aInput[1].onclick = function () {
        skin2();
    }
}
