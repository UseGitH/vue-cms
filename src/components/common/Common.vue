<template>
    <div class="comments_container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多BB120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="pushComments">发表评论</mt-button>
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
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      commentsList: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(results => {
          if (results.body.status == 0) {
            this.commentsList = this.commentsList.concat(results.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getComments();
    },
    pushComments() {
      // 校验评论内容不为空
      if (this.msg.trim().length == 0) {
        return Toast("评论内容不能为空！");
      }
      this.$http
        .post("api/postcomment/" + this.id, { content: this.msg.trim() })
        .then(results => {
          let cmt = {
            user_name: "匿名用户",
            add_time: Date.now(),
            content: this.msg
          };
          this.commentsList.unshift(cmt);
          this.msg = "";
        });
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
