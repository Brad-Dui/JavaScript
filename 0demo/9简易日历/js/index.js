/*
 * @Author: your name
 * @Date: 2021-05-30 21:03:24
 * @LastEditTime: 2021-06-18 15:04:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \9简易日历\js\index.js
 */
/**
 * 修改className
 * 全变为空 再修改this元素的样式
 * 为当前元素建立索引，匹配修改其他组元素
 * 字符串拼接填入内容
 */
window.onload = function () {
    var arr = [
        '快过年了，大家可以商量去哪玩~',
        '二月二剃龙头',
        '清明节放假扫墓',
        '四月到了劳动节不远了',
        '五一大家一起出去嗨皮',
        '六一是我们的节日',
        '暑假到了，毕业季',
        '八月没啥事儿',
        '开学的日子又到了，好像已经毕业了',
        '十一黄金周出去玩两天',
        '又快入冬了，该挑衣服了，双十一买买买',
        '一年又过去了，屁事儿没干'
    ];
    var oTab = document.getElementById('tab');
    var oLi = oTab.getElementsByTagName('li');
    var oTxt = document.getElementById('content');
    let date = new Date();
    let oMonth = date.getMonth();

    for (var i = 0; i < oLi.length; i++) {
        if (i == oMonth) {
            oLi[i].className = 'active';
            oTxt.innerHTML = '<h2>' + (oMonth + 1) + '月活动</h2><p>' + (arr[oMonth]) + '</p>';
        }
        oLi[i].index = i;
        oLi[i].onclick = function () {
            for (var j = 0; j < oLi.length; j++) {
                oLi[j].className = '';
                // console.log(j);
            };
            this.className = 'active';
            oTxt.innerHTML = '<h2>' + (this.index + 1) + '月活动</h2><p>' + (arr[this.index]) + '</p>';
            // console.log(i);
        };
    }
}