<template>
  <div>
    <div class="header" :class="{t:selectedFriend?.id === 0}">
      <div class="nickname" v-show="selectedFriend?.id === 0">{{selectedFriend?.nickname}}</div>
      <ul class="gn">
        <li><i class="iconfont icon-yuyinguanbi"></i></li>
        <li><i class="iconfont icon-zuidahua"></i></li>
        <li><i class="iconfont icon-2zuixiaohua-2"></i></li>
      </ul>
    </div>
    <div class="librarian" v-show="selectedFriend?.id > 0">
      <div class="esInfo">
        <!-- 头像 -->
        <div class="left">
          <div class="tx">
            <img
              :src="selectedFriend?.img"
              alt=""
              style="width: 100%; border-radius: 5px"
            />
          </div>
        </div>
        <div class="right">
          <div class="username">
            <p style="float: left; font-size: 16px; color: #000">{{selectedFriend?.remark}}</p>
            <img src="../assets/man.png" alt="" v-if="selectedFriend?.sex===1" />
            <img src="../assets/woman.png" alt="" v-if="selectedFriend?.sex===0" />
            <div class="icon iconfont icon-gengduo2"></div>
          </div>
          <p>昵称:&nbsp;&nbsp;{{selectedFriend?.nickname}}</p>
          <p>微信号:&nbsp;&nbsp;{{selectedFriend?.wxid}}</p>
          <p>地区:&nbsp;&nbsp;{{selectedFriend?.area}}</p>
        </div>
      </div>
      <div class="detInfo">
        <!-- 资料 -->
        <div class="left">
          <p>备注名:&nbsp;&nbsp;</p>
          <p>来源:&nbsp;&nbsp;</p>
        </div>
        <div class="right">
          <p>{{selectedFriend?.remark}}</p>
          <p>{{selectedFriend?.wxf}}</p>
        </div>
      </div>
      <!-- 发送 -->
      <div class="send">
        <button @click="send">发消息</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Info",
  computed: {
    ...mapState(["user"]),
    ...mapGetters([
      'selectedFriend',
    ])
  },
  methods: {
    send() {
      this.$store.dispatch('send')
    }
  },
  mounted() {

  },
};
</script>

<style scoped lang="less">
.header {
  position: relative;
  height: 60px;
  overflow: hidden;
  &.t{
    border-bottom: 1px solid #e9e9e9;
  }
  .nickname{
    float: left;
    line-height: 60px;
    font-size: 20px;
    padding-left: 20px;
  }
  .gn {
    float: right;
    li {
      float: right;
      text-align: center;
      width: 33px;
      height: 25px;
      line-height: 25px;
      cursor: pointer;
      &:hover {
        background-color: rgb(226, 226, 226);
      }
      .iconfont {
        font-size: 13px;
      }
    }
    // :hover {
    //   background-color: rgb(226, 226, 226);
    // }
  }

  .more {
    // display: inline-block;
    position: absolute;
    right: 5px;
    top: 27px;
    cursor: pointer;
  }
}
.librarian {
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 5px;
  height: 300px;
  width: 370px;
  // border: 1px solid #000;
  .esInfo {
    display: flex;
    flex: 1;
    border-bottom: 1px solid rgb(233, 233, 233);
    .left {
      flex: 1.3;
      padding-top: 5px;
      // background-color: pink;
      .tx {
        margin: 0 auto;
        height: 65px;
        width: 65px;
        // border-radius: 10px;
      }
    }
    .right {
      flex: 4;
      display: flex;
      flex-direction: column;
      padding: 5px;

      .username {
        position: relative;
        flex: 1.3;
        vertical-align: baseline;
        img {
          float: left;
          width: 20px;
          height: 20px;
        }
        .icon {
          width: 22px;
          height: 22px;
          background-color: rgb(245, 245, 245);
          position: absolute;
          right: 0;
          font-size: 22px;
          &:hover {
            background-color: rgb(221, 221, 221);
          }
        }
      }
      p {
        flex: 1;
        height: 20px;
        font-size: 12px;
        color: rgba(153, 153, 153, 0.8);
      }
    }
  }
  .detInfo {
    flex: 1;
    display: flex;
    border-bottom: 1px solid rgb(233, 233, 233);

    .left {
      flex: 1.3;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 15px 0;
      p {
        flex: 1;
        line-height: 2;
        color: rgba(153, 153, 153, 0.8);
      }
    }
    .right {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 15px 0;
      p {
        flex: 1;
        line-height: 2;
        // color: rgba(153, 153, 153, 0.8);
      }
    }
  }
  .send {
    flex: 1;
    position: relative;
    button {
      position: absolute;
      // text-align: center;
      // line-height: 35px;
      height: 35px;
      width: 100px;
      border-radius: 5px;
      border: none;
      font-size: 17px;
      color: #fff;
      background-color: rgba(7, 193, 96, 1);
      top: 23px;
      left: 35%;
      &:hover {
        background-color: rgba(7, 193, 96, 0.8);
      }
    }
  }
}
</style>margin: 10px auto;