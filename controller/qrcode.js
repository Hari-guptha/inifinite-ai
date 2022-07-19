const  route =require("express").Router()

route.get("/qrcode",(req,res)=>{
    if(req.isAuthenticated())
    {  console.log(req.user)
        res.render("qrcode",{student:req.user})
    }
    else{
        res.redirect("/login")
    }
   
})
route.get("/qrdownload",(req,res)=>{
    if(req.isAuthenticated())
    {
        res.download(req.user.qr_path)

    }
    else{
        res.redirect("/login")
    }
})
module.exports= route
