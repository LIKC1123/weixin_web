<template>
  <div class="search">
    <a href="#"><i class="iconfont icon-sousuo"></i></a>
    <input type="text" placeholder="搜索" v-model="search" @keyup="change" />
    <button class="iconfont icon-zengjia" v-show="noText"></button>
    <button
      class="iconfont icon-yuyinguanbi"
      v-show="haveText"
      @click="del"
    ></button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
      active: false,
    };
  },
  computed: {
    noText() {
      if (this.search === "") return true;
      return false;
    },
    haveText() {
      if (this.search === "") return false;
      return true;
    },
  },
  methods: {
    change() {
      this.$store.dispatch("search", this.search);
    },
    del() {
      this.search = "";
      this.change();
    },
  },
};
</script>

<style scoped lang="less">
.search {
  position: relative;
  padding-top: 23px;
  padding-left: 10px;
  height: 60px;
  // width: 205px;
  background-color: rgb(247, 247, 247);
  a {
    position: absolute;
    left: 16px;
    top: 25px;
    color: #000;
  }
  input {
    padding-left: 30px;
    width: 190px;
    height: 25px;
    border: none;
    border-radius: 8px;
    background-color: rgb(226, 226, 226);
    vertical-align: text-top;
    outline: none;
  }
  button {
    margin-left: 12px;
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 5px;
    background-color: rgb(226, 224, 223);
    &:hover {
      background-color: rgb(209, 209, 209);
    }
    // font-size: 20px;
  }
}
</style>