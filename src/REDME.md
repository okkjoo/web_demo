# 目的 & 需求

主要实现 移动端的组件在 PC 端的预览

也就是 让一个 写好了移动端样式 —— 用了 vw 什么的

在管理系统预览时有良好效果

# 问题

问题：移动端正常这样

![1676103481378](image/REDME/1676103481378.png)

桌面直接引入就会变成这样

![1676103516955](image/REDME/1676103516955.png)

# 使用

使用 Deepview 组件

```tsx
const App: React.FC = () => {
  return (
    <>
      <Preview MobileUI={UIinPhone} id='preview' />
    </>
  )
}
```

# 效果

## 1.0

![1676113946589](image/REDME/1676113946589.gif)

# 遇到的问题

- 在 UI 组件直接引入 CSS 的话， iframe 标签中的样式就会失效 —— 现在只能选择行内样式

> 网上有说使用绝对路径引入 CSS 的，但我没有尝试文件

# 文件介绍

- App 入口不解释
- preview 是在 PC 端使用的
  - 参数接受 mobileUI 组件——要渲染的组件
  - 其余传参给到 mobileUI
