import express from "express";
import { GoogleSigin, Gsignup, profileupdater, roleup, signin, signout, signUp } from "../controller/authController.js";
import upload from "../middleware/multer.js";
import isAuth from "../middleware/isAuth.js";
const authroutes=express.Router();

authroutes.post("/signup",signUp);
authroutes.post("/signin",signin);
authroutes.get("/signout",signout);
authroutes.post("/Gsignup",Gsignup);
authroutes.post("/roleup",roleup);
authroutes.post("/Gsignin",GoogleSigin);
authroutes.put("/profile-updater",isAuth,upload.single("avatar"),profileupdater);
export default authroutes;