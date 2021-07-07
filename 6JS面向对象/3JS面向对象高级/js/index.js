/*
 * @Author: your name
 * @Date: 2021-07-07 18:52:38
 * @LastEditTime: 2021-07-07 23:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \基础\6JS面向对象\3JS面向对象高级\js\index.js
 */
/**
 * JSON方式的面向对象   (单体)(整个程序中只有一个)
 *          简单
 *          不适合多个对象
 *          命名空间：在不同的json中写相同名字的方法
 * 继承
 *      函数的调用可以写成 fn.call() call中的值可以改变函数中的this
 *      引用：创建一块空间存值 将值赋给其他元素时 修改其他元素会同时修改这块空间
 *           将父类的原型对象赋给子类->子类加方法 父类同时拥有(不可行)
 *      子类可以对原有父类的方法进行重写 父类可以对方法统一修改
 * 系统对象
 *      本地对象(非静态对象) ：(先实例化才能用)Object、Function、Array、String、Boolean、Date、RegExp、Error
 *      内置对象(静态对象):Global、Math(不能实例化)
 *      宿主对象(由浏览器提供的对象)：运行环境(Node.js中在后台写js就不在浏览器中)
 *                                 DOM、BOM
 * 对象 instanceof 类 -> 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 *                      查看一个对象是否是某个类的实例
 * 原型链：在层层的继承中，一个对象访问一个属性或方法时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，
 *        以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾
 */
window.onload = function () {
    //JSON方式的面向对象 把方法包在json中
    let json = {
        name: '张三',
        phone: '123',
        showName: function () {
            console.log('名字：' + this.name)
        },
        showPhone: function () {
            console.log('电话：' + this.phone)
        }
    }
    json.showName();
    json.showPhone();
    //命名空间 在不同的json在可以命名相同的方法
    let web = {};
    web.front = {};
    web.back = {};
    web.server = {};
    web.front.getUser = function () {
        console.log('前端获取用户');
    }
    web.back.getUser = function () {
        console.log('后端获取用户');
    }
    web.server.getUser = function () {
        console.log('服务端获取用户');
    }
    web.front.getUser();
    web.back.getUser();
    web.server.getUser();

    //用call实现继承
    function parent() {
        this.num1 = 12;
    }
    parent.prototype.showNum1 = function () {
        console.log(this.num1);
    }
    let par = new parent();
    function child1() {
        //继承属性
        parent.call(this);
    }
    //继承方法
    for (let i in parent.prototype) {
        //新建一块空间将父类方法复制过来 而不是直接引用指向(不是复制对象本身)
        child1.prototype[i] = parent.prototype[i];
    }
    //自己的方法
    child1.prototype.showNum2 = function () {
        console.log(22)
    }
    let human = new child1();
    human.showNum1();
    // par.showNum2();//不使用引用 父类就不能再调用子类的方法

    //继承练习 拖拽改写
    new Drag('dragBox1');
    new LimitDrag('dragBox2')
    //继承属性
    function LimitDrag(id) {
        Drag.call(this, id);
    }
    //继承方法
    for (let i in Drag.prototype) {
        LimitDrag.prototype[i] = Drag.prototype[i];
    }
    //重写移动方法 加限制条件 最大限度重用代码
    LimitDrag.prototype.fnMove = function (ev) {
        let oEvent = ev || event;
        let left = oEvent.clientX - this.disX;
        let top = oEvent.clientY - this.disY;
        if (left < 0) {
            left = 0;
        }
        else if (left > document.documentElement.clientWidth - this.oDragBox.offsetWidth) {
            left = document.documentElement.clientWidth - this.oDragBox.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        }
        else if (top > document.documentElement.clientHeight - this.oDragBox.offsetHeight) {
            top = document.documentElement.clientHeight - this.oDragBox.offsetHeight;
        }
        this.oDragBox.style['left'] = left + 'px';
        this.oDragBox.style['top'] = top + 'px';
    }
    let arr = [];
    console.log(typeof arr);
    console.log(arr instanceof Array)
}
