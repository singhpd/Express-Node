const express = require('express')
const app = express()
const path = require("path")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const adminUserModal = require('./modals/user')
const postModal = require('./modals/post')
const { read } = require('fs')

app.set("view engine", 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("ok")
})
// app.get('/create',async(req,res)=>{
//    let createdAdmin  =  adminUserModal.create({
//     userName:"PRADEEP SINGH",
//     email:"TEST@PRADEEP.COM",
//     age:"24",
//     post:[]
//    })
//    res.send(createdAdmin)
// //    res.redirect('/')
// //    res.e(createdAdmin)
// })
app.post('/post/create',async(req,res)=>{
    let postCreated  = await postModal.create({
        postData:"Super Shampoo",
        user:"67971cc7983ea4cd9fe4cdb4",
    })
    // console.log(postCreated)
    let user  = await adminUserModal.findOne({_id:"67971cc7983ea4cd9fe4cdb4"})
    console.log(user)
    user.post.push(postCreated._id)
    user.save()
    res.send(postCreated)
 })

// app.get('/read', (req, res) => {
//     res.render("read")
// })

// app.post('/create',async(req,res)=>{
//     console.log(req.body)
//    let createdAdmin  =  adminUserModal.create({
//     userName:req.body.name,
//     email:req.body.email,
//     imageUrl:req.body.imageUrl,
//    })
//    res.redirect('/')
// //    res.e(createdAdmin)
// })
// app.post('/create', async (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(req.body.Password, salt, function (err, hash) {
//             // Store hash in your password DB.
//             let createdAdmin = adminUserModal.create({
//                 userName: req.body.name,
//                 email: req.body.email,
//                 password: hash,
//                 age: req.body.age,
//             })
//             // res.redirect('/')
//             res.send(createdAdmin)

//         });
//     });
// })

// app.get('/login', (req, res) => {
//     res.render("login")
// })

// app.post('/login', async (req, res) => {
//     const user = await adminUserModal.findOne({ email: req.body.email })
//     // console.log(user);

    // bcrypt.compare(req.body.Password, user.password, function (err, result) {
    //     console.log(result);
    //     if (result) {
    //         const token = jwt.sign({email:req.body.email},"secretKey")
    //         // res.render("read")
    //         res.status(200).send({token:token})
    //     } else {
    //         console.log(err)
    //     }
    // });
// })

app.listen(3001)