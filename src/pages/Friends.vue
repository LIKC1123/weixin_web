<template>
  <div class="content">
    <div class="friend-wrapper">
      <Search></Search>
      <FriendList></FriendList>
    </div>
    <div class="friendinfo">
      <Info></Info>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import FriendList from "@/components/FriendList.vue";
import Info from "../components/Info.vue";
export default {
  name: "Friends",
  components: {
    Search,
    FriendList,
    Info,
  },
};
</script>

<style scoped lang="less">
.content {
  height: 600px;
  width: 945px;
}
.friend-wrapper {
  float: left;
  height: 540px;
  width: 250px;
}
.friendinfo {
  float: right;
  height: 600px;
  width: 695px;
  border-left: 1px solid rgb(214,214,214);
  background-color: rgb(245, 245, 245);
}
</style>