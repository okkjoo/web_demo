# Demo

自己练手的 Demo

## Getting Started

如果你想在本地运行就往下看

## 前置条件

- 安装了 node
- 推荐使用 Vscode

## 安装

创建一个你想放这些东西的文件夹 cd <folder-name>

Clone ： git clone https://gitee.com/okkjoo/web_demo.git

yarn or npm install 默认初始化完成后 npm start or yarn start

## 使用

想看哪个 demo 就把那个文件夹名字改为 src

## code

html css Javascript React 全家桶后面的有 typescript

## Author

我从以下地方找的项目.自己用 react 实现一下,或者是一些 react 相关练手的小代码

- [50projects50days](https://github.com/bradtraversy/50projects50days)比较简单
- [freeCodeCamp](https://chinese.freecodecamp.org/learn/front-end-libraries/#front-end-libraries-projects)比较难

## 笔记

注意难度是不分先后的

### 05_Expand Cards

**url 加载图片** react style url backgroundImage [React Background Image Tutorial – How to Set backgroundImage with Inline CSS Style](https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/)<br> 添加本地 public 文件夹中的图片，也要用 url 的相对地址；例如 http://localhost:3000/image.png **动画效果** react 是在虚拟 dom 上进行操作的，传统动画效果是直接操作实际 DOM 元素来实现的。

1. 通过 ref 获取真实 DOM 来进行操作（应该避免）
2. 简单动画-基于 CSS3 的简单动画
3. React 动画插件 react-transition-group 中 CSSTransitionGroup
4. 结合 hook 实现复杂动画（不会）--react-transition-group 中 TransitionGroup

参考文章：

1.  [前端，react，动画 - 有赞技术团队](https://tech.youzan.com/react-animations/)
2.  [React 中动画不生效的原因分析](https://m.php.cn/article/406769.html)

**map 遍历** 可以在 render 中将 map 值取好方便操作，例如添加点击事件等，如果在 return 中使用 map 会出现一些问题。<br> 利用 state 完成对 map 遍历时控制样式的变化。

参考文章：[react 遍历 li 加样式](https://blog.csdn.net/knowledge_bird/article/details/88886731)

### 06_online Jokes

用到 fetch 来向一个笑话网站发送请求

### 07_moive_byHooks

要用到的 API--[moviveAppApi](http://www.omdbapi.com/),key 是别人现成的，你也可以自己去[获取](http://www.omdbapi.com/apikey.aspx)

参考文章：[HOOKED＿moive](https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/)

### 08_handWriteMyHook

新加了 typescript， `yarn add --dev typescript` `yarn run tsc --init`初始化 ts 配置文件详情看官网[这篇文章](https://zh-hans.reactjs.org/docs/static-type-checking.html#using-typescript-with-create-react-app) 值得一提的是，光是这几行命令还不够，还会有报错，还要 `yarn add @types/react --save-dev`

注意事项：

- 自定义 hook 必须以 use 开头，这是一种约定

#### 组件

- APP: 其他三个组件的父组件，包含处理 API 请求的函数，还有组件初始化时调用 API 的函数
- Header: 渲染 app 的头部并接受一个标题的 props
- Movie： 渲染电影对象，接受电影相关参数作为 props
- Search： 包含输入和搜索表单、搜索函数

#### 用到的 Hooks

- useState
- useEffect
- useReducer
