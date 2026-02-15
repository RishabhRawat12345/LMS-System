import { transporter } from "../config/mailer.js";

export const sendOptMail=async(email,otp)=>{
    const mailOptions={
        from:`"Support Team <${process.env.Email}>"`,
        to:email,
        subject:"Your Password Reset Otp",
         html: `
      <h2>Password Reset Request</h2>
      <p>Your OTP is:</p>
      <h1 style="letter-spacing: 4px;">${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
    `,
    };

    await transporter.sendMail(mailOptions);
}