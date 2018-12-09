<template>
    <div>
        <comment :id="this.$route.params.id"></comment>
    </div>
</template>

<script>
import comment from "./common/Common";
export default {
  components: {
    comment
  }
};
</script>

<style lang="less" scoped>
</style>

