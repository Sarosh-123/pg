const express=require('express')
const path=require('path')
const session=require('express-session')
const{
    db,User,item
}=require('./db')
const passport=require('./passport1')
const app=express()
const PORT=process.env.PORT || 2122
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))

app.use(session({
    secret:'adfsvshhbsjb',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api',require('./routes/api').route)
app.use('/login', (require('./routes/login')).route)
app.use('/tennant', (require('./routes/tennant')).route)
app.use('/cart', (require('./routes/cart')).route)
app.use('/items', (require('./routes/items')).route)
app.get('/',(req,res)=>{
  res.redirect('/login')})
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Started on http://localhost:2122')
    })
  })