/*
 * @Author: your name
 * @Date: 2021-07-01 15:08:39
 * @LastEditTime: 2021-07-01 19:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\3JS运动\3运动中级\js\move.js
 */
/**
 * 
 * @param {*} obj 
 * @param {*} attr 
 * @param {*} iTarget 
 * @param {*} fnNext 
 * @param {*} json
 */
/**
 * 完美运动框架(可链式、多属性、多物体)
 * 引入json 循环json中的属性实现多属性同时变化
 * 加标志位 初始为ture 循环中有属性没结束置为false 判断标志再关定时器
 */
//完美运动框架
function perfetChange(obj, json, fnNext) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        let flag = true;//假设都结束
        //循环json 每30ms多属性都变换 宏观上并行
        for (let attr in json) {
            let realStyle = 0;
            if (attr == 'opacity') {
                realStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                realStyle = parseInt(getStyle(obj, attr));
            }
            let speed = (json[attr] - realStyle) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (attr == 'opacity') {
                obj.style[attr] = (realStyle + speed) / 100;
                obj.style.filter = 'alpha(opacity =' + (realStyle + speed) + ')';
            }
            else {
                obj.style[attr] = realStyle + speed + 'px';
            }
            //有一个未结束标志位都是false
            if (json[attr] != realStyle) {
                flag = false;
            }
        }
        //判断是否都结束 关定时器
        if (flag) {
            clearInterval(obj.timer)
            if (fnNext) {
                fnNext();
            }
        }
    }, 30)
}
//链式运动框架
function starChange(obj, attr, iTarget, fnNext) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let realStyle = 0;
        if (attr == 'opacity') {
            realStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        }
        else {
            realStyle = parseInt(getStyle(obj, attr));
        }
        let speed = (iTarget - realStyle) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (realStyle == iTarget) {
            clearInterval(obj.timer);
            if (fnNext) fnNext();//结束后调用下一个函数 实现链式运动
        }
        else {
            if (attr == 'opacity') {
                obj.style[attr] = (realStyle + speed) / 100;
                obj.style.filter = 'alpha(opacity =' + (realStyle + speed) + ')';
            }
            else {
                obj.style[attr] = realStyle + speed + 'px';
            }
        }
    }, 30)
}
//获取样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
