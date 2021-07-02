/*
 * @Author: your name
 * @Date: 2021-07-02 11:26:21
 * @LastEditTime: 2021-07-02 22:41:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\4事件\1JS事件基础\js\index.js
 */
/**
 * document:整个文档 是整个页面的父节点 无注释前提下： 第一个为doctype 第二个为html
 * event对象(事件对象)：用来获取时间的详细信息-鼠标位置、键盘按键
 *                     鼠标坐标：event.clientX event.cleintY
 *                     键盘按键：event.keyCode(键盘值) event.ctrlKey
 * 事件流：事件冒泡，一个事件触发后会直接运行父级的事件
 *        event.cancelBubble = ture;消除事件冒泡
 * 鼠标事件：clientX与clientY是可视区坐标 不是页面实际定位 有滚动时可以添加scrollTop
 *          onmousemove 鼠标移动事件
 * 键盘事件：keyCode按键的ASCII码 ctrlKey
 *          onkeydown onkeyup
 */
window.onload = function () {
    //document是一个根节点
    document.onclick = function (ev) {
        //打印document中的节点
        // for (let i = 0; i < document.childNodes.length; i++) {
        //     console.log(document.childNodes[i].tagName);
        //     console.log(document.childNodes[i]);
        // }
        //获取鼠标在页面中的位置(兼容高版本IE、Chrome 不兼容FireFox)
        // console.log('(' + event.clientX + ',' + event.clientY + ')');
        //FF下需要加参数替换event
        let oEvent = ev || event;
        console.log('(' + oEvent.clientX + ',' + oEvent.clientY + ')');
    }
    //事件冒泡实例
    let oSelecBtn = document.getElementById('selectBtn');
    let oShowBox = document.getElementById('showBox');
    oSelecBtn.onclick = function (ev) {
        oShowBox.style['display'] = 'block';
        oFollowBox.style['display'] = 'block';
        //消除事件冒泡
        let oEvent = ev || event;
        oEvent.cancelBubble = true;
    }
    document.onclick = function () {
        oShowBox.style['display'] = 'none';
    }
    //盒子跟随鼠标
    let oFollowBox = document.getElementById('followBox');
    document.onmousemove = function (ev) {
        //兼容event
        let oEvent = ev || event;
        //位置获取
        let pos = getPos(oEvent);
        //位置跟随
        oFollowBox.style['left'] = pos.x + 'px'; //调用返回值
        oFollowBox.style['top'] = pos.y + 'px';
    }
    //鼠标绝对位置封装
    function getPos(ev) {
        //兼容(获取滚动的距离)
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop }
    }
    //一串盒子跟着鼠标
    let oItems = document.getElementsByClassName('item');
    document.onmousemove = function (ev) {
        let oEvent = ev || event;
        let pos = getPos(oEvent);
        //后一个跟着前一个走
        for (let i = oItems.length - 1; i > 0; i--) {
            oItems[i].style['left'] = oItems[i - 1].offsetLeft + 'px';
            oItems[i].style['top'] = oItems[i - 1].offsetTop + 'px';
        }
        //第一个跟着鼠标走
        oItems[0].style['left'] = pos.x + 'px';
        oItems[0].style['top'] = pos.y + 'px';
    }
    //按键测试
    document.onkeydown = function (ev) {
        let oEvent = ev || event;
        console.log(oEvent.keyCode);
    }
    //盒子跟着按键移动(解决移动卡顿的问题 左右切换不灵敏)
    let oKeyControlBox = document.getElementsByClassName('keyControlBox')[0];
    let direction = { keyLeft: false, keyRight: false }
    let timer = 0;
    function move() {
        if (direction.keyLeft) {
            oKeyControlBox.style['left'] = oKeyControlBox.offsetLeft - 1 + 'px';
        }
        else if (direction.keyRight) {
            oKeyControlBox.style['left'] = oKeyControlBox.offsetLeft + 1 + 'px';
        }
    }
    timer = setInterval(move, 1);
    document.onkeydown = function (ev) {
        let oEvent = ev || event;
        console.log(oEvent.keyCode);
        if (oEvent.keyCode == 37) {
            direction.keyLeft = true;//执行定时器中的一部分
        }
        else if (oEvent.keyCode == 39) {
            direction.keyRight = true;
        }
    }
    document.onkeyup = function () {
        direction.keyLeft = false;
        direction.keyRight = false;
    }
    //ctrl回车提交
    let oText1 = document.getElementById('text1');
    let oText2 = document.getElementById('text2');
    oText1.onkeydown = function (ev) {
        let oEvent = ev || event;
        if (oEvent.keyCode == 13 && oEvent.ctrlKey) {
            console.log(oText1.value)
            oText2.innerHTML += oText1.value + '\n';
            oText1.value = '';
        }
    }
}
