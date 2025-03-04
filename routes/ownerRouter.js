const express =  require('express')
const router =  express.Router()
const ownerModal =  require('../modals/owner-modal')

router.post('/create',async (req,res)=>{
    const {name,email,password,gstIn} = req.body
    let owner =await ownerModal.find()
    if(owner.length > 0){
        return res.status(503).send("YOU DONT HAVE PERMISION TO CREATE")
    }   
    const createdOwner = await ownerModal.create({
        Name:name,
        email:email,
        password:password,
        gstin:gstIn
    }) 
    res.send("Owner created"+createdOwner)
})

module.exports =  router