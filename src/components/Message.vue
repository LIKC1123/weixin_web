<template>
  <div>
    <div class="header">
      <div class="conwin">
        <ul class="gn">
          <li><i class="iconfont icon-yuyinguanbi"></i></li>
          <li><i class="iconfont icon-zuidahua"></i></li>
          <li><i class="iconfont icon-2zuixiaohua-2"></i></li>
        </ul>
      </div>
      <i class="iconfont icon-gengduo2 more" style="font-size: 20px"></i>
      <div class="bigname">
        <h2>{{ selectedChat?.user?.name }}</h2>
      </div>
    </div>
    <div class="content" ref="list">
      <ul v-if="selectedChat">
        <li v-for="(item, i) in selectedChat.messages" :key="i">
          <div class="time">
            <span>{{ selectedChat.messages[i].date | time }}</span>
          </div>
          <div class="main" :class="{ self: item.self }">
            <img
              class="avater"
              style="width: 36px; height: 36px"
              :src="item.self ? user.img : selectedChat.user.img"
              alt=""
            />
            <div class="contents">
              <div class="text" v-html="replaceFace(item.content)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Message",
  data() {
    return {
      abc: false,
    };
  },
  computed: {
    ...mapGetters(["selectedChat", "messages"]),
    ...mapState(["user", "chatlist"]),
  },
  methods: {
    replaceFace(con) {
      return con;
    },
  },
  mounted() {
    // this.$store.dispatch("getData");
    // this.$store.dispatch("getData2");
    //  在页面加载时让信息滚动到最下面
    setTimeout(
      () => (this.$refs.list.scrollTop = this.$refs.list.scrollHeight),
      0
    );
  },
  watch: {
    // 发送信息后,让信息滚动到最下面
    messages() {
      setTimeout(
        () => (this.$refs.list.scrollTop = this.$refs.list.scrollHeight),
        0
      );
    },
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
      console.log("time的++", date);
      if (typeof date === "string") {
        date = new Date(date);
      }
      if (date.getMinutes() < 10) {
        return date.getHours() + ":0" + date.getMinutes();
      } else {
        return date.getHours() + ":" + date.getMinutes();
      }
    },
  },
};
</script>

<style scoped lang="less">
.header {
  position: relative;
  height: 60px;
  // border-bottom: 1px solid #000;
  border-bottom: 1px solid rgb(214, 214, 214);
  overflow: hidden;
  .bigname {
    margin: 5px 0 0 6px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 90px;
    // border: 1px solid #000;
    h2 {
      font-size: 20px;
      font-weight: normal;
      cursor: pointer;
    }
  }
  .gn {
    li {
      float: right;
      text-align: center;
      width: 33px;
      height: 25px;
      line-height: 25px;
      cursor: pointer;
      // background-color: pink;

      .iconfont {
        font-size: 13px;
      }
    }
    :hover {
      background-color: rgb(226, 226, 226);
    }
  }

  .more {
    // display: inline-block;
    position: absolute;
    right: 5px;
    top: 27px;
    cursor: pointer;
  }
}
.content {
  height: 392px;
  padding: 10px 15px;
  overflow-y: auto;
  .time {
    width: 100%;
    font-size: 12px;
    margin: 7px auto;
    text-align: center;
    span {
      display: inline-block;
      padding: 4px 6px;
      color: #fff;
      border-radius: 3px;
      background-color: #dcdcdc;
    }
  }
  .main {
    .avater {
      float: left;
      margin-left: 15px;
      border-radius: 3px;
    }
    .contents {
      display: inline-block;
      margin-left: 10px;
      position: relative;
      padding: 6px 10px;
      max-width: 330px;
      min-height: 36px;
      line-height: 24px;
      box-sizing: border-box;
      font-size: 14px;
      text-align: left;
      word-break: break-all;
      background-color: #fafafa;
      border-radius: 4px;
      &:before {
        content: "";
        position: absolute;
        top: 12px;
        right: 100%;
        border: 6px solid transparent;
        border-right-color: #fafafa;
      }
    }
  }
  .self {
    text-align: right;
    .avater {
      float: right;
      margin: 0 15px;
    }
    .contents {
      background-color: #b2e281;
      &:before {
        right: -12px;
        vertical-align: middle;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>