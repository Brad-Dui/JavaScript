/*
 * @Author: your name
 * @Date: 2021-07-12 11:56:20
 * @LastEditTime: 2021-07-12 13:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\9异步编程\3async、await\js\index.js
 */
/**
 * async关键字 promise的语法糖
 *      用async定义函数 函数的返回结果时promise(状态为fulfilled)
 * await关键字 then的语法糖
 *      用await简化then 返回的仍然是promise
 *      可以返回值 可以返回一个promise
 * 声明方式：函数形式
 *          表达式
 *          对象的方法
 *          类方法
 * async错误处理：函数后加catch 捕获
 * await错误处理：try{await} catch(error){}
 * await并行执行：根据微任务和微任务顺序
 *               promise.all()          
 */
window.onload = function () {
    /**
     * async
     */
    async function fn() {
        return '成功'
    }
    fn().then(value => {
        console.log(value);
    });
    console.log('async');
    /**
     * await
     */
    async function fnAwait() {
        let name = await '接收';
        let num = await new Promise((rseolve, reject) => {
            setTimeout(() => {
                rseolve();
                console.log('await返回promise')
            }, 2000)
        })
        //这里也会等2s因为await相当于then链式执行
        console.log(name);
    }
    fnAwait();
    console.log('await');
    /**
     * async延时函数实例
     */
    async function sleep(delay = 2000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay)
        })
    }
    async function show() {
        for (const user of ['张三', '李四']) {
            await sleep();//状态改变暂停2s
            console.log(user);
        }
    }
    show();
    /**
     * await同步
     */
    function p1() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('执行p1')
            }, 2000)
        })
    }
    function p2() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('执行p2')
            }, 2000)
        })
    }
    //根据微任务和宏任务顺序
    async function hd1() {
        //不加await会同时执行
        let h1 = p1();
        let h2 = p2();
        let h1value = await h1;//then
        let h2value = await h2;
        console.log(h1value, h2value);
    }
    // hd1()
    //使用promise.all()
    async function hd2() {
        let res = await Promise.all([p1(), p2()]);
        console.log(res);
    }
    hd2();
}