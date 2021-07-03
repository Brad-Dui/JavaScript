/*
 * @Author: your name
 * @Date: 2021-07-03 12:03:48
 * @LastEditTime: 2021-07-03 19:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\4事件\2JS事件中级\js\index.js
 */
/**
 * 默认行为：浏览器自带的行为 右键菜单事件oncontextmenu
 * 阻止默认行为：右键菜单事件-加返回值false
 *              按键事件输入判断-加返回值false
 * 拖拽：onmousedown(鼠标按下) onnouseup(松开)
 *      在document上加onmousemove防止快速移动脱离
 */
window.onload = function () {
    //阻止右键菜单显示自定义菜单
    let oContextMenu = document.getElementById('contextMenu');
    document.oncontextmenu = function (ev) {
        let oEvent = ev || event;
        let pos = position(oEvent);
        setStyle(oContextMenu, { display: 'block', left: pos.x + 'px', top: pos.y + 'px' });
        return false;
    }
    document.onmousedown = function () {
        oContextMenu.style.display = 'none';
    }
    //仅限输入数字
    let oNumInput = document.getElementById('numInput');
    oNumInput.onkeydown = function (ev) {
        let oEvent = ev || event;
        // alert(oEvent.keyCode)
        if (oEvent.keyCode != 8 && (oEvent.keyCode < 48 || oEvent.keyCode > 57)) {
            return false;
        }
    }
    //拖拽
    let oDragBox = document.getElementById('dragBox');
    oDragBox.onmousedown = function (ev) {
        let oEvent = ev || event;
        //确定差值
        let disX = oEvent.clientX - oDragBox.offsetLeft;
        let disY = oEvent.clientY - oDragBox.offsetTop;
        document.onmousemove = function (ev) {
            //重新获取鼠标坐标
            let oEvent = ev || event;
            //防止移出页面
            let boxLeft = oEvent.clientX - disX;
            if (boxLeft < 0) {
                boxLeft = 0;
            }
            else if (boxLeft > document.documentElement.clientWidth - oDragBox.offsetWidth) {
                boxLeft = document.documentElement.clientWidth - oDragBox.offsetWidth;
            }
            let boxTop = oEvent.clientY - disY;
            if (boxTop < 0) {
                boxTop = 0;
            }
            else if (boxTop > document.documentElement.clientHeight - oDragBox.offsetHeight) {
                boxTop = document.documentElement.clientHeight - oDragBox.offsetHeight;
            }
            oDragBox.style['left'] = boxLeft + 'px';
            oDragBox.style['top'] = boxTop + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
        //解决FireFox拖动空盒子Bug
        return false;
    }
}

