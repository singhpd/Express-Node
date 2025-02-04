const express = require('express')
const app = express()

const path = require("path")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const DB = require('./config/mongoose-connection')
const ownerRouter =  require('./routes/ownerRouter')
const usersRouter =  require('./routes/usersRouter')
const productsRouter =  require('./routes/porductsRouter')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.use("/owner",ownerRouter)
app.use("/products",productsRouter)
app.use("/users",usersRouter)

app.listen(3000)