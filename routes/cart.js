const route = require('express').Router()
const prod=require('../db').Product
route.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  res.render('cart',{user:req.user})
})
route.post('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  res.render('cart')
})


module.exports = {
  route
}