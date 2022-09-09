// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import Chat from '../pages/Chat.vue'
import Friends from '../pages/Friends.vue'
import Sets from '../pages/Set.vue'
// Vue.use(Router)
export default new VueRouter({
    routes:[
        {
            path:'/chat',
            component:Chat
        },
        {
            path:'/friends',
            component:Friends
        },
        {
            path:'/sets',
            component:Sets,
        },
    ],
    linkActiveClass: 'active',
    
})