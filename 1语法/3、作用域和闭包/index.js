/*
 * @Author: your name
 * @Date: 2021-06-05 14:26:02
 * @LastEditTime: 2021-07-23 23:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\3、作用域和闭包\index.js
 */
/**
 * 1.变量声明   var：全局声明，变量提升
 *             let：块级作用域，在块中定义，块运行结束销毁
 *             const：变量不可变，修改基本类型会报错，声明引用类型不一定报错
 */
window.onload = function () {
    /**
     * 变量声明
     */
    //var
    varA = 5;
    console.log(varA);//直接赋值 会跟var无区别
    console.log(varB);//变量提升
    // console.log(varC);上下都无声明报错
    if (true) {
        var varA = 10;
        var varB = 'a';
        console.log(varA);
        varA = 15;
    }
    console.log(varA);
    (function () {
        var varD = 20;//var声明的局部变量
    })()
    // console.log(varD);在外部访问局部变量报错
    /**
     * var 相较于 let 有提升声明的效果，但是没有定义
     * var 可以重复声明与定义 let不可以 出现Uncaught SyntaxError的错误
     */

    /**
     * 闭包：子函数可以使用父函数的局部变量
     */
}