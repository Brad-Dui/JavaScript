/*
 * @Author: your name
 * @Date: 2021-06-27 14:03:56
 * @LastEditTime: 2021-06-27 22:15:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\3JS运动\1运动基础\index.js
 */
/**
 * 运动基础：定时器改变定位的left停止的判断不精确 能停但是不能停到准确的位置
 * 运动框架：开始运动时 先把已有定时器关闭(解决连续点击速度加快 停止按钮失效的bug)
 *          if/else把运动和停止隔开(解决再次点击继续运行一个单位时间的bug)
 * 运动框架实例：1.分享侧边栏 移入展开 移出收回
 *              代码合并(函数) 参数简化
 *              速度判断(方向) 是否达到目标值判断(是否停止)
 *             2.图片淡入淡出 移入移出透明度变化
 *              因为没有offsetAlpha 需要变量代替 不断修改变量
 * 
 */
window.onload = function () {
    //运动框架
    let oStartBtn = document.getElementById('startBtn');
    let oStopBtn = document.getElementById('stopBtn');
    let oMoveBox = document.getElementById('moveBox');
    let timer1 = null;
    oStartBtn.onclick = function () {
        clearInterval(timer1);
        let speed = 5;
        timer1 = setInterval(function () {
            if (oMoveBox.offsetLeft >= 400) {//offsetLeft获取的是一个整数 不加px
                clearInterval(timer1);//停止之后再点击还会再移动添加else解决 
            }                         //连续点击会一直加快移动不会停止 开启前先停止保证只有一个定时器工作
            else {
                oMoveBox.style.left = oMoveBox.offsetLeft + speed + 'px';
            }
        }, 30)

    }
    oStopBtn.onclick = function () {
        clearInterval(timer1);
    }
    //分享侧边栏
    let oShareBox = document.getElementById('shareBox');
    let timer2 = null;
    oShareBox.onmouseover = function () {
        fnStratMove(0);
    }
    oShareBox.onmouseout = function () {
        fnStratMove(-100);
    }
    function fnStratMove(iTarget) {
        clearInterval(timer2);
        let speed = 0;
        if (oShareBox.offsetLeft < iTarget) {
            speed = 5;//右移
        }
        else {
            speed = -5;//左移
        }
        timer2 = setInterval(function () {
            if (oShareBox.offsetLeft == iTarget) {
                clearInterval(timer2);
            }
            else {
                oShareBox.style.left = oShareBox.offsetLeft + speed + 'px';
            }
        }, 30)
    }
    //淡入淡出
    let oChangeBox = document.getElementById('changeBox');
    let timer3 = null;
    let alpha = 30;
    oChangeBox.onmouseover = function () {
        fnStartChange(100);//移入变成不透明
    }
    oChangeBox.onmouseout = function () {
        fnStartChange(30);//移出变透明
    }
    function fnStartChange(iTarget) {
        clearInterval(timer3);
        let speed = 0;
        if (alpha < iTarget) {
            speed = 5;
        }
        else {
            speed = -5;
        }
        timer3 = setInterval(function () {
            if (alpha == iTarget) {
                clearInterval(timer3);
            }
            else {
                alpha += speed;//未达到目标 自加并赋给样式表
                oChangeBox.style.filter = 'alpha(opacity=' + alpha + ')';
                oChangeBox.style.opacity = alpha / 100;//Chrome的值在0-1之间
            }
        }, 30)
    }
}
