<template>
  <div class="container">
    <div class="content">
      <ul class="con">
        <li @click="changex" :class="chan">账号设置</li>
        <li @click="changex1" :class="chan1">消息通知</li>
        <li @click="changex2" :class="chan2">通用设置</li>
      </ul>
      <div class="main">
        <!-- 账号设置 -->
        <div class="userSet" v-show="shopShow">
          <div class="top">
            <img :src="user.img" alt="" />
            <div class="NameCo">
              <p style="font-size: 20px">{{ user.name }}</p>
              <p
                style="
                  font-size: 13px;
                  color: rgb(158, 158, 158);
                  margin-top: 10px;
                "
              >
                微信号:{{ user.id }}
              </p>
            </div>
          </div>
          <div class="bott">
            <p>自动登录&nbsp;&nbsp;&nbsp;&nbsp;未开启</p>
            <div class="neirong">
              开启后，在本机登录微信将无需手机确认。可在手机上开启
            </div>
          </div>

          <button>退出登录</button>
        </div>
        <!-- 消息通知 -->
        <div class="notification" v-show="shopShow1">
          <ul class="noti">
            <li><p>通知声音</p></li>
            <li>
              新消息通知声音
              <el-switch
                v-model="n.value1"
                active-color="#13ce66"
                inactive-color="#E4E7ED"
              ></el-switch>
            </li>
            <li>
              语音和视屏通话通知声音
              <el-switch
                v-model="n.value2"
                active-color="#13ce66"
                inactive-color="#E4E7ED"
              ></el-switch>
            </li>
            <li><p>通知标记</p></li>
            <li style="padding-left: 30px">
              <i class="icon iconfont icon-pengyouquan"></i>
              朋友圈
              <el-switch
                v-model="n.value3"
                active-color="#13ce66"
                inactive-color="#E4E7ED"
              ></el-switch>
            </li>
            <li style="padding-left: 30px">
              <i class="icon iconfont icon-souyisou"></i>
              看一看
              <el-switch
                v-model="n.value4"
                active-color="#13ce66"
                inactive-color="#E4E7ED"
              ></el-switch>
            </li>
            <li><p>有内容更新时，侧边栏中该功能图标将出现标记提示</p></li>
          </ul>
        </div>
        <!-- 通用设置 -->
        <div class="general" v-show="shopShow2">
          <ul class="gen">
            <li>
              <span style="padding-right: 40px">语言</span>
              <el-select v-model="v.value" placeholder="请选择" size="50">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </li>
            <li>
              <span style="padding-right: 40px">通用</span>
              <el-checkbox v-model="n.checked1" class="we"
                >有更新时自动升级微信</el-checkbox
              >
            </li>
            <li>
              <span class="ss"></span>
              <el-checkbox v-model="n.checked2" color=""
                >开机时自动打开微信</el-checkbox
              >
            </li>
            <li>
              <span class="ss"></span>
              <el-checkbox v-model="n.checked3">保存聊天记录</el-checkbox>
            </li>
            <li>
              <span class="ss"></span>
              <el-checkbox v-model="n.checked4">适配系统缩放比例</el-checkbox>
            </li>
            <li>
              <span class="ss"></span>
              <el-checkbox v-model="n.checked5"
                >使用系统默认浏览器打开网页</el-checkbox
              >
            </li>
            <li>
              <span class="ss"></span>
              <el-checkbox v-model="n.checked6"
                >聊天中的语音信息自动转成文字</el-checkbox
              >
            </li>
          </ul>
          <button>清空聊天记录(316.0M)</button>
          <button>存储空间管理</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Sets",
  data() {
    return {
      shopShow:true,
      shopShow1:false,
      shopShow2:false,
      chan:'you',
      chan1:'wu',
      chan2:'wu'
    }
  },
  methods: {
    changex() {
      this.shopShow1 = false
      this.shopShow2 = false
      this.shopShow = true
      this.chan = 'you'
      this.chan1 = 'wu'
      this.chan2 = 'wu'
    },
    changex1() {
      this.shopShow = false
      this.shopShow2 = false
      this.shopShow1 = true
      this.chan = 'wu'
      this.chan1 = 'you'
      this.chan2 = 'wu'
    },
    changex2() {
      this.shopShow1 = false
      this.shopShow = false
      this.shopShow2 = true
      this.chan = 'wu'
      this.chan1 = 'wu'
      this.chan2 = 'you'
    }
  },
  computed: {
    ...mapState(["user", "n", "v", "options"]),
    ...mapMutations(["initData"]),
  },
};
</script>

<style scoped lang="less">
/deep/.el-checkbox__inner {
    background-color: rgb(232, 231, 226);
    border-color: #000;
}
/deep/.el-checkbox__label {
  color: #000;
}
.you{
  border-right: 1px solid rgb(23, 209, 113);
}
.wu {
  border: none;
}
.container {
  width: 945px;
  background-color: rgb(245, 245, 245);
  .content {
    padding-top: 70px;
    padding-left: 20px;
    margin: 50px auto;
    width: 550px;
    height: 470px;
    // background-color: pink;
    box-shadow: 0 0 5px rgba(211, 206, 206, 0.5);
    .con {
      float: left;
      height: 400px;
      width: 100px;
      border-right: 1px solid rgb(227, 227, 227);
      li {
        // margin-top: 10px;
        line-height: 1.8;
        width: 100px;
        cursor: pointer;
      }
    }
    .main {
      float: left;
      width: 430px;
      height: 400px;
      // background-color: pink;
      .userSet {
        .top {
          border-radius: 5px;
          margin: 0 auto;
          height: 150px;
          width: 340px;
          background-color: #fff;
          img {
            float: left;
            margin: 45px 15px;
            width: 60px;
            height: 60px;
            border-radius: 3px;
          }
          .NameCo {
            float: left;
            margin-top: 45px;
            height: 60px;
          }
        }
        .bott {
          height: 125px;
          p {
            // display: inline-block;
            margin: 20px 80px;
          }
          .neirong {
            margin-top: -10px;
            margin-left: 163px;
            width: 240px;
            font-size: 13px;
            color: rgb(158, 158, 158);
          }
        }
        button {
          margin: 0 165px;
          width: 105px;
          height: 35px;
          border: none;
          background-color: rgb(233, 233, 233);
          border-radius: 5px;
          &:hover {
            background-color: rgb(210, 210, 210);
          }
        }
      }
      .notification {
        .noti {
          margin-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 285px;
          p {
            font-size: 13px;
            color: rgb(158, 158, 158);
          }
          li {
            position: relative;
            display: flex;
            padding-right: 60px;
            justify-content: space-between;
            .icon {
              position: absolute;
              top: 2px;
              left: 0;
              color: rgb(158, 158, 158);
            }
          }
        }
      }
      .general {
        padding-left: 100px;
        .gen {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 210px;
          .ss {
            padding-right: 72px;
          }
        }
        button {
          margin-left: 70px;
          margin-top: 20px;
          display: block;
          padding: 10px;
          height: 35px;
          border-radius: 5px;
          border: none;
          background-color: rgb(233, 233, 233);
          &:hover {
            background-color: rgb(210, 210, 210);
          }
        }
      }
    }
  }
}
</style>
