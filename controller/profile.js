const route =require("express").Router()

const student=require("../model/student")
route.get("/profile_search",(req,res)=>{
  student.find({},(err,stu)=>{
      
    res.render('filter',{student:stu})
      

  })
 })
 //route to individula profile page 
 route.get("/student/:enrollno",(req,res)=>{
  console.log(req.params.enrollno)
  student.findOne({enrollno:req.params.enrollno})
  .then((stu)=>{
    
      res.render('profile',{student:stu})
  })
  .catch((err)=>{console.log(err)})
 })
module.exports=route