<template>
    <div>
      <!-- 轮播图 模块 -->
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for="item in LoopPic" :key="item.img">
              <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

      <!-- 分类列表 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <router-link to="/home/newslist">
              <img src="../assets/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div>
            </router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                  <img src="../assets/menu2.png" alt="">
                  <div class="mui-media-body">图片分享</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                  <img src="../assets/menu3.png" alt="">
                  <div class="mui-media-body">商品购买</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                  <img src="../assets/menu4.png" alt="">
                  <div class="mui-media-body">留言反馈</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                  <img src="../assets/menu5.png" alt="">
                  <div class="mui-media-body">视频专区</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                  <img src="../assets/menu6.png" alt="">
                  <div class="mui-media-body">联系我们</div></a></li>
      </ul> 
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      LoopPic: [] // 用来存放获取 轮播图  图片数据的数组
    };
  },
  created() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status == 0) {
          this.LoopPic = result.body.message;
        } else {
          Toast("加载失败。。。");
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-of-type(1) {
      background-color: red;
    }
    &:nth-of-type(2) {
      background-color: green;
    }
    &:nth-of-type(3) {
      background-color: blue;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-table-view {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
  }
  .mui-table-view-cell {
    border: none;
  }
}
</style>

