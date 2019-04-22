const flat=require('../../db').Flat
const route=require('express').Router()

route.get('/',(req,res)=>{
    flat.findAll()
    .then((flat)=>{
       res.status(200).send(flat)
    })
    .catch((err)=>{
        res.status(500).send({
        error:"error while loading dbms"
    })})
})
route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
        res.status(403).send({
            error:"price is not vallid"
        })
    }
    flat.create({
        name:req.body.name,
        owner:req.user.username,
        desc:req.body.desc,
        owner_cont:req.body.cont,
        price:parseFloat(req.body.price),
        address:req.body.address
    })
    .then((flat)=>{
        res.status(201).send(flat)
    })
    .catch((err)=>{
        res.status(501).send({
            error:"error while loading"
        })
    })
})
module=module.exports=route