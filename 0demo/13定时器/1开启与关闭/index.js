/*
 * @Author: your name
 * @Date: 2021-06-08 10:34:37
 * @LastEditTime: 2021-06-08 20:19:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \定时器\1开启与关闭\index.js
 */
/**
 * 定时器开启与关闭
 * 开启：setInterval(函数,时间ms)    隔一段时间执行一次
 *      setTimeout(函数,时间ms)     从开始间隔一段时间后执行(仅一次)
 * 关闭：clearInterval(返回值)      关闭setInterval
 *      clearTimeout(返回值)       关闭setTimeout
 */
window.onload = function () {
    let oSetIntval = document.getElementById('setInterval');
    let oClearInterval = document.getElementById('clearInterval');
    let oSetTimeout = document.getElementById('setTimeout');
    let oClearTimeout = document.getElementById('clearTimeout');
    let timer1 = null;
    let timer2 = null;
    oSetIntval.onclick = function () {
        console.log('开始');
        timer1 = setInterval(function () {
            console.log(1);
        }, 1000);
    }
    oClearInterval.onclick = function () {
        console.log('结束')
        clearInterval(timer1);
    }
    oSetTimeout.onclick = function () {
        console.log('3s后运行')
        timer2 = setTimeout(function () {
            console.log('开始')
        }, 3000);
    }
    oClearTimeout.onclick = function () {
        console.log('提前结束');
        clearTimeout(timer2);
    }

}