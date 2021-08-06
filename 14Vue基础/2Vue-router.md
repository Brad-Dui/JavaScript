# Vue-router

---

## 1.理解

### vue-router

> vue的一个插件库，专门实现``SPA应用``

> SPA:
>
> > 单页Web应用(single page web application ,SPA)
> >
> > 整个应用只有``一个完整的页面``
> >
> > 点击页面中的导航连接`不会刷新`页面，只会做页面的`局部更新`
> >
> > 数据需要通过`ajax`请求获取

### 路由

- 什么是路由
- - 一个路由就是`一组映射关系`（key-value）
  - key为路径，value可能是`function`或`component`
- 后端路由
- - 理解：value是`function`，用于处理客户提交的请求
  - 流程：服务器 - 接收到一个请求时，根据`请求路径`找到匹配的`函数`来处理请求，返回响应数据
- 前端路由
- - 理解：value是`component`，用于展示页面内容
  - 流程：浏览器 - `路径`改变时，对应的组件就会显示。

## 2. 使用

```js
npm i vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
build router
```

### 搭建环境

- 1.准备vue-router

- - 安装

  - ```
    npm i vue-router
    ```

  - 在main.js下导入

  - ```js
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
    ```

- 2.配置vue-router

- - 创建router/index.js 文件

  - 配置一个路由

  - ```js
    //导入vue-router
    import VueRouter from 'vue-router'
    //导入组件
    import Component1 from 'component/Component1'
    import Component2 from 'component/Component2'
    //创建并暴露一个路由
    export default new VueRouter({
        routes:[
            {
                path:'/api1',
                component:Component1,
            },
            {
            	path:'/api2',
                component:Component2,
            }
        ]
    })
    ```

- 3.引入路由

- - 在main.js在导入

  - ```js
    import router from 'router/index.js'
    ```

  - 在vm中注册router

- >成功后地址多一个`` /#/``

### 流程

- 跳转标签

- - ```html
    <!-- 路由切换 -->
    <router-link class="defalut" active-class="active" to="/api1">页面1</router-link>
    ```

- 更新区域

- - ```html
    <!-- 更新的位置 -->
    <router-view></router-view>
    ```

- > <router-link> 对浏览器历史默认是`push`操作，加`replace`属性可以对栈顶历史替换
  >
  > 更新组件注册在路由中，不用再在app.vue中注册，由路由渲染到<router-view>中
  >
  > 切换路由时 组件频繁被``销毁挂载``
  >
  > 每个路由组件多两个属性- 
  >
  > > route - 每个组件不同
  > >
  > > router - 唯一

### 多级路由/嵌套路由

- vue-router配置

- - ```js
    import Children1 from 'pages/Children1'
    export default new VueRouter({
        routes :[
            {
                path:'/api1',
                component:Component1,
                //路由组件嵌套路由组件，加children
                children:[
                    {
                        path:'children1',
                        component:Children1,
                    }
                ]
            }
        ]
    })
    ```

- 路由父组件配置

- - ```html
    <router-link class='' active-class="" to="/api1/children"></router-link>
    <router-view></router-view>
    ```

- > 路由嵌套 在一级路由`children` 配置 下一级路由 path中不加 ``/``
  >
  > 在一级路由组件中的链接地址需要写``每一级路由地址``

## 3.传参

### 路由的query参数

- 作用/场景：路由子组件从父组件那获取数据

- 配置路由组件

- 父组件传递参数(可以是请求来的参数) v-for生成链接

- - ```html
    <!-- 字符串形式传递query参数 -->
    <router-link :to="`/api1/childer1/detail?id=${m.id}`"></router-link>
    <!-- 对象形式传递query参数 - 结构更清晰 -->
    <router-link :to="{path:'/api1/childer1/detail',query:{id:m.id}}"></router-link>
    ```

- 路由子组件取数据

- - ```js
    //从route上获取query上的数据
    this.$route.query
    ```

- > 路由父组件通过设置query参数 - 传递数据
  >
  > 路由子组件通过$route上的query参数 - 获取数据

### 路由命名

- 作用/场景：简化跳转路径
- 在路由配置添加属性 name 
- 在跳转链接中的 to中用name替代path

### 路由的params参数

- 场景/作用：类似于query的作用

- 路由配置

- - ```js
    export default new VueRouter({
        routes:[
            {
                path:'/api1',
                component:component1,
                children:[
                    {
                        name:'children1',
                        path:'children1/:id'//路径后跟占位数据
                        component:Children1
                    }
                ]
            }
        ]
    })
    ```

- 父组件传参

