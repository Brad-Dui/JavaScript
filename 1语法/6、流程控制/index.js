/*
 * @Author: your name
 * @Date: 2021-06-05 15:35:28
 * @LastEditTime: 2021-06-18 18:57:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\6、流程控制\index.js
 */
/**
 * 条件判断：if switch ？：
 * 循环：for while
 * 跳出：   *break:中断整个循环
 *         *continue：中断本次循环
 */
/**
 * switch(变量){
 *      case 1 : 语句1;break;
 *      ...
 *      case n : 语句n;break;
 *      default : 语句; //可省略
 * }
 * 在for内嵌套switch
 * 没有break时变量第一次匹配后 switch后面代码继续执行
 * break 跳出switch，执行switch后面代码
 * continue 跳出本次循环
 */
/**
 * 三目 条件 ？语句1：语句2
 */
window.onload = function () {
    let sex = '';
    let name = '张';
    switch (sex) {
        case '男':
            console.log(name + '先生，你好');
            break;
        case '女':
            console.log(name + '女士，你好');
            break;
        default:
            console.log(name + '，你好');
    };
    // for (let i = 0; i < 5; i++) {
    //     if (i == 2) {
    //         // break;   //从此处跳出循环
    //         continue;   //结束本次循环，循环体继续循环
    //     }
    //     alert(i);
    // };
    for (let j = 0; j < 5; j++) {
        switch (j) {
            case 0: console.log(0); continue;
            case 1: console.log(1); continue;
            case 2: console.log(2); break;
            case 3: console.log(3); continue;
            case 4: console.log(4); continue;
            default: console.log('stop');
        };
        console.log('+++++++++');
    };
}