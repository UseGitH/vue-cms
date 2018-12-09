<template>
    <div>
        <!-- 轮播图 模块 -->
        <mt-swipe :auto="5000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
              <img :src="item.img" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  // 父组件向子组件传值
  props: ["lunbotulist", "isfull"]
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
  }
  img {
    // width: 100%;
    height: 100%;
  }
  .full {
    width: 100%;
  }
}
</style>

