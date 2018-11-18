# vue-cms

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##这是绿萝App项目

###制造首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件


###改造 tabbar  
+ 完成tabbar高亮
+ 在路由中设置linkActiveClass改变默认类名(router-link-active),改变为mui的 mui-active点击切换高亮

###完成 APP 组件
+ HomeContainer 首页
+ MemberContainer 会员
+ ShopCarContainer 购物车
+ SearchContainer 搜索


###首页 轮播图的实现
- 使用mint-ui 引入组件
- 使用vue-resource 获取数据
- 然后定义LoopPic接收获取的数据
- 使用v-for 渲染(一定要加上属性绑定 :key)

###完成首页nav
- 使用 mui 的 grid-default 代码片段

###完成切换动画
- 利用transition 标签
