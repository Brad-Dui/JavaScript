/*
 * @Author: your name
 * @Date: 2021-06-28 22:39:25
 * @LastEditTime: 2021-06-29 21:09:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\3JS运动\2运动应用\index.js
 */
/**
 * 多物体运动框架：单个定时器会互相影响(所有的东西都不能共用)
 *                加循环、加数组、加参数指定定时器/加索引指定
 * 多盒子淡入淡出：不能获取当前透明度，不能设置单一透明度变量
 *                加索引指定定时器和变量
 * offsetAttr的bug：获取的盒模型尺寸 不仅仅只有宽高 可能会使效果变反
 *                  使用style只能获取行间样式
 *                  使用currentStyle、getComputedStyle
 * 公用方法实现运动：透明度的修改不可用(1.获取样式parseInt变0 2.改变样式有单位)
 *                 小数乘整数可能出现误差 Math.round()舍去小数部分
 *                 获取样式->获取的样式修改兼容->缓冲速度->前进停止判断(改变的样式修改兼容)
 *                  
 */
window.onload = function () {
    //多盒子移入变宽(缓冲运动)
    let aWidthBox = document.getElementsByClassName('widthBox');
    for (let i = 0; i < aWidthBox.length; i++) {
        aWidthBox[i].widthTimer = null;//指定定时器
        aWidthBox[i].onmouseover = function () {
            fnWidthChange(this, 400);//直接在函数里写this无定义
            this.onmouseout = function () {
                fnWidthChange(this, 100);
            }
        }
    }
    function fnWidthChange(obj, iTarget) {
        clearInterval(obj.widthTimer);
        obj.widthTimer = setInterval(function () {
            let speed = (iTarget - obj.offsetWidth) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (iTarget == obj.offsetWidth) {
                clearInterval(obj.widthTimer);
            }
            else {
                obj.style.width = obj.offsetWidth + speed + 'px';
            }
        }, 30)
    }

    //多个淡入淡出
    let aAlphaBox = document.getElementsByClassName('alphaBox');
    for (let i = 0; i < aAlphaBox.length; i++) {
        aAlphaBox[i].alphaTimer = null;
        aAlphaBox[i].alpha = 30;
        aAlphaBox[i].onmouseover = function () {
            fnAlphaChange(this, 100)
        }
        aAlphaBox[i].onmouseout = function () {
            fnAlphaChange(this, 30)
        }
    }
    function fnAlphaChange(obj, iTarget) {
        clearInterval(obj.alphaTimer);
        obj.alphaTimer = setInterval(function () {
            //匀速
            // let speed = 0;
            // if (obj.alpha < iTarget) {
            //     speed = 5;
            // }
            // else {
            //     speed = -5;
            // }
            //变速
            let speed = (iTarget - obj.alpha) / 20;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (obj.alpha == iTarget) {
                clearInterval(obj.alphaTimer)
            }
            else {
                obj.alpha += speed;
                obj.style.filter = 'alpha(opacity= obj.alpha' + ')';
                obj.style.opacity = obj.alpha / 100;
                // console.log(obj.alpha)
            }
        }, 30)
    }

    //公用框架
    let oChangeHeight = document.getElementById('changeHeight');
    let oChangeAlpha = document.getElementById('changeAlpha');
    oChangeHeight.onmouseover = function () {
        fnPublicChange(this, 'height', 500);
    }
    oChangeHeight.onmouseout = function () {
        fnPublicChange(this, 'height', 200);
    }
    oChangeAlpha.onmouseover = function () {
        fnPublicChange(this, 'opacity', 100);
    }
    oChangeAlpha.onmouseout = function () {
        fnPublicChange(this, 'opacity', 30)
    }
    function fnPublicChange(obj, attr, iTarget) {
        clearInterval(obj.publicTimer);
        obj.publicTimer = setInterval(function () {
            //获取属性(可以写在外面方便复用)
            function getStyle(obj1, attr1) {
                if (obj1.currentStyle) {
                    return obj1.currentStyle[attr1];
                }
                else {
                    return getComputedStyle(obj1, false)[attr1];
                }
            }
            //兼容透明度
            let realStyle = 0;
            if (attr == 'opacity') {
                realStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);//可是会有计算误差 舍去小数部分
            }
            else {
                realStyle = parseInt(getStyle(obj, attr));
            }
            //缓冲速度
            let speed = (iTarget - realStyle) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //停止与前进
            if (realStyle == iTarget) {
                clearInterval(obj.publicTimer);
            }
            else {
                if (attr == 'opacity') {
                    obj.style[attr] = (realStyle + speed) / 100;
                    obj.style.filter = 'alpha(opacity=' + (realStyle + speed) + ')';
                }
                else {
                    obj.style[attr] = realStyle + speed + 'px';
                }
            }
            console.log(obj.style[attr]);
            console.log(speed)
        }, 30)
    }
    console.log(0.07 * 100)//小数存储误差
    console.log(Math.round(-1.2))//舍去小数部分
}
