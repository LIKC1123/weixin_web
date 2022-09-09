<template>
  <div class="container">
    <div class="left">
      <Mycard></Mycard>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Mycard from "./components/Mycard.vue";
export default {
  name: "App",
  components: {
    Mycard,
  },
  mounted() {
    console.log("??????????????????????????????///")
    this.$store.dispatch('getData2')
    this.$store.dispatch('getData')
  },
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  height: 600px;
  width: 1000px;
  // border: 1px solid #000;

  .left {
    height: 600px;
    width: 55px;
    // border: 1px solid #000;
    background-color: rgb(46, 46, 46);
  }
  .main {
    height: 600px;
    width: 945px;
    border: 1px solid rgb(214, 214, 214);
  }
  .center {
    height: 600px;
    width: 250px;
    // border: 1px solid #000;
  }
  .right {
    // flex: 12;
    height: 600px;
    width: 695px;
    // border: 1px solid #000;
    background-color: rgb(245, 245, 245);
  }
}
</style>