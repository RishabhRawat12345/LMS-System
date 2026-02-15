import { generateOTP } from "../config/generateOTP.js";
import User from "../models/userModel.js";
import { sendOptMail } from "../utils/sendOtp.js";
import bcrypt from "bcryptjs";

const otpstore={};
export const ResetPass=async (req,res)=>{

    try {
        const {email}=req.body;
        const otp=generateOTP();
        const checker=await User.findOne({email});
        if(checker){
         otpstore[email]={
            otp,
            expiresAT:Date.now()+5*60*1000,
        }
        await sendOptMail(email,otp);
        res.status(200).json({message:"otp send to email"})
        }
        
        res.status(401).json({message:"unauthorized Access"})
  
    } catch (error) {
        res.status(500).json({message:"failed to send otp"});
    }
}

export const verifyotp = (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = otpstore[email];

    if (!record) {
      return res.status(400).json({
        message: "OTP not found",
      });
    }

    if (Date.now() > record.expiresAt) {
      return res.status(400).json({
        message: "OTP expired",
      });
    }

    if (record.otp != otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    delete otpstore[email];

    res.json({
      message: "OTP verified successfully",
    });

  } catch (error) {
    console.log("verify error", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const passupdater=async(req,res)=>{
  try {
    const {email,pass}=req.body;

    if(!pass || !email){
     return res.status(400).json({message:"data is missing"});
    }
    const hashpass=await bcrypt.hash(pass,10);
    const user=await User.findOne({email});
    const userid=user._id;
    const updatedata=await User.findByIdAndUpdate(userid,{
      password:hashpass
    })

  res.status(200).json({
  message: "Password updated",
  data: updatedata
});


  } catch (error) {
    res.status(500).json({message:"Internal server error in pass"});
  }
}