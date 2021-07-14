/*
 * @Author: your name
 * @Date: 2021-06-08 20:45:31
 * @LastEditTime: 2021-06-09 15:28:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2数码时钟\js\index.js
 */
/**
 * 数字转换字符串(字符串拼接法)
 * 修改图片路径实现时间跳转(循环)
 * 提取时间(Number类型) 拼接时转成字符型
 */
window.onload = function () {
    let aMonth = document.getElementsByClassName('month');
    let aTime = document.getElementsByClassName('dTime');
    let oWeek = document.getElementById('week');
    let aWeek = ['seven', 'one', 'two', 'three', 'four', 'five', 'six'];
    function toTwoString(n) {
        if (n < 10) {
            return '0' + n;
        }
        else {
            return '' + n;
        }
    }
    function showTime() {
        let oDate = new Date();//获取实时时间,需要循环执行
        //月
        for (let i = 0; i < aMonth.length; i++) {
            let month = toTwoString(oDate.getMonth() + 1);
            aMonth[i].src = './img/' + month.charAt(i) + '.png';
        }
        //年、日、时、分、秒
        for (let i = 0; i < aTime.length; i++) {
            let aStr = toTwoString(oDate.getFullYear()) +
                toTwoString(oDate.getDate()) +
                toTwoString(oDate.getHours()) +
                toTwoString(oDate.getMinutes()) +
                toTwoString(oDate.getSeconds());
            aTime[i].src = './img/' + aStr.charAt(i) + '.png';//数组字符串兼容
        }
        //周
        for (let i = 0; i < aWeek.length; i++) {
            let week = oDate.getDay();
            oWeek.src = './img/' + aWeek[week] + '.png';
        }
    }
    setInterval(showTime, 1000);
    showTime();
}
