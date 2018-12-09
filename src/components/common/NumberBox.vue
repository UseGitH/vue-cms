<template>

        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="getValue" ref="input" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getValue() {
      console.log(parseInt(this.$refs.input.value));
      this.$emit("getcount", parseInt(this.$refs.input.value));
    }
  },
  // 父组件传递过来的max是通过异步操作获取的库存数量，可能不会在 numberbox组件 渲染之前得到库存数据，这时的 max 的值为undefined，并不能获取到库存数量的值，这时 需要通过 watch 来监听 max的 改变，并且通过 mui的number box的 js api设置最大值
  props: ["max"],
  watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="less" scoped>
</style>

