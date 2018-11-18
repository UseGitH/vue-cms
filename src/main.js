// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//  导入所需 mint-ui  组件
import { Header, Swipe, SwipeItem } from "mint-ui"
//  导入mint-ui样式文件
import "mint-ui/lib/style.css"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//  导入 MUI 组件库
import "../lib/mui/css/mui.min.css"
//  导入 MUI扩展字体图标样式 (必须还要引入mui-icons-extra.ttf)
import "../lib/mui/css/icons-extra.css"
import "../lib/mui/fonts/mui-icons-extra.ttf"

Vue.config.productionTip = false


// 导入 vue-router 
import VueResource from "vue-resource"
Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
