/*
 * @Author: your name
 * @Date: 2021-07-04 16:24:10
 * @LastEditTime: 2021-07-04 21:55:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\4事件\3JS事件高级\js\index.js
 */
/**
 * 给同一个元素加几个相同的事件 只运行最后一个事件 事件绑定可以解决这个问题
 * 事件绑定：IE方式：attachEvent('事件名',函数)
 *                 detachEvent('事件名',函数)解绑
 *          FF、Chrome:addEventListener('事件名',函数,false/true)(事件名不加on)
 *                     removeEventListener('事件名',函数,false/true)解绑
 * 拖拽升级：在父级内移动、吸附
 *          解决选中其他内容兼容IE7
 *          事件捕获 setCapture() 将所有事件集中到一个元素上 其他元素不会获得事件 其他内容不会被选中
 *          releaseCapture() 释放事件
 * 带框拖拽：鼠标按下拖动生成一个等宽高的线框 插入到body中 位置为盒子的位置
 *          鼠标移动时盒子不动 框动 
 *          鼠标松开时盒子位置移动到框的位置  删除框
 * 自定义滚动条 : 将子盒子距离父盒子左边距的值作为基准 按比例变化其他元素的属性
 *               宽、高、透明度、位置...
 */
window.onload = function () {
    //给一个按钮加两个点击事件
    let oDoubleClick = document.getElementById('doubleClick');
    //兼容函数封装
    function myAddEvent(obj, ev, fn) {
        if (obj.attachEvent) {
            obj.attachEvent('on' + ev, fn);
        }
        else {
            obj.addEventListener(ev, fn, false);
        }
    }
    myAddEvent(oDoubleClick, 'click', function () {
        console.log(1);
    })
    myAddEvent(oDoubleClick, 'click', function () {
        console.log(2);
    })
    //拖拽升级
    let oDragParent = document.getElementById('dragParent');
    let oDragBox = document.getElementById('dragBox');
    oDragBox.onmouseover = function () {
        startChange(oDragBox, { opacity: 100 })
    }
    oDragBox.onmouseout = function () {
        startChange(oDragBox, { opacity: 30 })
    }
    oDragBox.onmousedown = function (ev) {
        let oEvent = ev || event;
        let pos = position(oEvent);
        let disX = pos.x - oDragBox.offsetLeft;
        let disY = pos.y - oDragBox.offsetTop;
        document.onmousemove = function (ev) {
            let oEvent = ev || event;
            let pos = position(oEvent);
            let boxLeft = pos.x - disX;
            if (boxLeft < 0) {
                boxLeft = 0;
            }
            else if (boxLeft > oDragParent.offsetWidth - oDragBox.offsetWidth) {
                boxLeft = oDragParent.offsetWidth - oDragBox.offsetWidth;
            }
            let boxTop = pos.y - disY;
            if (boxTop < 0) {
                boxTop = 0;
            }
            else if (boxTop > oDragParent.offsetHeight - oDragBox.offsetHeight) {
                boxTop = oDragParent.offsetHeight - oDragBox.offsetHeight;
            }
            oDragBox.style['left'] = boxLeft + 'px';
            oDragBox.style['top'] = boxTop + 'px';
            document.onmouseup = function () {
                //磁性吸附
                if (boxTop < 80) {
                    oDragBox.style['top'] = 0;
                }
                if (boxLeft < 80) {
                    oDragBox.style['left'] = 0;
                }

                document.onmousemove = null;
                document.onmouseup = null;
            }
            oDragParent.onmouseout = function () {
                document.onmousemove = null;
            }
        }
        return false;
    }
    //自定义滚动条
    let oScrollParent = document.getElementById('scrollParent');
    let oScrollBox = document.getElementById('scrollBox');
    let oGreenBox = document.getElementById('greenBox');
    oScrollBox.onmousedown = function (ev) {
        let oEvent = ev || event;
        let pos = position(oEvent);
        let disX = pos.x - oScrollBox.offsetLeft;
        document.onmousemove = function (ev) {
            let oEvent = ev || event;
            let pos = position(oEvent);
            let boxLeft = pos.x - disX;
            if (boxLeft < 0) {
                boxLeft = 0;
            }
            else if (boxLeft > oScrollParent.offsetWidth - oScrollBox.offsetWidth) {
                boxLeft = oScrollParent.offsetWidth - oScrollBox.offsetWidth;
            }
            let scale = boxLeft / (oScrollParent.offsetWidth - oScrollBox.offsetWidth);
            oGreenBox.style['width'] = parseInt(getStyle(oScrollParent, 'width')) * scale + 'px';
            oScrollBox.style['left'] = boxLeft + 'px';
            // if (getStyle(oGreenBox, 'opacity')) {
            //     oGreenBox.style['opacity'] = scale;
            // }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
        return false;
    }
}
