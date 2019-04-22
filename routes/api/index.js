const route=require('express').Router()

route.use('/flat',require('./flat'))
//route.use('/users', require('./user'))
module=module.exports={
    route
}