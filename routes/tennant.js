const Tennant=require('../db').Tennant
const route=require('express').Router()

route.get('/', (req, res) => {
    res.render('add_tennants')
  })
route.post('/',(req,res)=>{
    Tennant.create({
        username:req.body.username,
        password:req.body.password,
        phone:req.body.phone,
        address:req.body.address
    }).then((user) => {
            res.redirect('/login')
          }).catch((err) => {
            throw err
          })
        })
module.exports={
    route
}