/*
 * @Author: your name
 * @Date: 2021-07-10 16:19:45
 * @LastEditTime: 2021-07-10 23:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\9异步编程\2Promise\js\index.js
 */
/**
 * Promise对象 生产微任务队列  之前的函数嵌套为宏任务队列 微任务执行先与宏任务
 *            可以把回调函数绑定上 而不是作为参数传入
 * 三种状态：pending准备状态
 *          fulfilled成功状态(resolve处理)
 *          rejected拒绝状态(reject处理)
 * .then(value,reason) 处理成功或者失败
 *          返回的也是一个promise
 *          return 的值下一个then可以接收到 返回的是promise(未处理状态) 下一个then会一直等待
 *          返回一个{then(resolve,reject){resolve('')}}特殊的对象 会封装成一个promise 下一个then处理
 *          链式处理
 * 任务优先级：同步任务>微任务队列>微任务队列
 *            promise中是同步任务
 *            .then()微任务队列
 *            宏任务：定时器
 * promise单一状态与状态中转
 *         promise的状态不可撤销，一旦触发就维持在一个状态
 *         resolve中传递一个拒绝状态的promise 创建失败状态的微任务
 * 错误处理 ：自动的try{} catch{} 捕捉reject、throw new Error() 或者一个直接的错误
 *           可以在then中只写正确的处理 在最后catch()所有的错误
 * 自定义错误：在同步操作可以直接将错误抛出，异步时用reject new一个错误对象去捕获
 * .finally 不管失败还是成功都会执行
 * Promise常见的接口
 *      Promise.resolve() 默认成功的状态简写(适合已经封装的promise对象)
 *      Promise.reject() 默认失败的状态简写
 *      Promise.all() 批量处理 存一个对象数组 有一个拒绝就返回拒绝
 *                   可以最后catch()统一解决
 *      Promise.allSettled() 都可以获取到 不过可能有拒绝状态
 *      Promise.race() 返回最快的那一个promise
 * Promise队列  
 *      return一个promise等状态变化后面的then才能执行
 *      map实现 reduce封装队列
 *      队列的方式渲染数据        
 */
window.onload = function () {
    /**
     * pending准备阶段
     * fulfilled成功状态
     * rejected拒绝状态
     */
    new Promise((resolve, reject) => {
        resolve('操作成功');
    })
        //微任务队列
        .then(value => {
            console.log('处理成功状态1')
        }, reason => {
            console.log('处理失败状态1')
        })
        .then(value => {
            console.log('处理成功状态2')
        }, reason => {
            console.log('处理失败状态2')
        })
    console.log('微任务队列');
    /**
     * 任务队列
     */
    new Promise(resolve => {
        console.log('promise');
        //resolve发生时才会将.then加入到微任务队列
        resolve();
    })
        .then(value => {
            console.log('then');
        })
    console.log('优先级');
    /**
     * promise 单一状态与转态中转
     */
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('接受');
            console.log('延迟1s');
        }, 1000);
    })
    new Promise((resolve, reject) => {
        //resolve(p1);
        reject('拒绝');//接收过resolve 微任务创建后不能撤销
    })
        .then(value => {
            console.log(value);
        }, reason => {
            console.log(reason);
        })
    console.log('状态转变');
    /**
     * then返回也是promise
     */
    let p2 = new Promise((resolve, reject) => {
        resolve('fulfilled');
    })
    let p3 = p2.then(
        value => console.log(value),
        reason => console.log(reason)
    );
    console.log(p2);
    console.log(p3);
    /**
     * promise 封装Ajax
     */
    //函数嵌套的ajax
    function ajax1(url, fnSucc, fnFaild) {
        let oAjax = null;
        if (window.XMLHttpRequest) {
            oAjax = new XMLHttpRequest;
        }
        else {
            oAjax = ActiveXObject("Microsoft.XMLHTTP");
        }
        oAjax.open('GET', url, true);
        oAjax.send();
        oAjax.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    fnSucc(this.responseText);
                }
                else {
                    if (fnFaild) {
                        fnFaild(this.status);
                    }
                }
            }
        }
    }
    //用promise封装 在调用后用then处理
    function ajax2(url) {
        //返回promise对象
        return new Promise((resolve, reject) => {
            let oAjax = null;
            if (window.XMLHttpRequest) {
                oAjax = new XMLHttpRequest;
            }
            else {
                oAjax = ActiveXObject("Microsoft.XMLHTTP");
            }
            oAjax.open('GET', url, true);
            oAjax.send();
            oAjax.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        resolve(JSON.parse(this.response))
                    }
                    else {
                        reject('加载失败');
                    }
                }
            }
            oAjax.onerror = function () {
                reject('加载失败');
            }
        })
    }
    /**
     * catch错误处理
     */
    new Promise((resolve, reject) => {
        // reject(new Error("promise fail"));
        //直接抛出的错误也会在被错误处理
        // throw new Error("fail")
        resolve('sucess')
    })
        .then(
            value => {
                return new Promise((resolve, reject) => {
                    reject('fail')
                })
            })
        .then(value => {
            console.log(value)
        })
        .catch(error => {
            console.log(error);
        })
    /**
     * 用promise异步加载一个图片
     */
    let oImgBox = document.getElementById('imgBox');
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = src;
            image.onload = () => {
                resolve(image);
            };
            image.onerror = reject;
            oImgBox.appendChild(image);
        })
    }
    //在加载之后可以再进行样式修改
    loadImg('./img/0.jpg')
        .then(image => {
            image.style['border'] = '2px solid #000'
        })
    /**
     * 用promise封装一个定时器
     */
    function timeout(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }
    timeout(2000).then(value => {
        console.log('异步封装的定时器1');
        return timeout(2000);
    }).then(value => {
        console.log('异步封装的定时器2');
    })
    /**
     * 构建扁平化的setInterval
     */
    function interval(delay, callback) {
        return new Promise(resolve => {
            let id = setInterval(() => {
                callback(id, resolve)
            }, delay)
        })
    }
    //开始链式移动或者修改样式
    interval(30, (id, resolve) => {
        let left = parseInt(window.getComputedStyle(oImgBox)['left']);
        oImgBox.style['left'] = left + 10 + 'px';
        if (left >= 300) {
            clearInterval(id);
            resolve(oImgBox);
        }
    }).then(oImgBox => {
        return interval(30, (id, resolve) => {
            let width = parseInt(window.getComputedStyle(oImgBox)['width']);
            oImgBox.style['width'] = width - 10 + 'px';
            if (width <= 20) {
                clearInterval(id);
                resolve(oImgBox);
            }
        })
    }).then(oImgBox => {
        interval(30, (id, resolve) => {
            let height = parseInt(window.getComputedStyle(oImgBox)['height']);
            oImgBox.style['height'] = height - 10 + 'px';
            if (height <= 20) {
                clearInterval(id);
                resolve(oImgBox);
            }
        })
    })
}
