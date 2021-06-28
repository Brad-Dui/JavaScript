
/**
 * 运动基础：定时器改变定位的left停止的判断不精确 能停但是不能停到准确的位置
 *          当距目标点的距离小于速度时 下一次可能会移过再移回反反复复 
 *          小于时直接相等(匀速运动)
 * 运动框架：开始运动时 先把已有定时器关闭(解决连续点击速度加快 停止按钮失效的bug)
 *          if/else把运动和停止隔开(解决再次点击继续运行一个单位时间的bug)
 * 运动框架实例：1.分享侧边栏 移入展开 移出收回
 *              代码合并(函数) 参数简化
 *              速度判断(方向) 是否达到目标值判断(是否停止)
 *             2.图片淡入淡出 移入移出透明度变化
 *              因为没有offsetAlpha 需要变量代替 不断修改变量
 * 缓冲运动：距离大、速度大，距离小、速度小，距离速度成正比
 *          当速度小于1时，像素会被舍去小数部分，不再移动
 *          Math.ceil()向上取整，Math.floor()向下取整，保证左右准确停止
 * 缓冲事例：解决悬浮框抖动(IE下) (在运动中出现抖动：目标点或者速度的值一个整一个小数 不能准备停下 在目标点左右移动)
 *          对速度或者目标位置的像素：直接取整parseInt() 向上取整Math.ceil() 向下取整Math.floor()
 *          Element.scrollTop为元素卷起的像素
 *          Element.clientHeight 可视窗口的高度
 *          带定时器的函数尽量不要写在事件内部 在调用时出现bug
 * 
 */
window.onload = function () {
    //匀速运动框架
    let oStartBtn1 = document.getElementById('startBtn1');
    let oStartBtn2 = document.getElementById('startBtn2');
    let oStopBtn = document.getElementById('stopBtn');
    let oMoveBox = document.getElementById('moveBox');
    let timer1 = null;
    oStartBtn1.onclick = function () {
        fnBoxMove(200);
    }
    oStartBtn2.onclick = function () {
        fnBoxMove(400);
    }
    oStopBtn.onclick = function () {
        clearInterval(timer1);
    }
    function fnBoxMove(iTarget) {
        //连续点击会一直加快移动不会停止 开启前先停止保证只有一个定时器工作
        clearInterval(timer1);
        timer1 = setInterval(function () {
            //左右移动判断并改变速度
            let speed = 0;
            if (oMoveBox.offsetLeft < iTarget) {
                speed = 7;
            }
            else {
                speed = -7;
            }
            //是否接近目标点判断 逐渐改变与直接相等暂停定时器
            if (Math.abs(iTarget - oMoveBox.offsetLeft) <= Math.abs(speed)) {//offsetLeft获取的是一个整数 不加px
                clearInterval(timer1);//停止之后再点击还会再移动添加else解决
                oMoveBox.style.left = iTarget + 'px';
            }
            else {
                oMoveBox.style.left = oMoveBox.offsetLeft + speed + 'px';
            }
        }, 30)
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
        timer2 = setInterval(function () {
            if (oShareBox.offsetLeft < iTarget) {
                speed = 6;//右移
            }
            else {
                speed = -6;//左移
            }
            if (Math.abs(oShareBox.offsetLeft - iTarget) <= Math.abs(speed)) {
                clearInterval(timer2);
                oShareBox.style.left = iTarget + 'px';
            }
            else {
                oShareBox.style.left = oShareBox.offsetLeft + speed + 'px';
            }
        }, 30)
    }

    //淡入淡出(不能获取实时透明度 透明度累加或累减再赋值)(变量应用)
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

    //缓冲运动 速度与距离成正比
    let oBufferBtn = document.getElementById('bufferBtn');
    let oBufferBox = document.getElementById('bufferBox');
    let bufferTimer = null;
    oBufferBtn.onclick = function () {
        fnStartBuffer(400);
    }
    function fnStartBuffer(iTarget) {
        clearInterval(bufferTimer);
        bufferTimer = setInterval(function () {
            // let speed = 20;
            // speed = parseInt(speed * (iTarget - oBufferBox.offsetLeft) / iTarget);
            let speed = (iTarget - oBufferBox.offsetLeft) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//向左向右准确停止
            if (oBufferBox.offsetLeft == iTarget) {
                clearInterval(bufferTimer);
            }
            else {
                oBufferBox.style.left = oBufferBox.offsetLeft + speed + 'px';
            }
            console.log(speed, oBufferBox.offsetLeft);
        }, 30)
    }
    //缓冲悬浮框
    window.onscroll = function () {
        let oHangBox = document.getElementById('hangBox');
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//向上滚动的像素数 兼容
        //直接等于IE下会抖动 像素的取整
        // oHangBox.style.top = document.documentElement.clientHeight - oHangBox.offsetHeight + scrollTop + 'px';
        fnStartHang(document.documentElement.clientHeight - oHangBox.offsetHeight + scrollTop);
    }
    let hangTimer = null;
    function fnStartHang(iTarget) {//不能写在内部
        clearInterval(hangTimer);
        hangTimer = setInterval(function () {
            let oHangBox = document.getElementById('hangBox');
            let speed = (iTarget - oHangBox.offsetTop) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (oHangBox.offsetTop == iTarget) {
                clearInterval(hangTimer);
            }
            else {
                oHangBox.style.top = oHangBox.offsetTop + speed + 'px';
            }
        }, 30)
    }
}
