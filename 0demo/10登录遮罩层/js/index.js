/*
 * @Author: your name
 * @Date: 2021-06-07 13:53:24
 * @LastEditTime: 2021-06-18 15:23:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \10登录遮罩层\js\index.js
 */
window.onload = function () {
    /**登录遮罩层开关 */
    let oLogin = document.getElementById('login');
    let oConfirm = document.getElementById('confirm');
    let oClose = document.getElementById('close');
    oLogin.onclick = function () {
        // console.log('flex');
        oConfirm.style['display'] = 'flex';
    }
    oClose.onclick = function () {
        // console.log('none');
        oConfirm.style['display'] = 'none';
    }
    /**登录注册选项卡 */
    let oLoginBtns = document.getElementById('loginBtns')
    let aLoginBtn = oLoginBtns.getElementsByTagName('li');
    let oContentItems = document.getElementById('contentItems');
    let aContentItems = oContentItems.getElementsByClassName('item');
    for (let i = 0; i < aLoginBtn.length; i++) {
        aLoginBtn[i].index = i;
        aLoginBtn[i].onclick = function () {
            for (let j = 0; j < aLoginBtn.length; j++) {
                aLoginBtn[j].style.borderBottom = 'none';
                aContentItems[j].style.display = 'none';
            }
            this.style.borderBottom = '1px solid #34ba9f';
            aContentItems[this.index].style.display = 'flex';
            // console.log(aContentItems[this.index].style.display);
        }
    }
}