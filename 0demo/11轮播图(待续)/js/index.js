/*
 * @Author: 
 * @Date: 2021-06-18 20:25:22
 * @LastEditTime: 2021-06-25 14:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsdemo\11轮播图\js\index.js
 */
window.onload = function () {
    let omapImg = document.getElementById('mapImg');
    let aUl = omapImg.getElementsByTagName('ul')[0];
    let aImg = aUl.getElementsByTagName('li');
    let speed = -61;
    aUl.style.width = aImg[0].offsetWidth * aImg.length + 'px';

    function move() {
        //开始滚动
        let timerRoll = setInterval(function () {
            aUl.style.left = aUl.offsetLeft + speed + 'px';
        }, 30)
        //滚动完一张停止
        setTimeout(function () {
            clearInterval(timerRoll);
        }, parseFloat(aImg[0].offsetWidth / Math.abs(speed)) * 30)
    }
    setInterval(move, 2000)
}