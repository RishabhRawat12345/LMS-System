import express from "express"
import {userdata} from "../controller/getUController.js"
const route=express.Router();

route.get("/user/:id",userdata);

export default route;
