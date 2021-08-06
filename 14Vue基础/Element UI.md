# Vue 的UI组件库

---

## 移动端

- Vant
- Cube UI
- Mint UI

## PC端

- Element UI
- IView UI 

## Element UI

### 全部引入

~~~js
npm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
~~~

### 按需引入

~~~js
npm install babel-plugin-component -D
//在babel.config.js中配置
{
  "presets": [["@babel/preset-env", { "modules": false }]],//此处有修改
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
//main.js
import { Button, Select } from 'element-ui';
Vue.component(Button.name, Button);//注册全局组件
~~~

