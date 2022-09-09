<!-- 文本输入框 -->
<template>
  <div class="chatInput">
    <div class="tool">
      <div class="left">
        <i class="icon iconfont icon-biaoqing1"></i>
        <i class="icon iconfont icon-wenjianjia"></i>
        <i class="icon iconfont icon-5jietu-1"></i>
        <i class="icon iconfont icon-liaotian"></i>
      </div>
      <div class="right">
        <i class="icon iconfont icon-dianhua"></i>
        <i class="icon iconfont icon-shipin"></i>
      </div>
    </div>
    <textarea ref="text" v-model="content" @keyup="onKeyup"></textarea>
    <button class="fs" @click="send">发送(S)</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "InputText",
  computed: {
    ...mapState(["selectId"]),
    ...mapGetters(["selectedChat"]),
  },
  data() {
    return {
      content: "",
      reply: "未找到",
      frequency: 0,
      showEmoji: false,
    };
  },
  methods: {
    // 按回车发送信息
    onKeyup(e) {
      if (e.keyCode === 13) {
        this.send();
      }
    },
    // 点击发送按钮发送信息
    send() {
      if (this.content.lenght <= 1) {
        this.content = "";
      } else {
        var msg = {
          content: this.content,
        };
        this.$store.dispatch("sendMessage", msg);
        this.content = ''
      }
    },
  },
  // 在进入的时候 聚焦输入框
  mounted() {
    this.$refs.text.focus();
  },
  watch: {
    // 在选择其它对话的时候 聚焦输入框
    selectId() {
      setTimeout(() => {
        this.$refs.text.focus();
      }, 0);
    },
  },
};
</script>

<style scoped lang="less">
.chatInput {
  position: relative;
  padding: 0 28px;
  height: 148px;
  border-top: 1px solid rgb(214, 214, 214);
  .tool {
    position: relative;
    height: 40px;
    line-height: 40px;
    // background-color: #fff;
    .icon {
      opacity: 0.8;
      cursor: pointer;
      &.active {
        color: rgb(0, 220, 65);
      }
      &:hover {
        opacity: 1;
      }
    }
    .left {
      position: absolute;
      left: 0;
      display: flex;
      justify-content: space-between;
      width: 115px;
      color: #000;
      .iconfont {
        // font-weight: 600;
        font-size: 18px;
        cursor: pointer;
      }
    }
    .right {
      position: absolute;
      right: 0;
      display: flex;
      justify-content: space-between;
      width: 45px;
      color: #000;
      .iconfont {
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
  textarea {
    height: 50px;
    width: 103%;
    border: none;
    outline: none;
    resize: none;
    font-family: "Micrsofot Yahei";
    font-size: 16px;
    line-height: 1.7;
    background-color: rgb(245, 245, 245);
  }
  .fs {
    position: absolute;
    right: 30px;
    bottom: 13px;
    height: 35px;
    width: 100px;
    color: rgb(7, 193, 96);
    border: none;
    border-radius: 5px;
    background-color: rgb(233, 233, 233);
    &:hover {
      background-color: rgb(210,210,210);
    }
  }
}
</style>