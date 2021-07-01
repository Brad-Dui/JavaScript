/*
 * @Author: your name
 * @Date: 2021-07-01 15:08:47
 * @LastEditTime: 2021-07-01 19:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\3JS运动\3运动中级\js\index.js
 */
window.onload = function () {
    let oChainBox1 = document.getElementById('chainBox1');
    //链式测试
    oChainBox1.onmouseover = function () {
        starChange(oChainBox1, 'width', 200, function () {
            starChange(oChainBox1, 'height', 200, function () {
                starChange(oChainBox1, 'opacity', 100)
            })
        })
    }
    oChainBox1.onmouseout = function () {
        starChange(oChainBox1, 'opacity', 30, function () {
            starChange(oChainBox1, 'height', 100, function () {
                starChange(oChainBox1, 'width', 100)
            })
        })
    }
    //播放列表
    let oShowBtn = document.getElementById('showBtn');
    let oRightChain = document.getElementById('rightChain');
    let oBottomChain = document.getElementById('bottomChain');
    let oCloseBtn = document.getElementById('closeBtn');

    oShowBtn.onclick = function () {
        starChange(oRightChain, 'right', 0, function () {
            oBottomChain.style['display'] = 'block';
            starChange(oBottomChain, 'bottom', 0);
        })
    }
    oCloseBtn.onclick = function () {
        starChange(oBottomChain, 'bottom', -150, function () {
            oBottomChain.style['display'] = 'none';
            starChange(oRightChain, 'right', -100);
        })
    }
    //完美运动
    let oChainBox2 = document.getElementById('chainBox2');
    oChainBox2.onmouseover = function () {
        perfetChange(oChainBox2, { width: 180, height: 200 }, function () {
            perfetChange(oChainBox2, { opacity: 100 })
        })
    }
    oChainBox2.onmouseout = function () {
        perfetChange(oChainBox2, { opacity: 30 }, function () {
            perfetChange(oChainBox2, { width: 100, height: 100 })
        })
    }
}
