const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  // when using sqlite
  storage: __dirname + '/tasks.db',

  // for mysql/postgres/mssql
  
})

const Flat = db.define('flat', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  name:{
    type:Sequelize.STRING,
      allowNull:true
  },
  owner:{
      type:Sequelize.STRING,
      allowNull:true
  },
  desc:{
    type:Sequelize.STRING,
    allowNull:true
  },
  owner_cont:{
     type:Sequelize.NUMBER
  },
  price:{
      type:Sequelize.FLOAT,
      allowNull:false,
      defaultValue:0.0
  },
  address:{
      type:Sequelize.STRING,
      allowNull:false
  }
  
})
const Tennant = db.define('tennant', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:Sequelize.STRING,
    allowNull:true
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  },
  phone:{
      type:Sequelize.NUMBER,
      allowNull:true
  },
  address:{
      type:Sequelize.STRING,
      allowNull:false
  }
  
})
const chats = db.define('chat', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  to:{
    type:Sequelize.STRING,
    allowNull:false
  },
  msg:{
    type:Sequelize.STRING,
    allowNull:false
  },
  from:{
      type:Sequelize.NUMBER,
      allowNull:false
  },
  
})
const item = db.define('item', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  to:{
    type:Sequelize.STRING,
    allowNull:false
    }})
module.exports={
    db,Flat,Tennant,chats,item
}