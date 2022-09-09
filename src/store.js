import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
Vue.use(Vuex)


const state = {
    // 输入的搜索值
    searchText: '',
    // 当前用户
    user: {
        id: 'Lick1123',
        name: 'Ratel',
        img: './static/images/tx.jpg'
    },
    // 对话好友列表
    chatlist: [],
    friendlist: [],
    // 得知当前选择的是哪个对话
    selectId: 1,
    selectFriendId: 0,
    // 设置信息
    n: {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        checked7: true,
    },
    v: {
        value: '简体中文'
    },
    options: [
        {
            value: "选项1",
            label: "简体中文",
        },
        {
            value: "选项2",
            label: "English",
        },
        {
            value: "选项3",
            label: "繁体中文",
        },
    ],

}

const mutations = {
    // 从localStorage 中获取数据
    initData(state) {
        let data = localStorage.getItem('n');
        if (data) {
            state.n = JSON.parse(data) || [];
        }
    },
    initData2(state) {
        let data2 = localStorage.getItem('v');
        if (data2) {
            state.v = JSON.parse(data2) || [];
        }
    },
    // 获取搜索值
	search (state, value) {
        state.searchText = value
     },
    // 得知用户当前选择的是哪个对话。便于匹配对应的对话框
    selectSession(state, value) {
        state.selectId = value
    },
    // 得知用户当前选择的是哪个好友。
    selectFriend(state, value) {
        state.selectFriendId = value
    },
    // 发送信息
    sendMessage(state, msg) {
        let result = state.chatlist.find(session => session.id === state.selectId);
        result.messages.push({
            content: msg.content,
            date: new Date(),
            self: true
        });
    },

    set_Data(state,datas) {
        state.friendlist = datas
    },
    set_chatData(state,datas) {
        state.chatlist = datas
    },
    // 判断聊天列表红是否有，没有则加入，有直接跳转
    send(state) {
        let result = state.friendlist.find(friend => friend.id === state.selectFriendId)
        let msg = state.chatlist.find(msg => msg.user.name === result.remark)
        console.log("HHHH", result, msg)
        if (!msg) {
            state.selectId = 1
            for (let i = 0; i < state.chatlist.length; i++) {
                state.chatlist[i].id++;
                state.chatlist[i].index++;
            }
            
            state.chatlist = [{
                id: 1,
                user: {
                    name: result.remark,
                    img: result.img
                },
                messages: [
                    {
                        content: '你好',
                        date: new Date()
                    }
                ]}, ...state.chatlist];

            router.push({ path: '/chat' })
        } else {
            router.push({ path: '/chat' })
            state.selectId = msg.index
        }
    },
}

const getters = {
    // 筛选出含有搜索值的聊天列表
    searchedChatlist(state) {
        let sessions = state.chatlist.filter(sessions => sessions.user.name.includes(state.searchText));
        return sessions
    },
    // 筛选出含有搜索值的好友列表
    searchedFriendlist(state) {
        let friends = state.friendlist.filter(friends => friends.remark.includes(state.searchText));
        return friends
    },
    // 通过当前选择是哪个对话匹配相应的对话
    selectedChat(state) {
        let session = state.chatlist.find(session => session.id === state.selectId);
        return session
    },
    // 通过当前选择是哪个好友匹配相应的好友
    selectedFriend(state) {
        let friend = state.friendlist.find(friend => friend.id === state.selectFriendId);
        return friend
    },
    messages(state) {
        let session = state.chatlist.find(session => session.id === state.selectId);
        return session?.messages ?? []
    }
}

const actions = {
    search: ({ commit }, value) => {
        setTimeout(() => {
                commit('search', value)
        }, 100)
    },
    
    selectSession: ({ commit }, value) => commit('selectSession', value),
    sendMessage: ({ commit }, msg) => commit('sendMessage', msg),
    selectFriend: ({ commit }, value) => commit('selectFriend', value),
    send: ({ commit }) => commit('send'),
    initData: ({ commit }) => commit('initData'),
    initData2: ({ commit }) => commit('initData2'),
    getData: ({commit}) => {
        axios.get('http://127.0.0.1:8081/user')
            .then(response=> {
                commit('set_Data',response.data)
            })
    },
    getData2:({commit})=> {
        axios.get('http://127.0.0.1:8081/chat')
        .then(response=> {
            commit('set_chatData',response.data)
        })
    },
    
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

// 监听聊天列表的值， 发生变化就保存在localStorage中
store.watch(
    (state) => state.n,
    (val) => {
        localStorage.setItem('n', JSON.stringify(val));
    },
    {
        deep: true
    }
)
store.watch(
    (state) => state.v,
    (val) => {
        localStorage.setItem('v', JSON.stringify(val));
    },
    {
        deep: true
    }
)

store.dispatch("initData")
store.dispatch("initData2")

export default store;