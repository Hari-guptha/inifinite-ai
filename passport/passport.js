const bcrypt=require("bcrypt")
const passport=require("passport")
const localstrategy=require("passport-local").Strategy
const student= require("../model/student")
module.exports=()=>{
    console.log("ur  in  passport.js ")
    passport.serializeUser((students,done)=>{
        console.log("inside serialize",students)
        done(null,students.id)
    })
    passport.deserializeUser((id,done)=>{
        console.log("inside deserialize",id)
        student.findById(id,(err,students)=>{
            done(err,students)
        })
    })
    //passport stratergy
    passport.use("local-login",new localstrategy((username,password,done)=>
    {  
        console.log(username);
         student.findOne({"enrollno":username},(err,students)=>{
    
             if(err){return done(err)}
             if(!students){ 
                 return done(null,false,{message:"Incorrect Enrollment Number"})}
                
            if(students.password==password){
                return done(null,students)
            }
            else{
                return done(null,false,{message:"Incorrect Password"})
            }
            // bcrypt.compare(password,students.password,(err,res)=>{
            //     if(err){return done(err)}
            //     if(res==false){return  done(null,false,{message:"incorrect password"})}
            // return done(null,students)
            // })
         })
    }))
}