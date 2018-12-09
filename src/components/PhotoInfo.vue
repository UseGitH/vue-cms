<template>
    <div class="photoInfo_container">
        <h1>{{phtoInfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间：{{phtoInfo.add_time}}</span>
            <span>点击：{{phtoInfo.click}}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <vue-preview :slides="slide1"></vue-preview>

        <div class="content">{{phtoInfo.content}}</div>
        <cmt-box></cmt-box>
    </div>
</template>

<script>
import comments from "../components/common/Common.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      phtoInfo: {},
      slide1: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getSuo();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(results => {
        if (results.body.status == 0) {
          this.phtoInfo = results.body.message;
        }
      });
    },
    getSuo() {
      this.$http.get("api/getthumimages/" + this.id).then(results => {
        if (results.body.status == 0) {
          results.body.message.forEach(item => {
            (item.w = 600), (item.h = 500), (item.msrc = item.src);
          });
        }
        this.slide1 = results.body.message;
      });
    }
  },
  components: {
    "cmt-box": comments
  }
};
</script>

<style lang="less">
.photoInfo_container {
  padding: 0 10px;
  h1 {
    font-size: 18px;
    margin: 15px 0;
    text-align: center;
    color: blue;
  }
  .subtitle {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    margin-bottom: 25px;
  }
  .my-gallery {
    display: flex;
    flex-wrap: nowrap;
  }
  .my-gallery figure {
    margin: 0px;
    margin-left: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #ccc;
  }
  .my-gallery figure img {
    width: 100px;
    vertical-align: middle;
  }
}
</style>
