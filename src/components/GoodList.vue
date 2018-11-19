<template>
    <div class="goodlist-container">
        <div class="goodlist">
            <div class="item-list">
                <img src="https://s10.mogucdn.com/mlcdn/c45406/181119_7l2e520cc15j9c6dhg0l26a2eakj7_226x302.png" alt="">
                <h1>小米8 屏幕指纹版</h1>
                <div class="item-content">
                    <p class="price">
                        <span class="new">￥2000</span>
                        <span class="old">￥3000</span>
                    </p>
                    <p class="num">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>

            <div class="item-list">
                <img src="https://s10.mogucdn.com/mlcdn/c45406/181119_7l2e520cc15j9c6dhg0l26a2eakj7_226x302.png" alt="">
                <h1>小米8 屏幕指纹版小米8 屏幕指纹版小米8 </h1>
                <div class="item-content">
                    <p class="price">
                        <span class="new">￥2000</span>
                        <span class="old">￥3000</span>
                    </p>
                    <p class="num">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>

            <div class="item-list">
                <img src="https://s10.mogucdn.com/mlcdn/c45406/181119_7l2e520cc15j9c6dhg0l26a2eakj7_226x302.png" alt="">
                <h1>小米8 屏幕指纹版</h1>
                <div class="item-content">
                    <p class="price">
                        <span class="new">￥2000</span>
                        <span class="old">￥3000</span>
                    </p>
                    <p class="num">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

