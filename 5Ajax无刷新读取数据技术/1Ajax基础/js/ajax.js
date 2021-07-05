/*
 * @Author: your name
 * @Date: 2021-07-05 18:06:00
 * @LastEditTime: 2021-07-05 18:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\5Ajax无刷新读取数据技术\1Ajax基础\js\ajax.js
 */
function ajax(url, fnSucc, fnFaild) {
    //1.创建Ajax对象
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    }
    else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器（打开和服务器的连接）
    oAjax.open('GET', url, true);


    //3.发送
    oAjax.send();

    //4.接收
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                //alert('成功了：'+oAjax.responseText);
                fnSucc(oAjax.responseText);
            }
            else {
                //alert('失败了');
                if (fnFaild) {
                    fnFaild();
                }
            }
        }
    };
}
