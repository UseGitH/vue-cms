<template>
    <div class="newsInfo_container">
        <h1>{{newsInfoList.title}}</h1>
        <p class="subTitle">
            <span>发表时间：{{newsInfoList.add_time}}</span>
            <span>点击：{{newsInfoList.click}}次</span>
        </p>
        <hr>
        <div class="newsInfo_content">{{newsInfoList.content}}</div>

        <!-- 评论区 -->
        <comments-box :id="this.id"></comments-box>
    </div>
</template>

<script>
// 导入 发表评论组件
import comments from "./common/Common.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfoList: {}
    };
  },
  created() {
    this.getNewsInfoList();
  },
  methods: {
    getNewsInfoList() {
      this.$http.get("api/getnew/" + this.id).then(results => {
        if (results.body.status == 0) {
          this.newsInfoList = results.body.message;
        }
      });
    }
  },
  // 将 评论组件注册到 新闻详情页组件
  components: {
    "comments-box": comments
  }
};
</script>

<style lang="less" scoped>
.newsInfo_container {
  padding: 0 5px;
  h1 {
    font-size: 16px;
    color: red;
    text-align: center;
    margin: 15px 0;
  }
  .subTitle {
    font-size: 14px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
  .newsInfo_content {
    margin: 10px 0 20px 0;
  }
}
</style>

