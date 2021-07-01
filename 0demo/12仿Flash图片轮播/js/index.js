/*
 * @Author: your name
 * @Date: 2021-06-29 22:55:58
 * @LastEditTime: 2021-07-01 14:55:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsdemo\demo\12仿Flash图片轮播\js\index.js
 */
window.onload = function () {
    let oContainer = document.getElementById('container');
    let oFlash = getByClass(oContainer, 'flash')[0];
    let oBtnLeft = getByClass(oContainer, 'leftMark')[0];
    let oBtnRight = getByClass(oContainer, 'rightMark')[0];
    let oBtnPrev = getByClass(oContainer, 'prev')[0];
    let oBtnNext = getByClass(oContainer, 'next')[0];

    let oBigBox = getByClass(oContainer, 'bigBox')[0];
    let aBigLi = oBigBox.getElementsByTagName('li');
    let oSmallBox = getByClass(oContainer, 'smallBox')[0];
    let oSmallUl = oSmallBox.getElementsByTagName('ul')[0];
    let aSmallLi = oSmallBox.getElementsByTagName('li');

    oSmallUl.style['height'] = aSmallLi[0].offsetHeight + 'px';
    let nowZindex = 2;
    let now = 0;

    //左右按钮
    oBtnPrev.onmouseover = oBtnLeft.onmouseover = function () {
        startChange(oBtnPrev, 'opacity', 100);
    }
    oBtnPrev.onmouseout = oBtnLeft.onmouseout = function () {
        startChange(oBtnPrev, 'opacity', 0);
    }
    oBtnNext.onmouseover = oBtnRight.onmouseover = function () {
        startChange(oBtnNext, 'opacity', 100);
    }
    oBtnNext.onmouseout = oBtnRight.onmouseout = function () {
        startChange(oBtnNext, 'opacity', 0);
    }

    //大图切换
    for (let i = 0; i < aSmallLi.length; i++) {
        aSmallLi[i].index = i;
        aSmallLi[i].onclick = function () {
            //当前位置不下拉
            if (this.index == now) return;
            now = this.index;//记录本次下拉
            tab();
        }
        //修改透明度
        aSmallLi[i].onmouseover = function () {
            startChange(this, 'opacity', 100);
        }
        aSmallLi[i].onmouseout = function () {
            //当前图片移出透明度不变
            // if (this.index == now) return;//多次移入移出出现bug
            // now = this.index;
            if (this.index != now) {
                startChange(this, 'opacity', 30);
            }
        }
        //大图切换操作封装
        function tab() {
            //修改大图层级
            aBigLi[now].style['z-index'] = nowZindex++;
            //修改大图高度实现下拉
            let originHeight = parseInt(getStyle(aBigLi[now], 'height'));//连续点击会出bug 固定值则不会
            aBigLi[now].style['height'] = 0;
            startChange(aBigLi[now], 'height', originHeight);
            //选中透明 其余全透明
            for (let j = 0; j < aSmallLi.length; j++) {
                startChange(aSmallLi[j], 'opacity', 30);
            }
            startChange(aSmallLi[now], 'opacity', 100);
            //移动小图的ul
            if (now == 0) {
                startChange(oSmallUl, 'left', 0);
            }
            else if (now == aSmallLi.length - 1) {
                startChange(oSmallUl, 'left', -(now - 2) * aSmallLi[0].offsetWidth);
            }
            else {
                startChange(oSmallUl, 'left', -(now - 1) * aSmallLi[0].offsetWidth);
            }
        }
    }
    //上一个下一个
    oBtnPrev.onclick = function () {
        now--;
        if (now == -1) {
            now = aSmallLi.length - 1;
        }
        tab();
    }
    oBtnNext.onclick = function () {
        now++;
        if (now == aSmallLi.length) {
            now = 0;
        }
        tab();
    }
    //自动滚动
    let timer = setInterval(oBtnNext.onclick, 3000);
    oFlash.onmouseover = function () {
        clearInterval(timer);
    }
    oFlash.onmouseout = function () {
        timer = setInterval(oBtnNext.onclick, 3000);
    }
    //遍历节点树
    printNodes(oContainer)
}
