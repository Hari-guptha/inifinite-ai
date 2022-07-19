const  express=require("express")
const mongoose=require("mongoose")  
const bcrypt=require("bcrypt")
const passport=require("passport")
const localstrategy=require("passport-local").Strategy
const  session=require("express-session") 
const student= require("./model/student")
const skill= require("./model/skills")
const MongoStore=require("connect-mongo")
const multer=require('multer')
const path= require('path')
const flash=require('connect-flash')
const async = require('async');
const crypto = require('crypto');
const nodemailer=require("nodemailer")
const sg=require("@sendgrid/mail")


app=express()
app.use(express.urlencoded({extended:true}));
app.use(flash())
app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.static('assets'))
app.use('/qrcode',express.static(__dirname +'/qrcode'))
app.use('/uploads', express.static(__dirname +'/uploads'))
app.use(express.static('qrcode'))




//mongo db connection 
const db_uri="mongodb://127.0.0.1:27017/student_info"
mongoose.connect( db_uri,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((res)=>{
        app.listen(3434,()=>{
        console.log("listening titans")
    })
  
    console.log("success titans")})
    .catch((err)=>{console.log(err)})


    //middleware 
require("./passport/passport")()
    app.use(session({
        secret:"ragul",
        resave:false,
        saveUninitialized:true,
        store: MongoStore.create({
            mongoUrl: db_uri
        })
    })) 
    //passport 
    app.use(passport.initialize())
    app.use(passport.session())
//multer 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "qrcode");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
  });
  var upload = multer({ storage: storage })


//route to dashboard page
const dashboard=require("./controller/dashboard")
app.use(dashboard) 
//route login page
const login=require("./controller/login")
app.use(login)
//route to vlaidation page 
const validation=require("./controller/validation")
app.use("/validation",validation)

//route to forgot password page
const forgot=require("./controller/forgot") 
app.use(forgot)
//route to reset page
const reset=require("./controller/reset")
app.use(reset)
//route to qrcode page
 const qr=require("./controller/qrcode")
app.use(qr) 
//upload photo to mongo 
 app.get("/uploads",(req,res)=>{
     res.render("upload")
 })
//route to profile search page
const pro=require('./controller/profile')
app.use(pro)


 app.post('/uploads', upload.single('photo'), async(req, res, next) => {    
    const file = req.file    
    if (!file) {      
    const error = new Error('Please upload a file')     
            
    return next("hey error")    
    }                  
    const insert_student=new student({
      qr_path:file.path
    })
          
    const savedimage= await insert_student.save
    ()      
    res.json(savedimage)      
    }) 
    

/* app.get("/addskill",(req,res)=>{
    res.render("addskill")
})
app.post("/addskill",(req,res)=>{
    const data=req.body
    console.log(req.body)
    const adduser=new skill(data)
    adduser.save()
    .then((result)=>{
      console.log("added user")
    
    })
    .catch((err)=>console.log(err))
    
    }) */

    /* app.get('/image',async(req, res)=>{   
    const image = await model.find()   
    res.json(image)     
    }) */
/* app.get("/adduser",(req,res)=>
{
    const insert_student=new student({
        name:"gokul",
        password:"#Gokul4444",
        enrollno:"20uai20"
    })
    insert_student.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
}) */
/* app.get("/profile",(req,res)=>{
   student.find({}, function (err, stu) {
       skill.find({},(err,skill)=>{
        res.render("pro",{student:stu,skills:skill})
       })
});
 
    //
}) */

//download file 

/* app.get("http://localhost:3434/download/default.png",(res)=>{
// Url of the image
const file = 'photo-1645381275427.png';
// Path at which image will get downloaded
const filePath = __dirname+'/uploads/'+file;
console.log(filePath)
const writeStream = fs.createWriteStream(filePath);

  res.pipe(writeStream);

  writeStream.on("finish", () => {
    writeStream.close();
    console.log("Download Completed");
})}) */
const ro=require("./controller/control")
app.use(ro)
app.get('/so',(req,res)=>{
    res.render("social")
})
