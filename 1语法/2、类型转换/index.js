/*
 * @Author: your name
 * @Date: 2021-06-05 13:23:58
 * @LastEditTime: 2021-06-05 14:22:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\类型转换\index.js
 */
window.onload = function () {
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    let btn1 = document.getElementById('btn1');
    btn1.onclick = function () {
        let add = parseInt(text1.value) + parseInt(text2.value);
        alert("结果为：" + add);
    };
    /**
     * 1、input的value值默认为字符串类型
     * 2、parseInt转换整数，12a转换结果为12，只取前面数字部分
     * 3、parseInt转换非数字结果为NaN，NaN与任何结果相加都是NaN
     * 4、NaN不等于NaN
     * 5、parseFloat可以转换小数
     */
    let text3 = document.getElementById('text3');
    let btn2 = document.getElementById('btn2');
    btn2.onclick = function () {
        alert(isNaN(text3.value));
    };
    /**
     * 1、判断是否是NaN用isNaN(),返回布尔值。
     * 2、可用于检测输入是否是数字
     */
    let nFive = 5;
    let sFive = '5';
    console.log(nFive==sFive);  //隐式类型转换，类型不一样转换后比较
    console.log(nFive===sFive); //严格比较，类型必须一样才能比较
    console.log(nFive - sFive); //隐式类型转换，自动转换并计算
}
