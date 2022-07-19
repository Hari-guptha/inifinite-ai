const route=require("express").Router();
const student= require("../model/student")
const async = require('async');
const crypto = require('crypto');
const nodemailer=require("nodemailer")
const sg=require("@sendgrid/mail")

route.get("/forgot",(req,res)=>{
    res.render("forgot",{error: req.flash('error'),info:req.flash('info')})
})
route.post("/forgot",function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });},

        function(token, done) {
            student.findOneAndUpdate({ enrollno: req.body.enrollno },{resetPasswordToken:token,resetPasswordExpires : Date.now() + 600000}, function(err,students) {
              if (!students) {
                req.flash('error', 'No account with that enrollment number exists.');
                return res.redirect('/forgot');
              }
              student.findOne({enrollno: req.body.enrollno})
              .then((result)=>{
                  
                  done(err, token, result);
                  
              })
              .catch((err)=>{console.log(err)})
             
               
            
             
      
              
            });
          },
          function(token, result) {
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'ragulaids@smvec.ac.in',
                pass:'aidssmvec',
              },
            });
            
            let mailOptions = {
              from: 'ragulaids@smvec.ac.in',
              to: result.email,
              subject: `Reset Password Link`,
              text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
             
            };
            
            transporter.sendMail(mailOptions, function (err, info) {
              if (err) {
                res.json(err);
              } else {
                
                req.flash('info', 'Email has sent to your mail')
                return res.redirect('/forgot');
              }
            });
      
          }
     
    
    ], function(err) {
        if (err) return next(err);
        res.redirect('/forgot');
      })
    
    
    
    })
module.exports=route