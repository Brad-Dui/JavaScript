/*
 * @Author: your name
 * @Date: 2021-06-03 16:57:41
 * @LastEditTime: 2021-06-25 19:15:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据类型\dataType.js
 */
let f = function () { };
let u;
let a = ["1", "2"];
let arr = [123, "123", null, f, u, true, a,]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ":" + typeof (arr[i])); // 单个变量可以不加括号
}
/*结果：
 *123 ：number
 *123 : string
 *null : object              空对象
 *function(){} : function
 *undefind : undefined
 *ture : boolean
 *1,2 : object               数组是一种对象
*/