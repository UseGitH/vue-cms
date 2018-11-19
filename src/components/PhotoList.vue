<template>
    <div>
        
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0?'mui-active': '']" v-for="item in categories" :key="item.id" @click="getPhotoList(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>


        <!-- 图片列表 -->
        <ul class="photo_list">
            <li v-for="item in list" :key="item.id">
                <router-link :to="'/home/photoinfo/' + item.id">
                    <img v-lazy="item.img_url">
                    <div class="photo_info">
                        <h3 class="info_title">{{item.title}}</h3>
                        <div class="info_content">{{item.zhaiyao}}</div>
                    </div>  
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      categories: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(results => {
        if (results.body.status == 0) {
          results.body.message.unshift({ title: "全部", id: 0 });
          this.categories = results.body.message;
        }
      });
    },
    getPhotoList(cateid) {
      this.$http.get("api/getimages/" + cateid).then(results => {
        if (results.body.status == 0) {
          this.list = results.body.message;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo_list {
  list-style: none;
  margin: 0;
  padding: 0 10px;
  li {
    position: relative;
    margin-bottom: 20px;
    background: #ccc;
    text-align: center;
    box-shadow: 0 0 9px #999;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .photo_info {
      position: absolute;
      bottom: 0;
      color: #fff;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      .info_title {
        font-size: 16px;
      }
      .info_content {
        font-size: 13px;
      }
    }
  }
}
</style>

