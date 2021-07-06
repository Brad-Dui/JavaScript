/*
 * @Author: your name
 * @Date: 2021-07-06 15:34:08
 * @LastEditTime: 2021-07-06 15:37:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\5Ajax无刷新读取数据技术\2Ajax中级\js\ajax.js
 */
function ajax(url, fnSucc, fnFaild) {
    //1.创建Ajax对象
    //非IE6创建
    // let oAjax = new XMLHttpRequest();
    // console.log(oAjax);
    //IE6下创建
    // let oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    //兼容
    let oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    }
    else {
        oAjax = ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.连接服务器
    oAjax.open('GET', url, true);
    //3.发送请求
    oAjax.send();
    //4.接收返回值(返回事件)
    oAjax.onreadystatechange = function () {
        //交互过程是否完成(不一定成功 失败也是4)
        if (oAjax.readyState == 4) {
            //是否成功 HTTP状态码 200成功
            if (oAjax.status == 200) {
                //成功返回值
                fnSucc(oAjax.responseText);
            }
            //失败状态码为404
            else {
                //是否有失败处理
                if (fnFaild) {
                    //根据状态码处理
                    fnFaild(oAjax.status);
                }
            }
        }
    }
}