/*
 * @Author: your name
 * @Date: 2021-06-05 14:26:02
 * @LastEditTime: 2021-07-25 23:58:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\3、作用域和闭包\index.js
 */
/**
 * 1.变量声明   var：变量提升，函数内声明局部变量，块内声明全局变量，可重复声明
 *             let：无变量提升，块内函数内声明局部变量，不可重复声明(直接报错无任何结果)
 *             const：无变量提升，块内函数内声明局部变量，不可重复声明
 *                    不可修改原始类型(变量执行的那个内存地址不可改动)
 *                    引用类型(变量指向的内存地址是一个指针，保证这个指针固定)，指针指向的数据结构是可变的
 * 2.作用域(scope)  全局作用域：声明在顶部
 */
window.onload = function () {
    /**
     * 变量声明
     */
    /**
     * var
     */
    //1.直接赋值 - 会跟var无区别全局变量
    varA = 5;
    console.log(varA);
    console.log(varB);
    //2.上下都无声明 - 报错
    // console.log(varC);
    //3.块内声明 - 全局变量
    if (true) {
        var varA = 10;
        //变量提升
        var varB = 15;
        console.log(varA);
        //4.可重复声明
        varA = 20;
    }
    console.log(varA);
    //5.函数内声明 - 局部变量
    (function () {
        var varD = 25;
    })()
    //在外部访问局部变量 - 报错
    // console.log(varD);

    /**
     * let
     */
    //1.无变量提升 - 报错
    // console.log(letA);
    let letA = 'a';
    if (true) {
        //2.块内局部声明 - 可重复声明全局已有变量
        let letA = 'b';
        let letB = 'b';
    }
    console.log(letA);
    //3.重复声明 - 报错无任何结果
    // let letA = 'c';
    //4.块内声明 外部使用 - 报错
    // console.log(letB);
    //5.变量可修改
    letA = 'b';
    console.log(letA);

    /**
     * const 针对原始类型
     */
    //1.无变量提升
    // console.log(constA);
    const constA = '一';
    if (true) {
        //2.块内 - 可重复声明
        const constA = '二';
        const constB = '二';
    }
    console.log(constA);
    //3.块外使用 - 报错
    // console.log(constB);
    //4.重复声明 - 报错无任何结果
    // const constA = '二';
    //5.变量不可修改
    // constA = '二';
    /**
     * const 针对引用类型
     */
    const a = [];
    //1.数组可以添加元素
    a.push('Hello');
    //2.变量重新指向新数组 - 报错
    // a = ['Hello'];
    const foo = {};
    //3.对象可以添加属性
    foo.prop = 123;
    //4.变量重新指向对象 - 报错
    // foo = {
    //     prop: 123
    // }
}