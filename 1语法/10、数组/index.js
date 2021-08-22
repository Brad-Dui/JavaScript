/*
 * @Author: your name
 * @Date: 2021-06-06 15:23:59
 * @LastEditTime: 2021-07-22 19:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\10、数组\index.js
 */
/**
 * 数组 一种特殊的对象： 尽量只存储一种类型的数据
 *      创建数组：      字面量  
 *                     new Array()：括号中可以只写一个数字 代表数组长度   
 *                     扩展符 ：用...arr可以将另一个数组打平放入数组中  
 *                     Array.of()：可以创建一个只有一个数字的数组
 *                     Array.from() ：期待一个可迭代对象或类数组,第二个参数可以是一个函数，源对象的元素都会传入函数中
 *      属性：          length
 *      常用的方法：    添加与删除  arr.push(str) arr.pop() 尾部添加与删除一个元素
 *      判断是否是数组  1.arr instanceof Array()
 *                     2.arr.__proto__ == Array.prototype
 *                     3.Array.isArray(arr)
 *                     4.Object.prototype.toString.call(arr) == '[object Array]'
 *                     5.arr.constructor == Array 
 */
window.onload = function () {
    //1、创建(尽量只存储一种类型的数据)
    let arrLiteral = [1, 2, 3, 4, 5, 6];           //没有差别，简短性能高
    let arrNew = new Array(2);
    let arrExtend = [0, ...arrNew, 3];
    let arrOf = Array.of(2);
    let arrFrom = Array.from(arrNew, (el) => { console.log(el); })
    console.log(arrExtend);
    console.log(arrExtend.length);
    console.log(arrOf);

    //数组常用方法
    let aSplice = [1, 2, 3, 4, 5, 6];
    // aSplice.splice(2, 3);//从下标2开始删除3个元素
    // aSplice.splice(2, 0, 'a', 'b');//从下标2开始添加2个元素
    aSplice.splice(2, 1, 'a', 'b');//从下标2开始先删除一个元素,再添加两个元素(替换)
    console.log(aSplice);

    //6、方法：join分隔符
    /**
     * join('--')
     */
    let aJoin = [1, 2, 3, 4, 5, 6];
    console.log(aJoin.join('- -'));

    //7、方法：sort排序
    /**
     * 字符串排序
     * 实现数字排序需要添加参数
     * sort(function(n1,n2){return n1-n2;})从小到大排序
     */
    let aSort1 = ['apart', 'console', 'boom', 211, '3', 21];
    aSort1.sort();//首字母比较,从小到大
    console.log(aSort1);
    let aSort2 = [35, 6, 55, '461', 46, 68, 1];
    aSort2.sort(function (n1, n2) {
        return n2 - n1;//从小到大排列
    });
    console.log(aSort2);

    //8、方法：slice切出新数组或字符串
    /**
     * slice(start,end);
     */
    let aSlice = ['bob', '45', 6, 88, 4, 'application'];
    let aSlice1 = aSlice.slice(2,);//一个参数从该下标裁剪到结束
    let aSlice2 = aSlice.slice(2, 4);//从2开始裁剪,到下标4结束,不包括4
    console.log(aSlice);
    console.log(typeof (aSlice1) + ': ' + aSlice1);
    console.log(aSlice2);
}