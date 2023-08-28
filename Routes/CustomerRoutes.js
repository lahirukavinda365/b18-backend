import express from "express";
import * as customerController from "../Controllers/CutomerController.js";
const router = express.Router();

router.get("/all", customerController.GetAllCustomers);


export default router;




















