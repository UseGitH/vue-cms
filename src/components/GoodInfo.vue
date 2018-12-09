<template>
    <div class="goodinfo-container">
        
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>          
        </transition>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotulist="LoopPic" :isfull="false"></swiper>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{ goodInfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            市场价：<del>￥{{ goodInfo.market_price }}</del>&nbsp;
                            销售价：<span class="now_price">￥{{ goodInfo.sell_price }}</span>
                        </p>
                        <p>购买数量：<numberbox @getcount="selecedCount" :max="goodInfo.stock_quantity"></numberbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="ball">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ goodInfo.goods_no }}</p>
						<p>库存情况：{{ goodInfo.stock_quantity }}</p>
						<p>上架时间：{{ goodInfo.add_time }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(goodInfo.id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(goodInfo.id)">商品评论</mt-button>
                </div>
			</div>
           
    </div>
</template>

<script>
import swiper from "./common/lunbotuList";
import numberbox from "./common/NumberBox";
export default {
  data() {
    return {
      LoopPic: [], // 用来存放获取 轮播图  图片数据的数组
      id: this.$route.params.id,
      goodInfo: {},
      ballFlag: false,
      selectCount: 1
    };
  },
  created() {
    this.getBannerList();
    this.getGoodInfo();
  },
  methods: {
    getBannerList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          result.body.message.forEach(element => {
            // 由于在轮播图组件中是img属性，但是 获取接口数据中只有src，而两者的结果是一样的
            element.img = element.src;
          });
          this.LoopPic = result.body.message;
        } else {
          Toast("加载失败。。。");
        }
      });
    },
    getGoodInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(results => {
        if (results.body.status == 0) {
          this.goodInfo = results.body.message;
        }
      });
    },
    goDesc(id) {
      this.$router.push({ name: "gooddesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodcomments", params: { id } });
    },
    ball() {
      this.ballFlag = !this.ballFlag;

      // console.log(this);

      // 点击加入购物车，拼接出一个商品信息的对象
      const goods = {
        id: this.id,
        count: this.selectCount,
        price: this.goodInfo.sell_price,
        selected: true // 设置 加入购物车 的商品 是否被选中，默认是被选中
      };
      console.log(goods);
      // 调用 vuex中的mutations 中的 addToCar 方法 将商品信息存入 car数组
      this.$store.commit("addToCar", goods);

      // console.log(goods);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 获取动画小球 距离页面的 的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取购物车上 数量小球  距离页面的 位置
      const carPosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      // 获取 动画小球 距离 购物车数量小球的位置,(解决 滚动屏幕 动画小球不能到指定位置的问题)
      const xDist = carPosition.left - ballPosition.left;
      const yDist = carPosition.top - ballPosition.top;

      // console.log(xDist);
      // console.log(yDist);

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.8s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    selecedCount(count) {
      this.selectCount = count;
      // console.log(this.seleceCount);
    }
  },
  components: {
    swiper,
    numberbox
  }
};
</script>

<style lang="less" scoped>
.goodinfo-container {
  background-color: #eee;
  overflow: hidden;
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 388px;
    left: 157px;
    z-index: 11;
  }
}
.mui-card-footer {
  display: block;
  button {
    margin: 20px 0;
  }
}
.mui-card-content {
  p {
    color: #000;
    font-size: 16px;
  }
  .now_price {
    color: red;
  }
}
</style>

