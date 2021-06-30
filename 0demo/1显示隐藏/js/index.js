/*
 * @Author: your name
 * @Date: 2021-05-27 23:04:58
 * @LastEditTime: 2021-06-18 10:46:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text1\js\index.js
 */
window.onload = function () {
    let oDisplay = document.getElementById('content1');
    let oInput = document.getElementById('input1');
    function fnDisplay() {
        oDisplay.style.display = 'flex';
    };
    function fnHide() {
        oDisplay.style.display = 'none';
    }
    oInput.onmouseover = function () {
        fnDisplay();
    }
    oInput.onmouseout = function () {
        fnHide();
    }
}


