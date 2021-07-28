/*
 * @Author: your name
 * @Date: 2021-07-28 20:29:05
 * @LastEditTime: 2021-07-28 23:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\1语法\13、模块化\Module.js
 */
/**
 * 1.为什么引入模块化   无法将一个大程序拆分为互相依赖的小文件，再用简单的方法将它们拼接起来
 *                     其他语言的功能：Ruby的require、Python的import、CSS的@ import
 *                     没有模块化对于开发大型、复杂的项目而言是一个巨大的障碍
 * 2.CommonJS与AMD     CommonJS - 用于服务器 它的模块是<对象>，输入时查找对象属性
 *                                没有动态绑定，输出的是值的缓存
 *                     AMD - 用于浏览器
 * 3.module的用法      编译时加载 ES6模块自动采用严格模式
 *                     1.export - 导出(提供对外的接口)(可以出现在模块顶层的任何位置)(输出的值与其对应的值时动态绑定的关系)    
 *                                  *在变量前加export - 单个导出
 *                                  *export {... as ...}   - 批量导出(可以用as改名导出)
 *                                  *export default  - 一个文件只有一个 
 * 4.比较
 */
/**
 * CommonJS 实质是加载模块的所有方法 - 运行时加载 - 无法在编译时进行"静态优化"
 */
//MommonJS模块
// let { stat, exists, readFile } = require('fs');
// //等同于
// let _fs = require('fs');
// let stat = _fs.stat;
// let exists = _fs.exists;
// let readFile = _fs.readFile;
/**
 *export
 */
//1.单个导出
export var firstName = 'Michal';
export var lastName = 'Jackson';
export var year = 1958;
//2.批量导出
var firstName = 'Michal';
var lastName = 'Jackson';
var year = 1958;
export { firstName as f1, firstName as f2, lastName, year };
