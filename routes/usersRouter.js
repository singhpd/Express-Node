const express =  require('express')
const router =  express.Router()
const userModal = require("../modals/user-modal")

router.get('/create',async (req,res)=>{
  const {name,email,password}=req.body
  let user  = await userModal.findOne({email:email})
  console.log(user);
})

module.exports =  router