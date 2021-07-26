/*
 * @Author: your name
 * @Date: 2021-06-05 14:26:02
 * @LastEditTime: 2021-07-26 22:21:57
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
 * 2.作用域(scope)  全局作用域：声明在顶部，在任何代码块外部
 *                 块级作用域：用let与const声明在if/else语句体、
 *                            类与函数的函数体代码块、
 *                            while与for的循环体代码块
 *   链式作用域结构(chain scope)：子对象会一级一级地向上寻找所有父对象的变量
 * 3.闭包   笼统：在函数中声明的局部变量 - 在函数外无法使用
 *               函数中的子函数可以读取父函数的局部变量
 *               在外部执行子函数就可以读取到局部变量
 *               嵌套的子函数就是一个闭包
 *         本质：会捕获自身定义所在外部函数的局部变量及参数
 *         用途：读取函数内部的变量
 *              让这些变量的值始终保持在内存中
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

    /**
     * 闭包
     */
    //实现在外部访问局部变量
    function fParent1() {
        let a = 'a';
        function fChild1() {
            console.log(a);
        }
        return fChild1;
    };
    var result = fParent1();
    result();

    /**
     * fParent2被赋给了一个全局变量  一直在内存中
     * fChild2依赖于fParent2也一直在内存中
     * 不会在调用结束后被垃圾回收机制回收
     * 内存泄露
     */
    //一直保存在内存中
    function fParent2() {
        let n = 999;
        //无声明符号 - 在全局声明 
        //匿名函数本身也是闭包，相当于一个setter，可以在函数外部对函数背部的局部变量进行操作
        nAdd = () => n += 1;
        function fChild2() {
            console.log(n);
        }
        return fChild2;
    }
    var result = fParent2();
    //调用之后并不会销毁
    result();
    nAdd();
    //在外部改变了父函数内部的值
    result();

    /**
     * 闭包在对象中的使用
     */
    //在外部访问闭包中的this 指向window
    var name = 'the window';
    var object = {
        name: 'local',
        getName() {
            return function () {
                return this.name;
            }
        }
    }
    console.log(object.getName()());//返回window
    //提前锁定this 指向仍然是原对象
    var name = 'window';
    var object = {
        name: 'local',
        getName() {
            let that = this;
            return function () {
                return that.name;
            }
        }
    }
    console.log(object.getName()());//返回local
}