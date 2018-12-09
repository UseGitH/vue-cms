<template>
    <div class="goodlist-container">
        <div class="goodlist">
            <!-- 
                页面跳转的两种方法
                    1、使用a链接的href属性进行跳转
                    2、在js中 使用 window.location.href 编程导航进行跳转
             -->
            <div class="item-list" v-for="item in goodlist" :key="item.id" @click="goDetail(item.id)">
                <img :src="item.img_url" alt="">
                <h1>{{ item.title }}</h1>
                <div class="item-content">
                    <p class="price">
                        <span class="new">￥{{ item.sell_price }}</span>
                        <span class="old">￥{{ item.market_price }}</span>
                    </p>
                    <p class="num">
                        <span>热卖中</span>
                        <span>剩余{{ item.stock_quantity }}件</span>
                    </p>
                </div>
            </div>

            <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodlist: []
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    getGoodList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(results => {
          if (results.body.status == 0) {
            // 需要使用数组的拼接方法 concat 来拼接数据，因为在点击加载更多的时候是将下一页的数据拼接在上一页的后面
            this.goodlist = this.goodlist.concat(results.body.message);
          }
        });
    },
    getMore() {
      console.log(1);
      this.pageindex++;
      this.getGoodList();
    },
    goDetail(id) {
      // 使用 js 形式进行路由导航
      /* 
            区分 this.$route  和  this.$router 俩个对象
            this.$route 是路由的 【参数对象】 所有的路由参数 比如：params，query
            this.$router 是路由的 【导航对象】 可以实现使用 js代码 进行路由的 前进 后退 和 跳转到新的URL地址
        */

      // push方法进行路由的跳转
      // 方式一：
      //   this.$router.push("/home/goodinfo/" + id);

      // 方式二：
      //   this.$router.push({ path: "/home/goodinfo/" + id });

      // 方式三：name属性是路由规则中的name属性 params属性不能和path 属性一同使用
      this.$router.push({ name: "goodinfo", params: { id: id } });
    }
  }
};
</script>


<style lang="less" scoped>
.goodlist-container {
  .goodlist {
    padding: 7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item-list {
      padding: 2px;
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px #999;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 18px;
      }
      img {
        width: 100%;
      }
      p {
        margin: 0;
        padding: 5px;
      }
      .item-content {
        background-color: #eee;
        .new {
          color: red;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 13px;
        }
        .num {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>

