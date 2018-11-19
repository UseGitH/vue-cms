import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import HomeContainer from "../components/HomeContainer.vue"
import MemberContainer from "../components/MemberContainer.vue"
import ShopcarContainer from "../components/ShopcarContainer.vue"
import SearchContainer from "../components/SearchContainer.vue"
import NewsList from "../components/NewsList.vue"
import newsinfo from "../components/NewsInfo.vue"
import PhotoList from "../components/PhotoList.vue"
import PhotoInfo from "../components/PhotoInfo.vue"
import GoodList from "../components/GoodList.vue"

export default new Router({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer },
        { path: "/home/newslist", component: NewsList },
        { path: "/home/newsinfo/:id", component: newsinfo },
        { path: "/home/photolist", component: PhotoList },
        { path: "/home/photoinfo/:id", component: PhotoInfo },
        { path: "/home/goodlist", component: GoodList }
    ],
    linkActiveClass: "mui-active"
})
