
import express from "express";
import { getuser } from "../contorl/user_ctri.js";


const router = new express.Router()

router.get('/user',getuser)

export default router