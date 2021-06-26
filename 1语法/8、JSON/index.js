/*
 * @Author: your name
 * @Date: 2021-06-05 17:35:58
 * @LastEditTime: 2021-06-18 20:05:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\8、JSON\index.js
 */
window.onload = function () {

    //JSON数据格式

    let oJson1 = {
        a: 5,
        b: function () { },
        c: 'abc',
        d: true
    }
    console.log(oJson1.c);
    console.log(typeof oJson1);
    console.log('+++++++++++++++++++');

    //JSON和数组

    let oJson2 = {
        a: 12,
        b: 5,
        c: 7
    }
    let arr = [12, 5, 7]
    console.log(oJson2.a);
    console.log(oJson2['a']);   //json的下标为字符串
    console.log(arr[0]);        //数组的下标为数字
    console.log('数组的length: ' + arr.length);
    console.log('json的length: ' + oJson2.length);  //json没有length
    console.log('+++++++++++++++++++');

    //数组和JOSN的循环

    // for (let i = 0; i < arr.length; i++) {
    //     console.log(typeof i);//i为number
    //     console.log('数组的第' + (i + 1) + '个元素：' + arr[i]);
    // }
    for (let i in arr) {
        // console.log(typeof i); //i为string
        console.log('数组的第' + (parseInt(i) + 1) + '个元素：' + arr[i]);
    }
    for (let j in oJson2) {
        console.log('json的第' + j + '个元素：' + oJson2[j]);
    }
}