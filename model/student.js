const mongoose=require("mongoose")
const schema=mongoose.Schema
const student_schema=new schema({
    enrollno:{
        
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false},
    name:
        {
        type:String,
        required:false},
    email:{
        type:String,
        required:false
    },
    achievement:{
        type:String,
        required:false
    },
    project:{
        type:String,
        required:false
    },
    cgpa:{
        type:String,
        required:false
    },
    clg_year:{
        type:String,
        required:false
    },
    github:{
        type:String,
        required:false
    },
    hobby:
    {
        type:String,
        required:false
    },
    linked_in:
    {
        type:String,
        required:false
    },
    school:{
        type:String,
        required:false
    },
    school_percent:{
        type:String,
        required:false
    },
    school_year:{
        type:String,
        required:false
    },
    about_me:{
        type:String,
        required:false
    },
    
    imgpath:{
        type:String,
        required:false
    },
    qr_path:{
         type:String,
        required:false
    },
    resetPasswordToken:{type:String} ,
  resetPasswordExpires:{type:Date},
 
  skill_1:{
    type:String,
    required:false
},
skill_2:{
    type:String,
    required:false
},
skill_3:{
    type:String,
    required:false
},
skill_4:{
    type:String,
    required:false
},
skill_5:{
    type:String,
    required:false
},
skill1_bar:{
    type:String,
    required:false
},
skill2_bar:{
    type:String,
    required:false
},
skill3_bar:{
    type:String,
    required:false
},
skill4_bar:{
    type:String,
    required:false
},
skill5_bar:{
    type:String,
    required:false
},
pro_path:{
    type:String,
    required:false
}

},{ versionKey: false})
const student=mongoose.model("students",student_schema)
module.exports=student