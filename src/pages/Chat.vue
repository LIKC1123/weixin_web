<template>
  <div class="content">
    <div class="msglist">
      <Search></Search>
      <ChatListVue></ChatListVue>
    </div>
    <div class="chatbox">
      <Message></Message>
      <InputText></InputText>
    </div>
  </div>
  <!-- <div class="center">
    <Search></Search>
    <ChatListVue></ChatListVue>
    <div class="chatbox">
      <Message></Message>
    </div>
  </div> -->
</template>

<script>
import ChatListVue from "@/components/ChatList.vue";
import Search from "../components/Search.vue";
import Message from "../components/Message.vue";
import InputText from '../components/InputText.vue'
export default {
  name: "Chat",
  components: {
    Search,
    ChatListVue,
    Message,
    InputText,
  },
};
</script>

<style scoped lang="less">
.content {
  height: 600px;
  width: 945px;
}
.msglist {
  float: left;
  height: 540px;
  width: 250px;
  // border: 1px solid #000;
}
.chatbox {
  // flex: 12;
  float: right;
  height: 600px;
  width: 695px;
  // border: 1px solid #000;
  border-left: 1px solid rgb(214,214,214);
  background-color: rgb(245, 245, 245);
}
</style>