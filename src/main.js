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


/* 
  vuex: 是Vue 配套的 公共数据管理工具，它可以把一些共享的数据，保存到 vuex中，方便整个程序中的任何组件直接获取 或者 修改公共的数据

  vuex使用步骤：
    1、安装 vuex 工具  npm i vuex -S
    2、导入 vuex 工具  import Vuex from "vuex"
    3、注册 vuex 工具  Vue.use(Vuex)
    4、创建 store 实例
    5、将创建的store实例挂载到VM实例上

*/
import Vuex from "vuex";
Vue.use(Vuex);

// 当页面加载出来的时候要将 localStorage 中的 car 数据拿出来 存放在 state中的car数组中
let car = JSON.parse(localStorage.getItem("car") || "[]"); // 将JSON字符串转成数组

// 创建 store 实例
const store = new Vuex.Store({
  state: {
    // state 相当于组件中的data 用来存放共享的数据，程序上的任何组件可以通过，this.$store.state.数据名 来获取数据

    // 定义 car数组，存放加入购物车的商品信息
    car
  },
  mutations: {
    // mutations 相当于组件中的methods 用来控制组件修改 state中的数据，如果组件需要操作 state中的值，只能通过 调用mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为每一个组件都可以去操作state中的值，这样会造成数据的紊乱，而不能快速定位到错误的原因，因为每一个组件操作数据的方法不用
    // 组件只能使用  this.$store.commit("方法名",参数二为按需传递)只有两个参数，如果需要传递多个参数则可以在参数二中传递一个对象 ，对象中包括多个参数


    // 在 mutations 中 定义 加入商品信息到car的方法
    addToCar(state, goods) {
      // 需要判断 car数组中是否已经存在 加入购物车的商品
      // 假设 当前 car数组中 不存在一样的商品
      let flag = false;

      // 在car数组中 找有没有存在的商品id，如果找到 则return true 结束循环
      state.car.some(item => {
        if (item.id == goods.id) {
          item.count += parseInt(goods.count);
          flag = true;
          return true;
        }
      })

      if (!flag) {
        state.car.push(goods);
      }

      // 当更新完car数组之后 需要将数据存放在localStorage中去，不然的话每次刷新页面都会被清空
      localStorage.setItem("car", JSON.stringify(state.car))
    }

  },
  getters: {  // 通过 this.$store.getters.*** 调用
    // getters 只负责对外提供数据，不负责修改数据，如果想要修改 state中的数据，只能去找 mutations
    // 例： optCount: function(state) {
    //   return "当前最新的count值是：" + state.count
    // }

    // 定义 一个计算属性，当 car数组中的商品数量发生改变时，getters会自动计算
    // 获取了加入购物车的商品全部数量之后 在购物车标签调用，显示商品数量
    getAllCount(state) {
      var count = 0;
      state.car.forEach(item => {
        // console.log(item);
        count += item.count;
      })
      // console.log(count);
      return count
    }
  }
})


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
  store,// 在 VM 上挂载 vuex的store状态管理对象
  components: { App },
  template: '<App/>'
})
