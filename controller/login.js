const  route=require("express").Router()
const passport=require("passport")
const loguser=require("../model/log")
var d = Date(Date.now());
 var a = d.toString()
route.get("/login",(req,res)=>{
    
    res.render("login",{ message: req.flash('error'),info:req.flash('info')} )
})


//login request 
route.post('/login', passport.authenticate('local-login', {
    successRedirect : '/dashboard',
    failureRedirect : '/login',
    failureFlash : true
}));

route.get('/logout', (req, res) => {
    if(req.isAuthenticated())
    {

    
    log=new loguser({
        enrollno:req.user.enrollno,
        name:req.user.name,
        time: a,
        status:"user logged out in sucessfully"
    })
    log.save()
    req.logout();
    req.session.destroy();
    res.redirect('/');}
    else{
        res.redirect("/login")
    }
    })
module.exports=route