import User from "../models/userModel.js";

export const userdata=async(req,res)=>{
    try {
        const {id}=req.params;
        if(!id){
            res.status(400).json({message:"id is not present"});
        }

        const userdata=await User.findById(id);
        res.status(200).json({userdata,message:"successfull"});
    } catch (error) {
        res.status(500).json({message:`error in the code is ${error}`})
    }
}