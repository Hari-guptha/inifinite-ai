const route =require("express").Router()
const loguser=require("../model/log")
var d = Date(Date.now());
 var a = d.toString()
route.get("/dashboard",(req,res)=>
{    if(req.isAuthenticated())
    {   console.log("hi dashboard ragul")
    console.log(req.user)
        log=new loguser({
            enrollno:req.user.enrollno,
            name:req.user.name,
            time: a,
            status:"user logged in sucessfully"
        })
        log.save()
            res.render("dashboard",{student:req.user})
        
        
    }
  else{
      
      res.redirect("/login")
  }
})
//edit page 
route.get("/edit",(req,res)=>{
    if(req.isAuthenticated())
    {   stu={
        enrollno:req.user.enrollno,
        imgpath:req.user.imgpath,
        skill_1:req.user.skill_1,
        skill_2:req.user.skill_2,
        skill_3:req.user.skill_3,
        skill_4:req.user.skill_4,
        skill_5:req.user.skill_5,
        }
        console.log(stu)
        res.render("edit",{student:stu,info:req.flash('info')})
    }
    else{
      
        res.redirect("/login")
    }
   
})



module.exports=route