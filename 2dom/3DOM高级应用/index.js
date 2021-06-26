/*
 * @Author: your name
 * @Date: 2021-06-26 00:08:52
 * @LastEditTime: 2021-06-26 23:00:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\2dom\3DOM高级应用\index.js
 */
/**
 * 表格应用
 * 获取：tBodies、tHead、tFoot、rows、cells(获取内容注意最后的innerHTML)
 * 隔行变色与移入高亮 if判断 移入改变颜色前先获取原来的颜色 方便移出再变回
 * 添加与删除表格的行 createElement removeChild
 * 搜索：普通严格搜索 ==
 *      大小写转换搜索 toLowerCase()
 *      模糊搜索str1.search('str2'),返回字符串2在1首次出现的位置,没有返回-1
 *      输入多个空格隔开搜索 str1.split('str2') 将str1以str2为间隔切成数组 循环数组再比较
 * 搜索结果：高亮改变背景 筛选改变display
 * 排序：将表身的每一行都赋给一个空数组
 *      对数组进行sort()排序 根据ID 需要显式类型转换
 *      循环的appendChild插入到原表格 相当于先剪切再粘贴(还是原来的节点 若是新建的会直接插入)
 */
window.onload = function () {
    //获取单元格内容
    let oTab1 = document.getElementById('tab1');
    console.log(oTab1.tBodies[0].rows[0].cells[1].innerHTML);
    //隔行变色与移入高亮
    let oTab2 = document.getElementById('tab2');
    for (let i = 0; i < oTab2.tBodies[0].rows.length; i++) {
        if (i % 2 == 0) {
            oTab2.tBodies[0].rows[i].style.background = '';
        }
        else {
            oTab2.tBodies[0].rows[i].style.background = 'gray';

        }
        let oldColor = '';//空字符串保存移入前的颜色
        oTab2.tBodies[0].rows[i].onmouseover = function () {
            oldColor = this.style.background; //改变前先提取颜色 方便移出后再变回
            this.setAttribute('style', 'background: #dede')
        }
        oTab2.tBodies[0].rows[i].onmouseout = function () {
            this.style.background = oldColor;
        }
    }
    //添加和删除表格的行
    let oTab3 = document.getElementById('tab3');
    let oName = document.getElementById('name');
    let oAge = document.getElementById('age');
    let oBtn1 = document.getElementById('btn1');
    let add = oTab3.tBodies[0].rows.length + 1;
    oBtn1.onclick = function () {
        let oTr = document.createElement('tr');
        for (let i = 0; i < oTab3.tHead.rows[0].cells.length; i++) {
            let oTd = document.createElement('td');
            oTr.appendChild(oTd);
            //添加内容
            switch (i) {
                case 0: oTr.cells[0].innerHTML = add++; break;//始终自加，被删除的节点ID永久消失 不会出现重复的ID
                case 1: oTr.cells[1].innerHTML = oName.value; break;
                case 2: oTr.cells[2].innerHTML = oAge.value; break;
                case 3: oTr.cells[3].innerHTML = '<a href="javascript:;">删除</a>'; break;
            }
        }
        oTab3.tBodies[0].appendChild(oTr);
        let aA = oTab3.tBodies[0].getElementsByTagName('a');
        for (let i = 0; i < aA.length; i++) {
            aA[i].onclick = function () {
                oTab3.tBodies[0].removeChild(this.parentNode.parentNode);
            }
        }
    }
    //名字搜索
    let oSearchName = document.getElementById('searchName');
    let oSearchBtn = document.getElementById('searchBtn');
    let oTab4 = document.getElementById('tab4');
    oSearchBtn.onclick = function () {
        for (let i = 0; i < oTab4.tBodies[0].rows.length; i++) {
            let sTabName = oTab4.tBodies[0].rows[i].cells[1].innerHTML;
            let sSearch = oSearchName.value;
            //普通搜索 ==判断表格和搜索的值 
            //加toLowerCase都转成小写
            //search判断是否为-1可以模糊搜索
            //多元素搜索 split切开搜索的字符串 再在表格中循环比较
            let arr = sSearch.split(' ');
            oTab4.tBodies[0].rows[i].style.background = '';//不能放在else里 循环中会把前面匹配到的改变
            for (let j = 0; j < arr.length; j++) {
                if (sTabName.toLowerCase().search(arr[j].toLowerCase()) != -1) {
                    oTab4.tBodies[0].rows[i].style.background = 'yellow';
                }
            }
        }
    }
    //排序
    let oSortBtn = document.getElementById('sortBtn');
    oSortBtn.onclick = function () {
        let arr = [];
        //将表身的每一行都赋给一个空数组
        for (let i = 0; i < oTab4.tBodies[0].rows.length; i++) {
            arr[i] = oTab4.tBodies[0].rows[i];//若写arr只存循环最后一次的结果
        }
        //对数组进行排序
        arr.sort(function (tr1, tr2) {
            let n1 = parseInt(tr1.cells[0].innerHTML);
            let n2 = parseInt(tr2.cells[0].innerHTML);
            return n1 - n2;
        })
        //循环的插入到原表格 相当于先剪切再粘贴(还是原来的节点 若是新建的会直接插入)
        for (let i = 0; i < arr.length; i++) {
            oTab4.tBodies[0].appendChild(arr[i]);
        }
    }

}
