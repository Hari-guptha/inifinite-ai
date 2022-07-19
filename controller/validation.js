const route=require("express").Router()
const skill=require("../model/skills")
const student= require("../model/student")

route.post("/about",(req,res)=>{
    if(req.isAuthenticated())
    {
        student.findOneAndUpdate({enrollno:req.user.enrollno},
                {about_me:req.body.about },null,(err, docs)=> {
                if (err){
                    console.log(err)
                }   
                else{
                   
                    req.flash('info', ' Your  About Updated Sucessfully');
                    return res.redirect('/edit');
                }})
    }
    else 
    {
        res.redirect("/login")
    }
})
route.post("/github",(req,res)=>{
    if(req.isAuthenticated())
    {
        student.findOneAndUpdate({enrollno:req.user.enrollno},
             {github:req.body.git },null,(err, docs)=> {
                if (err){
                    console.log(err)
                }   
                else{
                   
                    req.flash('info', ' Your Github Link  Updated Sucessfully');
                    return res.redirect('/edit');
                }})
    }
    else 
    {
        res.redirect("/login")
    }
})
//linked in updation
route.post("/linked_in",(req,res)=>{
    if(req.isAuthenticated())
    {
        student.findOneAndUpdate({enrollno:req.user.enrollno},
             {linked_in:req.body.linked_in },null,(err, docs)=> {
                if (err){
                    console.log(err)
                }   
                else{
                   
                    req.flash('info', ' Your LinkedIn Link  Updated Sucessfully');
                    return res.redirect('/edit');
                }})
    }
    else 
    {
        res.redirect("/login")
    }
})
// project updation
route.post("/project",(req,res)=>{
    if(req.isAuthenticated())
    {
        student.findOneAndUpdate({enrollno:req.user.enrollno},
             {project:req.body.project},null,(err, docs)=> {
                if (err){
                    console.log(err)
                }   
                else{
                   
                    req.flash('info', ' Your Projects Updated Sucessfully');
                    return res.redirect('/edit');
                }})
    }
    else 
    {
        res.redirect("/login")
    }
})
//achievements updation
route.post("/achievements",(req,res)=>{
    if(req.isAuthenticated())
    {
        student.findOneAndUpdate({enrollno:req.user.enrollno},
             {achievement:req.body.achievements},null,(err, docs)=> {
                if (err){
                    console.log(err)
                }   
                else{
                   
                    req.flash('info', ' Your Achievements Updated Sucessfully');
                    return res.redirect('/edit');
                }})
    }
    else 
    {
        res.redirect("/login")
    }
})

//hobby updation 
route.post("/hobby",(req,res)=>{
    if(req.isAuthenticated())
    {   
        student.findOneAndUpdate({enrollno:req.user.enrollno},
             {hobby:req.body.hobby},null,(err, docs)=> {
                if (err){
                    console.log(err)
                }   
                else{
                   
                    req.flash('info', ' Your Hobby Updated Sucessfully');
                    return res.redirect('/edit');   
                }})
    }
    else 
    {
        res.redirect("/login")
    }
})

//skill updation 
route.post('/skill',(req,res)=>{
    if(req.isAuthenticated())
    {
        if(req.body.selectskill==1)
        {
            student.findOneAndUpdate({enrollno:req.user.enrollno},
                {skill_1:req.body.skill,skill1_bar:req.body.ran},null,(err, docs)=> {
                   if (err){
                       console.log(err)
                   }   
                   else{
                      
                    req.flash('info', ' Your skill Updated Sucessfully');
                    return res.redirect('/edit');   
                   }})
        } 
        else if(req.body.selectskill==2)
        {
            student.findOneAndUpdate({enrollno:req.user.enrollno},
                {skill_2:req.body.skill,skill2_bar:req.body.ran},null,(err, docs)=> {
                   if (err){
                       console.log(err)
                   }   
                   else{
                      
                    req.flash('info', ' Your skill Updated Sucessfully');
                    return res.redirect('/edit');  
                   }})
        } 
        else if(req.body.selectskill==3)
        {
            student.findOneAndUpdate({enrollno:req.user.enrollno},
                {skill_3:req.body.skill,skill3_bar:req.body.ran},null,(err, docs)=> {
                   if (err){
                       console.log(err)
                   }   
                   else{
                      
                    req.flash('info', ' Your skill Updated Sucessfully');
                    return res.redirect('/edit');  
                   }})
        }
        else if(req.body.selectskill==4)
        {
            student.findOneAndUpdate({enrollno:req.user.enrollno},
                {skill_4:req.body.skill,skill4_bar:req.body.ran},null,(err, docs)=> {
                   if (err){
                       console.log(err)
                   }   
                   else{
                      
                    req.flash('info', ' Your skill Updated Sucessfully');
                    return res.redirect('/edit');  
                   }})
        }
        else if(req.body.selectskill==5)
        {
            student.findOneAndUpdate({enrollno:req.user.enrollno},
                {skill_5:req.body.skill,skill5_bar:req.body.ran},null,(err, docs)=> {
                   if (err){
                       console.log(err)
                   }   
                   else{
                      
                    req.flash('info', ' Your skill Updated Sucessfully');
                    return res.redirect('/edit');  
                   }})
        }
    }
    
})
module.exports=route