/*
 * @Author: your name
 * @Date: 2021-06-06 15:23:59
 * @LastEditTime: 2021-06-06 17:57:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \语法\10、数组\index.js
 */
window.onload = function () {
    //1、定义(尽量只存储一种类型的数据)
    let arr1 = [1, 2, 3, 4, 5, 6];           //没有差别，简短性能高
    let arr2 = new Array(1, 2, 3, 4, 5,);

    //2、属性：length，可获取可设置(可以快速清空数组)
    console.log(arr1.length, arr2.length);
    arr1.length = 2;
    console.log(arr1);
    arr2.length = 0;
    console.log(arr2);

    //3、方法：添加与删除
    /**
     * 尾部：添加push(),删除pop()
     * 首部：添加unshift(),删除shift()
     */
    //尾部
    let arr3 = [1, 2, 3, 4];
    arr3.push(5);//尾部添加
    console.log('push添加的位置:' + (arr3.indexOf(5) + 1));
    arr3.pop();//尾部弹出,弹出一个元素,添加数据无效
    console.log(arr3);
    //首部
    arr3.unshift(0);//首部添加
    console.log('unshift添加的位置:' + (arr3.indexOf(0) + 1));
    arr3.shift();//首部弹出,弹出一个元素,添加数据无效
    console.log(arr3);

    //4、方法：splice插入、删除
    /**
     * splice(start,length)删除一段
     * splice(start,length,元素...)先删除一段再添加元素
     */
    let aSplice = [1, 2, 3, 4, 5, 6];
    // aSplice.splice(2, 3);//从下标2开始删除3个元素
    // aSplice.splice(2, 0, 'a', 'b');//从下标2开始添加2个元素
    aSplice.splice(2, 1, 'a', 'b');//从下标2开始先删除一个元素,再添加两个元素(替换)
    console.log(aSplice);

    //5、方法：concat连接
    /**
     * a.concat(b),a与b连接;(a必须为数组或者字符串可空)
     */
    let aConcat1 = [1, 2, 3];
    let aConcat2 = [4, 5, 6];
    console.log(aConcat1.concat(aConcat2));
    let a = '';
    let b = [2, 3];
    console.log(a.concat(b));

    //6、方法：join分隔符
    /**
     * join('--')
     */
    let aJoin = [1, 2, 3, 4, 5, 6];
    console.log(aJoin.join('- -'));

    //7、方法：sort排序
    /**
     * 字符串排序
     * 实现数字排序需要添加参数
     * sort(function(n1,n2){return n1-n2;})从小到大排序
     */
    let aSort1 = ['apart', 'console', 'boom', 211, '3', 21];
    aSort1.sort();//首字母比较,从小到大
    console.log(aSort1);
    let aSort2 = [35, 6, 55, '461', 46, 68, 1];
    aSort2.sort(function (n1, n2) {
        return n2 - n1;//从小到大排列
    });
    console.log(aSort2);

    //8、方法：slice切出新数组或字符串
    /**
     * slice(start,end);
     */
    let aSlice = ['bob', '45', 6, 88, 4, 'application'];
    let aSlice1 = aSlice.slice(2,);//一个参数从该下标裁剪到结束
    let aSlice2 = aSlice.slice(2, 4);//从2开始裁剪,到下标4结束,不包括4
    console.log(aSlice);
    console.log(typeof (aSlice1) + ': ' + aSlice1);
    console.log(aSlice2);
}