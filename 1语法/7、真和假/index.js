/*
 * @Author: your name
 * @Date: 2021-06-05 17:13:22
 * @LastEditTime: 2021-06-05 17:34:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\7、真和假\index.js
 */
/**
 *真：ture   非零数字  非空字符串   非空对象
 *假：false  数字0     空字符串    空对象null   undefined   NaN
 *空数组为判断条件时为true，与true作比较时是false。
 * 
 */
window.onload = function () {
    let a = [];
    if (a) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    console.log(a == true);
}