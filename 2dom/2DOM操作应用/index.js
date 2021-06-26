/*
 * @Author: your name
 * @Date: 2021-06-25 20:09:49
 * @LastEditTime: 2021-06-25 23:14:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\2dom\2DOM操作应用\index.js
 */
/**
 * 创建、插入、删除、文档碎片
 * 创建：createElement()尾部插入 insertBefore()随机插入
 * 插入：appendChild()尾部插入(若原节点已有 会先删除原节点的子节点再从尾部插入)
 *      insertBefore(newChild,插入位置)随机插入
 * 删除：removeChild()
 * 文档碎片：creatDocumentFragment() 统一装入统一插入
 */
window.onload = function () {
    let oUl1 = document.getElementById('ul1');
    let oText1 = document.getElementById('text1');
    let oTailCreate = document.getElementById('tailCreate');
    let oHeadCreate = document.getElementById('headCreate');
    //尾部插入
    oTailCreate.onclick = function () {
        let oLi = document.createElement('li');
        oLi.innerHTML = oText1.value + '<a href="javascript:;">删除</a>';
        oUl1.appendChild(oLi);
        deleteNode();
    }
    //头部插入
    oHeadCreate.onclick = function () {
        let oLi = document.createElement('li');
        oLi.innerHTML = oText1.value + '<a href="javascript:;">删除</a>';
        if (oUl1.children.length == 0) {
            oUl1.appendChild(oLi);
        }
        else {
            oUl1.insertBefore(oLi, oUl1.children[0]);
        }
        deleteNode();
    }
    //删除
    function deleteNode() {
        let aA = oUl1.getElementsByTagName('a');
        for (let i = 0; i < aA.length; i++) {
            aA[i].onclick = function () {
                oUl1.removeChild(this.parentNode);
            }
        }
    }
    //文档碎片
    let oText2 = document.getElementById('text2');
    let oBtn = document.getElementById('btn');
    let oFrag = document.createDocumentFragment();
    let oUl2 = document.getElementById('ul2');
    oBtn.onclick = function () {
        for (let i = 0; i < parseInt(oText2.value); i++) {
            let oLi = document.createElement('li');
            oFrag.appendChild(oLi);
        }
        oUl2.appendChild(oFrag);
    }
}
