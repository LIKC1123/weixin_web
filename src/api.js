const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const cors = require('cors')

let friendlist = ''
let chatlist =''

app.use(cors())

fs.readFile(path.join(__dirname,'./user.json'),(err,data)=> {
    if(err) return console.log(err.message);
    friendlist = data
})

fs.readFile(path.join(__dirname,'./chat.json'),(err,data)=> {
    if(err) return console.log(err.message);
    chatlist = data
})

console.log(chatlist);

app.get('/user',(req,res)=> {
    res.send(friendlist)
})

app.get('/chat',(req,res)=> {
    res.send(chatlist)
})

app.listen(8081,() => {
    console.log('http://127.0.0.1:8081');
})