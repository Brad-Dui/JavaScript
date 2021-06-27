/*
 * @Author: your name
 * @Date: 2021-06-05 21:11:21
 * @LastEditTime: 2021-06-27 22:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\9、函数\index.js
 */
/**
 * 1.返回值
 * 函数返回值return，只有return无参数：undefined，有参数无return： undefined；
 * 函数返回尽量是一种类型
 *
 * 2.传参
 * arguments：可变参（不定参） 实参数组
 *
 * 3.css函数
 * css(id,'style')获取样式
 * css(id,'style','parameter')设置样式
 *
 * 4.获取最终显示的样式
 * 兼容IE obj.currentStyle.attr
 * 兼容Chorm getComputedStyle(obj,*).attr 
 */
window.onload = function () {

    //1、不定参

    function add() {
        let result = 0;                      //局部变量
        console.log(arguments.length);  //实参数组长度
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }
    let iCount = add(1, 2, 3, 1, 4, 1, 5, 9, 2, 6, 1, 2, 3,
        1, 4, 1, 5, 9, 2, 6, 1, 2, 3, 1, 4, 1, 5, 9, 2, 6,
        1, 2, 3, 1, 4, 1, 5, 9, 2, 6);
    console.log(iCount);

    //2、css函数

    function css() {    //也可以添加形参 替换arguments数组
        if (arguments.length == 2) {
            return arguments[0].style[arguments[1]]; //style后用[]不可用 .
        }
        else {
            arguments[0].style[arguments[1]] = arguments[2];//设置行间样式，并不是写入css文件中
        }
    };
    let box1 = document.getElementById('box1');
    console.log(css(box1, 'width'));
    css(box1, 'background-color', '#555');

    //3、获取非行间样式 (最终显示的样式)(只能取单一样式)

    // console.log(box1.currentStyle.height);               //只在IE下兼容
    // console.log(getComputedStyle(box1, false).width);   //不完全兼容IE
    console.log(box1.currentStyle);                        //在Chrome下为undefined 在IE下为object
    //解决兼容问题(可以封装成一个获取样式的方法)
    if (box1.currentStyle) {
        //IE
        console.log(box1.currentStyle.width);
    }
    else {
        //chrome
        console.log(getComputedStyle(box1, false).width);
    }
}