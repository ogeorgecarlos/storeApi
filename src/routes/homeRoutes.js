import express from "express";

import homeController from "../controllers/homeController"


const router = new express.Router()

router.get("/home", homeController.index)



export default router