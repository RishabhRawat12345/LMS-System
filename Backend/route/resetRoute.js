import express from "express"
import { passupdater, ResetPass, verifyotp } from "../controller/ResetpassController.js";

const Resetrouter=express.Router();

Resetrouter.post("/sentotp",ResetPass);

Resetrouter.post("/votp",verifyotp);

Resetrouter.post("/pass",passupdater);

export default Resetrouter;