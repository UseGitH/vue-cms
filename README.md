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

###改造 新闻资讯 分类 路由连接

###新闻资讯页面制作
+ 绘制页面，引用 MUI 中的media-list.html
+ 使用vue-resource 获取数据
+ 使用v-for 渲染

###实现 新闻列表 点击 跳转到 新闻详情页
+ 设置 新闻列表 的每一项 为 router-link ，同时在跳转的时候传递唯一 id 标识符
+ 创建新闻详情页的组件 NewInfo.vue
+ 在 路由中 设置 新闻详情页 与 新闻详情页组件 的对应关系

###实现 新闻详情页的布局 和 数据渲染


###抽离公共的评论组件
+ 创建一个 公共的 Common.vue 组件
+ 在需要 使用 公共评论组件的 页面中导入 Common.vue 组件 `import common from "./common/common.vue"`
+ 在父组件中使用 `components` 属性 注册 子组件 common
+ 将注册的 子组件 的名称 以标签的形式在页面 中引用

###获取所有评论信息数据渲染到页面中

###实现点击加载更多评论功能
+ 为 加载更多 按钮添加点击事件，请求下一页数据
+ 点击加载更多，让 pageindex++ 然后重新调用 this.getComments() 方法重新获取最新一页的数据
+ 为了防止覆盖之前的评论数据，在点击在更多的时候，应当进行数组拼接 使用 concat 方法进行拼接