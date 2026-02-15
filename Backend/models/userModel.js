import mongoose from "mongoose"

const userShema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,  
        require:true
    },
    bio:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"student",
        enum:["student","educator"],
    },
    photoUrl:{
        type:String,
        default:""
    },
    enrolledCourses:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"Courses"
        }
    ]
},{timestamps:true})

const  User=mongoose.model("User",userShema)

export default User