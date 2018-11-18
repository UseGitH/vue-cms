import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import HomeContainer from "../components/HomeContainer.vue"
import MemberContainer from "../components/MemberContainer.vue"
import ShopcarContainer from "../components/ShopcarContainer.vue"
import SearchContainer from "../components/SearchContainer.vue"

export default new Router({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer },
    ],
    linkActiveClass: "mui-active"
})
