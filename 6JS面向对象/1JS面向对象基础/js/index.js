/*
 * @Author: your name
 * @Date: 2021-07-06 17:26:01
 * @LastEditTime: 2021-07-16 01:24:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\6JS面向对象\1JS面向对象基础\js\index.js
 */
/**
 * 对象：不了解其内部结构，知道表面的各种操作(电视，电视上的按钮)(黑盒子)
 *      组成：1.方法——函数，过程、动态的
 *           2.属性——变量，状态、静态的
 * 抽象：把关键的、跟问题相关的特性抽离出来
 * 面向对象OOP：在不了解其内部原理的情况下，可以调用使用对象的功能 Date对象的getTime方法
 *             不关注内部的细节，只关注对象提供的功能
 * OOP的三大特性：
 *              1.封装：将客观事物封装成抽象的类，可以让信赖的类或对象调用，信息隐藏
 *              2.继承：从父类上继承一些方法和属性，子类又有一些自己的特性(代码重用)
 *                     多重继承：可以有多个父类(箱子 + 车 = 集装性汽车)
 *              3.多态：同一个行为具有多个不同表现形式或形态的能力
 *                     必要条件：继承、重写、父类引用指向子类对象
 * this：当前发生事件的对象/当前的方法属于谁
 *       全局的方法属于window 在一个函数里使用this指代window
 *       new 全局函数，会在函数内建一个空白对象 this指向这个对象
 * *不能在系统对象上添加方法和属性，可能会覆盖原有的方法和属性 例如在数组上再加一个pop方法
 * *可以用Object()
 * 工厂方式-构造函数：原料-加工-出厂
 *                  问题：没有new  内部删除原料 obj改为this 外部加new
 *                       函数重复-资源浪费  原型prototype 统一加方法(类似css中的class)
 *                  用构造函数加属性、用原型加方法(混合方式构造对象)
 * 类和对象 类：模子 不具备实际功能 是对象的抽象(命名首字母最好大写)
 *         对象：成品 可以操作 是类的实例
 * 
 */
window.onload = function () {
    //变量 自由的不属于任何人
    let a = 12;
    //属性 属于一个对象
    let arr = [1, 2, 3];
    arr.a = 12;
    console.log('变量a:' + a);
    console.log('arr的属性a:' + arr.a);

    //函数 自由的不属于任何人
    function print() {
        console.log('函数print');
    }
    //方法 属于一个对象
    arr.print = function () {
        console.log('arr的方法print');
    }
    print();
    arr.print();

    //this指针
    arr.show = function () {
        console.log('this指针' + this.a);
    }
    arr.show();

    //构造函数(工厂方式)
    function student(name, phone) {
        //原料
        let obj = new Object();
        //加工
        obj.name = name;
        obj.phone = phone;
        obj.showName = function () {
            console.log('名字：' + name);
        }
        obj.showPhone = function () {
            console.log('电话：' + phone);
        }
        //出厂
        return obj;
    }
    let student1 = student('张三', '123');
    let student2 = student('李四', '456');
    // student1.showName();
    // student2.showPhone();

    //构造函数优化 (函数内用this 函数外用new)(解决没有new的问题)
    function creatPerson(name, phone) {
        //在外用new替换 var this = new Objext();
        this.name = name;
        this.phone = phone;
        this.showName = function () {
            console.log('名字：' + name);
        }
        this.showPhone = function () {
            console.log('电话：' + phone);
        }
        //在外用new替换 return this;
    }
    let person1 = new creatPerson('王二', '789');
    let person2 = new creatPerson('麻子', '114');
    // person1.showName();
    // person2.showPhone();

    //解决函数重复(原型对象 用构造函数new对象时 方法不用重建)
    function animal(name, type) {
        this.name = name;
        this.type = type;
    }
    animal.prototype.showName = function () {
        console.log('名字：' + this.name);
    }
    animal.prototype.showType = function () {
        console.log('科目：' + this.type);
    }
    let animal1 = new animal('小喵', '猫');
    let animal2 = new animal('小汪', '狗');
    //测试在new新的对象时 是否重建了方法
    console.log(animal1.showName == animal2.showName);//true
    animal1.showName();
    animal2.showType();
}
