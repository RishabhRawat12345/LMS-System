import express from "express"
import { createCourse, deleteCourse, EditCourse, getCourse, getCourseById, getCreatorCourse } from "../controller/courseController.js";
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/multer.js";
import { editLecture, getCourselecture, lectureAdd, removelecture } from "../controller/lectureController.js";
import Course from "../models/courseModel.js";
const Courseroute=express.Router();
//course routes
Courseroute.post("/create",isAuth,createCourse);
Courseroute.get("/getpublished",getCourse);
Courseroute.get("/getCreator",isAuth,getCreatorCourse);
Courseroute.post("/editCourse/:courseId",isAuth,upload.single("thumnail"),EditCourse);
Courseroute.get("/getcouseId:courseId",isAuth,getCourseById)
Courseroute.delete("/deleteCourse/:courseId",isAuth,deleteCourse);
//lecture routes

Courseroute.post("/lectureAdd/:courseId",isAuth,lectureAdd);
Courseroute.get("/getClecture/:courseId",isAuth,getCourselecture);
Courseroute.post("/editLec",isAuth,upload.single("videoUrl"),editLecture);
Courseroute.delete("/removelec",isAuth,removelecture);

export default Courseroute;