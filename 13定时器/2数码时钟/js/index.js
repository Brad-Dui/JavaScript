/*
 * @Author: your name
 * @Date: 2021-06-08 20:45:31
 * @LastEditTime: 2021-06-09 14:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2数码时钟\js\index.js
 */
/**
 * 数字转换字符串(字符串拼接法)
 * 修改图片路径实现时间跳转
 */
window.onload = function () {
    let aYear = document.getElementsByClassName('year');
    let aMonth = document.getElementsByClassName('month');
    let aDay = document.getElementsByClassName('day');
    let aHour = document.getElementsByClassName('hour');
    let aMinute = document.getElementsByClassName('minute');
    let aSecond = document.getElementsByClassName('second');
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
        let oDate = new Date();
        //年
        for (let i = 0; i < aYear.length; i++) {
            let year = oDate.getFullYear().toString();
            aYear[i].src = './img/' + year[i] + '.png';
        }
        //月
        for (let i = 0; i < aMonth.length; i++) {
            let month = toTwoString(oDate.getMonth() + 1);
            aMonth[i].src = './img/' + month[i] + '.png';
        }
        //日
        for (let i = 0; i < aDay.length; i++) {
            let day = toTwoString(oDate.getDate());
            aDay[i].src = './img/' + day[i] + '.png';
        }
        //时
        for (let i = 0; i < aHour.length; i++) {
            let hour = toTwoString(oDate.getHours());
            aHour[i].src = './img/' + hour[i] + '.png';
        }
        //分
        for (let i = 0; i < aMinute.length; i++) {
            let minute = toTwoString(oDate.getMinutes());
            aMinute[i].src = './img/' + minute[i] + '.png';
        }
        //秒
        for (let i = 0; i < aSecond.length; i++) {
            let second = toTwoString(oDate.getSeconds());
            aSecond[i].src = './img/' + second[i] + '.png';
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
