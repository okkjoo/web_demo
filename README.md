# Demo
自己练手的Demo
## Getting Started
如果你想在本地运行就往下看
## 前置条件
- 安装了node
- 推荐使用 Vscode
## 安装
创建一个你想放这些东西的文件夹
cd <folder-name>

Clone ：
git clone https://gitee.com/okkjoo/web_demo.git

yarn or npm install
默认初始化完成后
npm start or yarn start
## 使用
想看哪个demo就把那个文件夹名字改为 src
## code
html
css
Javascript
React 全家桶

## Author
我从以下地方找的项目.自己用react实现一下
- [50projects50days](https://github.com/bradtraversy/50projects50days)比较简单
- [freeCodeCamp](https://chinese.freecodecamp.org/learn/front-end-libraries/#front-end-libraries-projects)比较难

## 笔记
### 05_Expand Cards
**url加载图片** 
react style url backgroundImage
[React Background Image Tutorial – How to Set backgroundImage with Inline CSS Style](https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/)<br>
添加本地public文件夹中的图片，也要用url的相对地址；例如 http://localhost:3000/image.png
**动画效果**
react是在虚拟dom上进行操作的，传统动画效果是直接操作实际DOM元素来实现的。
1. 通过ref获取真实DOM来进行操作（应该避免）
2. 简单动画-基于CSS3的简单动画
3. React 动画插件 react-transition-group 中CSSTransitionGroup
4. 结合 hook 实现复杂动画（不会）--react-transition-group中TransitionGroup

参考文章：
1.  [前端，react，动画 - 有赞技术团队](https://tech.youzan.com/react-animations/)
2.  [React中动画不生效的原因分析](https://m.php.cn/article/406769.html)

**map遍历**
可以在render中将map值取好方便操作，例如添加点击事件等，如果在return中使用map会出现一些问题。<br>
利用state完成对map遍历时控制样式的变化。

参考文章：[react遍历li加样式](https://blog.csdn.net/knowledge_bird/article/details/88886731)

### 06_online Jokes 
用到fetch来向一个笑话网站发送请求