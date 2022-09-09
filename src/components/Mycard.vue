<template>
  <div>
    <div class="via">
      <img :src="user.img" alt="" />
    </div>
    <div class="navTop">
      <router-link
        to="/chat"
        class="icon iconfont icon-liaotian_jihuo"
      ></router-link>
      <router-link
        to="/friends"
        class="icon iconfont  icon-contacts-fill"
      ></router-link>
      <!-- <a href="#"><i class="iconfont icon-24gl-bubble"></i></a> -->
      <!-- <a href="#"><i class="iconfont icon-tongxunlu"></i></a> -->
      <a href="#"><i class="icon iconfont icon-shoucang1"></i></a>
      <a href="#"><i class="icon iconfont icon-wenjianjia"></i></a>
      <a href="#"><i class="icon iconfont icon-pengyouquan"></i></a>
      <a href="#"><i class="icon iconfont icon-gengduo"></i></a>
    </div>
    <div class="navBot">
      <a href="#"><i class="icon iconfont icon-xiaochengxu"></i></a>
      <a href="#"><i class="icon iconfont icon-shouji"></i></a>
      <!-- <a href="#"><i class="icon iconfont icon-gengduo1"></i></a> -->
      <router-link to="/sets" class="icon iconfont icon-gengduo1"></router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Mycard",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped lang="less">
.via {
  margin: 35px auto 27px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.icon {
  opacity: 0.8;
  cursor: pointer;
  box-sizing: border-box;
  &.active {
    color: rgb(0, 220, 65);
    // background-color: rgb(0, 220, 65);
  }
  &:hover {
    opacity: 1;
  }
}
.navTop {
  display: flex;
  height: 250px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .iconfont {
    font-size: 20px;
  }
}
.navBot {
  margin-top: 135px;
  display: flex;
  height: 100px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .iconfont {
    font-size: 20px;
  }
}
</style>