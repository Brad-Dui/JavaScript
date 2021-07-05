/*
 * @Author: your name
 * @Date: 2021-07-04 23:51:27
 * @LastEditTime: 2021-07-05 22:17:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\5Ajax无刷新读取数据技术\1Ajax基础\js\index.js
 */
/**
 * 服务器：网页或软件浏览过程分析
 *        phpstudy本地服务器应用 文件存放在www文件下 端口设置8848
 * Ajax:让js无刷新读取服务器上的数据或发送数据  写一个Ajax的方法在index中调用
 *      字符集编码：UTF-8或者GB2312 统一成一种，不然会出现乱码 记事本默认编码为ANSI
 *      缓存：第一次请求在服务器上请求，以后都存在本地，
 *            当服务器内容变化时内容不会变化，需要刷新页面，IE关闭才能变化，刷新也不行
 *      阻止缓存：缓存是根据url获取数据，地址后加数据无影响，url变化则不会再用缓存，从新从服务器请求数据
 *               所以可以在获取的地址后加个不断变化的值 new Date().getTime()
 *      动态获取：eval(str),可以将字符串转化为js可识别的类型 数组 json
 * Ajax原理：HTTP
 *          GET方式：将数据传入url 以名字=值&名字=值的方式呈现
 *                  网址长度有限，数据太大会访问失败(容量小)
 *                  安全性不行 有缓存(适合获取数据)
 *          POST方式：不通过网址，通过HTTP content传递
 *                   容量大(2G左右)
 *                   无缓存(适合发送数据)
 *
 */
window.onload = function () {
    //请求一个静态的txt文件
    let oGetText = document.getElementById('getText');
    oGetText.onclick = function () {
        //加个无用的t阻止缓存
        ajax('./aaa.txt?t=' + new Date().getTime(), function (str) {
            console.log(str);
        }, function () {
            alert('读取失败');
        })
    }
    //请求动态文件
    let oGetArr = document.getElementById('getArr');
    oGetArr.onclick = function () {
        ajax('./arr.txt?t=' + new Date().getTime(), function (str) {
            let arr = eval(str)
            console.log(arr[0].a);
        }, function () {
            alert('读取失败')
        })
    }
    //动态操作dom
    let oCreatTab = document.getElementById('creatTab');
    let oTab = document.getElementById('tab');
    oCreatTab.onclick = function () {
        ajax('./data.txt?t=' + new Date().getTime(), function (str) {
            let arr = eval(str);
            for (let i = 0; i < arr.length; i++) {
                let oLi = document.createElement('li');
                oLi.innerHTML = '姓名：<strong>' + arr[i].user + '</strong> 密码：<strong>' + arr[i].pass + '</strong>';
                oTab.appendChild(oLi);
            }
        }, function () {
            alert('读取失败');
        })
    }
}