/*
 * @Author: your name
 * @Date: 2021-07-31 13:09:45
 * @LastEditTime: 2021-07-31 13:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS基础\11浏览器本地存储\sessionstorage\sessionstorage.js
 */
/**
 * sessionStorage  API: setItem(key,value)
 *                    getItem(key)
 *                    removeItem(key)
 *                    clear()
 *                    key(index)
 * 关闭浏览器窗口后 删除
 */
let p = { name: '张三', age: '18' };
function setData() {
    sessionStorage.setItem('001', 'msg1');
    sessionStorage.setItem('002', 'msg2');
    sessionStorage.setItem('name', '张三');
    sessionStorage.setItem('person', JSON.stringify(p));
}
function getData() {
    console.log(sessionStorage.getItem('name'));
    console.log(JSON.parse(sessionStorage.getItem('person')));
}
function deleteData() {
    sessionStorage.removeItem('001');
}
function clearData() {
    sessionStorage.clear();
}
function indexData() {
    console.log(sessionStorage.key(JSON.stringify(p)))
}