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
- - 理解：value是``component`，用于展示页面内容
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

- > 更新组件注册在路由中，不用再在app.vue中注册，由路由渲染到<router-view>中
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