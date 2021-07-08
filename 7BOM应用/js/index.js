/*
 * @Author: your name
 * @Date: 2021-07-08 18:04:38
 * @LastEditTime: 2021-07-08 20:25:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\7BOM应用\js\index.js
 */
/**
 * BOM基础
 *  打开关闭窗口 open(url,target) _blank或_self window.open 返回一个新窗口
 *              close
 *      document.write 先清空再写入
 *      userAgent 当前浏览器版本信息
 *      location 当前网页的地址 可以读取可以赋值
 *  可视区尺寸： document.documentElement.clientWidth/document.documentElement.clientHeight
 *  滚动距离：   document.documentElement.clientTop/document.body.scrollTop
 *  常用事件：onscroll发生滚动时
 *           onresize窗口改变时
 *  系统对话框：alert 无返回值
 *             confirm() 返回Boolean
 *             prompt('提示','默认文字')  返回字符串或null
 */
window.onload = function () {
    //open的使用
    let oCodeText = document.getElementById('codeText');
    let oRunBtn = document.getElementById('runBtn');
    oRunBtn.onclick = function () {
        let oNewWindow = window.open('about:blank', '_blank');
        //可以在文本域内写代码 在另一个页面运行
        oNewWindow.document.write(oCodeText.value);
    }
    //close的使用 IE提示 FF报错(用open打开的网页可以用close关闭)
    let oOpenBtn = document.getElementById('openBtn');
    oOpenBtn.onclick = function () {
        let oNewWindow = window.open('about:blank', '_blank');
        let oClose = '<input type="button" value="关闭网页" onclick="window.close()">';
        oNewWindow.document.write(oClose);
    }
    console.log(window.navigator.userAgent);
    console.log(window.location);
    console.log(document.documentElement.clientHeight)
    window.onscroll = window.onresize = function () {
        let oFixedBox = document.getElementById('fixedBox');
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        oFixedBox.style['top'] = scrollTop + clientHeight - oFixedBox.offsetHeight + 'px';
    }
    // confirm('确定删除？');
    // prompt('输入性别', '男');
}
