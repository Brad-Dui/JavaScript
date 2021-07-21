/*
 * @Author: your name
 * @Date: 2021-06-03 16:57:41
 * @LastEditTime: 2021-07-21 22:33:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据类型\dataType.js
 */
/**
 * 基本(原始)数据类型：Number、String、Boolean、Null、Undefined、Symbol、BigInt
 *          特点：存储在栈中不可修改，开辟新的内存指针重新指定，执行结束会自行销毁
 *                null与undefined不能调用方法
 *                ES6中添加了数值字面量分隔符
 *                BigInt的除法会丢弃余数并向零舍入，Math对象的任何函数不接收BigInt操作数
 *          String：方法-取一部分-str.substring(index1,index2)取一部分(以小的值为起点)
 *                               str.slice(start,end)       切出一部分，end可以是负或没有
 *                               str.split('str')           返回数组，以str为分隔
 *                       
 *                       搜索    str.indexOf('str',index1)  返回从index1开始第一个str的索引 没有返回0
 *                               str.lastIndexOf('str')     返回最后一个值的索引
 *                      
 *                      布尔搜索  str.startsWith('str')      是否以str开头
 *                               str.endsWith('str')        是否以str结尾
 *                               str.includes('str')        是否包含str
 *                     
 *                     创建修改版 str.replace('str1','str2') 用str2代替str1
 *                               str.toLowerCase()          小写
 *                               str.toUpperCase()          大写
 *                               str.normalize()            NFC归一化
 *                               str.normalize("NFD")       NFD归一化 还有NFKC、NFKD  
 *            
 *            访问字符串中个别字符 str.charAt(index)          返回字符
 *                               str.charCodeAt(index)      指定位置的16位数值
 *                               str.codePointAt(index)     适用码点大于16位
 *                   
 *                          填充 str.padStart(length)        左侧填充空格达到长度
 *                               str.padEnd(length)         右侧填充空格达到长度
 *                               str.padStart(length,'str') 以字符str为填充
 *                  
 *                   删除空格     str.trim()                 删除开头和末尾的空格
 *                               str.trimStart()            删除左侧空格
 *                               str.trimEnd()              删除右侧空格 
 *                  
 *                  其他方法      str.concat('str')          拼接出新字符串
 *                               str.repeat(n)              拼接n次
 *      模板字符串：`str` 特点：可以换行 添加占位符${expression}
 *                       标签函数：String.row(),输出原字符串,不解释转义字符
 * Symbol(符号): 非字符串的属性名,独一无二              
 */

//数字分隔符
let billion = 1_000_000_000;
console.log(typeof billion);
//字符串常用方法
let str = 'Hello World!';
console.log(str.substring(5, 2), str.slice(0, -1), str.split(' '));
console.log(str.indexOf('l'), str.indexOf('l', 3), str.lastIndexOf('l'));
console.log(str.replace('ll', 'cc'), str.toLowerCase(), str.toUpperCase(), str.normalize("NFD"))
console.log(str.charAt(str.length - 1), str.charCodeAt(0), str.codePointAt(0))
console.log(str.padStart(14, '*'), str.padEnd(14, '-'))
console.log(' test  '.trim(), ' test  '.trimStart(), ' test  '.trimEnd())
console.log(str.concat('cc'), str.repeat(2))
//``模板字符串
console.log(`o在Hello World中的位置
${str.indexOf('l')}`)
console.log(String.raw`o在${str.indexOf('o')}这个位置\``)
//Symbol
let symb = Symbol('ll');
console.log(symb)