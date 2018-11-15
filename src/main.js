// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//  导入所需 mint-ui  组件
import { Header } from "mint-ui"
//  导入mint-ui样式文件
import "mint-ui/lib/style.css"
Vue.component(Header.name, Header)

//  导入 MUI 组件库
import "../lib/mui/css/mui.min.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
