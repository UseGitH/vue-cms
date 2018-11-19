// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// //  导入所需 mint-ui  组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from "mint-ui"
// //  导入mint-ui样式文件
// import "mint-ui/lib/style.css"
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUi from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUi)

//  导入 MUI 组件库
import "../lib/mui/css/mui.min.css"
//  导入 MUI扩展字体图标样式 (必须还要引入mui-icons-extra.ttf)
import "../lib/mui/css/icons-extra.css"
import "../lib/mui/fonts/mui-icons-extra.ttf"

Vue.config.productionTip = false

// 导入 图片预览功能 插件
import VuePreview from 'vue-preview'
// import "./css/globle.css"
Vue.use(VuePreview)


// 导入 vue-router 
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:5000';
Vue.http.options.emulateJSON = true;

// 定义全局的时间格式过滤器
import moment from "moment"
/* 
    参数1：过滤器调用名称
    参数2：处理函数(参数1：需要被过滤器处理的数据(页面待格式化的日期) 参数2：需要被格式化的格式)
*/
Vue.filter("dataFormat", (data, partent = "YYYY-MM-DD HH:mm:ss") => {
  return moment(data).format(partent);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
