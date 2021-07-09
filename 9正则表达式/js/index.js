/*
 * @Author: your name
 * @Date: 2021-07-09 11:39:59
 * @LastEditTime: 2021-07-09 15:11:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\9正则表达式\js\index.js
 */
/**
 * 字符串的常用操作
 *      search:正常返回字符串的位置 不存在返回-1
 *      substring(start,end) 截取字符串 end不支持负数 slice支持
 *      charAt():返回字符串中的某一位
 *      split：以某一位做切分 切成一个数组
 * 正则(规则、模式)：字符串匹配工具
 *      JS风格：RegExp对象 大小写敏感再添加一个参数RegExp(str,'i')
 *      perl风格：/i/
 *      i(ignore):忽略大小写     g(global)全局匹配，找出所有值
 *      转义：\d-数字、.任意字符、\w数字字母下划线、\s空白字符(空格alt等不可打印)
 *            \D除了数字         \W除了数字       \S除了空白字符
 *      量词：+ 若干 、{n}正好n个(电话号码校验)、{n,m}最少n位最多m位 、{n,}最多不限、?={0,1}可有可无
 *           * 可以有可以无多少位都行(0次会出现空格)
 *      match:把所有匹配的东西都提取出来
 *      replace:替换字符串
 *      test:检验字符串是否符合正则的要求 符合返回true(只要其中一部分满足条件)
 *      []:元字符 [abc] 任取其中一个 
 *               [0-9] 范围
 *               [^a-z] 排除
 *               [a-z0-9A-Z]组合用法
 *      ^：不再[]中时代表行首  $:行尾 (在test时可以更严谨)
 */
window.onload = function () {
    //把字符串中的数字挑出来
    //字符串方法
    let str = '12 fff 834 aa443 77aa -==52';
    let arr = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        //用temp暂时保存连续数字
        if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
            temp += str.charAt(i);
        }
        //碰到非数字 将temp放出数组 并清空
        else {
            if (temp) {
                arr.push(temp);
                temp = '';
            }
        }
    }
    //循环最后可能执行保存 未push到数组
    if (temp) {
        arr.push(temp);
        temp = '';
    }
    console.log(arr);
    //正则
    let re1 = new RegExp('a');
    let str1 = 'cdabg';
    console.log(str1.search(re1));
    let re2 = /A/i;
    console.log(str1.search(re2));
    //match找出所有匹配值
    let re3 = /\d+/g;
    console.log(str.match(re3));
    //replace(str,'str')将某字符串替换
    let re4 = /a/g;
    console.log(str.replace(re4, '0'));

    //过滤敏感词
    let oInputText = document.getElementById('inputText');
    let oFilterBtn = document.getElementById('filterBtn');
    let oFilterText = document.getElementById('filterText');
    oFilterBtn.onclick = function () {
        let re = /垃圾|废物|傻逼/g;
        oFilterText.value = oInputText.value.replace(re, '**');
    }

    //[]应用 偷小说
    let oDeleteBtn = document.getElementById('deleteBtn');
    oDeleteBtn.onclick = function () {
        let re = /<[^<>]+>/g;
        oFilterText.value = oInputText.value.replace(re, '');
    }
    //邮箱校验
    let oEmail = document.getElementById('email');
    let oCheckBtn = document.getElementById('checkBtn');
    oCheckBtn.onclick = function () {
        let re = /^(\w{1,10})@([0-9a-z]{2,4})\.com$/i;
        if (re.test(oEmail.value)) {
            console.log('成功');
            oEmail.style['border'] = '1px solid #dedede';
        }
        else {
            oEmail.style['border'] = '1px solid red';
        }
        console.log(re.test(oEmail.value));
    }
}
