const chats=require('../db').chats
const route=require('express').Router()
  route.get('/',async(req,res)=>{
    let allitem=await chats.findAll({
      where:{to:req.user.username}
    })
res.send(allitem)
      })
route.post('/',(req,res)=>{
chats.create({
 msg:req.body.msg,
 from:req.user.username,
 to:req.body.to
})
})
module.exports={route}