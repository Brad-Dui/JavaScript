/*
 * @Author: your name
 * @Date: 2021-07-27 21:04:27
 * @LastEditTime: 2021-07-27 23:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\1语法\12、浅拷贝与深拷贝\index.js
 */
/**
 * 原因与区别：1.数据类型：原始类型-按值访问，变量直接指向存储值的内存地址
 *                       引用类型-按引用访问，变量指向内存中的一个指针，这个指针指向一个对象
 *            2.原因：原始类型-直接赋值一个变量，会给新变量开辟一个新的空间，将值复制到新内存空间
 *                            修改不会影响其他变量的值
 *                   引用类型-将指向对象的指针赋值给变量，根本上两个变量指向的是同一个变量
 *                            修改一个变量上的属性，相当于修改两个变量上共同对象的属性
 * 浅拷贝:类似于引用类型的直接复制，并没有开辟新的空间去存储，改变一个另一个也会改变
 *        本质上两个变量公用或共同指向同一个对象
 * 深拷贝：类似于原始类型的直接复制，开辟了新的内存空间去存储，改变一个另一个无影响
 *        本质上两个变量最终指向的值在两个内存空间中
 * 针对引用类型的浅拷贝方法：Object.assign(target, ...sources)-将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
 *                         slice()方法
 *                         concat()方法
 *                         Array.from()
 *                         循环复制至新对象
 * 针对引用类型的深拷贝方法：JSON.parse(JSON.stringify(obj)) 对象序列化后再反序列化
 *                         
 */
/**
 * 原始类型的直接复制-深拷贝
 */
let a = 1, b = a;
b = 2;
console.log(a, b);//1 2
/**
 * 引用类型的直接复制-浅拷贝
 */
let obj1 = { x: 1, y: 2 }, obj2 = obj1;
obj2.x = 10;
console.log(obj1.x, obj2.x);// 10 10

/**
 * 引用类型的浅拷贝方法
 */
//1.检测slice()方法
let arr1 = [1, 2, [3, 4]];
let arr2 = arr1.slice();//slice切出一个新数组
arr2[0] = 'a';
arr2[2][0] = 'b';
console.log(arr1, arr2);//[1,2,['b',4]] ['a',2,['b',4]] 第一个值无变化 第二个有变化 不能实现真正的深拷贝
//2.检测Object.assign(target,sources...)
let sources = [1, 2, [3, 4]];
let target = Object.assign([], sources);
target[0] = 'a';
target[2][0] = 'b';
console.log(sources, target);//[1,2,['b',4]] ['a',2,['b',4]] 第一个值无变化 第二个有变化 不能实现真正的深拷贝
//3.检测concat
arr1 = [1, 2, [3, 4]];
arr2 = [5, 6, [7, 8]];
let arrConcat = arr1.concat(arr2);
arrConcat[0] = 'a';
arrConcat[2][0] = 'b';
arrConcat[3] = 'a';
arrConcat[5][0] = 'b';
console.log(arr1, arr2);//[1,2,['b',4]] [5,6,['b',4]] 仍然只是浅拷贝
//4.检测Array.from()
arr1 = [1, 2, [3, 4]];
arr2 = Array.from(arr1);
arr2[0] = 'a';
arr2[2][0] = 'b';
console.log(arr1, arr2);//[1,2,['b',4]] ['a',2,['b',4]] 与Object.assign一个结果
//5.循环复制
let obj = {
    x: 1,
    y: 2,
    z: {
        m: 3,
        n: 4
    }
}
function copy(obj) {
    let obj0 = {};
    for (key in obj) {
        if (key instanceof Object) {
            obj0[key] = copy(key);
        }
        else {
            obj0[key] = obj[key];
        }
    }
    return obj0;
}
let objcp = copy(obj);
objcp.x = 'a';
obj['z'].m = 'b';
console.log(obj, objcp);//{x:1,y:2,z:{m:'b',n:4}} {x:'a',y:2,z:{m:'b',n:4}} 循环复制仍然只是浅拷贝

/**
 * 引用类型的深拷贝
 */
// JSON.parse(JSON.stringify(obj)) 对象序列化与恢复
arr1 = [1, 2, [3, 4]];
arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0] = 'a';
arr2[2][0] = 'b';
console.log(arr1, arr2)//[1,2,['b',4]] ['a',2,['b',4]] 序列化后再恢复可以实现深拷贝
