const fs = require('fs')
const path = require('path')
let now = new Date()
let friendlist = [
    {
        id: 0,
        wxid: "",
        initial: '新的朋友',
        img: './static/images/newfriend.jpg',
        wxf: "",
        nickname: "新的朋友",
        sex: 0,
        remark: "新的朋友",
        area: "",
    },
    {
        id: 1,
        wxid: "AmorAres-",
        initial: 'A',
        img: './static/images/小姨妈.jpg',
        wxf: "通过搜索微信号添加",
        nickname: "Amor",
        sex: 0,
        remark: "Amor",
        area: "浙江 宁波",
    },
    {
        id: 2,
        wxid: "Big-fly",
        initial: 'B',
        img: './static/images/大飞哥.jpg',
        wxf: "通过朋友推荐添加",
        nickname: "fly",
        sex: 1,
        remark: "大飞哥",
        area: "奥地利 布尔根兰",
    },
    {
        id: 3,
        wxid: "microzz",
        initial: 'D',
        img: './static/images/microzz.jpg',
        wxf: "手机号添加",
        nickname: "microzz",
        sex: 1,
        remark: "大佬",
        area: "江西 赣州",
    },
    {
        id: 4,
        wxid: "hwn0366",
        initial: 'F',
        img: './static/images/father.jpg',
        wxf: "手机号添加",
        nickname: "丢",
        sex: 1,
        remark: "father",
        area: "江西 抚州",
    },
    {
        id: 5,
        wxid: "orange66",
        initial: 'J',
        img: './static/images/orange.jpg',
        wxf: "手机号添加",
        nickname: "orange",
        sex: 1,
        remark: "橘子",
        area: "江西 赣州",
    },
    {
        id: 6,
        wxid: "Seto_L",
        img: './static/images/加菲猫.jpg',
        wxf: "通过搜索微信号添加",
        nickname: "21",
        sex: 1,
        remark: "加菲",
        area: "北京 海淀",
    },
    {
        id: 7,
        wxid: "wxid_itjz73t1ajt722",
        initial: 'M',
        img: './static/images/mother.jpg',
        wxf: "通过搜索微信号添加",
        nickname: "娄娄",
        sex: 0,
        remark: "妈咪",
        area: "江西 抚州",
    },
    {
        id: 8,
        wxid: "hj960503",
        img: './static/images/萌萌俊.jpg',
        wxf: "通过搜索微信号添加",
        nickname: "。。。。。",
        sex: 1,
        remark: "萌萌均",
        area: "江西 萍乡",
    }
]

let chatlist = [
    {
        id: 1,
        user: {
            name: '妈咪',
            img: './static/images/mother.jpg'
        },
        messages: [
            {
                content: '起床了，你看看几点了',  //聊天内容
                date: now  //时间
            },
        ],
        index: 1  // 当前在聊天列表中的位置,从1开始

    },
    {
        id: 2,
        user: {
            name: 'father',
            img: './static/images/father.jpg'
        },
        messages: [
            {
                content: 'Are you kidding me?',
                date: now
            }
            
        ],
        index: 2
    },
    {
        id: 3,
        user: {
            name: '机器人',
            img: './static/images/vue.jpg'
        },
        messages: [
            {
                content: '我会跟你聊聊天的哟',
                date: now
            }
        ],
        index: 3
    }
]
let b = JSON.stringify(chatlist)
let a = JSON.stringify(friendlist)
console.log(b);

fs.writeFile('./user.json',a,function(err) {
    if(err) {
        return console.log('写入失败',err);
    }
})

fs.writeFile(path.join(__dirname,'./chat.json'),b,(err)=> {
    if(err) {
        return console.log('写入失败',err);
    }
})