- - ```html
    <!-- 字符串形式 -->
    <router-link :to="`/api1/children1/${m.id}`"></router-link>
    <!-- 对象形式 - 不能用path-->
    <router-link :to="{name="children1",params={id:m.id}}"></router-link>
    <router-view></router-view>
    ```

- 子组件接收参数

- - ```js
    this.$route.params.id
    ```
- > 配置路由时路径需要加占位
  >
  > 对象形式传参不能用path

### props属性传值

- 作用：简化子组件中获取数据时的表达式

- 路由配置

- - ```js
    export default VueRouter({
        routes:[
            {
                path:'/api1',
                component:Component1,
                children:[
                    path:'children1',
                    component:Children1,
                    //对象形式，传递固定值
                    props:{id:"123"}，
            	    //布尔形式，传递params参数
            	    props：true，
            	    //函数形式，自带参数$route
            	    props(route){
        			   return {id:route.params.id}
    			   }	
                ]
            }
        ]
    })
    ```

- 父组件传递方式不变

- 子组件接收数据

- - ```js
    props:["id"]
    ```

- > 三种方式子组件都可用props属性接收参数，适用的范围不同

### 编程式路由跳转

- 场景：在不使用<router-link>的情况下

- 父组件

- - ```js
    <button @click="pushShow"></button>
    methods:{
        pushShow(m){
            this.$router.push({
                //to中的数据
                name:"children",
                params:{id:m.id}
            })
        }
    }
    ```

- 按钮控制前进后退

- - ```js
    this.$router.back()
    this.$router.forward()
    this.$router.go(n)
    ```

- > 相同路径跳转会保存，可以catch捕获错误

### 路由缓存

- 场景：切换路由时组件不销毁

- 组件显示区

- - ```html
    <keep-alive include="Children1">
    	<router-view></router-view>
    </keep-alive>
    ```

- > include中写入要缓存的``组件名``(``不销毁``)

## 4.生命周期

### activated

- 在路由跳转回时

### deactivated

- 在路由跳转走时

> 可以合理的开启与关闭定时器

## 5.路由守卫

### 全局前置路由守卫

- 作用：在点击跳转后，在路由内判断是否跳转

- 路由配置

- - ```js
    const router = new VueRouter({
        routes:[
            {
                path:'/api1',
                component:Component1,
            }
        ]
    })
    //beforeEach 在每次跳转前执行
    router.beforeEach((to,from,next)=>{
        if(to.path == "/api1"){
            if(localStorage.getItem("id") == "001"){
                next();
            }
        }else{
            next();
        }
    })
    export default router;
    ```

- > 对路径的判断可以在meta中加自定义的数据

### 全局后置路由守卫

- 作用：在跳转动作之后调用

- 路由配置

- - ```js
    const router = new VueRouter({
        routes:[
            {
                path:'/api1',
                component:Component1,
                meta:{isAuth:false,title:"api1"}
            }
        ]
    })
    //beforeEach 在每次跳转前执行
    router.beforeEach((to,from,next)=>{
        if(to.meta.isAuth){
            if(localStorage.getItem("id") == "001"){
                next();
            }
        }else{
            next();
        }
    })
    //afterEach 在每次跳转后执行
    router.afterEach((to,from)=>{
        //跳转更改页面标题
        document.title = to.meta.title || "主页"
    })
    export default router;
    ```

### 独享路由守卫

- 场景：对一个路由跳转进行控制 - 只有前置

- 配置路由

- - ```js
    const router = new VueRouter({
        routes:[
            {
                path:'/api1',
                component:Component1,
                meta:{isAuth:false,title:"api1"},
                beforeEnter((to,from,next)=>{
                
            	})
            }
        ]
    })
    ```

- > 独享路由守卫`beforeEnter`,没有后置

### 组件内路由守卫

- 作用：进入或离开路由时的控制

- 组件配置

- - ```js
    //跳转至组件之前 to为该组件
    beforeRouteEnter(to,from,next){
    
    }
    //跳出组件之前 from为该组件
    beforeRouteLeave(to,from,next){
        
    }
    ```

- > 两个守卫都有放行的功能

## 6.history与hash模式

### hash模式

- 地址栏中有`#`时，后面的数据不会随http请求发送给服务器

- 在index.js中配置模式

- - ~~~js
    mode:"hash"
    ~~~

- > 部署在服务器上时，可以刷新路由跳转的页面
  >
  > #后地址不会被当作地址被发送

### history模式

- 地址简洁，无`#`，地址栏均是地址

- 在index.js中配置模式

- - ~~~js
    mode:"history"
    ~~~

- > 部署后，刷新路由跳转的页面会出现404

- 解决：后端匹配

- - 使用node - connect-history-api-fallback
  - nginx
  - java类库

