/*
 * @Author: your name
 * @Date: 2021-07-06 12:57:35
 * @LastEditTime: 2021-07-06 15:32:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\5Ajax无刷新读取数据技术\2Ajax中级\js\index.js
 */
/**
 * 未定义的变量——报错，未定义的属性——undefined(window.未定义变量)(变量在window下为属性)
 * 编写Ajax：
 *          1.创建Ajax对象：XMLHttpRequest()不兼容IE6->ActiveXObject("Microsoft.XMLHTTP")
 *          2.连接服务器：open('GET/POST','文件地址url',异步传输)
 *          3.发送请求：send()
 *          4.接受返回值：onreadystatechange()事件
 *                       readyState 判断是否完成
 *                       status HTTP状态码判断200成功
 *                       responseText 读取的文本
 * 同步：多件事一起，在计算机中-事情必须一件一件来(发送请求数据未返回会导致不能进行其他操作)
 * 异步：事情一件一件来，在计算机中-多件事一起
 * readyState：0    (未初始化)还没调用open()方法
 *             1    (载入)已调用send()方法，正在发送请求
 *             2    (载入完成)send()方法完成，已收到全部响应内容
 *             3    (解析)正在解析响应内容
 *             4    (完成)响应内容解析完成，可以在客户端调用了
 */
window.onload = function () {
    let oGetBtn = document.getElementById('getBtn');
    oGetBtn.onclick = function () {
        ajax('./aaa.txt?t=' + new Date().getTime(), function (str) {
            console.log(str);
        }, function (str) {
            //根据状态码返回失败页面
            window.location.href = './error/' + str + '.html';
        })
    }
}
