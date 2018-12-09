<template>
    <div class="goodDesc-container">
        <h3>{{ desc.title }}</h3>
        <hr>
        <div class="content" v-html="desc.content"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      desc: {}
    };
  },
  created() {
    this.getDesc();
  },
  methods: {
    getDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(results => {
          if (results.body.status == 0) {
            this.desc = results.body.message;
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.goodDesc-container {
  padding: 5px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    line-height: 25px;
  }
}
</style>

