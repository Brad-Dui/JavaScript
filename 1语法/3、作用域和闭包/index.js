/*
 * @Author: your name
 * @Date: 2021-06-05 14:26:02
 * @LastEditTime: 2021-06-05 14:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\3、作用域和闭包\index.js
 */
window.onload = function () {
    let a;              //全局变量
    function aaa() {    //函数体内定义直接销毁
        a = 10;
        let aa = 20;    //局部变量
    };
    aaa();
    console.log(a);     
    // console.log(aa);    //未声明error
//报错后不再执行下面的代码
    var b;
    function bbb() {
        b = 10;
        var bb = 20; 
    };
    bbb();
    console.log(b);     //未定义undefined
    // console.log(bb);    //未声明error

    console.log(c);
    var c = 10;
    // console.log(d);
    // let d = 10;
    var c = 20;
    console.log(c);
    let d = 10;
    // let d = 20;
    console.log(d);
    /**
     * var 相较于 let 有提升声明的效果，但是没有定义
     * var 可以重复声明与定义 let不可以 出现Uncaught SyntaxError的错误
     */

    /**
     * 闭包：子函数可以使用父函数的局部变量
     */
}