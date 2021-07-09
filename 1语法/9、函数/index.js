/*
 * @Author: your name
 * @Date: 2021-06-05 21:11:21
 * @LastEditTime: 2021-07-09 21:41:35
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
 * 
 * 5. bind绑定方法 改变this指向 相较与call()与apply()要对一个()
 * 创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
 * 而其余参数将作为新函数的参数，供调用时使用
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
    //4、解决兼容问题(可以封装成一个获取样式的方法)
    if (box1.currentStyle) {
        //IE
        console.log(box1.currentStyle.width);
    }
    else {
        //chrome
        console.log(getComputedStyle(box1, false).width);
    }

    //5 bind()方法
    window.name = 'win';
    var name = 'a';
    function getName() {
        console.log(this.name);
    }
    var a = {
        name: 'b',
        getName() {
            console.log(this.name);
            getName()
        },
        c: {
            name: 'c',
            getName() {
                getName.bind(this)()//将getName绑定到this
            }
        }
    }
    var getName2 = a.c.getName;

    getName();//该函数为全局函数 this指向window         打印win
    a.getName();//第一个this指向a 后面的函数为全局函数   打印b、win
    a.c.getName();//将getName绑定在c                   打印c
    getName2();//将getName绑定在2 对象为window          打印win
}