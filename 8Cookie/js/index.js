/*
 * @Author: your name
 * @Date: 2021-07-08 20:41:17
 * @LastEditTime: 2021-07-09 00:28:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\8Cookie\js\index.js
 */
/**
 * Cookie基础与应用
 *          保存页面信息：用户名、用户密码
 *          特性：同一个网站(域名)只有一套cookie
 *               数量、大小有限
 *               过期时间
 *          JS中使用：document.cookie
 *          格式：名字=值
 * setDate()设置过期时间 cookie赋值加expires + 时间
 * 设置cookie
 * 获取cookie：字符串切割split('; ')
 * 删除cookie 设置过期时间为-1
 */
window.onload = function () {
    //赋值不会覆盖 =添加
    document.cookie = 'name=zhang';
    document.cookie = 'pass=123';
    //设置过期时间
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + 30)//修改对象的内部时间
    // console.log(oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate())
    document.cookie = 'time=30;expires=' + oDate;
    //封装cookie
    function setCookie(name, value, iDay) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    }
    setCookie('xiaoli', '20', 8)
    //获取cookie
    function getCookie(name) {
        let arr = document.cookie.split('; ');
        for (let i = 0; i < arr.length; i++) {
            let arr1 = arr[i].split('=');
            if (arr1[0] == name) {
                return arr1[1];
            }
        }
        return '';
    }
    // alert(getCookie('pass'));
    //删除cookie
    function removeCookie(name) {
        setCookie(name, 1, -1);
    }
    removeCookie('pass');
    // alert(getCookie('pass'));
    console.log(document.cookie);

    //登录记录密码
    let oForm = document.getElementById('form1');
    let oUsername = document.getElementById('username');
    let oPassword = document.getElementById('password');
    let oCheck = document.getElementById('check');
    oForm.onsubmit = function () {
        setCookie('username', oUsername.value, 7);
        if (oCheck.checked == true) {
            setCookie('password', oPassword.value, 7);
        }
        else {
            removeCookie('password', 1, -1);
            removeCookie('username', 1, -1);
        }
    }
    oUsername.value = getCookie('username');
    oPassword.value = getCookie('password');
}