import express from "express";

import homeController from "../controllers/homeController"


const router = new express.Router()

router.get("/", homeController.index)
//get show
//post store
//put update
//delete



export default router