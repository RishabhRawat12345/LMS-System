import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
console.log("EMAIL:", process.env.Email);
console.log("EMAIL_PASS:", process.env.Email_PASS);
export const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.Email,
        pass:process.env.Email_PASS
    },
})