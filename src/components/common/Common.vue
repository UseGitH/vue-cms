<template>
    <div class="comments_container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多BB120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt" v-for="(item,i) in commentsList" :key="item.id">
            <div class="cmt_list">
            <div class="cmt_title">第{{i+1}}楼 用户：{{item.user_name}} 发表时间：{{item.add_time}}</div>
            <div class="cmt_content">{{item.content}}</div>
        </div>
        
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      commentsList: []
    };
  },
  created() {
    this.getComments();
    console.log(this.id);
    console.log(this.pageindex);
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(results => {
          console.log(results.body);
          if (results.body.status == 0) {
            this.commentsList = this.commentsList.concat(results.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getComments();
    }
  },
  props: ["id"]
};
</script>

<style lang="less" scoped>
.comments_container {
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt {
    margin-top: 20px;
    .cmt_list {
      font-size: 14px;
      line-height: 35px;
      .cmt_title {
        background-color: #ccc;
      }
      .cmt_content {
        text-indent: 2em;
        line-height: 40px;
      }
    }
  }
}
</style>
