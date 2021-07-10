/*
 * @Author: your name
 * @Date: 2021-07-10 12:59:41
 * @LastEditTime: 2021-07-10 16:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\9异步编程\1Promise\js\index.js
 */
/**
 * 函数嵌套实现异步处理任务
 * 由于js单线程 当主线程运行结束 才会去轮循任务队列
 */
window.onload = function () {
    /**
     * 函数嵌套异步加载图片
     */
    function loadImg(src, resolve, reject) {
        let image = new Image;
        image.src = src;
        image.onload = () => {
            //将image对象用resolve处理
            resolve(image);
        };
        image.onerror = reject;
    }
    const oImgBox = document.getElementById('imgBox');
    loadImg('./img/0.jpg',
        //定义resolve方法
        image => {
            oImgBox.appendChild(image);
            console.log('图片加载成功')
        }, () => {
            console.log('图片加载失败');
        });
    console.log('异步1');//先打印然后才加载

    /**
     * 定时器嵌套轮循
     */
    function interval(callback, delay = 30) {
        let id = setInterval(() => callback(id), delay);
    }
    interval(timeId => {
        let left = parseInt(window.getComputedStyle(oImgBox)['left']);
        oImgBox.style['left'] = left + 10 + 'px';
        if (left >= 500) {
            clearInterval(timeId);
            console.log('移动结束');
            interval(timeId => {
                let width = parseInt(window.getComputedStyle(oImgBox)['width']);
                oImgBox.style['width'] = width - 10 + 'px';
                if (width <= 20) {
                    clearInterval(timeId);
                    console.log('缩小结束');
                }
            })
        }
    })
    console.log('异步2');

    /**
     *文件加载 test2.js依赖于test1.js 要先将test1.js放入任务队列
     */
    function load(src, resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
        script.onerror = reject;
    }
    //由于依赖关系进行层层的嵌套 上层输出作为下层输入
    load('./js/test1.js', () => {
        load('./js/test2.js', () => {
            test2();
        }, () => {
            console.log('调用test2.js失败')
        })
    }, () => {
        console.log('调用test1.js失败')
    })
    //test2.js加载快有出现错误的概率

    console.log('异步3');
}
