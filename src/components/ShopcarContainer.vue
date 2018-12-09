<template>
    <div>
        <div class="goodslist-container">
            <div class="mui-card" v-for="item in getGoodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="goodInfo">
                            <h3>{{ item.title }}</h3>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numberbox class="swiper"></numberbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>

            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
					</div>
				</div>
			</div>

        </div>
    </div>
</template>

<script>
import numberbox from "./common/NumberBox";
export default {
  data() {
    return {
      getGoodsList: []
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      let idArr = [];
      // 获取 商品id数组作为参数传递
      this.$store.state.car.forEach(item => idArr.push(item.id));
      //   console.log(idArr);
      this.$http.get("api/goods/getshopcarlist/1").then(results => {
        console.log(results.body);
        //   if (results.body.status == 0) {
        //     this.getGoodsList = results.body.message;
        //   }
      });
    }
  },
  components: {
    numberbox
  }
};
</script>

<style scoped lang="less">
.goodslist-container {
  background: #eee;
  overflow: hidden;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
  .price {
    color: red;
    font-size: 16px;
  }
  .goodInfo {
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
    }
    h3 {
      font-size: 14px;
      text-align: center;
      margin-bottom: 10px;
    }
    .swiper {
      height: 30px;
    }
  }
}
</style>

