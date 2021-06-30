/*
 * @Author: your name
 * @Date: 2021-05-28 16:46:49
 * @LastEditTime: 2021-06-18 13:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3下拉框\js\index.js
 */
window.onload = function () {
    let oOption = document.getElementById('menuOption');
    let oButton = document.getElementById('menu');
    console.log(typeof sDisplay)
    function dropdown() {
        let sDisplay = window.getComputedStyle(oOption, false).display;//获取当前显示的样式
        if (sDisplay == 'none') {
            oOption.style.display = 'flex';
            console.log(sDisplay)
        }
        else {
            oOption.style.display = 'none';
            console.log(sDisplay)
        }
    };
    oButton.onclick = function () {
        dropdown();
        console.log('onclick')
    }
}
