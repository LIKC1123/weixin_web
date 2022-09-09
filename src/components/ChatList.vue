<!-- 聊天列表 -->
<template>
  <div class="msglist">
    <ul>
      <li
        class="sessionlist"
        v-for="item in searchedChatlist"
        :class="{ active: item.id === selectId }"
        @click="selectSession(item.id)"
      >
        <div class="list-left">
          <img
            class="avatar"
            :src="item.user.img"
            alt=""
            style="width: 40px; height: 40px"
          />
        </div>
        <div class="list-right">
          <p class="name">{{ item.user.name }}</p>
          <span class="time">{{
            item.messages[item.messages.length - 1].date | time
          }}</span>
          <p class="lastmsg">
            {{ item.messages[item.messages.length - 1].content }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "ChatList",
  computed: {
    ...mapState(["selectId"]),
    ...mapGetters(["searchedChatlist"]),
  },
  mounted() {
    // this.$store.dispatch('getData2')
    // this.$store.dispatch('getData')
  },
  methods: {
    ...mapActions([
      'selectSession',
    ])
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
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
.msglist {
  height: 538px;
  background-color: rgb(226, 224, 223);
  overflow-y: auto;
  overflow: hidden;
  .sessionlist {
    display: flex;
    padding: 12px;
    transition: background-color 0.1s;
    font-size: 0;
    &:hover {
      background-color: rgb(220, 220, 220);
    }
    &.active {
      background-color: #c4c4c4;
    }
    .avatar {
      border-radius: 2px;
      margin-right: 12px;
    }
    .list-right {
      position: relative;
      flex: 1;
      margin-top: 4px;
      .name {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
      }
      .time {
        float: right;
        color: #999;
        font-size: 10px;
        vertical-align: top;
      }
      .lastmsg {
        position: absolute;
        font-size: 12px;
        width: 130px;
        height: 15px;
        line-height: 15px;
        color: #999;
        bottom: 0px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>