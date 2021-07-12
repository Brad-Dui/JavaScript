/*
 * @Author: your name
 * @Date: 2021-07-12 13:50:40
 * @LastEditTime: 2021-07-12 15:26:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\9异步编程\4宏任务与微任务\js\index.js
 */
/**
 * js的执行是单线程的 主线程的任务按顺序同步执行
 *                  主线程的任务执行结束会轮询微任务队列
 *                  其次再轮询宏任务队列
 * 定时器模块：主线程执行时间很长，定时器会在定时器模块中消耗时间
 *            主线程结束后 先将时间少的定时器放入宏任务队列 直接执行
 *            时间一样会按顺序执行
 * 任务拆分成多任务 将任务放在定时器中
 */
window.onload = function () {
    /**
     * 主线程、微任务、宏任务
     */
    let id = setInterval(() => {
        console.log("1宏任务定时器")
    }, 0);
    setTimeout(() => {
        console.log("1关闭宏任务定时器")
        clearInterval(id);
    }, 2);
    Promise.resolve()
        .then(value => {
            console.log("1微任务");
        })
    console.log("1主线程")
    /**
     * 定时器会在定时器模块中运行 等主线程结束不会再等待一段时间
     * 主线程时间很长会直接执行 先将时间快的放到宏任务队列中
     */
    setTimeout(() => {
        console.log("2宏任务定时器2s");
    }, 2000);
    setTimeout(() => {
        console.log("2宏任务定时器1s");
    }, 1000);
    for (let i = 0; i < 1000; i++) {
        console.log("2主线程")
    }
    /**
     * promise中的代码是同步代码
     */
    setTimeout(() => {
        console.log("3宏任务定时器0s")
    }, 0);
    new Promise(resolve => {
        console.log("3主线程promise")
        resolve();
    }).then(() => {
        console.log("3微任务then")
    })
    console.log("3主线程");
    /**
     * 进度条实例任务轮询
     * (fn)()直接执行
     */
    let oLoadColor = document.getElementById('loadColor');
    let oPercent = document.getElementById('percent');
    function load() {
        let i = 0;
        (function run() {
            oPercent.innerHTML = i + '%';
            oLoadColor.style['width'] = i + '%';
            if (++i <= 100) {
                setTimeout(run, 20);
            }
        })();

    }
    load();
    /**
     * 异步拆分任务
     * worker 也可以处理
     */
    async function end(num) {
        let res = await Promise.resolve().then(() => {
            let count = 0;
            for (let i = 0; i < num; i++) {
                count += num--;
            }
            return count;
        });
        //在微任务中计算结束再返回 不影响主线程的执行
        console.log(res);
    }
    end(1000000);
    console.log("异步拆分任务")
}