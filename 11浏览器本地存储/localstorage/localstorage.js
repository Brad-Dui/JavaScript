/*
 * @Author: your name
 * @Date: 2021-07-31 13:10:49
 * @LastEditTime: 2021-07-31 13:36:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\11浏览器本地存储\localstorage\localstorage.js
 */
/**
 * localStorage  API: setItem(key,value)
 *                    getItem(key)
 *                    removeItem(key)
 *                    clear()
 *                    key(index)
 * 可永久的存储在浏览器中  手动清除/清空浏览器 可以清除存储
 */
let p = { name: '张三', age: '18' };
function setData() {
    localStorage.setItem('001', 'msg1');
    localStorage.setItem('002', 'msg2');
    localStorage.setItem('name', '张三');
    localStorage.setItem('person', JSON.stringify(p));
}
function getData() {
    console.log(localStorage.getItem('name'));
    console.log(JSON.parse(localStorage.getItem('person')));
}
function deleteData() {
    localStorage.removeItem('001');
}
function clearData() {
    localStorage.clear();
}
function indexData() {
    console.log(localStorage.key(JSON.stringify(p)))
}