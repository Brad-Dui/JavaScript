/*
 * @Author: your name
 * @Date: 2021-06-25 14:33:45
 * @LastEditTime: 2021-06-25 18:59:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\2dom\1DOM基础\index.js
 */
/**
 * 1.DOM基础：
 * 标签、元素、节点 CSS JS DOM(有兼容问题)
 * 2.DOM节点：
 * 子节点  1.childNodes会计算文本节点(数组)
 *          nodeType节点类型(为3是文本节点 为1为文本节点)
 *        2.children无兼容问题
 * 父节点：1.parentNode获取直接的父节点
 *        2.offsetParent获取定位的父节点
 * 首尾子节点：firstChild、lastChild(首尾节点 有可能是文本节点)(兼容低版本)
 *            firstElementChild、lastElementChild(首尾元素节点)(兼容高版本)
 * 兄弟节点：nextSbling、previousSbling
 *          nextElementSbling、previousElementSbling(与首尾子节点类似)
 * 3.DOM方式操作元素属性：
 * 之前使用过 .与 ['']操作元素属性
 * 获取：getAttribute('attrName')(只能获取页面中的值，input写入的获取不到，在属性中没有显示)
 * 设置：setAttribute('attrName','value')
 * 删除：removeAttribute('attrName')
 * 检测：hasAttribute('attrName')
 * 3.灵活获取className
 * 封装一个函数，返回获取的数组
 */
window.onload = function () {
    let oUl1 = document.getElementById('ul1');
    console.log(oUl1.childNodes.length)
    //childNodes与nodeType结合兼容 不计算文本节点
    for (let i = 0; i < oUl1.childNodes.length; i++) {
        if (oUl1.childNodes[i].nodeType == 1) {//根据节点类型去除文本节点
            oUl1.childNodes[i].style.background = 'green';
        }
    }
    //children无兼容问题 直接获取元素节点
    for (let i = 0; i < oUl1.children.length; i++) {
        oUl1.children[i].onmouseover = function () {
            this.style.background = 'red';
        }
        oUl1.children[i].onmouseout = function () {
            this.style.background = 'green';
        }
    }
    //利用父节点隐藏一个节点
    let oUl2 = document.getElementById('ul2');
    let aA = oUl2.getElementsByTagName('a');
    for (let i = 0; i < aA.length; i++) {
        aA[i].onclick = function () {
            this.parentNode.style.display = 'none';
        }
    }
    //offsetParent获取定位节点
    let oBoxChild = document.getElementById('boxChild');
    console.log(oBoxChild.offsetParent);
    //解决首尾节点兼容问题
    let oUl3 = document.getElementById('ul3');
    if (oUl3.firstElementChild) {
        oUl3.firstElementChild.style.background = 'red';
    }
    else {
        oUl3.firstChild.style.background = 'red';
    }
    //dom操作属性
    let oText1 = document.getElementById('text1');
    let oText2 = document.getElementById('text2');
    let oBtn1 = document.getElementById('btn1');
    oBtn1.onclick = function () {
        oText2.setAttribute('value', oText1.value);
        console.log(oText2.getAttribute('value'))
        console.log(oText1.hasAttribute('value'))
    }
    //灵活获取className
    function getByClass(oParent, oClass) {
        let aResult = [];//空数组存放选取的节点
        let aElem = oParent.getElementsByTagName('*');//获取父节点下所有标签
        for (let i = 0; i < aElem.length; i++) {
            if (aElem[i].className == oClass) {
                aResult.push(aElem[i]);
            }
        }
        return aResult;
    }
    let oUl4 = document.getElementById('ul4');
    for (let i = 0; i < getByClass(oUl4, 'box').length; i++) {
        getByClass(oUl4, 'box')[i].setAttribute('style', 'background:red');
    }
}