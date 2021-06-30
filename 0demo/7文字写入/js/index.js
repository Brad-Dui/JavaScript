/*
 * @Author: your name
 * @Date: 2021-05-30 16:17:41
 * @LastEditTime: 2021-06-18 14:24:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \7文字写入\js\index.js
 */
window.onload = function () {
    var oTxt = document.getElementById('text');
    var oBtn = document.getElementById('btn1');
    var oDiv = document.getElementById('div1');

    oBtn.onclick = function () {
        oDiv.innerHTML = oTxt.value;
        console.log(oTxt.value)
    };
}