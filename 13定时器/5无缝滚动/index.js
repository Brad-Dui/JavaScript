/*
 * @Author: your name
 * @Date: 2021-06-15 10:05:11
 * @LastEditTime: 2021-06-18 18:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \定时器\5无缝滚动\index.js
 */
/**
 * offsetLeft:获取左边距
 * offsetWidth:获取高度
 * ul不设置宽度 计算得到 外层设置隐藏
 * 定时器修改left实现滚动30ms
 */
window.onload = function () {
    let oContent = document.getElementById('content');
    let aUl = oContent.getElementsByTagName('ul')[0];
    let aLi = aUl.getElementsByTagName('li');
    let aRoll = document.getElementsByClassName('roll');
    let speed = -2;

    aUl.innerHTML = aUl.innerHTML + aUl.innerHTML;//复制一份ul
    aUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';//设置ul的宽度

    function move() {
        if (aUl.offsetLeft < -aUl.offsetWidth / 2) {
            aUl.style.left = '0';
            // console.log('0')
        }//左滚动一半左边距为0
        if (aUl.offsetLeft > 0) {
            aUl.style.left = - aUl.offsetWidth / 2 + 'px';
            // console.log('part')
        }//右滚动开始左边距先向左移动一半
        aUl.style.left = aUl.offsetLeft + speed + 'px';//ul的左边距一段时间减5
    }
    let timer = setInterval(move, 30)
    //移入停止滚动
    oContent.onmouseover = function () {
        clearInterval(timer);
    }
    //移出开始滚动
    oContent.onmouseout = function () {
        timer = setInterval(move, 30)
    }
    //向左滚动
    aRoll[0].onclick = function () {
        speed = -2;
    }
    //向右滚动
    aRoll[1].onclick = function () {
        speed = 2;
    }
}
