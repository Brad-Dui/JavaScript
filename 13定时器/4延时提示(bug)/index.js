/*
 * @Author: your name
 * @Date: 2021-06-13 11:57:51
 * @LastEditTime: 2021-06-18 17:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \定时器\4延时提示\index.js
 */
/**
 * 移入主框 提示框出现time1 清除time2
 * 移出主框 清除time1 延迟消失time2
 * 移入提示框 显示 清除time2
 * 移出提示框 延迟消失time2//有可能再移入主框
 * 注意时间是否一致
 */
window.onload = function () {
    let oNav = document.getElementById('nav');
    let oTip = document.getElementById('tip');
    let start = null;
    let end = null;
    oNav.onmouseover = function () {
        start = setTimeout(function () {
            oTip.style.display = 'block';
        }, 500)
        clearTimeout(end);
    }
    oNav.onmouseout = function () {
        end = setTimeout(function () {
            oTip.style.display = 'none';
        }, 500)
        clearTimeout(start);
    }
    oTip.onmouseover = function () {
        oTip.style.display = 'block';
        clearTimeout(end);
    }
    oTip.onmouseout = function () {
        end = setTimeout(function () {
            oTip.style.display = 'none';
        }, 500)
    }
}
