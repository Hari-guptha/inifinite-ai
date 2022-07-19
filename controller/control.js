
const app=require("express").Router()
/*nav*/
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/SEMESTER_MATERIALS",(req,res)=>{
    res.render("sem material")
})
app.get("/SEMESTER_VIDEOS",(req,res)=>{
    res.render("sem video")
})
app.get("/SYLLABUS",(req,res)=>{
    res.render("syllabus")
})
app.get("/TEAM",(req,res)=>{
    res.render("team")
})
app.get("/FEEDBACK",(req,res)=>{
    res.render("feedback")
})
app.get("/LOGIN",(req,res)=>{
    res.render("coming soon")
})
/*COMING SOON*/
app.get("/COMINGSOON",(req,res)=>{
    res.render("coming soon")
})
/*PROJECT INFO*/
app.get("/THEMIS",(req,res)=>{
    res.render("themis Project")
})
app.get("/SPOTIFY",(req,res)=>{
    res.render("spotify Project")
})
/*cp video units*/
app.get("/UNIT",(req,res)=>{
    res.render("unit")
})
app.get("/FDS_VIDEO",(req,res)=>{
    res.render("fdsv")
})
app.get("/DSD_VIDEO",(req,res)=>{
    res.render("dsdv")
})
app.get("/SUBJECT_VIDEO",(req,res)=>{
    res.render("sub video")
})
app.get("/SUBJECT_MATERIAL",(req,res)=>{
    res.render("sub material")
})
/*cp videos*/
app.get("/CP_UNIT1_VIDEO",(req,res)=>{
    res.render("cpunit1v")
})
app.get("/CP_UNIT2_VIDEO",(req,res)=>{
    res.render("cpunit2v")
})
app.get("/CP_UNIT3_VIDEO",(req,res)=>{
    res.render("cpunit3v")
})
app.get("/CP_UNIT4_VIDEO",(req,res)=>{
    res.render("cpunit4v")
})
app.get("/CP_UNIT5_VIDEO",(req,res)=>{
    res.render("cpunit5v")
})
/*materials*/
app.get("/ENGINEERING_MATHEMATICS-I",(req,res)=>{
    res.render("maths pdf")
})
app.get("/COMPUTER_PROGRAMMING-I",(req,res)=>{
    res.render("cp pdf")
})
app.get("/FUNDAMENTAL_OF_DATA_SCIENCE",(req,res)=>{
    res.render("fds pdf")
})
app.get("/BASIC_ELECTRICAL_AND_ELECTRONICS_ENGINEERING",(req,res)=>{
    res.render("beee pdf")
})
app.get("/DIGITAL_SYSTEM_DESIGN",(req,res)=>{
    res.render("dsd pdf")
})



module.exports=app