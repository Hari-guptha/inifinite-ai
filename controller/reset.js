const  route=require("express").Router()
const student= require("../model/student")
const async = require('async');
const crypto = require('crypto');
const nodemailer=require("nodemailer")
route.get('/reset/:token', function(req, res) {

    student.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, student) {
      if (!student) {
        req.flash('error', 'Password reset link is invalid or has expired.');
        return res.redirect('/forgot');
      }
      console.log(req.params.token)
      res.render('reset', {
      token:req.params.token,
      error:req.flash('error')

      });
    });
  });

  
    
    
    
  route.post('/reset/:token', function(req, res) {
    
    async.waterfall([
      function(done) {
            console.log(req.params.token)
        student.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, student) {
          console.log("inpost") 
          if (!student) {
            req.flash('error', 'Password reset link is invalid or has expired.');
            console.log(err)
            return res.redirect('/forgot');
          }
          if(req.body.password1===req.body.password2)
          {

          
          student.password = req.body.password1;
          student.resetPasswordToken = "summa";
          student.resetPasswordExpires =Date.now();
  
          student.save(function(err) {
            req.logIn(student, function(err) {
              done(err, student);
            });
          });
          }
          else{
            req.flash('error', 'Both Passwords Must Be Identical');
            console.log('/reset/:'+req.params.token)
            return res.redirect('/reset/'+req.params.token);
          }
        });
      },
      function(student, done) {
        req.flash('info', 'Your Password Has Been Reset,Now You Can Use New Passsword For Login');
        return res.redirect("/login")
      }
    ], function(err) {
      req.flash('error', 'Some Error Occured ');
        return res.redirect("/login") 
    });
  });


  //reset password for logged in user
route.get("/reset_password",(req,res)=>{
  if(req.isAuthenticated())
  {
    res.render("reset_password",{error: req.flash('error'),info:req.flash('info')})
  }
  else{
    res.redirect("/login")
  }
})
route.post("/reset_password",(req,res)=>{
  if(req.isAuthenticated())
  {     
    
    if(req.body.password1===req.body.password2)
    {
      student.findOneAndUpdate({enrollno:req.user.enrollno},
        {password:req.body.password1},null,(err, docs)=> {
        if (err){
            console.log(err)
        }   
        else{
          req.flash('info', 'Your Password Has Been Reset,Now You Can Use New Passsword For Login');
          return res.redirect("/reset_password")
            
        }})
    }
    else{
        req.flash('error', 'Both Passwords Must Be Identical');
        return res.redirect("/reset_password")
    }
    
  }
  else{
      res.redirect("/login")
  }
})
module.exports=route